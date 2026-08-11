// Probe which element(s) produce minFontPx=1 on slides 44 and 45
import { chromium } from 'playwright-chromium'
import { spawn } from 'node:child_process'

const PORT = 3214
const CANVAS = { width: 980, height: 551 }
const TARGETS = [44, 45]

async function startDevServer(cwd) {
  const proc = spawn('pnpm', ['exec', 'slidev', '--port', String(PORT)], {
    cwd, stdio: ['ignore', 'ignore', 'inherit'],
  })
  let exited = false; proc.on('exit', () => { exited = true })
  const url = `http://localhost:${PORT}/`
  const deadline = Date.now() + 50000
  while (Date.now() < deadline) {
    if (exited) throw new Error('dev server exited')
    try { const r = await fetch(url); if (r.ok) return proc } catch {}
    await new Promise(r => setTimeout(r, 500))
  }
  proc.kill(); throw new Error('timeout')
}

async function main() {
  const cwd = '/Users/nils/projects/fom/repos/ai-business-intelligence/lecture'
  const server = await startDevServer(cwd)
  const browser = await chromium.launch()
  try {
    for (const i of TARGETS) {
      const page = await browser.newPage({ viewport: CANVAS })
      await page.goto(`http://localhost:${PORT}/${i}`, { waitUntil: 'networkidle' })
      await page.waitForFunction(n => {
        const no = window.__slidev__?.nav?.currentSlideNo
        return (typeof no === 'object' ? no?.value : no) === n
      }, i, { timeout: 10000 }).catch(() => {})
      await page.waitForTimeout(500)

      const tiny = await page.evaluate(n => {
        const canvas = document.querySelector(`.slidev-page-${n} .slidev-layout`) ||
                       document.querySelector(`.slidev-page-${n}`)
        if (!canvas) return []
        const results = []
        for (const el of canvas.querySelectorAll('*')) {
          if (!el.textContent.trim()) continue
          if (el.closest('.storyset-credit, figcaption')) continue
          const fs = parseFloat(getComputedStyle(el).fontSize)
          if (fs && fs < 10) {
            results.push({
              tag: el.tagName,
              class: el.className,
              text: el.textContent.trim().slice(0, 60),
              fontSize: fs,
              visible: el.offsetWidth > 0 && el.offsetHeight > 0
            })
          }
        }
        return results.slice(0, 20)
      }, i)

      console.log(`\nSlide ${i} — elements with fontSize < 10px:`)
      if (tiny.length === 0) console.log('  (none)')
      else tiny.forEach(t => console.log(`  tag=${t.tag} class="${t.class.slice(0,40)}" fs=${t.fontSize}px visible=${t.visible} text="${t.text}"`))
      await page.close()
    }
  } finally {
    await browser.close()
    server.kill()
  }
}
main().catch(e => { console.error(e); process.exit(1) })
