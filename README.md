# lecture

Slidev presentation: **AI in Business Intelligence**.

## Develop

```bash
pnpm install
pnpm run dev      # dev server at http://localhost:3030
pnpm run build    # static SPA -> dist/
pnpm run export   # PDF (needs playwright-chromium)
```

Slides live in `slides.md`. The look comes from the local FOM theme in
`theme-fom/` — see [`theme-fom/README.md`](theme-fom/README.md) for layouts,
`themeConfig` options, and the `<Illustration>` component.

## Illustrations (Storyset)

Illustrations live in `public/illustrations/` as `<slug>-bro.svg`. They are
Storyset "Bro" style graphics, recolored to the theme primary (`#00C6B2`).

Place one on a slide with the theme's component (renders the required Storyset
credit automatically):

```md
<Illustration src="/illustrations/teaching-bro.svg" alt="Teaching" width="80%" />
```

### Fetching + recoloring

`scripts/storyset.mjs` opens each Storyset "Bro" page headlessly, downloads the
SVG, recolors the green accent to the brand color, and writes it to
`public/illustrations/`:

```bash
node scripts/storyset.mjs                        # default set, #00C6B2
PRIMARY='#004a99' node scripts/storyset.mjs      # custom color
node scripts/storyset.mjs teaching data-analysis # specific slugs
```

`scripts/preview-svg.mjs` renders an SVG to PNG for a quick visual check:

```bash
node scripts/preview-svg.mjs public/illustrations/teaching-bro.svg /tmp/preview.png
```

### storyset-illustrator subagent

`.opencode/agents/storyset-illustrator.md` automates concept → keyword →
download → recolor. Ask the primary agent, e.g.:

> Use the storyset-illustrator agent to find illustrations for a slide about
> data pipelines and one about model training.

It probes Storyset for matching "Bro" slugs, runs `scripts/storyset.mjs`, and
reports the resulting file paths so they can be placed with `<Illustration>`.
Restart opencode after adding or editing the agent so it loads.

## Credits

Illustrations in `public/illustrations/` are by [Storyset](https://storyset.com)
("Bro" style), recolored to the theme's brand color.

## License note

Storyset free use requires crediting Storyset — always use the `<Illustration>`
component (never a bare `<img>`) so the credit is preserved. See
<https://storyset.com/terms>.
