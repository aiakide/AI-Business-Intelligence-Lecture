# AGENTS.md

Slidev deck: **AI in Business Intelligence** (FOM lecture). Single-package, no tests/lint/CI.

**This project now has Claude Code agents** (`.claude/agents/`) as the primary agent framework. The legacy OpenCode agents (`.opencode/agents/`) remain available for reference.

---

## Lecture domain knowledge

`Modul-AI-Business-Intelligence.md` is the official FOM module description — the source of truth for the lecture's goals, curriculum, competencies, exam format, and required literature. Read it before writing or restructuring slide content so the deck stays aligned with the module (Statistik → Machine Learning → Deep Learning, Jupyter-based, 5 ECTS, presentation-graded).

`skript.md` is an example lecture script (Orientierungsskript) — a slide-by-slide content outline of the intended narrative flow (topics mapped to slide numbers). Use it as a reference for the deck's structure, pacing, and topic sequence when planning or authoring slides.

---

## Existing prior slides (reuse before authoring from scratch)

An **earlier Slidev deck already covers some topics** and lives outside this repo at:

```
/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence
```

(Note the folder is literally spelled `ai-usiness-intelligence` — a typo in the path, not ours to fix.) It uses the same stack (Slidev, a local `theme/`, primary `#00C6B2`, Montserrat) and the same `<Illustration>`/`[Deep Learning]{style="color:var(--slidev-theme-primary)"}` conventions, so content is largely portable. Substantial finished pages already exist under its `pages/`:

- `pages/session0-foundations.md` (~1400 lines) — Business Intelligence & AI foundations
- `pages/ml.md` (~735 lines) — Machine Learning
- `pages/dl.md` (~1035 lines) — Deep Learning

**Before authoring a new session from scratch, check this deck first** — reuse or adapt its slides, illustrations, research, and glossary rather than duplicating work.

---

## Claude Code Agents

Six specialized agents in `.claude/agents/` implement a structured multi-agent lecture authoring loop:

| Agent | Role | Key Responsibility |
|-------|------|-------------------|
| **lecture-content-planner** 🎓 | Orchestrator | Plans narrative flow, pedagogical structure, layout assignments |
| **edu-research** 🔬 | Researcher | Verifies concepts, returns citations, pedagogical guidance |
| **slidev-content-transformer** 🎨 | Author | Writes German slides, enforces layout & density rules |
| **slide-visual-reviewer** 🔍 | QA (Layout) | Renders slides, audits overflow/clipping/readability |
| **student-reviewer** 🧑‍🎓 | QA (Pedagogy) | Reviews from student POV, flags cognitive overload |
| **storyset-illustrator** 🎨 | Illustrator | Finds & customizes Storyset "Bro" graphics |

### How to use the agents

Invoke agents directly in Claude Code by name or type `@lecture-content-planner`. Example:

```
@lecture-content-planner

Plan the next concept cluster for Session 2: "Regression Basics"
Structure 2-3 slides covering:
- Hook: Why prediction matters to business
- Foundation: What is a regression line?
- Application: sklearn.linear_model usage
```

Then copy the planner's research brief to `@edu-research`, then pass research output to `@slidev-content-transformer`, etc.

### Core workflow (the loop)

```
A. PLAN       lecture-content-planner — Where, why, what layout?
              ↓ (research requisition brief)
B. RESEARCH   edu-research            — Verify & find citations
              ↓ (research output)
C. AUTHOR     slidev-content-transformer — Write German slides
              ↓ (markdown + illustrations)
D. VISUAL QA  slide-visual-reviewer   — Overflow? Clipping? Density OK?
              ↓ (layout feedback)
E. STUDENT QA student-reviewer        — Clear? Relevant? Overloaded?
              ↓ (pedagogical feedback)
F. YOU        User gate               — Approve or give feedback
```

**Loop rules:**
- Maximum **3 full loops** per cluster. If feedback persists after loop 3, escalate to user.
- Visual-only fixes (layout tweaks) don't count as a loop.
- On approval, planner updates `narrative-thread.md` before next cluster.

---

## Content authoring guidelines

- **Language: German.** All slide prose, headings, and speaker notes in German. English technical terms OK where translation is awkward (*Machine Learning*, *Deep Learning*, *Feature*, *Overfitting*, library names: *NumPy*, *Pandas*, *Scikit-Learn*). Never translate code, APIs, or proper nouns.
- **Scope: 8 sessions × 3h 15m each.** This is our teaching-plan decision (module itself is 5 ECTS / 125 ZStd with no fixed grid). Author substantive content for eight 195-minute sessions distributed across topics.
- **Reserve 30–60 min per session for interactive exercises.** Pace **slide content to ~135–165 min per session**, not the full 195. Do not over-author.
- **Tone: informal "Du".** Address students with *Du* (e.g. *Du kannst*, *Deine Aufgabe*), never *Sie*.

---

## Pedagogical structure (required for every cluster)

Every 1–4 slide concept cluster must follow this 4-tier progression:

1. **Hook** — Why this concept matters to Business Intelligence (real-world problem from `narrative-thread.md`)
2. **Foundation** — Plain-language mechanics + intuitive analogy
3. **Application** — Practical implementation (NumPy, Pandas, Scikit-Learn, etc.)
4. **Synthesis** — How this connects to prior concepts and unlocks next ones

Every technical claim must carry a **verified `<LiteraturSource />`** (real DOI or permanent URL — no fabricated references).

---

## Narrative thread

**Read `narrative-thread.md` before authoring anything.** It is the single source of truth for:
- The deck's *Roter Faden* (common thread across all sessions)
- Per-topic real-world cases and business scenarios
- Progress log of completed clusters

The `lecture-content-planner` owns and updates it after each approved cluster.

---

## Content creation workflow

**Unit of work:** one **concept cluster (1–4 slides)** — a full motivation → explanation → application story, not isolated slides.

1. Planner locates the cluster in `narrative-thread.md` and defines Why/How/layout
2. Planner compiles a **RESEARCH REQUISITION BRIEF**:
   - Target Topic
   - Script Alignment
   - Technical Depth (Beginner-Friendly | Strategic Framework | Deep-Dive)
   - Pedagogical Goal
   - Citation Requirement
3. Pass brief to `@edu-research` → returns verified sources + pedagogical insights
4. Pass research to `@slidev-content-transformer` → writes German slides + requests illustrations
5. Pass slides to `@slide-visual-reviewer` → checks layout (must pass visual QA)
6. Pass rendered slides to `@student-reviewer` → checks pedagogy & clarity
7. **You** review final slides + student feedback + citations; approve or give one targeted pass of feedback
8. On approval, planner updates `narrative-thread.md`

---

## Commands (use pnpm, not npm)

```bash
pnpm install
pnpm run dev      # dev server at http://localhost:3030
pnpm run build    # static SPA -> dist/
pnpm run export   # PDF (requires playwright-chromium)
```

---

## Layout reference

- `slides.md` — all slide content. Uses `theme: ./theme-fom`
- `theme-fom/` — local FOM theme (forked from `@slidev/theme-seriph`). Layouts: `cover`, `intro`, `section`, `chapter`, `fact`, `statement`, `quote`, `header-cols`, plus Slidev built-ins (`default`, `center`, `two-cols`). See `theme-fom/README.md`.
- `public/` — static assets (absolute paths, e.g., `/fom_logo.svg`, `/illustrations/data-analysis-bro.svg`)
- `scripts/` — `storyset.mjs` (download+recolor), `slide-shots.mjs` (render+screenshot for visual QA)

**Density guardrails:**
- Standard slides: 5–7 single-level bullets max
- Image slides: 3–4 bullets + one illustration
- Tables: max 5 rows × 4 columns
- No orphan slides (1–2 lines only)

---

## Illustrations

The FOM primary color is **`#00C6B2`**, defined in `theme-fom/styles/layouts.css`. All illustrations must match — never guess or invent a color.

```bash
# Read the actual theme color:
grep -R "slidev-theme-primary" theme-fom/styles/ | grep -oiE '#[0-9a-f]{6}'

# Download & recolor Storyset "Bro" graphics:
node scripts/storyset.mjs data-analysis machine-learning

# Or with custom color:
PRIMARY='#00C6B2' node scripts/storyset.mjs data-analysis
```

Place illustrations on slides with **`<Illustration>`** component (not bare `<img>`):
```markdown
<Illustration src="/illustrations/data-analysis-bro.svg" alt="Data Analysis" width="90%" />
```

The component handles Storyset's license attribution automatically. Use `@storyset-illustrator` agent to find and download new graphics.

---

## OpenCode (legacy)

The original OpenCode agents remain in `.opencode/agents/` for reference. They implement identical system prompts but use OpenCode's provider model (requires `REQUESTY_API_KEY`). Both frameworks follow the same pedagogical loop and content rules.
