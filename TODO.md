# Open TODOs — AI Business Intelligence Deck

> Tracks content still missing from `slides.md`, derived from a gap analysis of
> `skript.md`, `vorlage_skript.md`, `narrative-thread.md`, and
> `Modul-AI-Business-Intelligence.md` (2026-08-19). Cross-check `narrative-thread.md`
> §3 (prerequisite chain) and §6 (progress log) before starting any item — that file
> is the source of truth for sequencing and stays authoritative if this list and it
> ever disagree.

**Current state:** Session 1 (Statistik & Regression) and the Python-Vertiefung arc
(§11.0 + 11a–11e, 33 slides) are complete and approved. The deck then falls into
unused Slidev template/demo slides — nothing past that point is real content yet.

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

## 2. Rest of Session 2 — Supervised ML (narrative-thread's own "next up")
- [ ] Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split)
- [ ] Metriken: Accuracy, Precision, Recall, F1-Score
- [ ] Algorithmen: Random Forest, KNN

## 3. Session 3 — Unsupervised / Clustering
- [ ] Clusteranalyse-Prozess
- [ ] Algorithmen: K-Means, Agglomerativ, BIRCH, DBSCAN, Spectral, Mean Shift, Gaussian Mixture
- [ ] WCSS & Elbow Method

Case: Kunden-/Versichertensegmentierung.

## 4. Session 4 — Deep Learning
- [ ] ML vs. DL (Architektur, Datenbedarf, Rechenaufwand)
- [ ] Batch / Epoch
- [ ] Aktivierungsfunktionen (Sigmoid, ReLU, Tanh, Softmax)
- [ ] Neuronales Netz spezifizieren (Keras/Sequential)

Case: Kfz-Schadensfotos.

## 5. Session 5 — NLP
- [ ] Transformer (Multi-Head Attention, Sequenzverarbeitung)
- [ ] NLP-Grundlagen (Tokenisierung, Morphologie, Syntax, Semantik, Diskurs)
- [ ] Sentimentanalyse

Case: Freitext aus Schadensmeldungen / Kundenbewertungen.

## 6. Sessions 6–8 — Vertiefungen
- [ ] Maximum-Likelihood-Methode
- [ ] Faktorenanalyse
- [ ] Eigenwerte

## 7. Exercises
Session budget calls for a 30–60 min interactive exercise per session. Only one
placeholder exists so far (after Python-Vertiefung).
- [x] Exercise placeholder — after Python-Vertiefung (§11)
- [ ] Exercise — Session 1 (Statistik & Regression)
- [ ] Exercise — Session 3 (Unsupervised / Clustering)
- [ ] Exercise — Session 4 (Deep Learning)
- [ ] Exercise — Session 5 (NLP)
- [ ] Exercise — Sessions 6–8 (Vertiefungen)

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
