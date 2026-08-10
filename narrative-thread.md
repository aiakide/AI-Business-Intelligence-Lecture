# Narrative Thread (Roter Faden) — AI in Business Intelligence

**This file is the single source of truth for the deck's coherence.** Every agent
reads it before touching a slide, and the `lecture-content-planner` updates it after
every accepted concept cluster. Do not author a slide that ignores this thread.

---

## 1. The meta-thread (runs through all 8 sessions)

The through-line is **not** a single company — it is the **data-driven decision
lifecycle**:

> **Problem → Daten → Methode → Modell → Bewertung → Entscheidung**

Every session is framed as: *"Wir stoßen auf ein neues Problem, das die bisherige
Werkzeugkiste nicht lösen kann — deshalb brauchen wir die nächste Methode."*
Each new technique must be introduced as the answer to a limitation of the previous one.

## 2. Home-base domain + purpose-fit cases

We keep continuity with **one recurring anchor domain (a mid-size insurer)** for the
topics where it is genuinely the right motivation, and switch to the **best-fit case**
exactly when the method demands it — and we make that switch itself a teaching moment.

| Curriculum phase | Case (motivation) | Why this case is honest |
|---|---|---|
| Statistik & Regression | **Insurer** — Schadenshöhe vorhersagen (lineare Regression), Ausfall-/Betrugswahrscheinlichkeit (logistische Regression) | Tabellarische Vorhersage ist genau die Stärke — natürlicher Fit |
| Supervised ML | **Insurer** — Betrugserkennung als Klassifikation (Random Forest, KNN) | Gelabelte tabellarische Klassifikation, echter Use Case |
| Unsupervised / Clustering | **Kunden-/Versichertensegmentierung** (Verhaltensgruppen ohne Labels) | Clustering motiviert sich über *unbekannte* Segmente — Segmentierung ist das Lehrbuchbeispiel. Bonus-Brücke: Clustering-für-Anomalien führt zurück zur Betrugserkennung |
| Deep Learning | **Kfz-Schadensfotos** — Schadenshöhe/Schadensart aus Unfallbildern (Computer Vision) | DL glänzt bei *unstrukturierten* Daten (Bildern). Versicherer nutzen CV real für Schadenfotos → schließt den Kreis zum Anker |
| NLP / Sentiment | **Freitext aus Schadensmeldungen / Kundenbewertungen** | Text → NLP; bleibt am Versicherer-Kontext |

**Home base = der Versicherer.** Segmentierung und Bildanalyse leihen sich das
passendste Framing, kehren aber über Versicherten-Segmente bzw. Kfz-Schadensfotos
zum Versicherer zurück. So bleibt der Faden erhalten, ohne einen Use Case zu erzwingen.

## 3. Prerequisite chain (teach in this order)

### Full expanded chain (updated 2026-08-10 after vorlage gap analysis)

```
[Session 0 / S1-Intro]
  Python Basics (Syntax, Datenstrukturen, Jupyter) →
  Python Libraries (NumPy, Pandas, Matplotlib, Scikit-Learn overview) →
  CRISP-DM (Prozessrahmen) →

[Session 1 — Statistik & Regression]
  Data Mining vs. Data Crawling (Begriffsdefinitionen) →
  Stichprobe & Grundgesamtheit →
  Konfidenzniveau & Konfidenzintervall (inkl. Fehlermarge) →
  Lagemaße (Modus / Median / Mittelwert) →
  Varianz & Standardabweichung →
  Kovarianz (explizit, als Brücke zu Korrelation) →
  Korrelation (Pearson r) →
  z-Transformation →
  Lineare Regression →
  Logistische Regression (+ Logit / Odds Ratio) →
  Interaktionseffekte →
  Bootstrapping →
  Signifikanz →

[Session 2 — Supervised ML]
  Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) →
  Metriken: Accuracy, Precision, Recall, F1-Score →
  Supervised ML Algorithmen: Random Forest, KNN →

[Session 3 — Unsupervised / Clustering]
  Clusteranalyse Prozess →
  Algorithmen: K-Means, Agglomerativ, BIRCH, DBSCAN, Spectral, Mean Shift, Gaussian Mixture →
  WCSS & Elbow Method →

[Session 4 — Deep Learning]
  ML vs. DL (Architektur, Datenbedarf, Rechenaufwand) →
  Batch / Epoch →
  Aktivierungsfunktionen (Sigmoid, ReLU, Tanh, Softmax) →
  Neuronales Netz spezifizieren (Keras/Sequential) →

[Session 5 — NLP]
  Transformer (Multi-Head Attention, Sequenzverarbeitung) →
  NLP Grundlagen (Tokenisierung, Morphologie, Syntaxanalyse, Semantik, Diskurs) →
  Sentimentanalyse →

[Sessions 6–8 — Vertiefungen]
  Maximum-Likelihood-Methode →
  Faktorenanalyse →
  Eigenwerte →
```

**Hard rule:** Never introduce a concept before its prerequisites (e.g. no DL-Gewichte
vor Regression, keine Metriken vor Train/Val-Split, kein Konfidenzintervall vor
Stichprobe/Grundgesamtheit). Flag violations immediately.

**Identified prerequisite gap (2026-08-10):** The Python/Tools block (vorlage slides
9–25) has NO coverage in our current deck and is not yet in our session plan. It must
be scheduled — either as a dedicated early Session 1 cluster, or as a standalone
"Session 0 / Tools" session inserted before the Statistik content. See Gap Analysis
notes in section 7 below.

## 4. Shared assets

- **Glossary:** reuse `glossar.md` from the prior deck (see AGENTS.md → "Existing prior
  slides"). Define each term once; use it consistently everywhere after.
- **Prior finished pages:** `session0-foundations.md`, `ml.md`, `dl.md` — reuse/adapt
  rather than re-authoring.

## 5. Session budget & exercises

Each session is **~3h 15m (195 min)** — our teaching-plan decision (the module itself is
5 ECTS / 125 ZStd self-study, no fixed session grid). **Reserve 30–60 min per session for
an interactive, hands-on exercise** (content planned later — leave a placeholder). Pace
**slide content to ~135–165 min per session**; do not over-author to fill the full 195 min.

| Session | Topic focus | Slide budget | Exercise (TBD) |
|---|---|---|---|
| 1 | Data Science Intro + Python/Tools + CRISP-DM + Statistik Grundlagen (Stichprobe, Konfidenz, Lagemaße, Streuung, Kovarianz, Korrelation) | ~135–165 min | ⬜ 30–60 min placeholder |
| 2 | Statistik Abschluss (z-Transform, lineare + logist. Regression, Signifikanz, Bootstrapping) + Supervised ML Einstieg | ~135–165 min | ⬜ 30–60 min placeholder |
| 3 | Supervised ML (Metriken, Train/Val-Split, Random Forest, KNN) + Unsupervised / Clustering (Segmentierung) | ~135–165 min | ⬜ 30–60 min placeholder |
| 4 | Deep Learning (Kfz-Schadensfotos) — Architektur, Batch/Epoch, Aktivierungsfunktionen | ~135–165 min | ⬜ 30–60 min placeholder |
| 5 | NLP / Sentiment (Schadenstexte) — Transformer, NLP Grundlagen, Sentimentanalyse | ~135–165 min | ⬜ 30–60 min placeholder |
| 6–8 | Vertiefungen (Maximum-Likelihood, WCSS/Elbow, Faktorenanalyse, Eigenwerte) / Prüfungsvorbereitung | ~135–165 min | ⬜ 30–60 min placeholder |

*(Session→topic mapping is provisional; the planner refines it. The exercise column stays
a placeholder until exercises are designed.)*

---

## 6. Progress log (planner updates this after each accepted cluster)

| # | Cluster / topic | Session | Case used | Status | Loops used |
|---|---|---|---|---|---|
| — | Intro (cover, bio, Lernziele) | 0 | — | ✅ ported | — |
| 1 | Ausgangslage & Roter Faden (Motivation: Versicherer-Problem, Decision-Lifecycle, "Warum Statistik zuerst?") — slides 4–8 | 1 | Versicherer (home base) | ✅ approved | 2 |
| 2a | Lagemaße: Was ist typisch? (Modus/Median/Mittelwert als KaTeX-Formel, Rechtsschiefe, Excalidraw-Zahlengerade, Entscheidungsregel) — 6 slides after Cluster 1 | 1 | Versicherer (home base) | ✅ approved (3 loops + user visual polish) | 3 |
| 2b | Streuung & Korrelation: Wie verlässlich ist das? (Varianz/Standardabweichung KaTeX, Portfolio-Hook, Pearson r, Eis/Ertrinkende, Synthese + Regression-Brücke) — 4 slides after Cluster 2a | 1 | Versicherer (home base) | ✅ authored | 1 |
| | *(next: Kovarianz explizit → z-Transformation → Lineare Regression — von der Korrelation zum Modell)* | 1 | Versicherer | ⬜ next | |

---

## 7. Gap analysis log (2026-08-10 — vorlage_skript.md vs. slides.md)

This section records the findings from the first systematic gap analysis.
Do not delete this log; it is the audit trail for why certain clusters were inserted.

### 7a. Session 1 gaps — topics skipped between "Warum Statistik?" and Lagemaße

The vorlage sequences (slides 26–34): Statistik header → Data Mining/Crawling →
Stichprobe/Grundgesamtheit → Konfidenzniveau/-intervall → Fehlermarge →
[Lagemaße]. Our deck jumped directly to Lagemaße, skipping four topics:

| Gap | Vorlage slide | Priority | Sequence position in our deck |
|---|---|---|---|
| Data Mining vs. Data Crawling | 27 | 🟡 Medium | Insert before Lagemaße (after Roter-Faden cluster); 1-slide cluster |
| Stichprobe & Grundgesamtheit | 28 | 🔴 High | Insert BEFORE Lagemaße — all statistical claims require this foundation |
| Konfidenzniveau & Konfidenzintervall (inkl. Fehlermarge) | 29–30 | 🔴 High | Insert AFTER Stichprobe, BEFORE Lagemaße; 2-slide cluster |
| Kovarianz (explizit, standalone) | 36 | 🔴 High | Insert BETWEEN Varianz/Std and Pearson r (inside or appended to Cluster 2b) |

**Rationale for "High" priority:**
- Stichprobe/Grundgesamtheit: Every claim we make ("6 Schadenwerte", "Portfolio A")
  is implicitly a sample statistic. Students have no frame for uncertainty without this.
- Konfidenzintervall: The Versicherer case is about probabilistic estimates (Prämie,
  Betrugswahrscheinlichkeit). A confidence interval is the mathematical expression of
  that uncertainty. Also anchors the Bootstrapping cluster later.
- Kovarianz: Pearson r is normalized covariance. Without seeing Cov(X,Y) first,
  the r formula is opaque. This is a 1-slide insertion, not a new cluster.

### 7b. Entirely unplanned chapters (not in thread, not in deck)

The Python/Tools chapter (vorlage slides 9–25) is **completely absent** from both the
deck and the prerequisite chain. This covers:
- Python Basics: syntax, interpreted/OO nature, platform independence (slides 10–11)
- Datenstrukturen: Liste, Tupel, Dictionary, Sets, Array, DataFrame, Stack (slides 12–13)
- Jupyter Notebooks (slide 15)
- Docker (slide 16)
- Kubernetes (slide 17)
- GitHub (slide 18)
- CRISP-DM (slide 19) — mentioned in passing on our slide 8 but never delivered
- Python Libraries: NumPy, Pandas, Scikit-Learn, Matplotlib (slides 22–25)

**Action required:** Schedule this as a dedicated cluster in Session 1
(or as a pre-Session "Session 0 / Tooling" block). Note: the prior deck at
`/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/session0-foundations.md`
covers some BI/AI foundations but NOT the Python basics — those need authoring.
Check `ml.md` and `dl.md` in the prior deck for Scikit-Learn/PyTorch context.

### 7c. Transition fix pattern (applied going forward)

**Problem:** Cluster-to-cluster bridges exist ONLY as invisible presenter-note
comments (`<!-- Gesprochene Brücke: ... -->`). Two locations identified:
1. slides.md line 294–296 — after Lagemaße, before Streuung cluster
2. slides.md line 444–461 — after Streuung/Korrelation, before Regression (partially
   visible but buried in body text)

**Fix pattern — "Bisher / Jetzt / Als Nächstes" micro-bar:**
Apply a 3-token footer strip on the **synthesis slide** (last slide of every cluster).
Implemented as a `<div class="transition-bar">` inside the existing slide layout.
CSS goes in theme-fom/styles/layouts.css OR as a `<style>` scoped block.

```html
<div class="transition-bar">
  <span class="done">✓ Bisher: [vorheriges Thema]</span>
  <span class="now">→ Jetzt: [aktuelles Thema]</span>
  <span class="next">⬜ Als Nächstes: [nächstes Thema]</span>
</div>
```

```css
.transition-bar {
  display: flex; gap: 1.5rem; font-size: 0.72em;
  border-top: 2px solid var(--slidev-theme-primary);
  padding-top: 0.5rem; margin-top: 1rem; opacity: 0.75;
}
.transition-bar .done { color: #888; text-decoration: line-through; }
.transition-bar .now  { color: var(--slidev-theme-primary); font-weight: 700; }
.transition-bar .next { opacity: 0.55; }
```

**Retroactive application targets:**
- slides.md ~line 284 ("Dasselbe Prinzip, andere Branche" statement slide) →
  replace `<!-- Gesprochene Brücke -->` note with visible micro-bar
- slides.md ~line 444 ("Die deskriptive Werkzeugkiste ist komplett") →
  promote bridge prose into blockquote + add micro-bar for Regression

**Rule going forward:** Every synthesis/closing slide of a cluster gets the micro-bar.
Content slides mid-cluster do NOT get it. One bar per cluster boundary only.
