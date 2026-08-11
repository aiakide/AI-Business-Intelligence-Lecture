// Targeted slide screenshot + metrics for specific slide numbers.
// Usage: node slide-shots-targeted.mjs <slide1> <slide2> ...
// e.g.:  node slide-shots-targeted.mjs 88 89 90 91 92 93

import { chromium } from 'playwright-chromium'
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const OUT = 'slide-review'
const PORT = Number(process.env.PORT) || 3212
const CANVAS = { width: 980, height: 551 }
const TARGETS = process.argv.slice(2).map(Number).filter(Boolean)
if (!TARGETS.length) { console.error('Provide slide numbers as args'); process.exit(1) }

async function startDevServer(cwd) {
  const proc = spawn('pnpm', ['exec', 'slidev', '--port', String(PORT)], {
    cwd,
    stdio: ['ignore', 'ignore', 'inherit'],
  })
  let exited = false
  proc.on('exit', () => { exited = true })
  const url = `http://localhost:${PORT}/`
  const deadline = Date.now() + 50000
  while (Date.now() < deadline) {
    if (exited) throw new Error('dev server exited before becoming ready')
    try { const r = await fetch(url); if (r.ok) return proc } catch {}
    await new Promise(r => setTimeout(r, 500))
  }
  proc.kill()
  throw new Error('dev server did not become ready in 50s')
}

function measure() {
  const pages = [...document.querySelectorAll('.slidev-page')]
  const page = pages.find(p => p.offsetParent !== null && p.getBoundingClientRect().height > 0) || pages[0]
  if (!page) return { missing: true }
  const canvas = page.querySelector('.slidev-layout') || page
  const cb = canvas.getBoundingClientRect()
  const pad = 2

  const overflowY = canvas.scrollHeight - canvas.clientHeight > pad
  const overflowX = canvas.scrollWidth - canvas.clientWidth > pad

  // Check footer/citation bar overlap
  const footer = document.querySelector('.slidev-layout footer, footer.slidev-layout, .bottom, [class*="footer"]')
  let footerOverlap = false
  let footerInfo = null
  if (footer) {
    const fr = footer.getBoundingClientRect()
    footerInfo = { top: Math.round(fr.top), bottom: Math.round(fr.bottom), height: Math.round(fr.height) }
    // Check if any non-footer content overlaps the footer zone
    for (const el of canvas.querySelectorAll('li, p, h1, h2, h3, blockquote, table, img')) {
      if (el === footer || footer.contains(el)) continue
      const r = el.getBoundingClientRect()
      if (r.bottom > fr.top + pad && r.top < fr.bottom - pad) {
        footerOverlap = true
        break
      }
    }
  }

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
  const title = (canvas.querySelector('h1,h2')?.innerText || '').trim().slice(0, 80)

  return {
    overflowY, overflowX, clippedElements: clipped,
    scrollHeight: canvas.scrollHeight, clientHeight: canvas.clientHeight,
    bulletCount: bullets, longestToken,
    minFontPx: minFontPx === Infinity ? null : Math.round(minFontPx),
    tableRows: rows.length,
    tableCols: rows.length ? rows[0].querySelectorAll('th,td').length : 0,
    title, footerOverlap, footerInfo,
  }
}

async function main() {
  const cwd = '/Users/nils/projects/fom/repos/ai-business-intelligence/lecture'
  mkdirSync(join(cwd, OUT), { recursive: true })
  console.log(`Starting dev server on :${PORT} for slides ${TARGETS.join(', ')} ...`)
  const server = await startDevServer(cwd)
  const base = `http://localhost:${PORT}`
  const browser = await chromium.launch()
  const report = []

  try {
    for (const i of TARGETS) {
      console.log(`  Shooting slide ${i}...`)
      const page = await browser.newPage({ viewport: CANVAS, deviceScaleFactor: 2 })
      await page.goto(`${base}/${i}`, { waitUntil: 'networkidle' })
      await page.waitForFunction(
        n => {
          const no = window.__slidev__?.nav?.currentSlideNo
          const cur = typeof no === 'object' ? no?.value : no
          const active = document.querySelector(`.slidev-page-${n}`)
          return cur === n && active && active.offsetParent !== null
        },
        i, { timeout: 12000 }
      ).catch(() => {})
      await page.waitForTimeout(800)

      const metrics = await page.evaluate(measure)
      const shot = join(cwd, OUT, `targeted-slide-${String(i).padStart(2,'0')}.png`)
      const el = await page.$(`.slidev-page-${i} .slidev-layout`)
        || await page.$(`.slidev-page-${i}`)
        || await page.$('.slidev-layout')
      if (el) await el.screenshot({ path: shot })
      else await page.screenshot({ path: shot })

      const verdict = (metrics.overflowY || metrics.overflowX || metrics.clippedElements > 0) ? 'OVERFLOW'
        : metrics.footerOverlap ? 'FOOTER_OVERLAP'
        : (metrics.bulletCount > 7 || metrics.longestToken > 42 || (metrics.minFontPx && metrics.minFontPx < 12) || metrics.tableRows > 5) ? 'WARNING'
        : 'OK'

      const entry = { slide: i, screenshot: shot, ...metrics, verdict }
      report.push(entry)
      console.log(`  slide ${i}: ${verdict} | scrollH=${metrics.scrollHeight} clientH=${metrics.clientHeight} bullets=${metrics.bulletCount} clipped=${metrics.clippedElements} footerOverlap=${metrics.footerOverlap} title="${metrics.title}"`)
      await page.close()
    }
  } finally {
    await browser.close()
    server.kill()
  }

  const reportPath = join(cwd, OUT, 'report-targeted.json')
  writeFileSync(reportPath, JSON.stringify({ canvas: CANVAS, slides: report }, null, 2))
  console.log(`\nReport written: ${reportPath}`)
}

main().catch(e => { console.error(e); process.exit(1) })
