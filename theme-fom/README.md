# slidev-theme-fom

An academic, FOM-branded [Slidev](https://sli.dev) theme.

Derived from the official [`@slidev/theme-seriph`](https://github.com/slidevjs/themes) theme
(MIT, © Anthony Fu). Adapted for FOM lecture decks.

## Features

- FOM teal primary color (`#00C6B2`)
- Serif headings (Old Standard TT) + Montserrat sans body + Fira Code mono
- Branded header (logo, top-right) and footer (date · author · slide number)
- Layouts: `cover`, `intro`, `section`, `chapter`, `fact`, `statement`, `quote`,
  `header-cols` (plus all Slidev built-ins like `two-cols`, `center`, `default`)

### `header-cols`

A heading spanning the top, with a two-column content section below.

```md
---
layout: header-cols
---

# Heading spanning the top

::left::

## Left column

Left content

::right::

## Right column

Right content
```

Slots: `default`/`header` (top heading), `left`, `right`.

## Usage

In your `slides.md` headmatter:

```yaml
---
theme: ./theme-fom
themeConfig:
  primary: '#00C6B2'
  logo: /fom_logo.svg
  author: Your Name
  date: '03.07.2026'
---
```

### Config options (`themeConfig`)

| Key       | Purpose                              | Default          |
| --------- | ------------------------------------ | ---------------- |
| `primary` | Accent color                         | `#00C6B2`        |
| `logo`    | Header logo path (from `public/`)    | `/fom_logo.svg`  |
| `author`  | Footer author name                   | (empty)          |
| `date`    | Footer date                          | (empty)          |

The header/footer are hidden on `cover` and `intro` layouts.

> Place your logo file in the **project's** `public/` folder (e.g. `public/fom_logo.svg`)
> and reference it with an absolute path (`/fom_logo.svg`). Assets in `public/` are copied
> to the build output as-is.

## Illustrations

Use the `Illustration` component to show a graphic with a small light-grey
Storyset credit underneath (required by the [Storyset free license](https://storyset.com/terms)):

```md
<Illustration src="/illustrations/teaching-bro.svg" alt="Teaching" width="80%" />
```

Props: `src` (required), `alt`, `width` (default `100%`), `credit`
(default `Illustration by Storyset`), `href` (default `https://storyset.com`).

> Sourcing illustrations (the `scripts/storyset.mjs` download/recolor script and
> the `storyset-illustrator` subagent) is a project workflow, not part of the
> theme — see the project root `README.md`.

## Citations

Use the `LiteraturSource` component to render a small source line at the bottom
of a slide (accent-colored links, theme primary):

```md
<!-- single source -->
<LiteraturSource title="Gartner BI Maturity Model" url="https://www.gartner.com/..." year="2026" />

<!-- multiple sources -->
<LiteraturSource :sources="[
  { title: 'Paper A', url: 'https://...', year: '2025' },
  { title: 'Paper B', url: 'https://...', year: '2026' },
]" />
```

Props: single-source `title` (required), `url`, `year`; or `sources` (array of
`{ title, url?, year? }`). Place it near the end of the slide, before the `---`
separator.

## Keeping slides portable

The slide content (`slides.md`) uses only standard layouts and markdown, so you
can swap themes by changing a single line: `theme: ./theme-fom` → `theme: seriph`.
