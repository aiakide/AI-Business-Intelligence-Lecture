# AGENTS.md

Slidev deck: **AI in Business Intelligence** (FOM lecture). Single-package, no tests/lint/CI.

## Lecture domain knowledge

`Modul-AI-Business-Intelligence.md` is the official FOM module description — the source of truth for the lecture's goals, curriculum, competencies, exam format, and required literature. Read it before writing or restructuring slide content so the deck stays aligned with the module (Statistik → Machine Learning → Deep Learning, Jupyter-based, 5 ECTS, presentation-graded).

`skript.md` is an example lecture script (Orientierungsskript) — a slide-by-slide content outline of the intended narrative flow (topics mapped to slide numbers). Use it as a reference for the deck's structure, pacing, and topic sequence when planning or authoring slides.

## Existing prior slides (reuse before authoring from scratch)

An **earlier Slidev deck already covers some topics** and lives outside this repo at:

```
/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence
```

(Note the folder is literally spelled `ai-usiness-intelligence` — a typo in the path, not ours to fix.) It uses the same stack (Slidev, a local `theme/`, primary `#00C6B2`, Montserrat) and the same `<Illustration>`/`[Deep Learning]{style="color:var(--slidev-theme-primary)"}` conventions, so content is largely portable. Substantial finished pages already exist under its `pages/`:

- `pages/session0-foundations.md` (~1400 lines) — Business Intelligence & AI foundations: why AI projects fail, BI pipeline, Daten → Entscheidungen, Single Source of Truth.
- `pages/ml.md` (~735 lines) — Machine Learning: ML vs. regelbasierte Systeme, die drei ML-Arten (überwacht / unüberwacht / bestärkend) with comparison.
- `pages/dl.md` (~1035 lines) — Deep Learning: ML vs. DL (Architektur, Datenbedarf, Rechenaufwand), fundamentals.

It also carries reusable research/glossary assets: `glossar.md`, `research-ai-bi-consulting-frameworks.md`, `research-session0-foundations.md`, plus `plan-section_1.md` / `planung-teil1.md` planning docs.

**Before authoring a new session from scratch, check this deck first** — reuse or adapt its slides, illustrations, research, and glossary rather than duplicating work. Port content into this repo's structure/theme; do not depend on that path at build time (it is a separate repo).

## Content authoring guidelines

- **Language: German.** All slide prose, headings, and speaker notes are written in German. Established English technical terms may stay in English where translating would be awkward or less clear (e.g. *Machine Learning*, *Deep Learning*, *Training/Validation Split*, *Feature*, *Overfitting*, library/tool names like *NumPy*, *Pandas*, *Scikit-Learn*). Do not translate code, APIs, or proper nouns.
- **Scope: 8 sessions × 3h 15m each (teaching-plan decision).** The official module (`Modul-AI-Business-Intelligence.md`) is 5 ECTS / 125 ZStd self-study with *no* fixed session grid — the "8 × 3h 15m" structure is our own teaching plan, not derived from the module. Author enough substantive content to fill eight teaching sessions of ~3 hours 15 minutes (195 min) each. Distribute topics across the eight sessions — not a thin outline.
- **Reserve time for exercises.** Each session reserves **30–60 min for an interactive, hands-on exercise** (content planned later — leave a placeholder). Therefore pace **slide content to ~135–165 min per session**, *not* the full 195 min. Do not over-author slides to fill the whole session.
- **Tone: informal "Du".** Address students with *Du* (e.g. *Du kannst*, *Deine Aufgabe*), never the formal *Sie* — matches `slidev-content-transformer.md`.

## Content creation workflow (the agent loop)

All slide content is produced by a fixed multi-agent loop. **Read `narrative-thread.md`
before authoring anything** — it is the single source of truth for the deck's *Roter
Faden* (common thread) and the per-topic real-world cases. The `lecture-content-planner`
owns and updates it.

**Unit of work:** one **concept cluster (1–4 slides)** — a full *motivation → explanation
→ application* story — not an isolated slide.

**Every cluster must deliver, grounded in literature + common sense:**
1. **Motivation (the "Why"):** a real-world problem from the cluster's assigned case in
   `narrative-thread.md` (Hook tier).
2. **Easy explanation (the "How"):** plain-language mechanics + an intuitive analogy
   (Foundation tier).
3. **Application** and **Synthesis** that ties back to the running thread.
4. Every technical claim carries a **verified `<LiteraturSource/>`** (real DOI/permanent
   URL — no fabricated references).

**The loop:**
```
A. PLAN      lecture-content-planner  — locate cluster in narrative-thread.md; define
                                        Why/How/goal/layout; emit research brief.
B. RESEARCH  edu-research             — verify problem + explanation; return concepts,
                                        analogy, and VERIFIED citations.
C. AUTHOR    slidev-content-transformer — write German slides (Hook→Foundation→
                                        Application→Synthesis); attach <LiteraturSource/>;
                                        request art from storyset-illustrator if needed.
D. VISUAL QA slide-visual-reviewer    — render + screenshot. Must pass (no overflow/
                                        clipping, density guardrails). Layout-only fixes
                                        here do NOT consume a loop.
E. STUDENT   student-reviewer         — THE END OF THE LOOP. Reviews the rendered slide.
                                        While it returns actionable feedback → transformer
                                        adjusts → back to D/E.
F. USER GATE you                      — see slides + student's final verdict + citations;
                                        approve or give feedback (one targeted pass).
```

**Loop rules (hard):**
- 1 loop = one author/adjust → visual QA → student review pass. Visual-only fixes don't count.
- **Maximum 3 loops.** If the `student-reviewer` still has feedback after loop 3, do **not**
  silently continue — surface the slide + unresolved feedback to the user at step F.
- On user approval, the planner **updates `narrative-thread.md`** (progress log) before the
  next cluster, keeping the thread unbroken.

## Commands (use pnpm, not npm)

Scripts in `package.json` say `slidev ...`, but the repo uses **pnpm** (`pnpm-lock.yaml`):

```bash
pnpm install
pnpm run dev      # dev server at http://localhost:3030
pnpm run build    # static SPA -> dist/
pnpm run export   # PDF; needs playwright-chromium (pnpm exec playwright install chromium)
```

## Layout

- `slides.md` — all slide content. Uses `theme: ./theme-fom`.
- `theme-fom/` — local FOM theme (forked from `@slidev/theme-seriph`). Layouts, `themeConfig`, and the `<Illustration>` component. See `theme-fom/README.md`.
- `public/` — static assets copied as-is; reference with absolute paths (`/fom_logo.svg`). `public/illustrations/` holds `<slug>-bro.svg` graphics.
- `scripts/` — `storyset.mjs` (download+recolor illustrations), `preview-svg.mjs` (SVG→PNG check).

## Theme primary color: never guess it

The FOM primary is `#00C6B2`, defined once in `theme-fom/styles/layouts.css` as `--slidev-theme-primary`. All illustrations must match it. When recoloring, read it from source — do NOT invent a color:

```bash
grep -R "slidev-theme-primary" theme-fom/styles/ | grep -oiE '#[0-9a-f]{6}'
```

(A past session wrongly used a generic blue; the `storyset-illustrator` agent instructions now enforce reading the theme value.)

## Illustrations workflow

- Add via `node scripts/storyset.mjs <slug>...` (defaults to `PRIMARY=#00C6B2`; override with `PRIMARY='#hex'`). Downloads the Storyset "Bro" SVG, recolors the green accent, writes to `public/illustrations/`.
- The `storyset-illustrator` subagent (`.opencode/agents/`) automates concept→slug→download→recolor. **Restart opencode after editing an agent** so it reloads.
- Place on a slide with `<Illustration src="/illustrations/<slug>-bro.svg" ... />` — **never a bare `<img>`**. The component renders the Storyset credit required by the free license.

## opencode config

`opencode.json` pins provider `requesty-cc` and disables `requesty`/`opencode` providers; requires `REQUESTY_API_KEY` in the environment.
