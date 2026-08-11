// Probe the dev server for the total slide count and search for slides by title keyword.
// Usage: node scripts/find-slides.mjs "keyword1" "keyword2"

import { chromium } from 'playwright-chromium'
import { spawn } from 'node:child_process'

const PORT = Number(process.env.PORT) || 3213
const CANVAS = { width: 980, height: 551 }
const KEYWORDS = process.argv.slice(2)

async function startDevServer(cwd) {
  const proc = spawn('pnpm', ['exec', 'slidev', '--port', String(PORT)], {
    cwd, stdio: ['ignore', 'ignore', 'inherit'],
  })
  let exited = false
  proc.on('exit', () => { exited = true })
  const url = `http://localhost:${PORT}/`
  const deadline = Date.now() + 50000
  while (Date.now() < deadline) {
    if (exited) throw new Error('dev server exited')
    try { const r = await fetch(url); if (r.ok) return proc } catch {}
    await new Promise(r => setTimeout(r, 500))
  }
  proc.kill()
  throw new Error('dev server did not become ready in 50s')
}

async function main() {
  const cwd = '/Users/nils/projects/fom/repos/ai-business-intelligence/lecture'
  const server = await startDevServer(cwd)
  const base = `http://localhost:${PORT}`
  const browser = await chromium.launch()

  try {
    const page = await browser.newPage({ viewport: CANVAS })
    await page.goto(`${base}/1`, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => window.__slidev__?.nav?.total, { timeout: 15000 })
    const total = await page.evaluate(() => {
      const t = window.__slidev__.nav.total
      return typeof t === 'object' ? t.value : t
    })
    console.log(`Total slides: ${total}`)
    await page.close()

    // Scan each slide for the keywords
    for (let i = 1; i <= total; i++) {
      const p = await browser.newPage({ viewport: CANVAS })
      await p.goto(`${base}/${i}`, { waitUntil: 'networkidle' })
      await p.waitForFunction(
        n => {
          const no = window.__slidev__?.nav?.currentSlideNo
          const cur = typeof no === 'object' ? no?.value : no
          return cur === n
        },
        i, { timeout: 8000 }
      ).catch(() => {})
      await p.waitForTimeout(400)

      const titleText = await p.evaluate(n => {
        const active = document.querySelector(`.slidev-page-${n}`)
        if (!active) return ''
        return (active.querySelector('h1,h2,h3')?.innerText || '').trim()
      }, i)

      const matched = KEYWORDS.length === 0 || KEYWORDS.some(k => titleText.toLowerCase().includes(k.toLowerCase()))
      if (matched || titleText) {
        process.stdout.write(`Slide ${String(i).padEnd(4)} | "${titleText}"\n`)
      }
      await p.close()
    }
  } finally {
    await browser.close()
    server.kill()
  }
}

main().catch(e => { console.error(e); process.exit(1) })
