import { chromium } from 'playwright-chromium'
import { readFileSync } from 'node:fs'

const file = process.argv[2] || 'public/illustrations/teaching-bro.svg'
const out = process.argv[3] || '/var/folders/67/6h8py4lx383879r4fgkr_xz00000gn/T/opencode/preview.png'

const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 500, height: 500 } })
const svg = readFileSync(file, 'utf8')
await p.setContent(`<body style="margin:0;background:#fff;display:flex;align-items:center;justify-content:center">${svg}</body>`)
await p.waitForTimeout(500)
await p.screenshot({ path: out })
await b.close()
console.log('rendered', out)
