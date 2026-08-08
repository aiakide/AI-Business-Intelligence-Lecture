// Downloads Storyset "Bro" style illustrations as SVG, recolors their accent
// color to the theme primary, and writes them to public/illustrations/.
//
// Usage:
//   node scripts/storyset.mjs                      # default set + #00C6B2
//   PRIMARY='#004a99' node scripts/storyset.mjs    # custom color
//   node scripts/storyset.mjs teaching data-analysis   # specific slugs
//
// License: Storyset (Freepik) free use requires crediting Storyset.
// See https://storyset.com/terms — attribution is rendered under each image.
import { chromium } from 'playwright-chromium'
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const PRIMARY = process.env.PRIMARY || '#00C6B2'
const STYLE = process.env.STYLE || 'bro'
const OUT = resolve('public/illustrations')

// slug on storyset.com/illustration/<slug>/<style>
const DEFAULT_SLUGS = [
  'teaching',
  'data-analysis',
  'artificial-intelligence',
  'business-analytics',
  'statistics',
  'analytics',
  'robotics',
]

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_SLUGS

// Storyset Bro accent colors seen in exported SVGs (green shades).
const ACCENTS = [/#92E3A9/gi, /#7ED9C3/gi, /#B9F2CB/gi]

function recolor(svg, primary) {
  let out = svg
  for (const re of ACCENTS) out = out.replace(re, primary)
  return out
}

async function dismissCookies(p) {
  for (const t of ['Accept', 'Accept all', 'Got it', 'I agree', 'Aceptar']) {
    const el = await p.$(`button:has-text("${t}")`)
    if (el) { await el.click().catch(() => {}); return }
  }
}

async function download(ctx, slug) {
  const p = await ctx.newPage()
  try {
    await p.goto(`https://storyset.com/illustration/${slug}/${STYLE}`, {
      waitUntil: 'domcontentloaded', timeout: 60000,
    })
    await p.waitForTimeout(3000)
    await dismissCookies(p)

    // Downloads may fire on this page or a popup; listen on the context.
    const dlPromise = ctx.waitForEvent('download', { timeout: 45000 })
    await p.click('text=Download SVG', { timeout: 15000 })
    await p.waitForTimeout(1500)
    for (const sel of ['button:has-text("Download SVG")', 'a:has-text("Download SVG")']) {
      const el = await p.$(sel)
      if (el) await el.click().catch(() => {})
    }
    const dl = await dlPromise
    const raw = resolve(OUT, `${slug}-${STYLE}.raw.svg`)
    await dl.saveAs(raw)

    const svg = await readFile(raw, 'utf8')
    const before = (svg.match(/#92E3A9/gi) || []).length
    const recolored = recolor(svg, PRIMARY)
    await writeFile(resolve(OUT, `${slug}-${STYLE}.svg`), recolored, 'utf8')
    await rm(raw)

    const after = (recolored.match(new RegExp(PRIMARY, 'gi')) || []).length
    console.log(`OK   ${slug}-${STYLE}.svg  accent#${before}->primary#${after}`)
  } catch (e) {
    console.error(`FAIL ${slug}: ${e.message.split('\n')[0]}`)
  } finally {
    await p.close().catch(() => {})
  }
}

await mkdir(OUT, { recursive: true })
const b = await chromium.launch({ headless: true })
const ctx = await b.newContext({ acceptDownloads: true })
for (const slug of slugs) await download(ctx, slug)
await b.close()
console.log(`\nDone. Style=${STYLE} Primary=${PRIMARY}. Output: public/illustrations/`)
