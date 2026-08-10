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
| **1b** | **[GAP-INSERT] Data Mining / Crawling + Stichprobe & Grundgesamtheit + Konfidenzintervall & Fehlermarge — 4 slides, inserts BETWEEN slides "Warum beginnen wir mit Statistik?" and "Der Mittelwert lügt"** | 1 | Versicherer (home base) | 🔵 planning | — |
| | *(next after 1b: Kovarianz explizit → z-Transformation → Lineare Regression — von der Korrelation zum Modell)* | 1 | Versicherer | ⬜ queued | |

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

### 7c. Transition fix pattern (revised 2026-08-10 — content-driven, not a UI widget)

**Problem:** Cluster-to-cluster bridges exist ONLY as invisible presenter-note
comments (`<!-- Gesprochene Brücke: ... -->`) in some places, never visible to students.

**Rejected approach:** A literal "✓ Bisher / → Jetzt / ○ Als Nächstes" status-bar
widget was tried and explicitly rejected by the user: *"Der Übergang sollte sich aus
den Slide-Inhalten ergeben"* — the bridge must emerge from the content itself, not a
meta-label bolted onto the slide.

**Correct fix — the transition IS the closing sentence/synthesis, not a separate element:**
Every cluster's closing slide should already end with a sentence that (a) names what
was just established and (b) poses the open question the next cluster answers. This is
authored prose, not a UI component. Example (applied to the Lagemaße→Streuung boundary):

> *"Der Mittelwert (21.800 €) und der Median (2.000 €) erzählen unterschiedliche
> Geschichten — beide sind aber nur die 'Mitte'. Wie weit die Werte um diese Mitte
> streuen, verrät uns noch nichts. Das klären wir jetzt."*

This does the same job (signals done → next) but reads as part of the narrative, not
as a dashboard. No new CSS class, no extra markup — just craft the last 1-2 sentences
of every closing slide to open the door to the next topic.

**Rule going forward:** Every cluster's synthesis slide ends with a content sentence
that bridges to the next cluster. `slidev-content-transformer` and `edu-research`
should treat this as a writing requirement, not a layout requirement. Do NOT
reintroduce a `transition-bar`-style widget.

---

## 8. Cluster 1b — Insertion Plan (2026-08-10)

**Cluster title:** *Daten, Stichproben & Unsicherheit — die statistische Sprache des Versicherers*

**Status:** 🔵 Planning — awaiting edu-research citations, then → slidev-content-transformer

**Insertion point:** Between slides "Warum beginnen wir mit Statistik?" (slides.md ~line 191)
and "Der Mittelwert lügt" (slides.md ~line 192, layout: fact).

**Slide count:** 4 slides total.

**Prerequisite chain position:**
```
[Cluster 1 — Ausgangslage & Roter Faden]  ← already authored
  ↓ NEW INSERTION POINT
  [Slide 1b-1: Data Mining vs. Data Crawling]
  [Slide 1b-2: Stichprobe & Grundgesamtheit]
  [Slide 1b-3: Konfidenzintervall & Konfidenzniveau]
  [Slide 1b-4: Fehlermarge + Synthese (closing sentence bridges to Lagemaße)]
  ↓
[Cluster 2a — Lagemaße]  ← already authored (retroactively justified by 1b)
```

---

### Slide 1b-1 — Data Mining vs. Data Crawling

**Layout:** `header-cols`
*(two named concepts of equal weight — left: Data Mining / right: Data Crawling;
heading spans the top; illustration optional but not required)*

**Content density:** ≤ 4 bullets per column — keep deliberately light (vorlage: 1 slide,
gap analysis priority: Medium). No KaTeX needed.

#### 4-Tier Structure

| Tier | Content |
|---|---|
| **Hook** | Als Versicherer hast Du 400.000 Verträge und externe Daten (Wetterdaten, Werkstattdaten, öffentliche Schadensregister). Woher kommen diese Daten überhaupt — und was macht man damit? |
| **Foundation** | **Data Mining**: algorithmisches Aufdecken von Mustern in *bereits vorhandenen* Datensätzen (z. B. interne Vertragsdaten). Suche nach verborgenen Strukturen. **Data Crawling**: automatisiertes Extrahieren von Daten aus *externen* Quellen (z. B. Webseiten, APIs, öffentliche Register). Beschaffungsprozess, keine Analyse. Kernunterschied: Mining = *analysieren*, Crawling = *beschaffen*. |
| **Application** | Mining: Du analysierst die 400.000 Verträge algorithmisch auf Betrugsmuster. Crawling: Du lädst automatisch aktuelle Wetterdaten von einer API, um Naturschadenwahrscheinlichkeiten anzureichern. |
| **Synthesis** | Beide Konzepte sind Vorstufen zu allem, was folgt: erst Daten beschaffen (Crawling), dann Muster finden (Mining) — der CRISP-DM-Prozess beginnt genau hier. |

**Transition-bar:** ❌ NOT on this slide (mid-cluster). Transition-bar only on 1b-4.

---

### Slide 1b-2 — Stichprobe & Grundgesamtheit

**Layout:** `header-cols`
*(two concepts again; left: Grundgesamtheit — right: Stichprobe; heading spans top;
consider a small visual stat — e.g. 400.000 → 6 items — as inline callout on right side
rather than a full illustration, to save space for explanatory bullets)*

**Content density:** ≤ 5 bullets total across both columns.

#### 4-Tier Structure

| Tier | Content |
|---|---|
| **Hook** | Du hast 400.000 Verträge — aber Du analysierst gerade 6 Schadenshöhen. Warum sollte das irgendetwas über alle 400.000 aussagen? Und wann darf man das überhaupt behaupten? |
| **Foundation** | **Grundgesamtheit (N)**: alle relevanten Objekte, über die eine Aussage gemacht werden soll. Hier: alle 400.000 Versicherungsverträge. **Stichprobe (n)**: eine repräsentative Teilmenge der Grundgesamtheit, die tatsächlich erhoben wird. Hier: die 6 Schäden aus Cluster 2a. Kernregel: Stichprobenstatistiken (z.B. Mittelwert $\bar{x}$) sind *Schätzungen* für den wahren Populationsparameter (z. B. $\mu$) — nie identisch, aber bei guter Stichprobenziehung *nah genug*. |
| **Application** | Die 6 Schadenshöhen (800, 1.100, 1.100, 1.400, 2.200, 38.000 EUR) — das waren eine Stichprobe. Die Grundgesamtheit ist das komplette Portfolio. Der Mittelwert von EUR 7.433 ist eine *Stichprobenschätzung* des wahren Portfoliomittels μ — nicht μ selbst. |
| **Synthesis** | Diese Unterscheidung ist ab sofort dauerhaft relevant: Jede Kennzahl, die wir berechnen (Modus, Median, Varianz, Korrelationskoeffizient) ist eine Stichprobenstatistik. Das führt unmittelbar zur nächsten Frage: Wie sicher ist diese Schätzung? → Konfidenzintervall. |

**Notation note for transformer:** Use $n$ for Stichprobengröße, $N$ für Grundgesamtheit,
$\bar{x}$ für Stichprobenmittel, $\mu$ für Populationsmittel. Keep KaTeX minimal — inline
only, no display-mode blocks needed here.

**Transition-bar:** ❌ NOT on this slide (mid-cluster).

---

### Slide 1b-3 — Konfidenzintervall & Konfidenzniveau

**Layout:** `default`
*(single-column narrative layout: the concept is sequential — first explain Konfidenzniveau,
then derive Konfidenzintervall from it — a two-column split would break this logical flow.
Optionally: a narrow KaTeX formula block centred below the prose, followed by a callout box.)*

**Content density:** 4–5 prose bullets + 1 formula line + 1 highlighted callout.
No overflow risk with default layout at this density.

#### 4-Tier Structure

| Tier | Content |
|---|---|
| **Hook** | Der Versicherer schätzt: "Die durchschnittliche Schadenshöhe in unserem Portfolio liegt bei ca. EUR 5.000." Aber wie sicher ist das — und was bedeutet "ca."? Ist ein Punkt-Schätzwert (eine einzelne Zahl) überhaupt ausreichend für eine Prämien-Entscheidung über 400.000 Verträge? |
| **Foundation** | **Konfidenzniveau (1−α)**: die Wahrscheinlichkeit, mit der das berechnete Intervall den wahren Populationsparameter enthält. Typisch: 95 % (α = 0,05). Bedeutet: Wenn Du dieselbe Stichprobe 100× ziehst und jedes Mal ein Intervall berechnest, enthalten 95 dieser Intervalle den wahren Wert μ. **Konfidenzintervall**: das resultierende Intervall $[\bar{x} - E,\; \bar{x} + E]$, wobei $E$ die Fehlermarge ist. Wichtige Klarstellung: Das Konfidenzintervall ist KEINE Aussage über die Wahrscheinlichkeit, dass μ *in diesem spezifischen Intervall* liegt — μ ist fix, das Intervall ist zufällig. |
| **Application** | Versicherer-Beispiel: Stichprobenmittel $\bar{x}$ = EUR 5.200, 95%-Konfidenzintervall = [EUR 4.100, EUR 6.300]. Bedeutung: "Wir sind zu 95% sicher, dass die mittlere Schadenshöhe im Portfolio zwischen EUR 4.100 und EUR 6.300 liegt." Die Prämie wird auf Basis dieses Intervalls kalkuliert — nicht eines Punktwertes. |
| **Synthesis** | Jede probabilistische Aussage im Versicherungswesen (Betrugswahrscheinlichkeit, Schadenserwartung) ist eine Intervallschätzung mit einem zugehörigen Konfidenzniveau. Das Konfidenzintervall ist auch die Grundlage für **Bootstrapping** (Session 2) — dort erzeugen wir KIs ohne Normalverteilungsannahme. |

**KaTeX block for transformer:**
$$\bar{x} \pm E = \bar{x} \pm z_{\alpha/2} \cdot \frac{s}{\sqrt{n}}$$
*(Keep this as a display block, briefly. Speaker notes explain: für Einsteiger reicht das
Verständnis des Intervall-Konzepts; die Formel zeigt, dass n im Nenner steht — mehr Daten
= kleineres Intervall = mehr Sicherheit.)*

**Transition-bar:** ❌ NOT on this slide (mid-cluster).

---

### Slide 1b-4 — Fehlermarge + Cluster-Synthese (Synthesis slide)

**Layout:** `default`
*(Gives room for the closing bridge sentence + citation without overflow risk —
`statement` has minimal vertical space for that much content.)*

**Content density:** 1 bold headline concept + 3–4 bullet points + closing bridge sentence + citation.

#### 4-Tier Structure

| Tier | Content |
|---|---|
| **Hook** | Das Konfidenzintervall hat eine Breite — und diese Breite hat einen Namen und drei Steuergrößen. |
| **Foundation** | **Fehlermarge E**: die halbe Intervallbreite; $E = z_{\alpha/2} \cdot \frac{s}{\sqrt{n}}$. Sie ist abhängig von: (1) **Konfidenzniveau** — 99% → größere Fehlermarge als 95%. (2) **Streuung (s)** — heterogenere Daten → größere Fehlermarge. (3) **Stichprobengröße (n)** — mehr Daten → kleinere Fehlermarge. Merksatz: Mehr Daten und weniger Streuung → engeres Intervall → sicherere Aussagen. |
| **Application** | Unser 6-Punkte-Sample (n=6) aus dem Portfolio (N=400.000) ergibt eine sehr breite Fehlermarge — das ist ehrlich: Mit 6 Datenpunkten kann man keine präzise Prämienkalkulation rechtfertigen. In der Praxis zieht der Versicherer Stichproben von n ≥ 300–1.000 je Risikogruppe. |
| **Synthesis** | **Was wir jetzt wissen:** Jede Statistik, die wir über unser Portfolio berechnen, ist eine Schätzung mit Unsicherheit. Lagemaße (Modus, Median, Mittelwert) sind die ersten dieser Schätzungen — und wir kennen jetzt den Rahmen, in dem sie zu interpretieren sind. → Transition-bar: Stichprobe & Konfidenz sind das Fundament. Jetzt legen wir die ersten Bausteine darauf: **Lagemaße**. |

**Transition-bar (required on this slide):**
```
✓ Bisher: Datenbeschaffung & statistische Sprache
→ Jetzt: Stichprobe, Konfidenzintervall, Fehlermarge
○ Als Nächstes: Lagemaße — Was ist typisch?
```

---

### Learning Goals (Cluster 1b — alle 4 Slides)

Nach diesem Cluster können Studierende:

1. **Data Mining und Data Crawling begrifflich unterscheiden** — und jedem Konzept
   einen konkreten Schritt im Datenbeschaffungs- bzw. Analyseprozess zuordnen.

2. **Stichprobe und Grundgesamtheit definieren** — und erklären, warum jede
   Statistik, die wir berechnen, eine Schätzung mit Unsicherheit ist (Stichproben-
   vs. Populationsparameter: $\bar{x}$ vs. $\mu$).

3. **Ein Konfidenzintervall lesen und interpretieren** — insbesondere die
   häufigste Fehldeutung vermeiden ("μ liegt zu 95% in diesem Intervall" vs.
   "95% der so berechneten Intervalle enthalten μ").

4. **Die drei Steuergrößen der Fehlermarge benennen** (Konfidenzniveau, Streuung,
   Stichprobengröße) und qualitativ erklären, in welche Richtung jede Stellschraube
   die Intervallbreite bewegt.

5. **Den Versicherer-Kontext herstellen**: Die 6 Schadenshöhen aus Cluster 2a
   retroaktiv als Stichprobe (n=6) aus der Grundgesamtheit (N=400.000) einordnen
   und bewerten, was das für die Verlässlichkeit der dort berechneten Lagemaße bedeutet.

---

### Citation requirements for edu-research (see Research Requisition Brief below)

Sources needed:
- **(a)** Data Mining vs. Data Crawling — business-analytics context, citable definition
- **(b)** Stichprobe / Grundgesamtheit — statistics textbook, insurance-relevant if possible
- **(c)** Konfidenzintervall / Konfidenzniveau / Fehlermarge — **NOT from Völkl & Korb**
  (their book "Deskriptive Statistik" covers only chapters: Einleitung / Variablen &
  Skalenniveaus / Univariate Analysen / Bivariate Analysen / Drittvariablenkontrolle /
  Schluss — **no chapter on confidence intervals**). Alternative verified source required.
  Candidate: Bortz & Schuster "Statistik für Human- und Sozialwissenschaftler",
  or Fahrmeir et al. "Statistik" (Springer), or similar German-language stats textbook.
  edu-research must verify DOI/chapter before citing.

---
