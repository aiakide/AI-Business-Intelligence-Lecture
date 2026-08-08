# Session Handoff — AI in Business Intelligence deck

> Resume file for the next working session. Read this + `narrative-thread.md` +
> `AGENTS.md` first. Everything below reflects the repo state at the last commit.

## Where we are

- **Repo state:** clean working tree; all work committed. Last commit:
  `19b8c07 feat(theme): auto-aggregated Literaturverzeichnis …`
- **`slides.md` structure (current):**
  1. Cover — "AI & Business Intelligence"
  2. Bio — "Hi, ich bin Nils"
  3. Lernziele & Orga *(⚠️ needs fixing — see Open items)*
  4. Session 1 chapter opener — "Business Intelligence & Data Science"
  5. Hook — "Deine Ausgangslage als Analyst" (Versicherer)
  6. "Von der Frage zum Modell" (Roter-Faden lifecycle)
  7. "Was Dich in diesem Kurs erwartet" (Methode→Session Tabelle)
  8. Synthesis — "Warum beginnen wir mit Statistik?"
  9–14. **Leftover placeholder demo slides** (Left column, header-cols, section,
     fact, statement, Thank You) — not yet replaced with real content.
  15. **Literaturverzeichnis** (auto-aggregated appendix)

## What's done

- ✅ Full agent pipeline set up + verified (planner, edu-research, transformer,
  visual-reviewer, student-reviewer, storyset-illustrator).
- ✅ Workflow + Roter Faden documented (`AGENTS.md`, `narrative-thread.md`).
- ✅ Intro slides ported from the prior deck.
- ✅ **Cluster 1 (Session 1 opener, slides 4–8)** authored via the full loop —
  approved by student-reviewer (2 loops) and by the user. Logged in
  `narrative-thread.md` progress table.
- ✅ Auto-aggregated **Literaturverzeichnis**: parses all `<LiteraturSource>`
  from `slides.md?raw`, dedupes + sorts, renders single-column on slide 15.
  Zero manual upkeep — new sources appear automatically.
- ✅ Theme tweak: vertical margin around blockquote callouts.

## Verified bibliography sources so far (all DOIs checked, resolve + titles match)

1. Accenture — Transforming Claims and Underwriting with AI (2022)
2. Chan, Hogaboam & Cao — Applied AI in Business, Springer (2022)
3. Ngai et al. — Data Mining in Financial Fraud Detection, DSS 50(3) (2011)
4. Vo et al. — Next Generation BI & Analytics: A Survey, arXiv (2017)
5. Weber — AI for Business Analytics, Springer (2023)

Honesty carry-over: no verifiable German/GDV fraud % found (kept qualitative);
CRISP-DM named but deferred, anchored via Chan/Weber (no standalone DOI).

## NEXT UP (resume here)

**Next content cluster: Statistik-Grundlagen** — still Session 1, still the
Versicherer case. Topics (per `skript.md` / `narrative-thread.md` prerequisite
chain): Lage- & Streuungsmaße (Modus, Median, arithm. Mittel, Varianz,
Standardabweichung), Korrelation — motivated by the insurer needing to
understand its claims data before modelling.

Run the standard loop (AGENTS.md → "Content creation workflow"):
PLAN → RESEARCH → AUTHOR → VISUAL QA → STUDENT REVIEW → USER GATE, max 3 loops.

## Open items (parked)

1. **Fix the Lernziele/Orga intro slide (slide 3).** Its "Orga" column still
   lists only **4 sessions** (carried over from the prior "Teil 2" deck) — must
   reflect this deck's **8 × 3h 15m** plan (and the reserved 30–60 min exercise
   per session). Learning goals may also need revising.
2. **Replace the leftover placeholder demo slides (9–14).** They are the
   original template scaffold; remove/replace as real Session content grows.
3. Exercises: each session reserves 30–60 min hands-on (content TBD later) —
   placeholders only so far.

## Handy commands

```bash
pnpm run dev                 # preview at http://localhost:3030
node scripts/slide-shots.mjs # render + screenshot every slide → slide-review/
```
