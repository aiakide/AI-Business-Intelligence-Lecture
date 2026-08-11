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
| 2b | Streuung & Korrelation: Wie verlässlich ist das? (Varianz/Standardabweichung KaTeX, Portfolio-Hook, Pearson r, Eis/Ertrinkende, Synthese + Regression-Brücke) — 5 slides after Cluster 2a | 1 | Versicherer (home base) | ✅ approved (2 loops) | 2 |
| 1b | Daten, Stichproben & Unsicherheit (Data Mining vs. Crawling, Stichprobe/Grundgesamtheit, Konfidenzintervall/-niveau, Fehlermarge) — 4 slides inserted before Cluster 2a (Lagemaße) | 1 | Versicherer (home base) | ✅ approved (2 loops) | 2 |
| 2b-gap | Kovarianz — von einer zu zwei Variablen (Cov(X,Y) formula, sign interpretation, Fahrzeugalter/Reparaturkosten worked example, Skalenproblem → motiviert Pearson r) — 2 slides inserted between Varianz/Std and Korrelation in Cluster 2b | 1 | Versicherer (home base) | ✅ approved (2 loops) | 2 |
| 2c | z-Transformation & Lineare Regression (Standardisierung, Ŷ = a + bX, Bestimmtheitsmaß R²) — Kulminationspunkt des Statistik-Bogens; Brücke zu Session 2 ML — 8 Slides (z-Trafo Idee/Motivation, z-Trafo Formel/Anwendung, z-Trafo Beispiel, Regressionsgerade Idee/Formeln/Berechnung, R² Bestimmtheitsmaß/Unser Beispiel, R² in der Praxis) | 1 | Versicherer (Fahrzeugalter/Reparaturkosten — selbes Dataset aus Kovarianz-Cluster, jetzt Modell drübergelegt) | ✅ approved (2 loops + 1 follow-up polish pass) | 3 |
| 2d | Logistische Regression (+ Logit / Odds Ratio) — Überwindet die Grenzen der linearen Regression bei binären Zielgrößen (z.B. Betrug: Ja/Nein) — 4 Slides (Idee & Sigmoid, Anwendung, Logit & Odds Ratio, Odds Ratio Interpretation) | 1 | Versicherer (Betrugserkennung) | ✅ approved (1 loop + 1 follow-up polish pass) | 2 |
| 2e | Interaktionseffekte — Wenn der Effekt eines Merkmals vom Wert eines anderen abhängt (z.B. Schadenshäufigkeit nach Alter UND Geschlecht) — 4 Slides (Die Idee, Interpretation & Beispiel, Konkrete Interpretation, Grafische Interpretation mit Excalidraw-Diagramm) | 2 | Versicherer (Schadensanalyse) | ✅ approved (1 loop + 1 follow-up polish pass) | 2 |
| 2f | Bootstrapping — Robuste Schätzung von Parametern und Konfidenzintervallen ohne starke Annahmen über die Verteilungsform | 2 | Versicherer (kleine Stichproben, komplexe Verteilungen) | ✅ approved (1 loop) | 1 |
| 2g | Signifikanz — Entscheidungen unter Unsicherheit: Ist ein beobachteter Effekt "echt" oder Zufall? — 2 Slides (Die Frage, Ein Beispiel) | 2 | Versicherer (Tarifänderung, Betrugserkennung) | ✅ approved (1 loop + 1 follow-up polish pass) | 2 |
| — | *(next: Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) — Einstieg Session 2 Supervised ML; Python-Grundlagen-Gap noch offen, siehe 7b)* | 2 | Versicherer | ⬜ next | — |


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

**Outcome (2026-08-10):** Kovarianz ended up as **2 slides** (originally planned as 1 —
split after visual QA found the combined content overflowed by ~250px). Used a NEW
toy dataset (Fahrzeugalter/Reparaturkosten, 4 points) rather than the insurer's 6-claim
univariate dataset, since Kovarianz needs paired (X,Y) data. Citation: Völkl & Korb
(2017) Kap. 4 "Bivariate Analysen" — same DOI already used on the adjacent Korrelation
slide; the specific Kovarianz coverage inside the chapter could not be confirmed via
full-text search (paywalled), but this is the same confidence level already accepted
for that citation elsewhere in the cluster. Approved after 2 loops — fixes included
making the worked-example table show its deviation arithmetic (within the ≤4-column
guardrail, by combining both deviations into one column) and closing a unit-scaling
ambiguity in the EUR→Cent motivating example.

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

### 8a. Outcome (2026-08-10) — ✅ Implemented, 2 loops, APPROVED

Authored as 4 slides inserted between "Warum beginnen wir mit Statistik?" and "Der
Mittelwert lügt": Data Mining vs. Data Crawling → Stichprobe & Grundgesamtheit →
Konfidenzintervall & Konfidenzniveau → Fehlermarge. Final citations (all independently
DOI-verified, chapter titles/content confirmed against Springer's live ToC/abstract
pages, not guessed):

- **Data Mining**: Chan, Hogaboam & Cao (2022), Kap. 2 "Big Data Powering Business
  Intelligence" — DOI `10.1007/978-3-031-05740-3`. Honesty note: this is a reasonable
  but imperfect topical fit (book is organized by industry vertical, not by technical
  concept); "Data Crawling" is NOT attributed to this source — framed as common
  technical terminology instead.
- **Stichprobe & Grundgesamtheit** and **Konfidenzintervall/Fehlermarge**: Fahrmeir,
  Heumann et al. (2016), *Statistik — Der Weg zur Datenanalyse*, Kap. 9
  "Parameterschätzung" — DOI `10.1007/978-3-662-50372-0`. Verified via the chapter's
  official abstract ("Die Ziehung von Stichproben, die ein möglichst getreues Abbild
  der Grundgesamtheit wiedergeben...") — this single chapter correctly covers both
  sampling theory AND interval estimation, so all three slides cite it consistently.

**Two citation errors were caught and corrected before this was final:**
1. An initial research pass guessed Fahrmeir **Kap. 7** for confidence intervals —
   verification showed Kap. 7 is actually "Mehr über Zufallsvariablen und Verteilungen".
   The correct chapter is **Kap. 9** — confirmed by checking each chapter's title via
   its own DOI, not by assuming a textbook's standard structure.
2. Loop-1 student review caught that slide 10 (Stichprobe & Grundgesamtheit) initially
   cited Völkl & Korb Kap. 2 ("Variablen und Skalenniveaus") — topically wrong (that
   chapter is about measurement levels, not sampling). Fixed to Fahrmeir Kap. 9.

Loop 1 also produced 5 pedagogical fixes (misconception-callout restructure, formula/
example reordering, plain-language risk framing, two-beat closing paragraph, bridge-
sentence layout consistency) — all verified landed in loop 2. **APPROVED, no loop 3
needed.**

**Lesson reinforced:** never assume a textbook chapter number from "standard structure"
— always fetch the actual chapter DOI and check its real title/abstract before citing.

---

## 9. Transition Audit — Full Deck (2026-08-10)

**Trigger:** User feedback: *"Mir fehlt nach wie vor der inhaltliche Übergang zwischen den Slides"*
**Constraint:** NO UI widgets, badges, or visual bridge elements. Transitions must emerge from authored prose
in the existing slide content (closing sentence on slide N or opening sentence on slide N+1).
The retrofit on slide 14 ("Dasselbe Prinzip, andere Branche") is the reference pattern.

**Scope:** Slides 1–20 (real content slides). Slides 21–25 are demo placeholders (skip). Slides 26–27 are structural (skip).

### 9a. Session 1 chapter-opener title fix

**Current title (broken):** `# Session 1: [Business Intelligence]{style="color:var(--slidev-theme-primary)"} & Data Science`

**Corrected title (approved 2026-08-10):**
```
# Session 1: [Statistik]{style="color:var(--slidev-theme-primary)"} als Fundament
```

Rationale: Accurately reflects actual content (Lagemaße, Streuung, Korrelation, bridging to Regression).
The word "Fundament" preserves the BI framing (statistics IS the foundation of every ML/KI model in the module)
without misrepresenting the session as a generic "BI & Data Science" overview. Convention preserved:
highlighted keyword = the session's dominant topic.

### 9b. Transition verdict table

| # | Slide N | Slide N+1 | Verdict | Fix location |
|---|---|---|---|---|
| 1→2 | Cover | Bio | ✅ Smooth | — |
| 2→3 | Bio | Lernziele/Orga | ✅ Smooth | — |
| 3→4 | Lernziele/Orga | Chapter opener | ⚠️ Weak | End of slide 3 (right col, after last bullet) |
| 4→5 | Chapter opener | Ausgangslage | ✅ Smooth | — |
| 5→6 | Ausgangslage | Roter Faden | ⚠️ Weak | End of slide 5 (before `<LiteraturSource>`) |
| 6→7 | Roter Faden | Kurs-Übersicht | ⚠️ Weak | End of slide 6 (after last italic line, before `<LiteraturSource>`) |
| 7→8 | Kurs-Übersicht | Warum Statistik? | ✅ Smooth | — |
| 8→9 | Warum Statistik? | Fact: "Der Mittelwert lügt" | 🔴 Broken | End of slide 8 (replace "Ausblick →" section) |
| 9→10 | Fact hook | Mittelwert-Formel | ✅ Smooth | — |
| 10→11 | Mittelwert-Formel | Modus & Median | ⚠️ Weak | End of slide 10 (before `<LiteraturSource>`) |
| 11→12 | Modus & Median defs | Zahlengerade SVG | 🔴 Broken | (a) End of slide 11 + (b) caption on slide 12 |
| 12→13 | Zahlengerade SVG | Welches Lagemaß? | ✅ Smooth (if 11→12(b) applied) | — |
| 13→14 | Entscheidungstabelle | Dasselbe Prinzip | ⚠️ Weak | End of slide 13 left col (before `<LiteraturSource>`) |
| 14→15 | Dasselbe Prinzip | Streuung 1/2 | ✅ Smooth (already fixed) | — |
| 15→16 | Streuung 1/2 | Streuung 2/2 | ✅ Smooth | — |
| 16→17 | Streuung 2/2 | Varianz/Std | ⚠️ Weak | Opening of slide 17 (between heading and dataset line) |
| 17→18 | Varianz/Std | Korrelation | 🔴 Broken | End of slide 17 (before `<LiteraturSource>`) |
| 18→19 | Korrelation | U-Form SVG | ⚠️ Weak | End of slide 18 left col (after badge row) |
| 19→20 | U-Form SVG | Werkzeugkiste | ✅ Smooth | — |

### 9c. Exact proposed bridge sentences (handoff to slidev-content-transformer)

**Slide 3 → 4 (end of slide 3, right column, after last bullet):**
> *"Wir starten direkt mit Session 1 — und zwar dort, wo alle KI-Modelle anfangen: bei den Daten."*

**Slide 5 → 6 (end of slide 5, before `<LiteraturSource>`):**
> *"Diese drei Fragen — Preis, Betrug, Wettbewerb — ziehen sich als roter Faden durch den ganzen Kurs. Schauen wir zuerst, welche Methoden zu welcher Frage passen."*

**Slide 6 → 7 (end of slide 6, after last italic line, before `<LiteraturSource>`):**
> *"Welche Methode löst welche Frage — und in welcher Session? Die Übersicht zeigt Dir den Plan auf einen Blick."*

**Slide 8 → 9 (end of slide 8, replacing the "Ausblick →" block):**
Replace the current "Ausblick →" bullets with:
> *"Statistik fängt mit einer simplen Frage an: Was ist ein typischer Schaden in unserem Portfolio? Und genau diese Frage führt uns sofort in eine Falle — die der Mittelwert stellt."*
Note: The session roadmap in "Ausblick →" was already shown on slide 7 (Kurs-Übersicht table) — it is redundant here. Remove or condense to a single parenthetical if desired.

**Slide 10 → 11 (end of slide 10, before `<LiteraturSource>`):**
> *"Der Mittelwert allein ist für schiefe Verteilungen keine verlässliche Kennzahl. Was brauchen wir stattdessen? Modus und Median — zwei robustere Alternativen."*

**Slide 11 → 12 (a) — end of slide 11 (below both column definitions):**
> *"Modus, Median und Mittelwert — auf einer Zahlengerade nebeneinandergestellt, wird der Unterschied sofort sichtbar."*

**Slide 11 → 12 (b) — caption/sub-line on slide 12 (below the SVG `<img>`):**
> *"Rechtsschiefe Verteilung: Der Ausreißer zieht den Mittelwert weit nach rechts — Modus und Median bleiben nahe am Zentrum der Datenpunkte."*

**Slide 13 → 14 (end of slide 13 left column, before `<LiteraturSource>`):**
> *"Dieses Prinzip ist nicht versicherungsspezifisch — es gilt überall, wo Daten schief verteilt sind. Ein klassisches Beispiel aus dem Personalwesen zeigt das sofort."*

**Slide 16 → 17 (opening of slide 17, between heading and dataset line):**
> *"Portfolio B brauchte mehr Reserve — aber wie viel mehr genau? Dafür brauchen wir ein Maß, das Streuung präzise quantifiziert. Das ist die Varianz."*

**Slide 17 → 18 (end of slide 17, before `<LiteraturSource>`):**
> *"Streuung beschreibt, wie weit ein einzelnes Merkmal schwankt — etwa die Schadenshöhe. Aber wie hängen zwei Merkmale zusammen? Steigt die Schadenhäufigkeit mit dem Fahreralter? Steigt sie wirklich — oder sieht es nur so aus? Das beantwortet die Korrelation."*

**Slide 18 → 19 (end of slide 18 left column, after badge row, before closing `</div>`):**
> *"Das klingt abstrakt — die Kurve macht es sofort klar."*

### 9d. Priority ranking for implementation

| Rank | Transition | Type | Reason |
|---|---|---|---|
| 1 | Slide 8 → 9 (Warum Statistik? → Fact hook) | 🔴 Broken | EUR 7.433 appears with zero context; hardest cut in the deck for a tired student |
| 2 | Slide 17 → 18 (Varianz → Korrelation) | 🔴 Broken | Jump from 1-variable to 2-variable with no logical bridge; will feel like a shuffled deck |
| 3 | Slide 11 → 12 (Modus/Median → SVG) | 🔴 Broken | Silent image with no framing; requires both a closing sentence AND a diagram caption |
| 4 | Slide 16 → 17 (Streuung 2/2 → Varianz formula) | ⚠️ Weak | Rhetorical question left unanswered by formula without a one-line bridge |
| 5 | Slide 10 → 11 (Mittelwert formula → Modus/Median) | ⚠️ Weak | "Korrektive" in title carries it — but one extra line removes all ambiguity |
| 6 | Slide 13 → 14 (Entscheidungstabelle → Gehalts-Beispiel) | ⚠️ Weak | Context switch from insurance to HR is unmotivated without a "principle is universal" sentence |
| 7 | Slide 5 → 6 (Ausgangslage → Roter Faden) | ⚠️ Weak | Question hangs; forward pointer closes the loop |
| 8 | Slide 6 → 7 (Roter Faden → Kurs-Übersicht) | ⚠️ Weak | Principle-to-table jump; one preview line fixes this |
| 9 | Slide 3 → 4 (Lernziele → Chapter opener) | 🟢 Polish | Chapter opener is a visual reset; closing line adds warmth but not strictly needed |
| 10 | Slide 18 → 19 (Korrelation → U-Form SVG) | 🟢 Polish | Heading "Die U-Form sichtbar gemacht" already does most of the work |

### 9e. Implementation handoff notes (for slidev-content-transformer)

- Fixes are **text-only** — no new layouts, no new components, no CSS changes needed.
- Fixes at "end of slide N before `<LiteraturSource>`" mean: insert the sentence as a new paragraph *above*
  the `<LiteraturSource :sources="[...]" />` block, never inside it.
- Slide 11 (Modus & Median, `header-cols`): the closing sentence in fix (a) goes after the `::right::`
  column's last bullet. In `header-cols`, content after all named slots renders full-width — a blank line
  + the sentence should work. Transformer must verify no overflow.
- Slide 12 (SVG only): the caption in fix (b) is a simple italics `<p>` line below the `<img>` tag.
  Keep it to one sentence — the slide is sparse and the image is the hero.
- Slide 17 bridge sentence goes **between** the `## Varianz & Standardabweichung — das Streuungsmaß`
  heading and the `<div class="pb-10">` wrapper that starts the dataset display.
- Slide 18 fix (b) goes inside the `<div class="pb-20">` of the left column, after the badge `<div>`
  row, before the closing `</div>` of that wrapper.
- After all transitions are implemented, send the full batch through `slide-visual-reviewer` for a single
  pass (density check, no overflow), then `student-reviewer`. This is a prose-only pass — should clear in 1 loop.

### 9f. Outcome (2026-08-10) — ✅ Implemented, 2 loops, APPROVED

All 11 transition fixes + the Session 1 title fix were applied. First render surfaced 5 real overflow
regressions (bridge sentences pushed already-dense slides past the canvas: slides 3, 5, 12, 17, 18) —
fixed by trimming adjacent text, not by removing the bridges. Student-reviewer loop 1 found two additional
layout bugs the automated metrics missed (citation bar visually overlapping content on slide 13 despite
`scrollHeight` reporting no overflow — `<LiteraturSource>` is `position: absolute` and doesn't count
toward scroll height, a recurring blind spot in this deck). Fixes: slide 13's bridge sentence was
relocated to become slide 14's *opening* line (cleaner than a crowded footer); slide 11's bridge was
promoted with an `<hr>` + centered-italic treatment for visual distinction; slide 3's Erwartungen lines
were converted to proper bullets. Loop 2 re-review: **APPROVED**, zero regressions across slides 5–20.

**Lesson for future clusters:** `<LiteraturSource>` and the theme footer are both `position: absolute`,
so `slide-shots.mjs`'s `scrollHeight` metric cannot detect visual overlaps with them — only a rendered
screenshot can. Always visually inspect slides where new content is added near the bottom of a column.

---

## 10. Session 1 completion — z-Transformation through Signifikanz (2026-08-11)

**Trigger:** Continuation of Session 1 Statistik-Bogen authoring after Cluster 2b-gap
(Kovarianz) was approved. This closes out clusters 2c–2g, completing the full
Statistik & Regression prerequisite chain for Session 1/2.

### 10a. Clusters authored this pass

- **2c — z-Transformation & Lineare Regression** (8 slides): Standardisierung → OLS
  (Ŷ = a + bX) → Bestimmtheitsmaß R². Uses the Fahrzeugalter/Reparaturkosten dataset
  established in the Kovarianz cluster, now with a model laid over it. Originally
  planned as 3 slides but split to 8 across two evaluation-loop rounds after visual
  QA found repeated `<v-click>` overflow (content fine collapsed, broke once fully
  revealed) and one slide ("R² in der Praxis") was found genuinely missing after an
  earlier accidental `git checkout` in-session — reconstructed from the original
  wording (R²=0.98-is-unusually-high caveat + correlation≠causation reminder).
- **2d — Logistische Regression (+ Logit / Odds Ratio)** (4 slides): Sigmoid function
  as the fix for linear regression's [0,1]-violation on probability outputs, then
  Logit/Odds Ratio for coefficient interpretability. Split from 2 to 4 slides during
  the evaluation loop for the same v-click-overflow reason as 2c.
- **2e — Interaktionseffekte** (4 slides): Product-term interaction (Alter × Geschlecht),
  concrete coefficient interpretation table, and a **custom Excalidraw diagram**
  (`interaktionseffekt_diagramm.svg`, user-authored/exported) showing two crossing
  regression lines (Männer/Frauen) — added after student-reviewer flagged that the
  "Grafik schlägt Formel" slide title initially promised a graphic the deck didn't
  deliver (pure prose describing a chart that didn't exist).
- **2f — Bootstrapping** (1 slide): Resampling-mit-Zurücklegen as the annahmefreie
  alternative to parametric confidence intervals, motivated by the rechtsschiefe
  Schadensverteilung established earlier in Session 1 (the 38.000 EUR Ausreißer).
- **2g — Signifikanz** (2 slides): H₀/H₁ framing → p-Wert → Entscheidungsregel mit α,
  closing the Statistik-Bogen. Split "Die Frage" into two slides after a real 49px
  scrollHeight overflow was found on re-verification.

### 10b. Evaluation-loop pattern (recurring lesson, reinforced across all 5 clusters)

**Pattern observed 3 times independently (2c, 2d/2e/2f/2g batch, and the diagram
follow-up):** slides pass initial visual QA when `<v-click>` blocks are still
collapsed, then overflow once the instructor reveals all clicks. `slide-shots.mjs`'s
default screenshot only captures the first-click state — **always re-run visual QA
with all `<v-click>` blocks fully revealed**, not just the initial render. This
caused 7 of 13 slides to be missed on the first QA pass and only caught on
re-verification.

**Fix pattern applied consistently:** where content genuinely didn't need
progressive disclosure (i.e. v-click was used to manage density rather than for
pedagogical pacing), the wrapper was removed and the slide was split instead —
simpler to reason about and avoids the collapsed/revealed discrepancy entirely.

### 10c. Student-review follow-up round (2026-08-11) — 5 targeted fixes, all resolved

First full-arc student review (z-Transformation → Signifikanz) returned **APPROVED
WITH MINOR NOTES**, flagging 5 issues. User requested all 5 be addressed as a
follow-up round (not a fresh 3-loop cycle, since the cluster was already approved):

1. **z-Transformation motivation was orphaned** — introduced right before a
   regression computed in raw units, so "why standardize now?" had no good answer.
   Fixed by reframing the motivation around the real payoff (multi-feature ML
   pipelines in Session 2, where unstandardized features let the largest-magnitude
   one dominate) and rewriting the bridge sentence to be honest about why the
   worked example stays in original units.
2. **Interaktionseffekte "Grafische Interpretation" slide had no graphic** — see
   10a above; user built the diagram directly via the Excalidraw MCP tool and
   exported the SVG themselves (`public/interaktionseffekt_diagramm.svg`).
3. **Silent notation shift** ($a,b$ in OLS → $\beta_0,\beta_1$ from logistic
   regression onward) — fixed with a one-line inline bridge note on the first
   slide where β-notation appears.
4. **R² worked example asked students to trust an unverified sum** — SS_res was
   stated as `100+900+900+100` with no visible residual calculation. Fixed by
   inserting a residuals table (X, Y, Ŷ, Y−Ŷ, (Y−Ŷ)²) before the SS_res line —
   exactly at the 5-column guardrail edge but confirmed to fit.
5. **"Signifikanz: Ein Beispiel" was too thin**, stating p=0.03 with no connection
   to a real number. Fixed by grounding it explicitly in the b=140 EUR/Jahr
   coefficient already established earlier in the arc.

**Outcome:** Re-verified via a second student-review pass — **APPROVED WITH MINOR
NOTES** (down to 2 non-blocking cosmetic notes: slide "z-Transformation: Formel &
Anwendung" reads sparse now that its neighbor absorbed more content; the three
custom SVG diagrams use relative `./file.svg` paths instead of the `/absolute`
convention used by `<Illustration>` — low-risk housekeeping, not fixed in this pass).

### 10d. Status: Session 1 Statistik & Regression prerequisite chain — COMPLETE ✅

Every topic in the `## 3. Prerequisite chain` list for `[Session 1 — Statistik &
Regression]` is now authored and approved: Data Mining/Crawling → Stichprobe/
Grundgesamtheit → Konfidenzniveau/-intervall → Lagemaße → Varianz/Standardabweichung
→ Kovarianz → Korrelation → z-Transformation → Lineare Regression → Logistische
Regression (+ Logit/Odds Ratio) → Bootstrapping → Signifikanz.

**Remaining gap (unchanged from section 7b):** the Python/Tools chapter (vorlage
slides 9–25 — Python Basics, Datenstrukturen, Jupyter, Docker, Kubernetes, GitHub,
CRISP-DM detail, NumPy/Pandas/Scikit-Learn/Matplotlib) is still **not scheduled** in
either the deck or the prerequisite chain. This was identified in the 2026-08-10 gap
analysis and remains open — recommended next step before starting Session 2 content,
since CRISP-DM and Python basics are referenced in passing (slide 8) but never
delivered as their own cluster.
