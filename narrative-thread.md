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

[Session 2 — Python-Vertiefung: von der Formel zum Code]  (repositioned 2026-08-16, see §11)
  Statistik-Grundlagen in Python (Lagemaße, Streuung, Korrelation, z-Trafo, Regression) →
  Kontrollstrukturen (if/elif/else, Schleifen) →
  Funktionen →
  Objektorientierte Programmierung (Klassen, Objekte, Methoden) →
  3rd-Party-Libraries (NumPy, Pandas, Matplotlib, Scikit-Learn-Ausblick) →

[Session 2 — Supervised ML, Fortsetzung]
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

**Resolved 2026-08-16 (superseded the 2026-08-10 gap note below):** the Python code-
literacy block is scheduled **after** the Statistik-Bogen, not before it — user
decision, see §11. It is a deliberate departure from vorlage ordering (vorlage puts
Python before Statistik): the pedagogical bet is that Lagemaße/Streuung/Korrelation/
Regression are more motivating to implement in code *once the student already
understands the math*, rather than teaching bare syntax with no application target.
The residual gap — Jupyter/Docker/Kubernetes/GitHub/CRISP-DM-Detail (vorlage slides
15–19) — is explicitly **not** covered by §11 and remains open; see §11 note.
Original 2026-08-10 gap note (kept for audit trail, no longer the active plan):

> The Python/Tools block (vorlage slides 9–25) has NO coverage in our current deck and
> is not yet in our session plan. It must be scheduled — either as a dedicated early
> Session 1 cluster, or as a standalone "Session 0 / Tools" session inserted before the
> Statistik content. See Gap Analysis notes in section 7 below.

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
| 11a | Statistik-Grundlagen in Python (Lagemaße/Streuung/Korrelation/z-Transformation/Regression als Code, `statistics`+NumPy, n−1-vs-ddof-Fallgrube, R²=0,98-Rückbezug zu Cluster 2c, Checkpoint-Slide als Brücke zu Kontrollstrukturen) — 10 Slides | 2 | Versicherer (home base) | ✅ approved (3 visual-QA loops + 1 student-review follow-up) | 4 |
| 11b | Kontrollstrukturen (if/elif/else, for-Schleife, while-Schleife mit break-Safeguard; match/case als kurzer Fun-Fact statt eigener Folie; Ergebnis-Beispiel bewusst "kein Ausreißer" statt geschönt; Synthese "Kopier-Falle" als Brücke zu Funktionen) — 6 Slides | 2 | Versicherer (home base) | ✅ approved (2 visual-QA loops + 1 student-review follow-up) | 3 |
| 11c | Funktionen (`def`/Parameter/Default/`return`, Umbau des Ausreißer-Checks aus 11b in `ist_ausreisser(schaden, schwelle=10000)`, List-Comprehension-Vorschau, Brücke zu OOP) — 3 Slides | 2 | Versicherer (home base) | ✅ approved (1 visual-QA loop, 2 Nachbesserungsrunden für dieselbe Folie + 1 student-review follow-up) | 3 |
| 11d | OOP (Klasse-vs-Objekt-Analogie, `class`/`__init__`, `self`-Bindung, Methoden — `ist_ausreisser()` aus 11c als Methode umgebaut, mehrere `Schaden`-Objekte + List-Comprehension, Brücke zu Pandas/11e) — 5 Slides | 2 | Versicherer (home base) | ✅ approved (2 visual-QA loops + 1 student-review follow-up) | 3 |
| 11e | 3rd-Party-Libraries (NumPy-Vektorisierung, Pandas Series als Synthese-Demo zu 11a, DataFrame `.corr()`, Matplotlib-Streudiagramm mit echtem SVG, Scikit-Learn-Ausblick als eigene schlanke Folie, Abschluss-Folie "Was Du jetzt kannst" mit Brücke zu Train/Val-Split) — 6 Slides | 2 | Versicherer (home base) | ✅ approved (2 visual-QA loops + 1 student-review follow-up + 1 user design-review split) | 3 |
| — | *(§11 Python-Vertiefung KOMPLETT — 30 Slides über 11a–11e (10+6+3+5+6). next: Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) — Einstieg Supervised ML, außerhalb §11. Jupyter/Docker/K8s/GitHub/CRISP-DM-Detail-Gap weiterhin offen, siehe §11 Schlussnote)* | 2 | Versicherer | ⬜ next | — |


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

**Content-gap fix (2026-08-17):** user caught that the Pearson-$r$ **formula itself**
was never shown anywhere in the deck — only described in prose ("Division durch
$s_X \cdot s_Y$ hebt die Einheiten auf") on the "Kovarianz — ein Rechenbeispiel" slide,
inconsistent with every other concept in this arc (Kovarianz, Varianz, Regression all
get an explicit KaTeX formula). Fixed by adding
$r = \frac{\text{Cov}(X,Y)}{s_X \cdot s_Y}$ inline on that same slide, right where the
concept is introduced. First attempt used a display-mode `$$...$$` block plus a separate
"Wertebereich" line — that overflowed into the footer (a repeat of the recurring
`<LiteraturSource>`-is-`position:absolute` blind spot from §9f: metrics reported clean,
screenshot showed real collision). Fixed by inlining the formula into the existing
closing sentence instead of adding new display-block lines, and dropping the
"Wertebereich" line since the very next slide ("Korrelation — Zusammenhang, nicht
Ursache") already states the $-1 \leq r \leq +1$ range. Verified clean on re-render.
**Lesson: this deck's `default`-layout slides have near-zero vertical headroom by
default — prefer extending an existing line inline over adding a new display-mode
block or paragraph, and always re-render after adding a formula to an already-dense
slide.**

**Remaining gap (unchanged from section 7b) — superseded placement, see §11:** the
Python/Tools chapter (vorlage slides 9–25 — Python Basics, Datenstrukturen, Jupyter,
Docker, Kubernetes, GitHub, CRISP-DM detail, NumPy/Pandas/Scikit-Learn/Matplotlib) was
originally recommended *before* Session 2. The user decided (2026-08-16) to place the
**code-literacy** portion of this gap *after* the Statistik-Bogen instead — see §11
for the accepted plan and rationale. The **tooling** portion (Jupyter/Docker/K8s/
GitHub/CRISP-DM-Detail) is still unscheduled; §11 does not close it.

---

## 11. Cluster set — Python-Vertiefung: von der Formel zum Code (planned 2026-08-16)

**Status:** 🔵 Planning — awaiting edu-research citations, then → slidev-content-transformer

**Trigger:** User decision to place Python code-literacy *after* the completed
Statistik-Bogen (§10), not before it (contra vorlage ordering, contra the original
§7b gap-analysis recommendation — see the resolved note in §3). Rationale: students
already understand *what* Lagemaße, Streuung, Korrelation, z-Transformation and
Regression mean and *why* they matter — Python becomes the tool that computes what
they already understand, rather than bare syntax with no application target yet.
This is a deliberate pedagogical bet, not an oversight; flag if a later review
suggests reordering.

**User-specified sequence (verbatim intent):**
1. Statistik-Grundlagen aus §10 in Python nachbauen (code-first re-implementation)
2. Kontrollstrukturen: if / elif / else ("switch"), Schleifen
3. Funktionen
4. Objektorientierte Programmierung (OOP)
5. Relevante 3rd-Party-Libraries (u. a. Pandas)

**Insertion point:** Immediately after "Signifikanz: Entscheidungsregel" (last slide
of §10, current end of authored content in `slides.md`, right before the demo/
placeholder slides). Before "Trainingsdatensatz / Validierungsdatensatz".

**Continuity rule (critical — this is what makes the Roter Faden work here):** every
sub-cluster below reuses a dataset **already established** in §10/earlier clusters —
no new toy data is introduced except where explicitly noted. This is what turns "now
learn Python" into "now compute the things you already understand" rather than a
context switch:
- **6 Schadenshöhen** (800, 1.100, 1.100, 1.400, 2.200, 38.000 EUR) — from Lagemaße/
  Streuung (§Cluster 2a/2b)
- **Fahrzeugalter/Reparaturkosten** (4-Punkte-Datensatz) — from Kovarianz/Korrelation/
  z-Transformation/Regression (§Cluster 2b-gap/2c)
- **Alter × Geschlecht → Schadenshäufigkeit** — from Interaktionseffekte (§Cluster 2e),
  reusable as the OOP application example (a `Police`/`Schaden`-Klasse with these
  exact attributes)

**Overall bridge sentence opening the cluster (goes at the top of sub-cluster A,
after Signifikanz's closing line):**
> *"Wir haben jetzt die Mathematik hinter Mittelwert, Streuung, Korrelation und
> Regression verstanden — von Hand gerechnet. Aber kein Versicherer wertet 400.000
> Verträge mit dem Taschenrechner aus. Genau das übernimmt Code. Schauen wir, wie
> dieselben Berechnungen in Python aussehen."*

**Budget note (§5 flag):** this is a 5-part cluster (~18–22 slides estimated below)
inside the already-dense "Session 2" slot. Per the AGENTS.md over-authoring warning,
the transformer should treat the per-sub-cluster slide counts below as an upper
bound, not a target — collapse where density guardrails allow (e.g. combine two
tightly related code snippets on one slide if both fit within the 5–7 bullet /
one-code-block density limit).

---

### 11a. Statistik-Grundlagen in Python

**Layout:** mostly `default` (code + short prose reads best single-column); consider
`header-cols` only where a "von Hand" vs. "in Python" comparison is the point.

**Estimated slides:** 4–5.

| Tier | Content |
|---|---|
| **Hook** | Siehe Overall-Bridge-Satz oben — die Distanz zwischen "400.000 Verträge" und "6 Werte per Hand" wird jetzt geschlossen. |
| **Foundation** | Python-Grundsyntax kurz streifen (Variablen, `print()`, Kommentare `#`) — nicht neu vorstellen, sondern implizit über die Beispiele einführen. Kein eigenes "Was ist Python?"-Slide (das wäre der separate Tooling-Gap, siehe Schlussnote). |
| **Application** | Reihe von Codebeispielen, je eine kompakte `python`-Codezelle + 1–2 Ergebniszeilen, unter Wiederverwendung der o.g. Datensätze: `statistics.mean()/median()/mode()` auf die 6 Schadenshöhen; `statistics.variance()/stdev()` (Bezug zur Rechtsschiefe/Ausreißer 38.000 EUR); `numpy.corrcoef()` auf Fahrzeugalter/Reparaturkosten; manuelle z-Transformation-Zeile (`(x - mean) / std`); Regressionsgerade über `numpy.polyfit()` — bewusst NICHT scikit-learn hier (das kommt geplant in 11e/Session-2-ML als Ausblick, nicht vorgezogen). |
| **Synthesis** | *"Fünf Zeilen Code liefern, was vorher mehrere Rechenschritte brauchte. Aber echte Datenanalyse besteht nicht nur aus Berechnungen — sie braucht Entscheidungslogik: Ist ein Schaden ein Ausreißer oder nicht? Das erfordert eine neue Fähigkeit: Programme, die Entscheidungen treffen."* → Brücke zu 11b. |

**Research requisition (edu-research):** verified citation for Python's `statistics`/
`numpy` module usage in a business-analytics teaching context (technical-depth:
Beginner-Friendly). Confirm module names/function signatures are current (no
deprecated APIs) rather than relying on the vorlage's screenshots, which contain
OCR-garbled code and should NOT be copied verbatim (see vorlage_skript.md lines
532–534, 585 — corrupted variable names).

---

### 11b. Kontrollstrukturen (if/elif/else, Schleifen)

**Layout:** `default`.

**Estimated slides:** 3–4.

| Tier | Content |
|---|---|
| **Hook** | Der 38.000-EUR-Schaden aus dem 6-Werte-Sample ist der bekannte Ausreißer (aus §Cluster 2a/2f) — wie entscheidet ein Programm automatisch, ob ein neuer Schaden "auffällig" ist? Bei 400.000 Verträgen kann niemand das von Hand durchsehen. |
| **Foundation** | `if / elif / else` als Entscheidungslogik; Python hat kein klassisches `switch` — kurzer Hinweis auf `match/case` (Python ≥3.10) als das nächstliegende Äquivalent, aber Fokus bleibt auf `if/elif/else` als Hauptform. `for`-Schleife (Iteration über eine Liste) und `while`-Schleife (Iteration bis Bedingung erfüllt) klar unterscheiden. |
| **Application** | `for schaden in schadenshoehen: if schaden > schwelle: print(...)` über die 6-Werte-Liste, Schwelle z. B. 10.000 EUR → markiert exakt den bekannten Ausreißer. Zweites Beispiel: `while`-Schleife, die eine laufende Summe akkumuliert, bis ein Budget-Limit erreicht ist (Prämienreserve-Framing). |
| **Synthesis** | *"Die Ausreißer-Prüfung ist nützlich — aber wenn wir sie zehnmal an zehn Stellen im Code brauchen, kopieren wir denselben Block immer wieder. Das ist fehleranfällig. Die Lösung: Logik einmal definieren, überall wiederverwenden."* → Brücke zu 11c. |

**Research requisition (edu-research):** citation for control-flow fundamentals in a
data-analysis teaching context (Beginner-Friendly). Verify Python's `match/case`
minimum version claim (3.10) before stating it as fact.

---

### 11c. Funktionen

**Layout:** `default`.

**Estimated slides:** 3.

| Tier | Content |
|---|---|
| **Hook** | Direkt aus 11b: der Ausreißer-Check aus dem letzten Slide wurde gerade kopiert — was, wenn die Schwelle sich später ändert, oder wir denselben Check an 5 Stellen im Code brauchen? |
| **Foundation** | `def funktionsname(parameter):`, `return`-Wert, Default-Argumente (`schwelle=10000`). Betonen: eine Funktion kapselt Logik + macht sie wiederverwendbar UND testbar. |
| **Application** | Die Ausreißer-Prüfung aus 11b wird zu `def ist_ausreisser(schaden, schwelle=10000): return schaden > schwelle` umgebaut; danach `[s for s in schadenshoehen if ist_ausreisser(s)]` als Vorschau auf List Comprehension (kurz erwähnen, nicht vertiefen). Zweites Beispiel optional: eine `berechne_praemie(schaden, risikofaktor)`-Funktion. |
| **Synthesis** | *"Jetzt haben wir wiederverwendbare Funktionen — aber sie kennen die Versicherungsdaten nicht direkt: Schwelle, Schadenshöhe, Risikofaktor werden bei jedem Aufruf neu übergeben. Was, wenn Daten UND die Funktionen, die zu ihnen gehören, gemeinsam an einem Ort leben sollten?"* → Brücke zu 11d. |

**Research requisition (edu-research):** citation for functions/reusability as a
software-engineering-for-data-science practice (Beginner-Friendly).

---

### 11d. Objektorientierte Programmierung (OOP)

**Layout:** `default`, evtl. ein Slide `header-cols` für "Klasse (Bauplan) vs. Objekt
(Instanz)"-Gegenüberstellung.

**Estimated slides:** 4 (dichtestes Unterthema — Klassenkonzept, Instanziierung,
Methoden, und eine bewusste Einordnungs-/Synthesefolie, um Overload zu vermeiden).

| Tier | Content |
|---|---|
| **Hook** | Direkt aus 11c: Schwelle, Schadenshöhe, Risikofaktor lose als Variablen/Parameter herumzureichen wird unübersichtlich, sobald wir mit *vielen* Schäden gleichzeitig arbeiten (genau der Fall bei 400.000 Verträgen). |
| **Foundation** | `class`, `__init__` (Konstruktor), Attribute (Instanzdaten), Methoden (Funktionen, die zur Klasse gehören und auf `self` zugreifen). Klasse = Bauplan, Objekt = konkrete Instanz — explizit mit einer Analogie verankern (z. B. "Klasse = Vertragsformular-Vorlage, Objekt = ein konkret ausgefüllter Vertrag"). |
| **Application** | Eine `Schaden`-Klasse mit Attributen `hoehe`, `alter_fahrer`, `geschlecht` (Rückgriff auf den Interaktionseffekte-Datensatz aus §Cluster 2e) und einer Methode `ist_ausreisser(self, schwelle=10000)`, die die 11c-Funktion als Methode wiederverwendet. Kurze Demonstration: mehrere `Schaden`-Objekte in einer Liste, Iteration mit der 11b-Schleifenlogik. |
| **Synthesis** | *"Objekte, die Daten UND Verhalten bündeln — genau das ist, was professionelle Data-Science-Bibliotheken längst für uns tun. Ein Pandas-DataFrame ist im Kern auch nur ein Objekt mit Daten und Methoden. Wir müssen es nicht mehr selbst bauen."* → Brücke zu 11e. |

**Research requisition (edu-research):** citation for OOP fundamentals in a Python-
for-data-science teaching context (Beginner-Friendly). Flag: this sub-cluster is the
density risk of the whole set — if visual QA finds `<v-click>` overflow (the
recurring pattern from §10b), split rather than compress; do not cut the
class-vs-object analogy, it is the one plain-language anchor for an abstract topic.

---

### 11e. 3rd-Party-Libraries (NumPy, Pandas, Matplotlib, Scikit-Learn-Ausblick)

**Layout:** `default`, evtl. `header-cols` für den "Von Hand vs. Pandas"-Vergleich.

**Estimated slides:** 4–5.

| Tier | Content |
|---|---|
| **Hook** | *"Wir haben Statistik-Berechnungen, Kontrollstrukturen, Funktionen und Klassen selbst gebaut. Frage: Bauen echte Data Scientists das jeden Tag neu? Nein — dafür gibt es Bibliotheken."* |
| **Foundation** | **NumPy**: numerische Arrays, vektorisierte Operationen (schneller als reine Python-Schleifen — Rückbezug zur 11b `for`-Schleife). **Pandas**: `Series` (1D) und `DataFrame` (2D, tabellarisch) — das Herzstück; Kernoperationen (Import, Filtern, Sortieren, Aggregieren) im Überblick. **Matplotlib**: Basis-Visualisierung. **Scikit-Learn**: nur als *Ausblick* ankündigen ("kommt in der nächsten Einheit, wenn wir Random Forest und KNN trainieren") — NICHT hier vertiefen, das gehört zu Supervised ML. |
| **Application** | Zentrale Synthese-Demo: die 6 Schadenshöhen als `pandas.Series`, `.mean()/.median()/.std()` in einer Zeile — direkter Vergleich zur 11a-`statistics`-Version ("dieselbe Berechnung, jetzt mit dem Werkzeug, das echte Data Scientists tatsächlich nutzen"). Optional: `df.corr()` auf dem Fahrzeugalter/Reparaturkosten-Datensatz als DataFrame, Rückbezug zu Korrelation (§Cluster 2b). Ein `matplotlib`-Streudiagramm des Datensatzes als visueller Abschluss. |
| **Synthesis** | Schlusssatz für den GESAMTEN §11-Cluster: *"Damit hast Du das Handwerkszeug: Du verstehst die Statistik dahinter, kannst sie in reinem Python nachbauen — und kennst jetzt die Werkzeuge, mit denen echte Versicherer ihre 400.000 Verträge tatsächlich auswerten. Der nächste Schritt: Wie trainiert man ein Modell, das nicht nur beschreibt, sondern vorhersagt, wer als Nächstes einen Schaden meldet?"* → Brücke zu Trainingsdatensatz/Validierungsdatensatz (Supervised ML). |

**Research requisition (edu-research):** citation for NumPy/Pandas/Matplotlib usage
in applied business-analytics contexts (Beginner-Friendly to Strategic-Framework).
Verify current Pandas API calls (no deprecated methods) — same caution as 11a re:
vorlage's corrupted code screenshots.

---

### 11f. Slide-count summary & sequencing note

| Sub-cluster | Topic | Est. slides |
|---|---|---|
| 11a | Statistik-Grundlagen in Python | 4–5 |
| 11b | Kontrollstrukturen | 3–4 |
| 11c | Funktionen | 3 |
| 11d | OOP | 4 |
| 11e | 3rd-Party-Libraries | 4–5 |
| **Total** | | **~18–21** |

Each sub-cluster's Synthesis line is also its bridge to the next (per §9c convention
— content-driven transitions, no UI widget). Hand this plan to `edu-research` for the
five requisition briefs above, then `slidev-content-transformer`, then the normal
`slide-visual-reviewer` → `student-reviewer` loop per AGENTS.md workflow. Given §10b's
recurring `<v-click>`-overflow lesson, instruct the transformer to re-check every
slide with all clicks revealed, not just the first-click state.

**Explicitly out of scope for §11 (still open — do not silently fold in):** Jupyter
Notebooks, Docker, Kubernetes, GitHub, and CRISP-DM-as-its-own-cluster (CRISP-DM is
currently only namechecked on slide 8). These are tooling/process topics, not
code-literacy topics, and the user's 2026-08-16 request did not include them. Needs a
separate decision on whether/where to schedule them.

---

### 11g. Outcome — Cluster 11a (2026-08-17) — ✅ Implemented, APPROVED

Authored via the full `AGENTS.md` loop (`edu-research` → `slidev-content-transformer` →
`slide-visual-reviewer` → `student-reviewer` → targeted fix → re-verify). Final result:
**10 slides** (grew from the originally planned 4–5 — see density lesson below), inserted
right after "$p$-Wert: Anwendung im Modell" (which received the cluster's opening bridge
sentence), covering: Lagemaße in Python → Streuung (`statistics` n−1) → Streuung (NumPy
`ddof`-Fallgrube) → Korrelation (`numpy.corrcoef`) → z-Transformation (Zentrieren /
Skalieren, split) → Lineare Regression (`numpy.polyfit`) → Modellgüte (R²=0,98, explicitly
tied back to the value already established in Cluster 2c, not a new claim) → Checkpoint
(non-code rhythm-break slide teasing an outlier-flagging rule) → Die Synthese (bridge to
11b/Kontrollstrukturen).

**Config bug fixed in passing:** all 7 `.claude/agents/*.md` files had `tools: all`, an
unrecognized value that silently spawned every custom subagent with **zero tools**
(confirmed failure: `Agent 'edu-research' would be spawned with zero tools`). Fixed to
explicit per-agent tool lists (e.g. `edu-research: Read, Glob, Grep, WebFetch, WebSearch`;
`slidev-content-transformer: Read, Write, Edit, Glob, Grep, Bash`) matching each agent's
actual role. `tools: "*"` was tried first and also failed — this harness requires an
explicit comma-separated tool list, not a wildcard. **If a custom subagent invocation
fails with a zero-tools error again, check this file's `tools:` line first.**

**Recurring density lesson (reinforced 3x in this single cluster — same failure mode as
§10b, different trigger):** every time content was *added* to an already-passing slide
(a trimmed sentence restored as a bridge, a new code block for R² validation, a
two-step decomposition of one formula), that slide overflowed again on the next visual-QA
pass — even when the addition looked small in isolation. Metrics caught most of it
(`scrollHeight`/`clippedElements`), but one text/credit-line overlap (Lagemaße slide) only
showed up in the screenshot, not the numeric metrics — consistent with §9f's warning that
`<LiteraturSource>` is `position: absolute` and invisible to scrollHeight. **Rule
going forward:** treat "add content to a slide that already passed QA" as a trigger for a
fresh visual-QA pass, never assume a small addition is safe — and when in doubt, default
to splitting into a new slide rather than growing an existing one, especially for slides
carrying a code block + output + prose (this pattern consistently has near-zero headroom
in this deck's `default` layout).

**Student-review follow-up (targeted, not a fresh 3-loop cycle — same pattern as §10c):**
3 fixes applied: (1) z-Transformation decomposed into two labeled steps with real computed
intermediate values instead of one dense one-liner, (2) Regression got a prediction/R²
validation block — using the deck's own already-verified R²=0,98, not the reviewer's
illustrative (and incorrect for this dataset) R²=1,0 example, (3) a new non-code
"Checkpoint" slide inserted to break 6 consecutive code-slides' worth of monotony and give
the Kontrollstrukturen bridge a concrete teaser example (outlier-flagging rule stated in
plain German, no code — that's 11b's job).

**User design-review follow-up (2026-08-17), 3 more fixes, verified clean:**
1. Added a short `layout: section` title/divider slide ("Von der Formel zum Code") right
   before "Lagemaße in Python" — the cluster previously had no lead-in title slide of its
   own. Deliberately used `section` (lightweight, centered) rather than `chapter` (reserved
   for full Session openers in this deck) since this is a sub-cluster within Session 2, not
   a new session.
2. "Die deskriptive Werkzeugkiste ist komplett" (the pre-existing descriptive-stats recap
   slide, unrelated to this cluster but flagged in the same review) stayed in place but
   gained one sentence explicitly calling back to the U-Form pitfall ($r \approx 0$ despite
   a real relationship) shown on the immediately preceding slide — it previously recapped
   the three descriptive tools generically without acknowledging the caveat the student had
   just seen, which read as a disconnected repeat rather than a continuation.
3. "Checkpoint" and "Die Synthese" (both single dense prose paragraphs making nearly the
   same point) were merged into one slide ("Von der Berechnung zur Entscheidung") using a
   bullet/blockquote/emoji-callout structure instead of two walls of text — net slide count
   for the cluster stayed at 10 (+1 title slide, −1 from the merge).

**Cluster 11a final slide count: 10.** ✅ APPROVED.

**Follow-up correction (2026-08-17, same day):** user still found slide 26 confusing after
fix #2 above. Re-inspection found the real problem was not placement but a **factual
contradiction**: the slide's closing bridge blockquote said *"Ein starkes $r$ zwischen
**Fahreralter** und Schadenhäufigkeit..."* — but "Fahreralter" (driver age) is exactly the
U-Form example just shown TWO slides earlier to have $r \approx 0$ (non-linear, weak
Pearson correlation despite a real relationship). The bridge was claiming a strong
correlation for the one example already established to have a weak one. Worse, the
following z-Transformation/Regression slides actually use a *different* dataset —
**Fahrzeugalter** (vehicle age) vs. Reparaturkosten, $r \approx 0{,}99$ — so the bridge was
also foreshadowing the wrong variable for what came next. "Fahreralter" vs. "Fahrzeugalter"
are easy to conflate in German, which likely caused the original mix-up during drafting.
**Fixed** by rewriting the blockquote to explicitly contrast the two: *"Anders als beim
Fahreralter ist der Zusammenhang zwischen Fahrzeugalter und Reparaturkosten tatsächlich
linear und stark ($r \approx 0{,}99$)..."* — this both resolves the contradiction and
correctly sets up the dataset the next slides actually use. **Lesson: when a "feels
wrong" report persists after a placement/emphasis fix, re-check for a literal factual
contradiction before assuming it's a tone/ordering issue — this one was a copy-paste-style
variable mix-up, not a structural problem.**

**Second follow-up correction (2026-08-17, same day):** even after the above fix, user
still didn't understand the slide's core claim: "komplett" reads as "the statistics arc is
finished," but a large amount of content follows (Regression, Logistische Regression,
Interaktionseffekte, Bootstrapping, Signifikanz, and the entire Python cluster). The slide
never stated *what* was complete — it needed to explicitly scope "komplett" to the
**deskriptive** category only, as distinct from the **vorhersagende/schließende** category
that follows and *builds on* these three tools rather than extending the same list.
**Fixed** by: (1) retitling to "Drei Werkzeuge zum Beschreiben — jetzt wird's
vorhersagend" (explicit deskriptiv→prädiktiv framing in the title itself, not just body
text), (2) rewording the synthesis line to "Diese drei Werkzeuge sind jetzt komplett —
aber nur für die Beschreibung. Sie sagen nichts über die Zukunft voraus," (3) closing the
bridge blockquote with "baut auf diesen drei Werkzeugen auf, statt sie zu ersetzen" so the
relationship between what's done and what follows is explicit. Verified clean after one
overflow-and-trim iteration (the first version of this fix overflowed; trimmed the
redundant phrasing to fit). **Lesson: a word like "komplett" needs its scope stated in the
same sentence, not left implicit — otherwise it reads as "the whole topic is done" to a
student who doesn't yet know the deskriptiv/prädiktiv distinction exists.**

---

### 11h. Outcome — Cluster 11b (2026-08-17) — ✅ Implemented, APPROVED

Authored via the full loop (`edu-research` → `slidev-content-transformer` →
`slide-visual-reviewer` ×2 → `student-reviewer` → targeted fix → re-verify). Final
result: **6 slides**, inserted right after "Von der Berechnung zur Entscheidung"
(cluster 11a's closing slide, which already set up the exact motivating example this
cluster pays off). Covers: if/elif/else (real arithmetic on the 45.000-EUR example —
verified to correctly land as *not* an outlier at the 55.150 EUR/2,5σ threshold,
deliberately not forced into a more dramatic "yes it's an outlier" result) → for-Schleife
(code + output, split across 2 slides) → while-Schleife with a `break` safeguard against
`IndexError` (code + output, split across 2 slides) → Synthese "Die
Kopier-Falle" (bridge to 11c/Funktionen). `match`/`case` (Python 3.10+) was
originally its own slide per the plan, then demoted to a one-sentence aside on the
Synthese slide after student-review flagged it as diluting focus for a non-developer
audience — net cluster size dropped from 7 to 6 slides.

**Same density pattern as 11a, again:** 3 of the first 5 authored slides overflowed on
first visual-QA pass (code block + output block + prose is consistently too dense for
this deck's `default` layout) — fixed by splitting `for` and `while` each into a
code-slide + output-slide pair, and trimming the if/elif/else closing line. One
additional footer-collision (metrics-invisible, screenshot-only) surfaced on a
follow-up pass after a "fix" — same blind spot logged repeatedly since §9f/§11g.

**Student-review follow-up (targeted, not a fresh cycle):** 3 fixes — (1) the
if/elif/else "kein Ausreißer" result got one clause tying it back to the threshold
number so the (correct but undramatic) outcome doesn't read as a dud, (2) short
navigation-bridge lines added to both split code/output slide pairs ("→ Und die
Ausgabe?" / "Die Schleife von der letzten Folie, jetzt mit Ausgabe:") since the two
sparse post-split slides had headroom to spare, (3) match/case demoted from standalone
slide to one-sentence aside (see above). A 4th suggestion (a full iteration-by-iteration
execution trace for the while-loop) was deliberately **not** applied — judged too much
added density for a cluster that had just been split twice for exactly that reason.

**User design-review reversal (2026-08-17, same day):** the navigation-bridge lines from
fix (2) above were explicitly reverted per user feedback: for a slide legitimately split
in two only because it didn't fit as one, no bridge/reference text is wanted between the
two halves — and reusing the *same* title on both halves (rather than differentiating,
e.g. "…— über die bekannten Schadenshöhen" / "…— Die Ausgabe") is fine in this case.
Both split pairs (`for`, `while`) now share one title across their two slides and carry
no cross-referencing line. **Lesson: a split-for-density pair doesn't need to earn its
split with extra connective tissue — a plain continuation (same title, code then output,
no meta-commentary) reads fine and was preferred over the "helpful" bridge text.**

---

### 11i. Outcome — Cluster 11c (2026-08-17) — ✅ Implemented, APPROVED

Authored via the full loop (`edu-research` → `slidev-content-transformer` →
`slide-visual-reviewer` → 2 targeted trim rounds on the same slide →
`student-reviewer` → follow-up fixes → re-verify). Final result: **3 slides**, the
shortest sub-cluster in §11 so far — inserted right after "Die Kopier-Falle" (11b's
closing slide, which already fully set up the motivation). Covers: `def`/Parameter/
`return` (the 11b outlier-check rebuilt as `ist_ausreisser(schaden, schwelle=10000)`)
→ Anwendung über das Portfolio (list comprehension as a light preview, explicitly
not taught as a new core topic) → bridge to 11d/OOP.

**Same footer-collision pattern as 11a/11b, this time needing two trim rounds on one
slide:** the opening "Funktionen" slide (code block + 4-bullet structure list) failed
visual QA once, got trimmed to a single dense inline sentence, still failed on
re-verification (still touching the credit line), then got trimmed a second time
(shorter intro, condensed code, no blank lines between calls) before passing with
~380px of clearance. **Lesson reinforced: a first trim pass that "should" free enough
space doesn't guarantee it — always re-render and re-check pixel-level clearance
after every trim, not just after the first one.**

**Student-review follow-up:** 3 fixes, all low-risk text edits (no re-added density
risk, using the ~380px headroom the second trim round had freed): (1) the
over-compressed "Struktur:" one-liner was restored to 3 short bullets — the earlier
overflow-driven compression had gone further than necessary once headroom existed
again, (2) the closing OOP-bridge slide gained one clarifying sentence ("Du musst
Funktionen dafür noch nicht meistern, nur die Lücke sehen, die sie offenlässt.") to
soften what the reviewer flagged as a fast conceptual jump for only 3 slides of
functions content — reframed as an explicit preview rather than expecting mastery.
Two other reviewer suggestions were **not** applied: a second full applied-functions
example before the OOP bridge (would have grown the cluster and re-introduced the
density risk just resolved) and a side-by-side loop-vs-comprehension code comparison
on the application slide (would require a second code block on one slide — a pattern
that has caused overflow in every prior cluster in this deck).

---

### 11j. Outcome — Cluster 11d (2026-08-17) — ✅ Implemented, APPROVED

Authored via the full loop (`edu-research` → `slidev-content-transformer` →
`slide-visual-reviewer` → fix round → re-verify → `student-reviewer` → follow-up fixes
→ re-verify → one final fix). Final result: **5 slides**, inserted right after
"Von Funktionen zu Objekten — der nächste Schritt" (11c's closing slide). Covers:
Klasse-vs-Objekt (Bauplan/Vertragsformular-Analogie, concept-only, `header-cols`) →
`class`/`__init__` (the `Schaden`-Klasse, `self`-Bindung) → Methoden (11c's
`ist_ausreisser()` rebuilt as a method — split across 2 slides, old function-call style
then new method-call style, same title on both per the established split convention) →
Anwendung + Synthese (multiple `Schaden` objects + list comprehension, bridge to
11e/Pandas). Explicitly out of scope per the plan: Vererbung, Polymorphismus,
Encapsulation, `@staticmethod`/`@classmethod`, magic methods beyond `__init__`.

**Same footer-collision pattern, again — 3 of 4 first-draft slides needed fixes**,
including one real (not just tight) text/credit-line overlap on the closing synthesis
slide, exactly the recurring §9f/§11g/§11h/§11i blind spot. All fixed and re-verified.

**Student-review follow-up (4 fixes):** (1) a one-line forward-pointer added to the
concept-only Klasse/Objekt slide so it doesn't feel like a dead end before code
appears, (2) the `self`-explanation expanded from a vacuous "Python passes it
automatically" into 2 (later merged to fit) bullets that explicitly connect `self` to
a concrete method call, (3) the weak code-comment-only old/new contrast on the
Methoden slide was upgraded to a **full second code block — done via a 2-slide split**
(same title, no bridge, per the user's established convention) rather than cramming a
second code block onto an already-tight slide, (4) the synthesis slide's closing
paragraph — cut hard to ~20 words in the pre-review fix round — was expanded back to
~3 sentences that re-anchor the original 400.000-Verträge motivation and give a
concrete Pandas example (`df.describe()`) instead of a bare "wie Pandas" name-drop.
One more real footer collision surfaced on the `class`/`__init__` slide after the
`self`-explanation expansion (4 bullets was one too many) — fixed by merging 2 bullets
back into 1, re-verified clean.

**Lesson reinforced (3rd time in §11): expanding a slide that just passed QA is not
free, even when the expansion looks small** — re-render and pixel-check after every
content addition, not just after the first draft.

---

### 11k. Outcome — Cluster 11e (2026-08-17) — ✅ Implemented, APPROVED — §11 Python-Vertiefung block COMPLETE

Authored via the full loop (`edu-research` → `slidev-content-transformer` →
`slide-visual-reviewer` → fix round → re-verify → `student-reviewer` → follow-up
fixes incl. one new SVG diagram → re-verify). Final result: **5 slides**, the last
sub-cluster of §11 — inserted right after "Schäden als Objekte" (11d's closing slide).
Covers: NumPy (Arrays/Vektorisierung, brief — deliberately does not repeat 11a's
corrcoef/polyfit examples) → Pandas Series (**the payoff moment of the entire §11
arc**: the same 6 Schadenshöhen from 11a's `statistics`-module version, now as
`pandas.Series.mean()/median()/std()` in one line) → Pandas DataFrame `.corr()`
(Fahrzeugalter/Reparaturkosten, r≈0,99 matching the already-established value) →
Matplotlib scatter plot (with a real embedded SVG, see below) → Scikit-Learn
one-sentence outlook + the **full §11-block synthesis**, bridging to the actual next
deck topic: Trainingsdatensatz/Validierungsdatensatz (Train/Val-Split).

**Same footer-collision pattern once more (1 of 5 slides):** the DataFrame `.corr()`
slide overlapped its credit line — fixed by removing a redundant "Ausgabe:" table
block (the result was already shown as a code comment) and trimming a repetitive
closing paragraph.

**Content-accuracy catch during the same fix (not just a layout issue):** that closing
paragraph originally claimed *"Korrelation ist nicht Kausalität — Alter und Abnutzung
sind gekoppelt, aber eines verursacht nicht das andere"* — factually shaky for THIS
dataset, since vehicle age plausibly *does* cause higher repair costs (wear over time),
and this exact dataset has been used throughout the deck as the example of a genuine,
strong linear relationship (it's what the Regression/R²=0,98 clusters were built on).
The correlation≠causation lesson was already correctly taught elsewhere (Eis/
Ertrinkende example, Cluster 2b) — forcing it onto a dataset where it doesn't actually
apply undermines the lesson rather than reinforcing it. Fixed by dropping the claim
entirely and keeping only the accurate "matches your hand calculation" point. **Lesson
(reinforces the Fahreralter/Fahrzeugalter mix-up from earlier the same day): don't
staple a pedagogical caveat onto every slide that mentions correlation — check whether
it's actually true for THIS specific dataset before repeating a lesson from elsewhere.**

**Student-review follow-up (3 fixes, one involving new visual asset creation):**
(1) NumPy slide gained one clause explicitly naming the NumPy→Pandas relationship
("NumPy liefert die Geschwindigkeit — Pandas baut darauf auf") since reviewer found
the two libraries felt like disconnected name-drops without it, (2) Pandas Series
slide's code comment was changed from a vague "alle drei auf einmal" to the actual
printed output values (`7433.33 1250.0 15000.0`) so the "identical to your hand
calculation" claim is verifiable, not just asserted, (3) the Matplotlib slide's
**biggest gap** — a "Sichtbar machen" (visualization) slide with no actual
visualization, just code claiming a plot would look a certain way — was fixed by
generating a real SVG scatter plot via the `diagram-generator` agent (reading the
theme's actual primary color from `theme-fom/styles/layouts.css` rather than
guessing), converting the slide from `layout: default` to `layout: header-cols`
(code left, chart right), and embedding it via `<img>` per the existing
`fahreralter_ushap.svg` convention. Deliberately did **not** apply reviewer's fourth
suggestion (a DataFrame preview table on the `.corr()` slide) since that slide had
just been trimmed to fix an overflow — re-adding content there would have undone the
fix.

**§11 Python-Vertiefung block — COMPLETE.** 29 slides across 11a (10) + 11b (6) +
11c (3) + 11d (5) + 11e (6), spanning from "Statistik in Python" through OOP to
professional libraries, closing with an explicit bridge to Supervised ML. Every
sub-cluster went through the full research→author→visual-QA→student-review loop, and
every cluster needed at least one visual-QA fix round — the recurring
`<LiteraturSource>`-is-`position:absolute` blind spot (first logged §9f, reinforced
§11g/h/i/j/k) held true across all five. Remaining open gap unchanged: the
Jupyter/Docker/Kubernetes/GitHub/CRISP-DM-Detail tooling chapter (§11 intro note) is
still unscheduled — a separate decision, not part of this arc.

**Post-approval user design-review (2026-08-17, same day) — 3 more slide-level fixes
after the loop closed:**
1. "Matplotlib — Sichtbar machen" title was too vague (visible *what*?) — renamed to
   "Matplotlib — Korrelation sichtbar machen", tying the title to what the slide
   actually demonstrates.
2. "Scikit-Learn — Ausblick & Gesamtsynthese" was doing two unrelated jobs on one
   slide (a one-sentence library teaser AND the entire §11-block recap/bridge) and
   used the disliked "Synthese" meta-label (same objection as the "Kopier-Falle"
   rename earlier the same day). **Split into two slides**: "Scikit-Learn — ein
   Ausblick" (just the teaser) and "Was Du jetzt kannst" (the recap + bridge to
   Train/Val-Split, no meta-label in the title). §11e is now **6 slides**, §11 total
   **30 slides**.

**Lesson (3rd occurrence of the same pattern in one day, see also §11g's Kovarianz
fix and the "Kopier-Falle"/"Die Kopier-Falle" rename): process-role words in slide
titles — "Synthese", "Anwendung + Synthese", vague verbs like "Sichtbar machen"
without an object — consistently read as unclear or off-putting to the user. Default
to content-descriptive titles from the start; don't wait for a design-review pass to
catch this category of issue.**

**Next up:** Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) — Einstieg
Supervised ML (outside §11, resumes the main prerequisite chain from §3).

**Next up:** 11c — Funktionen.

**Next up:** 11b — Kontrollstrukturen (if/elif/else, Schleifen).
