// Region screenshot script: slides 33-47 (R²→p-Wert), all v-clicks triggered.
// Navigation via window.__slidev__.nav.go() from a single SPA session.

import { chromium } from 'playwright-chromium'
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const OUT = 'slide-review'
const PORT = 3220
const CANVAS = { width: 980, height: 551 }
const START = 33
const END = 47

async function startDevServer() {
  const proc = spawn('pnpm', ['exec', 'slidev', '--port', String(PORT)], {
    stdio: ['ignore', 'ignore', 'inherit'],
  })
  let exited = false
  proc.on('exit', () => { exited = true })
  const url = `http://localhost:${PORT}/`
  const deadline = Date.now() + 45000
  while (Date.now() < deadline) {
    if (exited) throw new Error('dev server exited')
    try { const r = await fetch(url); if (r.ok) return proc } catch {}
    await new Promise(r => setTimeout(r, 500))
  }
  proc.kill(); throw new Error('dev server timeout')
}

function verdictFn(m) {
  if (m.overflowY || m.overflowX || m.clippedElements > 0) return 'overflow'
  if (m.bulletCount > 7 || m.longestToken > 42 || (m.minFontPx && m.minFontPx < 12) ||
      m.tableRows > 5 || m.tableCols > 4) return 'warning'
  return 'ok'
}

function measure(slideNo) {
  const page = document.querySelector(`.slidev-page-${slideNo}`)
  if (!page) return { missing: true, title: `MISSING .slidev-page-${slideNo}` }
  const canvas = page.querySelector('.slidev-layout') || page
  const cb = canvas.getBoundingClientRect()
  const pad = 2
  const overflowY = canvas.scrollHeight - canvas.clientHeight > pad
  const overflowX = canvas.scrollWidth - canvas.clientWidth > pad
  let clipped = 0
  for (const el of canvas.querySelectorAll('*')) {
    const r = el.getBoundingClientRect()
    if (r.width === 0 || r.height === 0) continue
    if (r.bottom > cb.bottom + pad || r.right > cb.right + pad ||
        r.top < cb.top - pad || r.left < cb.left - pad) clipped++
  }
  const bullets = canvas.querySelectorAll('li').length
  const text = canvas.innerText || ''
  const longestToken = text.split(/\s+/).reduce((m, w) => Math.max(m, w.length), 0)
  let minFontPx = Infinity
  for (const el of canvas.querySelectorAll('*')) {
    if (!el.textContent.trim()) continue
    if (el.closest('.storyset-credit, figcaption')) continue
    const fs = parseFloat(getComputedStyle(el).fontSize)
    if (fs) minFontPx = Math.min(minFontPx, fs)
  }
  const rows = canvas.querySelectorAll('table tr')
  const title = (canvas.querySelector('h1,h2')?.innerText || '').trim().replace(/\n/g,' ').slice(0, 80)
  const katexErrors = canvas.querySelectorAll('.katex-error').length
  const katexOk = canvas.querySelectorAll('.katex').length
  const footer = canvas.querySelector('[class*="literature"], [class*="citation"]')
  const lastBullet = [...canvas.querySelectorAll('li')].pop()
  let footerOverlapsPx = 0
  if (footer && lastBullet) {
    const fb = footer.getBoundingClientRect()
    const lb = lastBullet.getBoundingClientRect()
    if (lb.bottom > fb.top) footerOverlapsPx = Math.round(lb.bottom - fb.top)
  }
  // Estimate fill: how much of the canvas height is used
  const fillRatio = Math.round(Math.min(1, canvas.scrollHeight / Math.max(1, canvas.clientHeight)) * 100)
  return {
    overflowY, overflowX, clippedElements: clipped,
    scrollHeight: canvas.scrollHeight, clientHeight: canvas.clientHeight,
    bulletCount: bullets, longestToken,
    minFontPx: minFontPx === Infinity ? null : Math.round(minFontPx),
    tableRows: rows.length,
    tableCols: rows.length ? rows[0].querySelectorAll('th,td').length : 0,
    title, katexErrors, katexOk, footerOverlapsPx, fillRatio,
  }
}

async function triggerAllClicks(page, slideNo) {
  for (let attempt = 0; attempt < 20; attempt++) {
    const state = await page.evaluate(() => {
      const nav = window.__slidev__?.nav
      if (!nav) return null
      return {
        cur: nav.currentSlideNo,
        clicks: nav.clicks?.value ?? nav.clicks ?? 0,
        total: nav.clicksTotal?.value ?? nav.clicksTotal ?? 0,
      }
    })
    if (!state || state.cur !== slideNo) break
    if (state.clicks >= state.total) break
    await page.evaluate(() => window.__slidev__?.nav?.next?.())
    await page.waitForTimeout(200)
  }
}

async function main() {
  mkdirSync(OUT, { recursive: true })
  console.log(`Starting dev server on :${PORT} ...`)
  const server = await startDevServer()
  const base = `http://localhost:${PORT}`
  const browser = await chromium.launch()
  const report = []

  try {
    const page = await browser.newPage({ viewport: CANVAS, deviceScaleFactor: 2 })
    console.log('Loading slide 1 to hydrate SPA...')
    await page.goto(`${base}/1`, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => !!window.__slidev__?.nav?.go, { timeout: 15000 })
    await page.waitForTimeout(800)
    console.log('SPA ready. Shooting slides', START, '–', END)

    for (let i = START; i <= END; i++) {
      process.stdout.write(`slide ${String(i).padStart(2, '0')}  `)

      // Navigate to slide i
      await page.evaluate((n) => window.__slidev__.nav.go(n), i)
      // Wait for nav to confirm arrival
      await page.waitForFunction(
        (n) => window.__slidev__.nav.currentSlideNo === n,
        i, { timeout: 8000 }
      ).catch(() => console.log('(nav timeout)'))
      await page.waitForTimeout(700) // KaTeX + fonts settle

      // Trigger all v-clicks
      await triggerAllClicks(page, i)
      await page.waitForTimeout(350)

      const metrics = await page.evaluate(measure, i)
      const shot = join(OUT, `region-slide-${String(i).padStart(2, '0')}.png`)
      const el = await page.$(`.slidev-page-${i} .slidev-layout`)
        || await page.$(`.slidev-page-${i}`)
      if (el) await el.screenshot({ path: shot })
      else await page.screenshot({ path: shot, clip: { x: 0, y: 0, width: 980, height: 551 } })

      const v = verdictFn(metrics)
      const entry = { slide: i, screenshot: shot, ...metrics, verdict: v }
      report.push(entry)
      const overflowFlag = metrics.overflowY ? '⚠️OVERFLOW' : ''
      const clippedFlag = metrics.clippedElements > 0 ? `⚠️CLIPPED(${metrics.clippedElements})` : ''
      const katexFlag = metrics.katexErrors > 0 ? '⚠️KATEX_ERR' : (metrics.katexOk > 0 ? `✓katex(${metrics.katexOk})` : 'no-katex')
      const sparseFlag = metrics.fillRatio < 50 ? '⚠️SPARSE' : ''
      console.log(`${v.toUpperCase().padEnd(8)} bullets:${metrics.bulletCount} fill:${metrics.fillRatio}% ${katexFlag} ${overflowFlag}${clippedFlag}${sparseFlag}  "${metrics.title}"`)
    }
    await page.close()
  } finally {
    await browser.close()
    server.kill()
  }

  const reportPath = join(OUT, 'report-region.json')
  writeFileSync(reportPath, JSON.stringify({ canvas: CANVAS, slides: report }, null, 2))
  const bad = report.filter(r => r.verdict !== 'ok').length
  console.log(`\nDone. ${report.length} slides, ${bad} flagged. Report: ${reportPath}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
