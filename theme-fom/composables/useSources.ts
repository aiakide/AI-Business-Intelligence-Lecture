export interface Source {
  title: string
  url?: string
  year?: string
}

// Parse all <LiteraturSource> entries out of the raw slides.md text. This is
// deterministic and does NOT depend on component mount order (Slidev lazy-
// mounts slides, so a runtime registry would miss unvisited slides).
export function parseSources(raw: string): Source[] {
  const out: Source[] = []
  // Match every <LiteraturSource ... /> block (may span multiple lines).
  const blockRe = /<LiteraturSource\b([\s\S]*?)\/>/g
  let m: RegExpExecArray | null
  while ((m = blockRe.exec(raw))) {
    const attrs = m[1]
    // Multi-source form: :sources="[ { ... }, { ... } ]"
    const arr = attrs.match(/:sources\s*=\s*"([\s\S]*?)"/)
    if (arr) {
      const objRe = /\{[^}]*\}/g
      let o: RegExpExecArray | null
      while ((o = objRe.exec(arr[1]))) {
        const s = parseObject(o[0])
        if (s) out.push(s)
      }
      continue
    }
    // Single-source form: title="..." url="..." year="..."
    const title = attrs.match(/\btitle\s*=\s*"([^"]*)"/)?.[1]
    if (title) {
      out.push({
        title,
        url: attrs.match(/\burl\s*=\s*"([^"]*)"/)?.[1],
        year: attrs.match(/\byear\s*=\s*"([^"]*)"/)?.[1],
      })
    }
  }
  return dedupe(out)
}

function parseObject(text: string): Source | null {
  // Values in the array form use single quotes: { title: '...', url: '...', year: '...' }
  // The value itself may contain an escaped apostrophe (e.g. "SODA \'07"), so the
  // capture must treat `\'` as a literal char inside the string, not a terminator —
  // `(?:[^'\\]|\\.)*` matches any run of non-quote/non-backslash chars or escaped
  // pairs, then unescape() restores `\'` -> `'` for display.
  const grab = (k: string) =>
    unescape(text.match(new RegExp(`${k}\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'`))?.[1])
  const title = grab('title')
  if (!title) return null
  return { title, url: grab('url'), year: grab('year') }
}

function unescape(value: string | undefined): string | undefined {
  return value?.replace(/\\(.)/g, '$1')
}

function dedupe(list: Source[]): Source[] {
  const map = new Map<string, Source>()
  for (const s of list) {
    const key = (s.url || s.title).trim().toLowerCase()
    if (!map.has(key)) map.set(key, s)
  }
  return [...map.values()].sort((a, b) => a.title.localeCompare(b.title, 'de'))
}
