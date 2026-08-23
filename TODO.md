# Open TODOs — AI Business Intelligence Deck

> Tracks content still missing from `slides.md`, derived from a gap analysis of
> `skript.md`, `vorlage_skript.md`, `narrative-thread.md`, and
> `Modul-AI-Business-Intelligence.md` (2026-08-19). Cross-check `narrative-thread.md`
> §3 (prerequisite chain) and §6 (progress log) before starting any item — that file
> is the source of truth for sequencing and stays authoritative if this list and it
> ever disagree.

**Current state:** Session 1 (Statistik & Regression), Session 2 (Python-Vertiefung,
§11.0 + 11a–11e, 33 slides), and Session 3 (Tools & Workflows, §12) are complete and
approved, each now with its own `layout: chapter` session-opener slide. The deck then
falls into unused Slidev template/demo slides — nothing past that point is real
content yet.

**Session renumbering (2026-08-20/21, from user):** Python-Vertiefung and Tools &
Workflows each got their own `layout: chapter` session-opener slide (matching the
Session 1 style), promoting them to Session 2 and Session 3 respectively (previously
planned as sub-blocks "2a"/"2b" within Session 2 — see narrative-thread.md §12). Every
session from Supervised ML onward shifts by +2 versus older references in this file
and in narrative-thread.md's history: old Session 2 (Supervised ML) → **Session 4**,
old Session 3 (Clustering) → **Session 5**, old Session 4 (DL) → **Session 6**, old
Session 5 (NLP) → **Session 7**, old Sessions 6–8 (Vertiefungen) → **Sessions 8–10**.
Items below already use the new numbers; historical entries in narrative-thread.md's
dated log are left as-written (they're a record of what was true when written, not a
live spec) but flagged with a pointer to this correction where relevant.

**Known stale content (not fixed, flagged only):** the "📝 Orga & Erwartungen" slide
near the top of the deck still lists a generic four-session placeholder ("Session 1:
Einführung ML", "Session 2: Grundlagen DL", ...) that never matched the real structure,
even before this renumbering. Needs a real editorial pass once the full session
structure (through Session 10) is locked in — out of scope for this renumbering itself.

## 1. Tooling chapter (oldest open gap — flagged 2026-08-10, complete 2026-08-19)
- [x] Jupyter Notebooks — research → authoring → QA → done (placed *before* the Python-Vertiefung exercise)
- [x] Docker — research → authoring → QA → done (after the exercise)
- [x] Kubernetes — research → authoring → QA → done (after the exercise)
- [x] Git / GitHub — research → authoring → QA → done (after the exercise, split into 2 slides)
- [x] CRISP-DM (dedicated detail slides — 6 Phasen, Kreislauf, Versicherer-mapping ×2) — research → authoring → QA → done (after the exercise, split into 4 slides)

**Status:** All 12 content slides authored into `slides.md` and QA'd (visual + student-perspective, incl. a re-verification pass after fixing overflow on 4 slides). Uncommitted — ready to commit.

**Correction (2026-08-19):** notebooks will run in **Google Colab**, not locally — confirmed by user. Rewrote the Jupyter slide (mentions Colab explicitly), the exercise slide (CTA now says "Notebooks in Colab öffnen"), and the Docker slide's hook (no longer implies students run Jupyter on their own machine — reframed around Colab handling *your* environment vs. a team needing reproducibility across machines it doesn't control).

**Follow-up (not blocking commit):** the exercise slide references "sechs Jupyter Notebooks in Google Colab" but no `.ipynb` files exist in the repo yet, and there's no actual Colab link. Needs the notebooks actually authored (`didactic-notebook-architect`), hosted, and a real link added to the exercise slide.

Named explicitly in the Modulbeschreibung's "Methodische Grundlagen." Deliberately
deferred from §11 (Python-Vertiefung is code-literacy only, not tooling/process). Now scheduled as professional-workflows bridge.

## 2. Session 4 — Supervised ML (narrative-thread's own "next up")
- [ ] Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split)
- [ ] Metriken: Accuracy, Precision, Recall, F1-Score
- [ ] Algorithmen: Random Forest, KNN

## 3. Session 5 — Unsupervised / Clustering
- [ ] Clusteranalyse-Prozess
- [ ] Algorithmen: K-Means, Agglomerativ, BIRCH, DBSCAN, Spectral, Mean Shift, Gaussian Mixture
- [ ] WCSS & Elbow Method

Case: Kunden-/Versichertensegmentierung.

## 4. Session 6 — Deep Learning
- [ ] ML vs. DL (Architektur, Datenbedarf, Rechenaufwand)
- [ ] Batch / Epoch
- [ ] Aktivierungsfunktionen (Sigmoid, ReLU, Tanh, Softmax)
- [ ] Neuronales Netz spezifizieren (Keras/Sequential)

Case: Kfz-Schadensfotos.

## 5. Session 7 — NLP
- [ ] Transformer (Multi-Head Attention, Sequenzverarbeitung)
- [ ] NLP-Grundlagen (Tokenisierung, Morphologie, Syntax, Semantik, Diskurs)
- [ ] Sentimentanalyse

Case: Freitext aus Schadensmeldungen / Kundenbewertungen.

## 6. Sessions 8–10 — Vertiefungen
- [ ] Maximum-Likelihood-Methode
- [ ] Faktorenanalyse
- [ ] Eigenwerte

## 7. Exercises
Session budget calls for a 30–60 min interactive exercise per session. Only one
placeholder exists so far (after Python-Vertiefung).
- [x] Exercise placeholder — after Python-Vertiefung (§11)
- [x] Exercise — Session 1 (Statistik & Regression) — pen-and-paper worksheet (not a notebook: Kapitel 1 is explicitly hand-calculation, code comes in Kapitel 2), lives in the sibling `exercise` repo at `exercise/session-1/00-statistik/uebung.md` + `loesung.md` (not in this repo — kept alongside the Session-1 Python-Vertiefung notebooks in `01-python-vertiefung/`), wired into slides.md as a `header-cols` exercise slide before the Kapitel-2 chapter divider
- [ ] Exercise — Session 3 (Tools & Workflows) — not in the original session budget, consider whether one is warranted
- [ ] Exercise — Session 5 (Unsupervised / Clustering)
- [ ] Exercise — Session 6 (Deep Learning)
- [ ] Exercise — Session 7 (NLP)
- [ ] Exercise — Sessions 8–10 (Vertiefungen)

## 8. Open decision — curriculum literal-example coverage
The Modulbeschreibung names *Handschrifterkennung* and *Objekt-/Gesichtserkennung*
under "Weitere Anwendungsbeispiele." The narrative thread deliberately substitutes
Kfz-Schadensfotos as the on-theme DL example instead. Reasonable pedagogical swap,
but flag for a conscious go/no-go: do we also want literal coverage of these two
named examples, or does the Kfz-Schadensfotos case fully satisfy the curriculum item?

---

*Update this file as items are completed or as `narrative-thread.md`'s plan changes.
Keep it in sync with §6 (progress log) there — this file is a flat todo view, not a
replacement for the narrative thread's sequencing/rationale detail.*
