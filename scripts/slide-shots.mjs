// Visual slide review: render each slide of the deck headlessly, screenshot it,
// and measure layout problems (overflow, clipping, wrap/density risks).
//
// Usage:
//   node scripts/slide-shots.mjs           # boot dev server + shoot all slides
//   PORT=3210 OUT=slide-review node scripts/slide-shots.mjs
//
// Output (git-ignored, see .gitignore):
//   slide-review/slide-NN.png   one screenshot per slide
//   slide-review/report.json    per-slide metrics + verdict
//
// Notes on the rendering model (hard-won — do not "simplify" away):
//   * The Slidev deck is an SPA. A static server serving dist/ does NOT hydrate
//     deep links (/2, /3, ...) — only slide 1 renders. So we run the dev server
//     (`pnpm exec slidev`), which routes /N client-side.
//   * The DOM contains ALL slides as sibling `.slidev-page` nodes; only the
//     active one is visible. We navigate with a fresh page load per slide and
//     measure the *visible* page, matched by its `slidev-page-N` class.
//   * The slide canvas is a fixed 980x551 (16/9) box. Overflow is measured
//     against that element's own client box — objective, not eyeballed.

import { chromium } from 'playwright-chromium'
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const OUT = process.env.OUT || 'slide-review'
const PORT = Number(process.env.PORT) || 3211
const CANVAS = { width: 980, height: 551 }

async function startDevServer() {
  const proc = spawn('pnpm', ['exec', 'slidev', '--port', String(PORT)], {
    stdio: ['ignore', 'ignore', 'inherit'],
  })
  let exited = false
  proc.on('exit', () => { exited = true })
  // Poll the port until it responds (robust across slidev banner formats and
  // missing `timeout` on macOS).
  const url = `http://localhost:${PORT}/`
  const deadline = Date.now() + 40000
  while (Date.now() < deadline) {
    if (exited) throw new Error('dev server exited before becoming ready')
    try {
      const r = await fetch(url)
      if (r.ok) return proc
    } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 500))
  }
  proc.kill()
  throw new Error('dev server did not become ready in 40s')
}

function verdict(m) {
  if (m.overflowY || m.overflowX || m.clippedElements > 0) return 'overflow'
  if (m.bulletCount > 7 || m.longestToken > 42 || (m.minFontPx && m.minFontPx < 12) ||
      m.tableRows > 5 || m.tableCols > 4) return 'warning'
  return 'ok'
}

// Runs in the browser: measures the currently visible slide page. Slidev has no
// "visible" class — the active page is the `.slidev-page` that is actually laid
// out (offsetParent != null / non-zero height).
function measure() {
  const pages = [...document.querySelectorAll('.slidev-page')]
  const page = pages.find((p) => p.offsetParent !== null && p.getBoundingClientRect().height > 0)
    || pages[0]
  if (!page) return { missing: true }
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
    // Ignore the tiny Storyset credit line (intentional fine print, not body text).
    if (el.closest('.storyset-credit, figcaption')) continue
    const fs = parseFloat(getComputedStyle(el).fontSize)
    if (fs) minFontPx = Math.min(minFontPx, fs)
  }
  const rows = canvas.querySelectorAll('table tr')
  const title = (canvas.querySelector('h1,h2')?.innerText || '').trim().slice(0, 60)

  return {
    overflowY, overflowX, clippedElements: clipped,
    scrollHeight: canvas.scrollHeight, clientHeight: canvas.clientHeight,
    scrollWidth: canvas.scrollWidth, clientWidth: canvas.clientWidth,
    bulletCount: bullets, longestToken,
    minFontPx: minFontPx === Infinity ? null : Math.round(minFontPx),
    tableRows: rows.length,
    tableCols: rows.length ? rows[0].querySelectorAll('th,td').length : 0,
    title,
  }
}

// Count slides via Slidev's internal nav state (source of truth). Parsing
// slides.md is unreliable (`layout:` frontmatter uses `---` fences too), and
// counting `.slidev-page` nodes undercounts because Slidev lazy-hydrates.
async function countSlides(browser, base) {
  const page = await browser.newPage({ viewport: CANVAS })
  await page.goto(`${base}/1`, { waitUntil: 'networkidle' })
  await page.waitForFunction(() => window.__slidev__?.nav?.total, { timeout: 15000 })
  const n = await page.evaluate(() => {
    const t = window.__slidev__.nav.total
    return typeof t === 'object' ? t.value : t // unref if it's a Vue ref
  })
  await page.close()
  return n
}

async function main() {
  rmSync(OUT, { recursive: true, force: true }) // clear stale screenshots/report
  mkdirSync(OUT, { recursive: true })
  console.log(`Starting dev server on :${PORT} ...`)
  const server = await startDevServer()
  const base = `http://localhost:${PORT}`

  const browser = await chromium.launch()
  const report = []
  try {
    const total = await countSlides(browser, base)
    console.log(`Detected ${total} slides.`)

    for (let i = 1; i <= total; i++) {
      // Fresh page per slide so the deck boots directly on route /i (deep links
      // only reliably hydrate the active slide).
      const page = await browser.newPage({ viewport: CANVAS, deviceScaleFactor: 2 })
      await page.goto(`${base}/${i}`, { waitUntil: 'networkidle' })
      // Wait until Slidev reports it is actually on slide i and that page is laid out.
      await page.waitForFunction(
        (n) => {
          const no = window.__slidev__?.nav?.currentSlideNo
          const cur = typeof no === 'object' ? no?.value : no
          const active = document.querySelector(`.slidev-page-${n}`)
          return cur === n && active && active.offsetParent !== null
        },
        i, { timeout: 10000 },
      ).catch(() => {})
      await page.waitForTimeout(600) // fonts + illustrations settle

      const metrics = await page.evaluate(measure)
      const shot = join(OUT, `slide-${String(i).padStart(2, '0')}.png`)
      // Screenshot the visible slide canvas (crops nav chrome/footer noise).
      const el = await page.$(`.slidev-page-${i} .slidev-layout`)
        || await page.$(`.slidev-page-${i}`)
        || await page.$('.slidev-layout')
      if (el) await el.screenshot({ path: shot }); else await page.screenshot({ path: shot })

      const entry = { slide: i, screenshot: shot, ...metrics, verdict: verdict(metrics) }
      report.push(entry)
      console.log(`slide ${String(i).padStart(2, '0')}  ${entry.verdict.toUpperCase().padEnd(8)} ${metrics.title || ''}`)
      await page.close()
    }
  } finally {
    await browser.close()
    server.kill()
  }

  const reportPath = join(OUT, 'report.json')
  writeFileSync(reportPath, JSON.stringify({ canvas: CANVAS, slides: report }, null, 2))
  const bad = report.filter(r => r.verdict !== 'ok').length
  console.log(`\nDone. ${report.length} slides, ${bad} flagged. Report: ${reportPath}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
