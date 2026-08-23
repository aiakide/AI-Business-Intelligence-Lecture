# Open TODOs — AI Business Intelligence Deck

> Tracks content still missing from `slides.md`, derived from a gap analysis of
> `skript.md`, `vorlage_skript.md`, `narrative-thread.md`, and
> `Modul-AI-Business-Intelligence.md` (2026-08-19). Cross-check `narrative-thread.md`
> §3 (prerequisite chain) and §6 (progress log) before starting any item — that file
> is the source of truth for sequencing and stays authoritative if this list and it
> ever disagree.

> **Terminology (2026-08-23, from user):** The deck calls its top-level blocks
> **"Kapitel"** (chapter), not "Session" — every chapter-opener slide in `slides.md`
> uses `# Kapitel N: [Titel]`. Older entries in this file and in `narrative-thread.md`
> were written with "Session N" before this was made explicit; they are being
> normalized to "Kapitel N" as they're touched, but don't assume every historical
> mention has been swept. When authoring anything new — slides, TODO items, narrative
> entries — always say "Kapitel N", never "Session N". "Session" only remains correct
> when talking about the literal classroom meeting/course session (a scheduling
> concept, e.g. "this happens across two class sessions"), which is a different axis
> from the deck's chapter numbering and may not line up 1:1.

**Current state:** Kapitel 1 (Statistik & Regression), Kapitel 2 (Python-Vertiefung,
§11.0 + 11a–11e, 33 slides), Kapitel 3 (Tools & Workflows, §12), and Kapitel 4
(Supervised ML) are complete and approved, each with its own `layout: chapter`
opener slide. The deck then falls into the closing "Danke & Diskussion" +
Literaturverzeichnis slides — nothing past Kapitel 4 is real content yet.

**Chapter renumbering (2026-08-20/21, from user):** Python-Vertiefung and Tools &
Workflows each got their own `layout: chapter` opener slide (matching the Kapitel 1
style), promoting them to Kapitel 2 and Kapitel 3 respectively (previously planned as
sub-blocks "2a"/"2b" within Kapitel 2 — see narrative-thread.md §12). Every chapter
from Supervised ML onward shifts by +2 versus older references in this file and in
narrative-thread.md's history: old Kapitel 2 (Supervised ML) → **Kapitel 4**, old
Kapitel 3 (Clustering) → **Kapitel 5**, old Kapitel 4 (DL) → **Kapitel 6**, old
Kapitel 5 (NLP) → **Kapitel 7**, old Kapitel 6–8 (Vertiefungen) → **Kapitel 8–10**.
Items below already use the new numbers; historical entries in narrative-thread.md's
dated log are left as-written (they're a record of what was true when written, not a
live spec) but flagged with a pointer to this correction where relevant.

**Known stale content (not fixed, flagged only):** the "📝 Orga & Erwartungen" slide
near the top of the deck still lists a generic four-item placeholder ("Session 1:
Einführung ML", "Session 2: Grundlagen DL", ...) that never matched the real
structure, even before this renumbering — and predates the Kapitel-vs-Session
terminology decision above, so it needs both a content and a wording pass. Needs a
real editorial pass once the full chapter structure (through Kapitel 10) is locked
in — out of scope for this renumbering itself.

## 1. Tooling chapter (oldest open gap — flagged 2026-08-10, complete 2026-08-19)
- [x] Jupyter Notebooks — research → authoring → QA → done (placed *before* the Python-Vertiefung exercise)
- [x] Docker — research → authoring → QA → done (after the exercise)
- [x] Kubernetes — research → authoring → QA → done (after the exercise)
- [x] Git / GitHub — research → authoring → QA → done (after the exercise, split into 2 slides)
- [x] CRISP-DM (dedicated detail slides — 6 Phasen, Kreislauf, Versicherer-mapping ×2) — research → authoring → QA → done (after the exercise, split into 4 slides)

**Status:** All 12 content slides authored into `slides.md` and QA'd (visual + student-perspective, incl. a re-verification pass after fixing overflow on 4 slides). Committed.

**Correction (2026-08-19):** notebooks will run in **Google Colab**, not locally — confirmed by user. Rewrote the Jupyter slide (mentions Colab explicitly), the exercise slide (CTA now says "Notebooks in Colab öffnen"), and the Docker slide's hook (no longer implies students run Jupyter on their own machine — reframed around Colab handling *your* environment vs. a team needing reproducibility across machines it doesn't control).

**Follow-up (not blocking commit):** the exercise slide references "sechs Jupyter Notebooks in Google Colab" but no `.ipynb` files exist in the repo yet, and there's no actual Colab link. Needs the notebooks actually authored (`didactic-notebook-architect`), hosted, and a real link added to the exercise slide.

Named explicitly in the Modulbeschreibung's "Methodische Grundlagen." Deliberately
deferred from §11 (Python-Vertiefung is code-literacy only, not tooling/process). Now scheduled as professional-workflows bridge.

## 2. Kapitel 4 — Supervised ML — complete 2026-08-23
- [x] Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) — authored, incl. Overfitting/Underfitting (+ Lernkurven-Diagramm)
- [x] Metriken: Accuracy, Precision, Recall, F1-Score — authored, incl. Confusion Matrix, "welche Metrik wann" and a two-slide Business-Kosten scenario (Baseline vs. aggressiveres Modell)
- [x] Algorithmen: KNN, Entscheidungsbäume, Random Forest, Gradient Boosting — authored as one progression (Baum → Bagging-Ensemble → Boosting-Ensemble), each with a custom diagram; algorithm-choice "Faustregel" slide covers all four

**Status:** ~25 slides authored into `slides.md` (Kapitel-4 opener + content/exercise slides + closing "Danke & Diskussion"), incl. 5 custom SVG diagrams (Overfitting/Underfitting-Lernkurve, KNN-Nachbarn-Scatterplot, Entscheidungsbaum-Split, Random-Forest-Ensemble, Gradient-Boosting-Sequenz) — all in `public/`, FOM-Design-System-Stil. Plus a KNN-vs-K-Means-Klarstellungs-Slide (häufige Verwechslung wegen des Namens, KNN ist supervised/Kapitel 4, K-Means ist unsupervised/Kapitel 5). Gradient Boosting citations verified (Friedman 2001, Hastie/Tibshirani/Friedman Kap. 10).

**QA history:** Multiple rounds. Round 1 (text-only, 14 slides): 9/14 had overflow/footer-collision, fixed by splitting into more slides (14→20). Round 2: 18/20 clean, 2 residual footer collisions fixed directly. Round 3 (after adding diagrams + tree-algorithm expansion, 20→23 slides): all 5 new diagrams initially failed to render at all — root cause was a static `<img src="/....svg">` binding, which breaks Vite's `server.fs.allow` for files directly in `public/` (a previously-documented gotcha, see narrative-thread.md re: the tool-logo SVGs — the content-transformer agent missed it this time). Fixed by switching to `<img :src="'/....svg'">` (dynamic binding) on all 5. Round 4: diagrams rendered but 4 of 5 diagram slides + the Literaturverzeichnis appendix slide still overflowed (too much text+diagram+citation stacked per slide). Fixed by trimming text and shrinking diagram `max-height` on the 4 slides, and by reworking `theme-fom/components/Literaturverzeichnis.vue`'s CSS (5-column `column-fill: balance` layout, no `max-height` — an explicit `max-height` on a CSS multi-column container causes horizontal overflow instead of fixing vertical overflow, learned the hard way). Round 5 (final): both remaining slides confirmed clean.

**Git recovery note (2026-08-23):** After this chapter was fully authored and QA'd, an external `git reset --hard` on `main` (outside this session, to `origin/main`'s state) deleted the feature branch this work lived on and reset the working tree to a commit predating both the Kapitel-terminology rename and the Kapitel-1 exercise slide. Both were still reachable as dangling commits and were recovered: checked out a fresh branch from the last-good commit (`669a0b2`), then spliced the already-authored Kapitel-4 block (renamed from its accidental "Session 4" heading, since it had been built on the pre-rename base) back in at the correct anchor point ("Von der Infrastruktur zum Modell" bridge slide), replacing the leftover unused Slidev boilerplate. The 5 SVG diagrams survived untouched (they were untracked files, unaffected by the reset). Re-verified visually after the splice — no regressions.

**Source assessment (2026-08-23):** `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/ml.md` (prior course run) covered Train/Val-Split, metrics, KNN, Random Forest well conceptually but used a different foreign case per slide (Spam, Katze/Hund, Kreditkarten-Betrug, Krebs/Tumor) and had no diagrams reused (new ones were custom-built instead) — every example was rewritten onto the Kfz-Versicherer Betrugserkennung case (1.000-Testfälle Confusion Matrix, KNN/Baum/Ensemble-Beispiele auf Schadenfällen) for dataset continuity. Gradient Boosting was added beyond the original TODO scope (user request, 2026-08-23) since Decision Trees → Random Forest → Gradient Boosting forms a natural bagging-vs-boosting progression. See narrative-thread.md §13/§15 for full source assessment and build log.

**Not done:** No dedicated Kapitel-4 exercise worksheet+solution was authored yet (only the in-deck exercise slide "💻 Übung — Betrugserkennung klassifizieren" pointing at Confusion-Matrix/KNN tasks) — see §7, still open.

## 3. Kapitel 5 — Unsupervised / Clustering
- [ ] Clusteranalyse-Prozess
- [ ] Algorithmen: K-Means, Agglomerativ, BIRCH, DBSCAN, Spectral, Mean Shift, Gaussian Mixture
- [ ] WCSS & Elbow Method

Case: Kunden-/Versichertensegmentierung.

**Source assessment (2026-08-23):** `ml.md` only partially covers this — K-Means and DBSCAN are solid and reusable, but BIRCH (named explicitly in the Modulbeschreibung!), Agglomerativ, Spectral, Gaussian Mixture, and WCSS/Elbow are entirely missing and need fresh research (`edu-research`).

## 4. Kapitel 6 — Deep Learning
- [ ] ML vs. DL (Architektur, Datenbedarf, Rechenaufwand)
- [ ] Batch / Epoch
- [ ] Aktivierungsfunktionen (Sigmoid, ReLU, Tanh, Softmax)
- [ ] Neuronales Netz spezifizieren (**PyTorch**, not Keras/Sequential — corrected 2026-08-23, from user)
- [ ] MNIST-Ziffernerkennung als Zusatzbeispiel (2026-08-23, from user: covers the Handschrifterkennung item from §8 alongside the Kfz-Schadensfotos case, not instead of it)

Case: Kfz-Schadensfotos (primary) + MNIST (secondary/classic-example).

**Source assessment (2026-08-23):** `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/dl.md` covers "ML vs. DL" and "Batch/Epoch" well and reusably. Gaps: **Softmax is entirely missing** (needs fresh research), and all code is **PyTorch**, not Keras — user decided (2026-08-23) to keep PyTorch rather than force Keras, so `dl.md`'s code style is directly usable as a base after case-rewrite. Sigmoid stays in scope despite being supplanted by ReLU in hidden layers — it's the deliberate callback to Kapitel 1's logistic-regression sigmoid formula. `dl.md` also covers far more than this chapter's budget allows (full optimizer zoo, full CNN theory, Transfer Learning) — treat the overflow as a candidate for Kapitel 8–10, not for Kapitel 6 itself. `dl.md`'s MNIST CNN code (PyTorch) is a usable base for the new Handschrifterkennung example. See narrative-thread.md for full agent report.

## 5. Kapitel 7 — NLP
- [ ] Transformer (Multi-Head Attention, Sequenzverarbeitung)
- [ ] NLP-Grundlagen (Tokenisierung, Morphologie, Syntax, Semantik, Diskurs)
- [ ] Sentimentanalyse

Case: Freitext aus Schadensmeldungen / Kundenbewertungen.

## 6. Kapitel 8–10 — Vertiefungen
- [ ] Maximum-Likelihood-Methode
- [ ] Faktorenanalyse
- [ ] Eigenwerte

## 7. Exercises
Chapter budget calls for a 30–60 min interactive exercise per chapter. Only one
placeholder existed originally (after Python-Vertiefung); most chapters now have one
in-deck.
- [x] Exercise placeholder — after Python-Vertiefung (§11)
- [x] Exercise — Kapitel 1 (Statistik & Regression) — pen-and-paper worksheet (not a notebook: Kapitel 1 is explicitly hand-calculation, code comes in Kapitel 2), lives in the sibling `exercise` repo at `exercise/session-1/00-statistik/uebung.md` + `loesung.md` (not in this repo — kept alongside the Kapitel-1 Python-Vertiefung notebooks in `01-python-vertiefung/`; note the sibling repo's own folder naming still says "session-1", untouched by this rename — see the terminology note at the top of this file), wired into slides.md as a `header-cols` exercise slide before the Kapitel-2 chapter divider
- [x] Exercise — Kapitel 3 (Tools & Workflows) — decided against (2026-08-23, from user): not in the original budget, no dedicated exercise needed
- [ ] Exercise — Kapitel 4 (Supervised ML) — in-deck exercise slide exists ("💻 Übung — Betrugserkennung klassifizieren": Confusion-Matrix/Metriken von Hand + KNN-Klassifikation von Hand), but no worksheet+solution authored yet in the `exercise` repo (unlike Kapitel 1's `exercise/session-1/00-statistik/`) — would go in `exercise/session-4/` (or renamed to match whatever convention is picked once the sibling repo's own folder naming gets revisited)
- [ ] Exercise — Kapitel 5 (Unsupervised / Clustering)
- [ ] Exercise — Kapitel 6 (Deep Learning)
- [ ] Exercise — Kapitel 7 (NLP)
- [ ] Exercise — Kapitel 8–10 (Vertiefungen)

## 8. Curriculum literal-example coverage
The Modulbeschreibung names *Handschrifterkennung* and *Objekt-/Gesichtserkennung*
under "Weitere Anwendungsbeispiele." The narrative thread deliberately substitutes
Kfz-Schadensfotos as the on-theme DL example instead.

**Decided (2026-08-23, from user):** Handschrifterkennung (MNIST) added as a secondary
example in Kapitel 6, alongside — not instead of — Kfz-Schadensfotos (see §4). Basis:
`dl.md` already has working MNIST/CNN code to adapt. Objekt-/Gesichtserkennung remains
undecided — no source material found for it yet; still open if it needs literal coverage
or if Kfz-Schadensfotos (itself a form of object/damage recognition) satisfies the item.

---

*Update this file as items are completed or as `narrative-thread.md`'s plan changes.
Keep it in sync with §6 (progress log) there — this file is a flat todo view, not a
replacement for the narrative thread's sequencing/rationale detail.*
