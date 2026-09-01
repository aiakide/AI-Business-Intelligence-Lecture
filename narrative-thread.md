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

[Kapitel 4 — Supervised ML (Klassifikation & Vorhersage mit gelabelten Daten)]
  Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) →
  Evaluierungsmetriken: Accuracy, Precision, Recall, F1-Score, Confusion Matrix →
  Supervised ML Algorithmen: KNN, Entscheidungsbäume, Random Forest, Gradient Boosting →

[Kapitel 5 — Unsupervised / Clustering (Musterentdeckung ohne Labels)]
  ⚠️ MENTAL SHIFT: Keine vordefinierten Klassen (Betrug/Nicht-Betrug); stattdessen: Versteckte Gruppen selbst finden
  Clusteranalyse-Prozess (Distanzmaße, Algorithmen-Taxonomie, K-Bestimmung, Evaluationskriterien) →
  Clustering-Algorithmen: K-Means, Hierarchisches Clustering (Agglomerativ), BIRCH, DBSCAN, Spectral, Mean Shift, Gaussian Mixture →
  WCSS & Elbow Method (Optimal-K-Bestimmung) →
  Bonus: Clustering für Anomalieerkennung (Rückbrücke zu Kapitel 4 Betrugserkennung) →

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
| 11.0 | Python-Grundsyntax (Vorspann vor 11a, retrofitted 2026-08-18: Variablen/Listen/`print()`+f-Strings, Module & `import` — Standardbibliothek vs. Third-Party, Punkt-Notation `modul.funktion(argument)`, Full-Circle-Moment mit 11a's erstem Codeblock) — 3 Slides | 2 | Versicherer (home base) | ✅ approved (1 visual-QA loop + 1 student-review follow-up) | 2 |
| — | *(§11 Python-Vertiefung KOMPLETT — 33 Slides über 11.0 + 11a–11e (3+10+6+3+5+6). next: Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) — Einstieg Supervised ML, außerhalb §11. Jupyter/Docker/K8s/GitHub/CRISP-DM-Detail-Gap weiterhin offen, siehe §11 Schlussnote)* | 2 | Versicherer | ⬜ next | — |
| — | *(Kapitel 1–4 + Tooling: KOMPLETT; siehe TODO.md §1–2 für Status)* | 1–4 | Versicherer | ✅ approved | — |
| 5.0 | Kapitel-Opener — "Kapitel 5: [Clusteranalyse & Segmentierung]{style=...}" (layout: chapter, analog zu Kapitel 1–4) + Lernziele-Folien | 5 | Versicherer | ✅ approved (live seit Sessionbeginn, in jeder Visual-QA-Runde bestätigt) | — |
| 5.1 | Clusteranalyse-Prozess — Unsupervised Learning: Warum Segmentierung ohne Labels? (Hook: Unbekannte Kundensegmente. Foundation: Clustering vs. Klassifikation, Distanzmaße, Prozess-Übersicht. Application: Fahrertyp-Segmentierung. Synthesis: Brücke zu K-Means/Algorithmen) — 4–5 Slides | 5 | Versicherer (Kundensegmentierung) | ✅ approved (mehrere Overflow-Fixrunden durch Diagramm-Integration, User-Feedback zu Distanzmaß-Intuition führte zu Redaktionsrunde mit neuem 3-Panel-Diagramm 2D/3D/n-D `public/distanz-dimensionen-diagramm.svg`, Farbkorrektur, Redundanz-Bereinigung) | 3+ |
| 5.2 | K-Means-Algorithmus — Iterative Zentroid-Basierte Segmentierung (Hook: Fünf Tausend Kunden blind in 3 Risikogruppen. Foundation: Zentroide, Zuordnung/Update-Zyklus, Initialisierung, Konvergenz. Application: K=3 Versicherungs-Segmente (Junges Hochrisiko, Mittleres Standard, Älteres Niedrigrisiko) mit Euklidischer Distanz. Synthesis: K-Means vs. Distanzmaße/Skalierung, Vorteile/Nachteile, k-means++-Initialisierung, Ausreißer-Sensibilität) — 5–6 Slides | 5 | Versicherer (Kundensegmentierung) | ✅ approved (mehrere User-Feedback-Runden: Magnet-Analogie durch schematisches Diagramm ersetzt, Vor-/Nachteile-Folie zur Tabelle umgebaut, Elbow/Knie-Begriff erklärt, fehlende Quellen-URL nachgetragen, Schritt-Anzahl im Titel korrigiert, Zentroid-Zahlen eingeführt) | 3+ |
| 5.3 | Hierarchisches Clustering (Agglomerativ) — finale Fassung nach zusätzlichen User-Feedback-Runden. Stammbaum-Text-Metapher durch neues abstraktes Diagramm ersetzt (`public/dendrogramm-idee-diagramm.svg`). Fehlender Motivations-Kontext ergänzt (4 Folien hatten keine klare Übergangsfrage — jetzt mit expliziten Motivationssätzen z.B. "wie misst man Distanz zwischen GRUPPEN statt Punkten?"). Rendering-Bug behoben: `{A,B}`-Notation wurde von Slidev/Vue als Template-Ausdruck geparst — durch runde Klammern ersetzt. "(Cluster 5.1)"-interne Referenz entfernt. "WCSS" als unerklärter Fachbegriff durch Klartext ersetzt. Single/Complete- und Average/Ward-Linkage-Tabellen durch zwei neue Diagramme ersetzt (`public/linkage-single-complete-diagramm.svg`, `public/linkage-average-ward-diagramm.svg`). Entscheidungskompass-Folie von Two-Column-Bullet-Liste zu einer 5-Zeilen-Tabelle umgebaut; DBSCAN-Vorgriff entfernt (soll erst in Cluster 5.5 als Hook stehen). **9 Folien** (vorher 7) | 5 | Versicherer (Kundensegmentierung, kompatibel zu K-Means) | ✅ approved | 3+ |
| 5.4 | BIRCH (Balanced Iterative Reducing and Clustering using Hierarchies) — Clustering im Terabyte-Maßstab — **finale Fassung nach zusätzlichen User-Feedback-Runden.** Section-Opener mit ausgeschriebenem Akronym → Skalierungskrise + CF-Definition (Tabelle N/LS/SS, CF-Akronym "Clustering Feature" beim ersten Vorkommen explizit eingeführt) → Lager-Analogie statt Bibliotheks-Analogie (Paletten mit Tragfähigkeits-Grenze pro Lagerplatz — didaktisch plausibler als willkürliche Gewicht-Sortierung nach Büchern; das Gewicht-Tracking ist motiviert durch echte Ressourcen-Constraints) → CF-Baum mit Diagramm (`public/cf-tree-diagramm.svg`) → Stärken/Grenzen-Tabelle. "Synthese:"-Label durch "Das Wichtigste:" ersetzt (User mag "Synthese" nicht; konsistent mit Labels an anderer Stelle). **NEUE Folie eingefügt:** "Ein CF ganz konkret — zurück zu den Paletten" — konkrete Beispielrechnung (3 Paletten: 80/95/110 kg → N=3, LS=285, SS=27.525 → Durchschnitt 95kg, Streuung 150 → Update mit vierter Palette zeigt Additivität ohne erneutes Anfassen der Rohdaten). Dabei Inkonsistenz behoben: Die Lager-Analogie sagte fälschlich, drittes CF-Element sei "Durchschnittsgewicht" — korrekt ist SS = Summe der quadrierten Gewichte (Durchschnitt wird erst daraus abgeleitet). Bewusst schlank gehalten (BIRCH konzeptuell kompakter). Zitate: Zhang/Ramakrishnan/Livny (1996) Originalquelle, Scikit-Learn Doku. **6 Folien** (vorher 5). Multiple Overflow-Fixrunden nach jeder Texterweiterung (etabliertes Muster: neuer Inhalt verdrängt vorhandenen Text über die Foliengrenze, wird durch Kürzen/Splitten behoben). | 5 | Versicherer (Kundensegmentierung) | ✅ approved | 3+ |
| 5.5 | DBSCAN (Density-Based Spatial Clustering of Applications with Noise) — Clustering im Merkmalsraum: ε/MinPts-Parameter, Punkttypen (Kernpunkt/Randpunkt/Rauschpunkt) mit Diagramm, Algorithmus-Schritte, 6-Kunden-Praxis-Beispiel, Interpretation, Vor-/Nachteile-Tabelle, Brücke Betrugserkennung. **10 Folien.** Zitate: Ester/Kriegel/Sander/Xu (1996) Originalquelle, Tan/Steinbach/Kumar (2019), Scikit-Learn Doku. **WICHTIGE INCIDENT-DOKUMENTATION:** (1) **Echter Build-Crash gefunden:** Geschweifte Klammern in Tabellenzellen wie `{A, B, C}` brachten den `@comark/markdown-it`-Parser komplett zum Absturz (500-Fehler). Fix: geschweifte Klammern in Tabellenzellen konsequent vermeiden — auch in Zukunft Problem, nicht nur "stilles Rendering" wie bei `{A,B}`-Text-Fällen in 5.3. (2) **Rechenfehler gefunden & korrigiert:** Punkttypen-Folie behauptete ursprünglich, B und E seien Randpunkte. Distanzberechnung (ε=4, MinPts=2) zeigt aber: A,B,C und D,E sind ALLE Kernpunkte. Dataset enthält keinen Randpunkt; Randpunkt nur schematisch in Diagramm-Legende erklärt, nicht im Beispiel behauptet. (3) **Kleinere Fixes:** ε fälschlich als "km"-Einheit (korrigiert zu dimensionslos/Merkmalsraum-Einheit), Grammatikfehler ("überlapps sehen"), Tippfehler "Terrabyte"→"Terabyte", interne Cluster-Nummern wie "(5.2)" aus studierenden-sichtbarer Zusammenfassungstabelle entfernt (konsistent mit 5.3-Entscheidung). (4) **Overflow-Fixrunden:** Praxis-Beispiel-Tabelle + Interpretation musste gesplittet werden. | 5 | Versicherer (Kundensegmentierung) | ✅ approved | 3+ |
| — | **[KAPITEL 5 — ABGESCHLOSSEN, KEIN OFFENER PUNKT MEHR]** — K-Means (5.2, 5–6 Folien, approved), Hierarchisch/Agglomerativ (5.3, 9 Folien, approved), BIRCH (5.4, 6 Folien, approved), DBSCAN (5.5, 10 Folien, approved), WCSS & Elbow (5.6, 6 Folien, approved). Spectral Clustering (5.7) authored, approved, dann auf User-Wunsch wieder entfernt (siehe 5.7-Eintrag). **Zusammenfassung aller vier Algorithmen auf eigener Folie** (Vergleichstabelle K-Means / Hierarchisch / BIRCH / DBSCAN nach Distanzmaße, Skalierungsfähigkeit, Cluster-Formen, Rausch-Sensibilität). **Mean Shift/Gaussian Mixture Models (5.8) — bewusst übersprungen**, nie authored (nachrangig laut Modulbeschreibung, im Gegensatz zu Spectral Clustering dort nicht explizit genannt). **Kapitel-5-Übung ✅ KOMPLETT** (Jupyter-Notebooks statt Markdown-Worksheet, siehe §7 Progress Log). Kapitel 5 ist damit vollständig geschlossen — kein offener Punkt, kein "next" mehr in diesem Kapitel. | 5 | Versicherer | ✅ Kapitel 5 final, nichts offen | — |
| 5.6 | WCSS & Elbow-Methode (Optimal-K-Bestimmung) — **6 Folien** (von 7 nach Post-Approval-Redesign), approved (2026-08-29). Siehe §23 für detaillierte Dokumentation der Überarbeitungen und deckweiten QA-Fixes. | 5 | Versicherer (Kundensegmentierung, Fortsetzung 5.2) | ✅ approved | 2+ |
| 5.7 | Spectral Clustering — **❌ ENTFERNT (User-Entscheidung, 2026-08-29)** — Cluster wurde auf Nutzer-Wunsch komplett aus `slides.md` entfernt. Zuvor als 7 Folien mit Section-Opener/Hook-Diagramm/Ähnlichkeitsgraph/Eigenvektor-Intuition/Workflow/Vor-Nachteile/Zusammenfassung geplant; Diagramm `public/spectral-hook-diagramm.svg` gelöscht; Kapitel-5-Zusammenfassung von 5 auf 4 Algorithmen reduziert. Kapitel 5 enthält final nur K-Means/Hierarchisch/BIRCH/DBSCAN + WCSS/Elbow (4 Algorithmen). Spektral Clustering bleibt eine optionale Vertiefung für Kapitel 8–10 (wenn Zeit). | 5 | Versicherer (Kundensegmentierung) | ❌ entfernt | — |
| 6.0 | Kapitel 6 Opener + Lernziele — "Kapitel 6: [Deep Learning]..." (layout: chapter) mit Illustration + zwei Lernziele-Folien (Verstehen & Erklären / Kritisch Reflektieren) nach dem 3-Tier Bloom's-Format — 3 Folien | 6 | — (structural) | ✅ authored, awaiting visual QA | — |
| 6.1 | ML vs. Deep Learning (Architektur, Datenbedarf, Rechenaufwand, Interpretierbarkeit) — 4-Tier Cluster (Hook: Fotos statt Tabellen; Foundation: Architekturen & Feature-Engineering; Application: Versicherer-Szenarien + Pérez-Zarate Insurance Case; Synthesis: Bridge zu 6.2) — **5 Folien** (6.1-1 Hook default, 6.1-2 Architecture header-cols, 6.1-3 Data/Compute table default, 6.1-4 Decision heuristic default, 6.1-5 Synthesis+Bridge default) | 6 | Versicherer (primary: Kfz-Schadensfotos; secondary: Betrugserkennung aus Tabelle zum Kontrast) | ✅ authored, awaiting visual QA | — |

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

### 11.0 — Python-Grundsyntax (Vorspann, inserted 2026-08-18, retrofitted before 11a)

**Trigger:** After 11a–11e were fully authored/approved, user noticed a real gap: 11a's
very first slide ("Lagemaße in Python") already uses `import statistics`, list literals,
`print()` with f-strings, and dot-notation function calls (`statistics.mean(...)`) — and
11a's later slides use `import numpy as np` / `np.array(...)` — with **zero** prior
explanation of what any of that syntax means. The formal "was ist ein Package"
explanation doesn't land until 11e, four sub-clusters later. Not a reordering problem
(moving 11e earlier would break the already-built 11d→11e "OOP primes you to understand
DataFrames as objects" bridge) — a **missing-primer** problem. Fix: add a short syntax
primer immediately before 11a, scoped *exactly* to what 11a's code actually uses — no
more. Considered and rejected: moving all of 11e before 11b (breaks the OOP bridge);
stripping NumPy out of 11a entirely (would lose the `ddof` statistics-vs-NumPy pitfall
slide, one of 11a's strongest teaching moments — see §11g).

**Naming note:** deliberately NOT relettered into the 11a–11e sequence (i.e. not "11a"
with everything else shifting to 11b–11f) to avoid rewriting cross-references across
§11g–§11k's already-approved outcome logs. Labeled "11.0" — sorts before 11a, no
renumbering of shipped content.

**Insertion point:** Immediately after the "Von der Formel zum Code" section-divider
slide (the `layout: section` slide that opens the whole Python-Vertiefung block),
before "Lagemaße in Python" (11a's first slide).

**Scope (verified against every code block actually used in 11a — nothing beyond this):**
1. **Variablen, Listen & `print()`** — assignment (`=`), a list literal
   (`schadenshoehen = [800, 1100, ...]`), and `print()` including an f-string example
   (`print(f"Mittelwert: {...}")`) — 11a's very first code block uses all three at once.
2. **Module & `import`** — what a module/package is; standard library (`statistics`,
   ships with Python) vs. third-party package (`numpy`, needs installing) — enough to
   make `import statistics` / `import numpy as np` legible, not a packaging deep-dive
   (no `pip install` mechanics, no virtual envs — out of scope, too advanced for this
   audience at this point).
3. **Funktionsaufrufe lesen — Punkt-Notation** — `modul.funktion(argument)` as a
   pattern (`statistics.mean(schadenshoehen)`, `np.array([...])`) so the dot-syntax
   itself isn't a mystery. Close with an explicit "jetzt kannst Du die 11a-Beispiele
   lesen" bridge.

**Estimated slides:** 3, `default` layout, ONE code block per slide (per the density
lesson reinforced across every other §11 sub-cluster).

**Continuity:** use Dataset A (6 Schadenshöhen) as the running example throughout, since
that's exactly what 11a's first slides use — no new toy data.

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

---

### 11l. Outcome — Cluster 11.0 (2026-08-18) — ✅ Implemented, APPROVED — retrofitted prerequisite gap closed

**Trigger:** After 11a–11e shipped, user noticed 11a's very first code block (`import
statistics`, list literal, `print(f"...")`, `statistics.mean(...)`) used syntax that was
never explained anywhere — the formal "what is a package" content didn't land until
11e, four sub-clusters later. See §11.0's planning entry (above §11a) for the full
trigger analysis and the two rejected alternatives (reordering 11e earlier; stripping
NumPy out of 11a).

Authored via the full loop (`edu-research` → `slidev-content-transformer` →
`slide-visual-reviewer` → fix round → re-verify → `student-reviewer` → follow-up fix
→ re-verify). Final result: **3 slides**, inserted between the "Von der Formel zum
Code" section-divider and "Lagemaße in Python" (11a's first slide) — i.e. now the true
start of the whole Python-Vertiefung arc. Covers: Variablen/Listen/`print()`+f-Strings
→ Module & `import` (Standardbibliothek vs. Third-Party, explicitly NOT `pip install`/
venvs) → Punkt-Notation (`modul.funktion(argument)`), closing with a deliberate
**"full-circle" moment**: slide 3's code block is byte-identical to 11a's first code
block, so the student sees the exact same lines twice — first as "here's the pattern,"
then (on the very next slide, in 11a) as "here's what it computes."

**Same footer-collision pattern once more:** slide 3 (Punkt-Notation) originally
included its own full "Ausgabe:" output block — redundant, since 11a's next slide
shows the identical code with its own output seconds later — and this pushed the
slide 67px past the canvas into the credit line. Fixed by removing the duplicate
Ausgabe block entirely (code-only is fine here; the output payoff is deliberately
deferred one slide).

**Student-review follow-up (1 fix):** reviewer flagged that removing the Ausgabe block
left a validation gap — a true first-time-ever-seeing-code student has no way to
confirm "did I read that dot-notation correctly?" before the next slide. Fixed by
adding a single compact line with the output values in parentheses as a "Selbstcheck"
hint (not a full re-added Ausgabe block, which would have reintroduced the overflow
just fixed) — low-risk, one line, addresses the confidence gap without re-growing the
slide.

**§11 Python-Vertiefung block, final total: 33 slides** (11.0's 3 + 11a's 10 + 11b's 6
+ 11c's 3 + 11d's 5 + 11e's 6). Every sub-cluster — six now, including this
retrofitted one — went through the full loop and needed at least one visual-QA fix
round; the `<LiteraturSource>`-is-`position:absolute` footer-collision blind spot
(§9f) held true in 100% of sub-clusters, no exceptions.

**Next up:** Tooling chapter (§12) — scheduled immediately after Python-Vertiefung exercise, before Supervised ML.

**Next up (after Tooling):** Trainingsdatensatz / Validierungsdatensatz (Train/Val-Split) — Einstieg Supervised ML (outside §11, resumes the main prerequisite chain from §3).

---

## 12. Cluster — Tooling & Professional Workflows (planned 2026-08-19)

**Status:** ✅ Authored, QA'd, uncommitted (2026-08-19) — 12 content slides in `slides.md`. Visual QA (`slide-visual-reviewer`) and student-perspective QA (`student-reviewer`) both run; overflow findings from the first visual pass fixed and re-verified clean.

**Placement correction (2026-08-19):** Split across the exercise instead of grouped entirely after it. Jupyter Notebooks now sits *before* the Python-Vertiefung exercise (students need to know what a notebook is before opening one), the exercise stays in place, and Docker/Kubernetes/Git/GitHub/CRISP-DM (4 slides)/Synthesis follow *after* the exercise. Final order: Section divider "Professionelle Tools & Workflows" → Jupyter Notebooks → Exercise (Python-Vertiefung) → Docker → Kubernetes → Git — Versionskontrolle → GitHub — Zusammenarbeit im Team → CRISP-DM — Die 6 Phasen → CRISP-DM — Der Kreislauf → CRISP-DM — Unser Weg (1/2) → CRISP-DM — Unser Weg (2/2) → Synthesis ("Drei Ebenen, ein Prozess"). Bridge sentences at every seam were rewritten to match.

**QA round 1 findings (visual):** Docker, GitHub, CRISP-DM Overview, and the CRISP-DM Mapping table all overflowed the canvas (up to 34% on the table) and collided with the `<LiteraturSource>` footer — the known blind spot held true again. Kubernetes was borderline (exactly at the pixel ceiling).

**QA round 1 findings (student):** Flow judged pedagogically sound (Jupyter-before-exercise correct, bridges natural). Gaps: `[kommende Sessions]` in the mapping table too vague for paying professionals; exercise slide doesn't say where the notebooks live; "deklarativ" introduced without scaffolding; enterprise-scale examples (400k Schäden/Minute) may feel remote for SME-focused consultants; CRISP-DM Overview doing double duty (phases + cyclicity).

**Fixes applied (2026-08-19):** Docker trimmed and merged closing paragraphs (also folds in an SME-scaling note). Kubernetes reframed "deklarativ" to lead with the plain-language explanation; its closing bridge paragraph moved to open the new Git slide. GitHub split into "Git — Versionskontrolle" + "GitHub — Zusammenarbeit im Team". CRISP-DM Overview split into "Die 6 Phasen" + "Der Kreislauf" (cyclicity now has room for concrete loop-back examples). Mapping table split into "Unser Weg (1/2)" + "(2/2)", 3 rows each, `[kommende Sessions]` replaced with concrete session ranges. Re-verified clean by a second visual QA pass — 0 overflow, 0 clipping across all 12 slides.

**Known follow-up (not fixed):** the exercise slide references "sechs Jupyter Notebooks in Google Colab" but no `.ipynb` files exist in the repo yet and there's no actual Colab link — didn't fabricate one. See TODO.md.

**Correction (2026-08-19/20, from user):** notebooks run in **Google Colab**, not locally. Rewrote the Jupyter slide (mentions Colab explicitly), the exercise CTA ("Notebooks in Colab öffnen"), and the Docker slide's hook — it previously claimed students "just wrote code on their own machine," which is false under Colab. Reframed around: Colab manages *your* environment for you, but a company Data-Science team doesn't have that privilege across its own machines/servers — that's still Docker's real problem, just without the false premise. First version of the reframed Docker hook overflowed again (confirmed visually, metric false-negative as before); trimmed and re-verified — fits now but at only ~7.5px margin, flagged as fragile (same status as the CRISP-DM "Die 6 Phasen" slide — no room for future edits without re-checking).

**Tool logos added (2026-08-20):** small inline SVG logos (devicon, MIT-licensed) next to the heading on Jupyter/Docker/Kubernetes/Git/GitHub slides — `public/logos/{jupyter,docker,kubernetes,git,github}.svg`, referenced via `<img :src="'/logos/…svg'" class="inline-block h-9 align-middle mr-2" />`. **Gotcha:** a static `src="..."` attribute on `<img>` inside a markdown heading breaks the build — Slidev/Vue statically transforms it into a build-time import, which Vite's `server.fs.allow` then rejects for `/logos/*` (even though the file is served fine at runtime, e.g. via `<Illustration>`). Must use a dynamic `:src="'/path'"` binding instead. Re-verified clean on all 5 slides after the fix; Docker remains margin-fragile (unrelated to the logo, pre-existing).

**Docker/Kubernetes/Git expanded with concept diagrams (2026-08-20, from user):** user felt one slide each for Docker and Kubernetes was too thin and asked for diagrams. Split each into 3 slides (Docker: Das Problem → Image & Container → Im Versicherer-Fall; Kubernetes: Wozu Orchestrierung? → Deklarativ → Im Versicherer-Fall), each middle slide carrying a new custom SVG diagram generated by `diagram-generator` in the deck's established Excalidraw-derived style (`#00C6B2` primary, Montserrat/Fira Code, 2–3px strokes) — `public/docker-image-container-diagram.svg` (Image → `docker run` → 3 identical containers on Laptop/Server/Cloud) and `public/kubernetes-orchestration-diagram.svg` (declarative control loop + autoscaling 5→50 replicas during a Sturmnacht spike). First pass at `max-height: 300px` overlapped the footer (user caught it); trimmed surrounding text and reduced to `max-height: 210px`, re-verified clean with ~65–85px margin.

Same request extended to Git: split "Git — Versionskontrolle" and added a new "Git — Branches & Merges" slide with `public/git-branch-merge-diagram.svg` (main branch commits, a `fix/raw-data-encoding` feature branch forking and merging back — deliberately reuses the same branch name as the GitHub slide's Versicherer-Team example for continuity between the two slides). Verified clean on first pass at `max-height: 210px` (applied the Docker/Kubernetes lesson proactively).

Tooling cluster is now 15 slides (was 8 at initial authoring, 12 after the QA-fix round, +3 from this diagram expansion).

**CRISP-DM classic cycle diagram + cluster-closer cleanup (2026-08-20, from user):** added the canonical CRISP-DM circle diagram (Shearer 2000 / IBM-SPSS style — 6 phases on a ring, central "Daten" hub with spokes to all phases, outer cyclical arrow, plus the well-known tight Data Preparation↔Modeling iteration pair) — `public/crisp-dm-cycle-diagram.svg`, embedded on "CRISP-DM — Der Kreislauf" (replacing the old bullet-list explanation of cyclicity; the diagram now carries that point visually). Verified clean on first pass.

User also asked to delete "Drei Ebenen, ein Prozess" (the old synthesis slide). Its closing bridge sentences ("Jetzt lernen wir den nächsten Schritt... Train/Validation-Split") were still needed to transition into Supervised ML, so first attempt appended them to "Unser Weg (2/2)" — overflowed (that slide already carries a table). Fixed by giving the bridge its own new minimal slide, "Von der Infrastruktur zum Modell", styled with `layout: statement` (matches how the deck already uses that layout for short punchy transitions, e.g. "Dasselbe Prinzip, andere Branche") rather than `layout: default`, which would have looked awkwardly sparse for two sentences. Verified clean.

Tooling cluster is now 16 slides.

**Promoted to Session 3, plus new Session 2 opener (2026-08-20/21, from user):** user asked for two new `layout: chapter` session-opener slides (matching the Session 1 style — `::left::` colored title + `::right::` Illustration), one before Python-Vertiefung and one before the Tooling cluster. This promotes both from sub-blocks within Session 2 (as planned in the §12 entry above, "Session 2a"/"Session 2b") to their own full sessions: **Session 2 = Python-Vertiefung**, **Session 3 = Tools & Workflows**. Illustration used for Session 2: `coding-bro.svg` (reused from the exercise slide). Illustration for Session 3: a new Storyset "Bro" graphic fetched via `storyset-illustrator`, adapted to `#00C6B2` — see its own file for the exact name.

The existing "Von der Formel zum Code" `layout: section` mini-divider was kept immediately after the new Session 2 opener (it carries distinct content — a bridge tagline, not a repeated title). The existing "Professionelle Tools & Workflows" `layout: section` divider was instead **replaced** by the new Session 3 opener, since stacking two near-identical titles back-to-back would have been redundant.

**Cascading renumbering:** every session from Supervised ML onward shifts by +2 versus all prior planning in this document (old Session 2/3/4/5/6–8 → new Session 4/5/6/7/8–10). Fixed the live numbers that appear inside `slides.md` itself (the z-Transformation→ML-pipelines callout, the Scikit-Learn bridge sentence, and the CRISP-DM "Unser Weg" mapping table's Data Preparation/Modeling/Evaluation/Deployment rows) and in `TODO.md`. Did **not** rewrite this file's own historical dated entries above (e.g. §12's "Session 2b" language, the §10 "Session 2" pipeline references) — they're a record of what was true when written, not a live spec; this entry is the pointer forward for anyone who lands on the old numbers.

**CRISP-DM diagram redone to match a specific reference (2026-08-20, from user):** user didn't like the first custom-diagram-generator take and supplied a reference image (`/Users/nils/Downloads/wi-crisp-en.jpg`, the well-known IBM-style CRISP-DM figure) to recreate closely. `diagram-generator` read the reference image directly and rebuilt `public/crisp-dm-cycle-diagram.svg` from scratch: 6 phase circles in a ring around a central "Data" hub, two-tone blue/purple scheme (matching the reference, a deliberate one-off departure from the deck's teal-only palette elsewhere), custom per-phase icons, dashed ring connectors plus two bold solid arrows (Modeling→Data Preparation, Evaluation→Business Understanding cutting inside the ring past Deployment) — matches the reference structure. Also bumped the slide's image `max-height` from 230px to 270px (square diagram needed more room than the old wide one). Verified clean, no overflow, footer clearance intact.

**Recolored to FOM palette + Heroicons (2026-08-20, from user):** the blue/purple scheme (faithful to the reference image but off-brand for this deck) was swapped for the deck's own teal palette (#00C6B2, light teal/gray tints, no blue/purple), and the hand-drawn icons replaced with real Heroicons outline icons (MIT-licensed, heroicons.com): chat-bubble-left-right (Business Understanding), circle-stack (Data Understanding), funnel (Data Preparation), cpu-chip (Modeling), clipboard-document-check (Evaluation), rocket-launch (Deployment), server-stack (Data hub). Same ring geometry/arrows preserved. Verified clean — visually confirmed directly (not just via subagent report) given this is a user-facing deliverable.

**Trigger:** TODO item 1 (oldest open gap, flagged 2026-08-10). The Tooling chapter (Jupyter/Docker/Kubernetes/GitHub/CRISP-DM-Detail from vorlage slides 15–19) was explicitly out of scope for §11 (Python-Vertiefung is code-literacy only, not tooling/process). Now scheduled as a standalone professional-workflows cluster.

**Correction (2026-08-19, from edu-research):** the plan below originally assumed CRISP-DM has 5 phases. Verified against Shearer (2000) and IBM/SPSS documentation: **CRISP-DM has 6 phases** — Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, **and Deployment as its own distinct phase** (not merged into Evaluation). The 12e/12f slide content must include Deployment explicitly — for the insurer case, framed as model serving, monitoring/retraining triggers, and operational handoff. This also strengthens the bridge to the Tooling topics already covered (Docker/Kubernetes are literally the Deployment-phase tools), so lead with that connection on the CRISP-DM slides rather than treating Deployment as an afterthought.

**Research citations gathered (edu-research, 2026-08-19):**
| Topic | Source | Year |
|---|---|---|
| Jupyter Notebooks | Jake VanderPlas, *Python Data Science Handbook* — https://jakevdp.github.io/PythonDataScienceHandbook/ | 2016 |
| Docker | Joshua Cook, *Docker for Data Science* (Apress) | 2017 |
| Kubernetes | Chip Huyen, *Designing Machine Learning Systems* (O'Reilly) | 2022 |
| GitHub/Git | *Data Science: A First Introduction*, Ch. 12 "Collaboration with Version Control" — https://datasciencebook.ca/version-control.html | 2024 |
| CRISP-DM | Colin Shearer, "The CRISP-DM Model: The New Blueprint for Data Mining", Journal of Data Warehousing vol. 5 | 2000 |

Full plan document (4-tier structure per topic, placement rationale, handoff notes) at:
`/private/tmp/claude-501/-Users-nils-projects-fom-repos-ai-business-intelligence-lecture/2463354a-ef29-4450-9e45-8132767eaee5/scratchpad/tooling-cluster-plan.md`

**Placement decision:** Insert immediately after the Python-Vertiefung exercise placeholder (line ~1912 in slides.md), creating Session 2b context ("Tooling & Professional Workflows") before Supervised ML (Train/Val-Split) begins. This creates a natural progression:
- Session 2a: Statistik wrap-up (Signifikanz) + Python code-literacy (33 slides) + Exercise
- Session 2b: Tooling (9–10 slides) + Supervised ML begins
- Sessions 3+: Continue per prerequisite chain

**Pedagogical rationale:** Students now understand code (Python-Vertiefung), so the where/how/why of code infrastructure becomes meaningful. Jupyter is the tool they'll use in upcoming labs. Docker/K8s explain the production reality. GitHub explains team collaboration. CRISP-DM anchors the entire process — revealing that students have been following this framework implicitly all along. This bridges from individual code literacy → professional/production context → algorithm training.

**Scope:** 5 tooling topics from vorlage + CRISP-DM detail as dedicated cluster (not just a namecheck):
- Jupyter Notebooks (1–2 slides)
- Docker (1–2 slides)
- Kubernetes (1–2 slides)
- GitHub (1–2 slides)
- CRISP-DM Overview (1 slide)
- CRISP-DM Mapping — Our insurer case (1–2 slides)
- Synthesis & bridge to Supervised ML (1 slide)

**Total: 7–11 slides, estimated 9–10 final.**

**Continuity rule:** Anchor all examples to the Versicherer home-base case — fraud detection model in production, deployed to 400k contracts, team collaboration on the pipeline, version control for reproducibility.

**Citation requirements:** Five research requisition briefs dispatched to edu-research:
1. Jupyter Notebooks (beginner-friendly overview, why it's the standard for data science)
2. Docker (reproducibility problem + container solution, data-science framing, not DevOps)
3. Kubernetes (orchestration/auto-scaling for ML workloads, production-deployment angle)
4. GitHub (version control in collaborative data science context, reproducibility angle)
5. CRISP-DM (framework definition + phase count verification — 5 vs. 6 phase versions exist)

All briefs require verified sources (not guesses). See planning document in scratchpad for detailed research requisitions.

**4-Tier pedagogical structure per topic:**
- Hook: Why this tool matters to data scientists
- Foundation: Clear definition and core concepts
- Application: Versicherer case example
- Synthesis: Bridge sentence to next topic

**Style notes (per §11k lesson):** No meta-labels like "Synthese", "Überblick", or vague process-titles in slide headings. Content-descriptive titles only ("Jupyter Notebooks", "Docker", etc.). Bridge sentences must be authored prose, emerging from content, not a UI widget.

---

**Session 1 Statistik-Übung (2026-08-21, from user):** Authored the first real exercise from TODO.md §7 (`Exercise — Session 1`). Format decision: pen-and-paper worksheet, not a Colab notebook — Kapitel 1 is explicitly framed as hand-calculation throughout ("von Hand gerechnet"), with the bridge sentence into Kapitel 2 literally saying code takes over *after* this point. A notebook here would contradict that framing and duplicate the Python-Vertiefung "Statistik in Python" notebook (#2 of six).

**Content:** Two running Kfz-Versicherer datasets across 6 tasks (5 core + 1 bonus) — (1) Schadenhäufigkeit (8 Versicherte) for Lagemaße/Streuung; (2) Fahrzeugalter/Reparaturkosten (5 Fahrzeuge) carried through Kovarianz→Korrelation→z-Transformation→OLS-Regression→R², reusing intermediate sums (S_xy, S_xx, S_yy) across tasks so students build on their own prior work instead of restarting each time. Task 5 applies a *given* logistic-regression model (coefficients provided, not fitted by hand — MLE isn't hand-computable) to compute p̂, odds, and verify the odds-ratio identity e^β ≈ odds ratio numerically. Task 6 (bonus) is pure interpretation — three p-value scenarios including a large-n/tiny-effect trap, testing statistical vs. practical significance.

**Files:** `uebungen/session1-statistik-uebung.md` (worksheet) + `uebungen/session1-statistik-loesung.md` (full worked solution, all arithmetic verified against a Python cross-check before publishing). Wired into `slides.md` as a `header-cols` exercise slide (matching the Python-Vertiefung exercise's visual pattern) inserted between the p-Wert slide and the Kapitel-2 chapter divider; `analytics-bro.svg` (previously unused) as the illustration. The old bridge sentence ("kein Versicherer wertet... Taschenrechner...") was preserved, moved to the end of the exercise slide's left column so the Python transition still lands right before the chapter break.

**Correction (2026-08-23, from user):** Python is fine for the Statistik-Übung too — dont frame it as calculator-vs-Python opposition. Softened the exercise slide CTA ("von Hand oder mit Python, ganz wie Du magst" instead of "Taschenrechner statt Python") and the worksheet intro (recommends hand-calculating at least Aufgabe 1 for understanding, then Python is explicitly fine for the rest). Kapitel-1-is-hand-calculation framing for the *lecture content itself* stays untouched — this only relaxes how the exercise is pitched to students.

**Relocation (2026-08-23, from user):** Moved the worksheet + solution out of this repo's `uebungen/` into the sibling `exercise` repo at `exercise/session-1/00-statistik/uebung.md` + `loesung.md` — that repo already holds the Session-1 Python-Vertiefung notebooks (`session-1/01-python-vertiefung/`, six `.ipynb` files, resolving the TODO.md follow-up about missing notebooks). `00-` prefix sorts the Statistik worksheet before `01-python-vertiefung`, matching chapter order. `lecture/uebungen/` removed (was untracked, never committed). No change to `slides.md` — it never linked the file path directly.

**Decision (2026-08-23, from user):** Kapitel 3 (Tools & Workflows) gets no dedicated exercise — TODO.md §7 item closed as wont-do rather than left open. Matches §5's own budget table, which never had a Kapitel-3 row (it did not exist as a chapter when that table was authored).

---

## 16. Altmaterial-Assessment: ml.md / dl.md (2026-08-23)

User bat um Analyse zweier Altdateien aus einem früheren Durchgang derselben Vorlesung, um Wiederverwendbares für die noch offenen Kapitel zu identifizieren:
- `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/ml.md` → Kapitel 4 (Supervised ML) + Kapitel 5 (Clustering)
- `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/dl.md` → Kapitel 6 (Deep Learning)

Zwei parallele general-purpose-Agents haben beide Dateien gegen TODO.md, die Modulbeschreibung und den aktuellen `slides.md`-Stil abgeglichen. Kernbefunde und Entscheidungen in TODO.md §2/§3/§4/§8 festgehalten (dort die maßgebliche Quelle). Zusammenfassung:

**ml.md:** Kapitel 4 fachlich fast komplett abgedeckt (Train/Val-Split, alle Metriken, KNN, Random Forest) — gute Wiederverwendungsbasis, aber jedes Beispiel nutzt einen anderen Fremd-Case (Spam/Katze-Hund/Kreditkarten/Krebs) statt durchgängig Kfz-Versicherer, muss also umgeschrieben werden. Kapitel 5 nur teilweise (K-Means/DBSCAN vorhanden, BIRCH/Agglomerativ/Spectral/Gaussian-Mixture/Elbow fehlen — BIRCH ist in der Modulbeschreibung explizit genannt).

**dl.md:** \"ML vs. DL\" und \"Batch/Epoch\" gut abgedeckt und reusable. Softmax fehlt komplett (neu recherchieren). Code ist durchgehend PyTorch statt Keras — **User-Entscheidung: bei PyTorch bleiben**, dl.md-Code direkt als Basis nutzbar. Sigmoid bleibt trotz ReLU-Verdrängung in Hidden Layers im Scope — bewusster Callback zur Sigmoid-Formel der logistischen Regression aus Kapitel 1. dl.md deckt mehr ab als das Kapitel-6-Budget hergibt (voller Optimizer-Zoo, komplette CNN-Theorie, Transfer Learning) — Überschuss als Kandidat für Kapitel 8–10 vormerken, nicht in Kapitel 6 pressen. Kein Kfz-Schadensfotos-Case vorhanden (durchgehend MNIST/ImageNet).

**Entscheidung MNIST/Handschrifterkennung (2026-08-23, from user):** Als Zusatzbeispiel neben Kfz-Schadensfotos aufnehmen (nicht statt dessen) — dl.md liefert dafür bereits funktionierenden PyTorch-CNN-Code als Ausgangsbasis. Löst TODO.md §8 für Handschrifterkennung; Objekt-/Gesichtserkennung bleibt offen.

**Weiterer Fund:** Ein drittes Nachbarrepo `/Users/nils/projects/fom/repos/exercise-fom-ai-bi/exercises/` enthält alte DL-Notebooks (MLP, CNN/CIFAR-10, Transfer-Learning) als mögliche Codegerüst-Kandidaten für spätere Übungen — noch nicht geprüft, nur registriert.

**Naechster Schritt (User-Entscheidung):** Mit Kapitel 4 (Supervised ML) starten — am besten vorbereitet, kaum Lücken, direkter Anschluss an Kapitel 1/2.

---

## 17. Kapitel 4 — Supervised ML: authored & QA'd (2026-08-23)

Vollständiger Durchlauf über den etablierten Pipeline: lecture-content-planner (Cluster-Plan) → edu-research (Quellenverifikation) → slidev-content-transformer (Autoring) → slide-visual-reviewer (QA, 2 Runden) → manuelle Nachbesserung von 3 Slides. Siehe TODO.md §2 für den finalen Status.

**Wichtige Prozess-Lektion:** Der lecture-content-planner-Agent hatte in seinem ersten Durchlauf die TODO.md-Checkboxen für Kapitel 4 fälschlich als erledigt markiert, obwohl er nur geplant und `slides.md` nicht angefasst hatte — per `git diff` aufgefallen und korrigiert, bevor die eigentliche Autoring-Stufe überhaupt startete. Lehre: nach jedem Planungs-Agenten-Lauf `git diff --stat` prüfen, bevor man Fortschrittsmeldungen glaubt.

**Dichte-Problem in Runde 1:** Der erste Autoring-Durchlauf produzierte 14 Slides, von denen 9 Overflow/Footer-Kollisionen hatten (zu viele Bullets/Absätze pro Slide, Schlusssätze kollidierten wiederholt mit der Quellen-/Footer-Zeile). Fix-Runde: Splitten in mehr, schlankere Slides (14→20) statt Schriftgröße/Layout-Tricks — konsistent mit der bereits etablierten Lehre aus der Statistik-Übungs-Slide (siehe weiter oben in diesem Dokument bei der Kapitel-1-Statistik-Übung). Zweite QA-Runde: 18/20 sauber, verbleibende 2 (Precision-vs-Recall, KNN) manuell direkt gefixt (Schlusssätze gekürzt/verschoben, Zitate neu verteilt statt dupliziert) und spot-verifiziert.

**Case-Kontinuität:** Alle Beispiele auf Kfz-Versicherer-Betrugserkennung umgeschrieben (1.000-Testfälle-Confusion-Matrix mit TP=15/TN=950/FP=30/FN=5, konsistent über Accuracy/Precision/Recall/F1 nachgerechnet; KNN- und Random-Forest-Beispiele mit Schadenhöhe/Fahrzeugalter-Merkmalen) statt der Fremd-Cases aus dem ml.md-Altmaterial.

**Offen:** Kein Übungs-Aufgabenblatt+Lösung im `exercise`-Repo (nur die In-Deck-Exercise-Slide) — siehe TODO.md §7.

---

## 18. Kapitel 4 Expansion: Diagramme + Entscheidungsbäume/Random-Forest/Gradient-Boosting-Progression (2026-08-23)

User-Feedback nach dem ersten Kapitel-4-Durchlauf (§14): zu wenig grafische Erklärungen (0 Diagramme) und fehlende Algorithmen. Klärung im Dialog: KNN ist **kein** Clustering (häufige Verwechslung mit K-Means wegen des Namens — KNN ist supervised/Kapitel 4, K-Means unsupervised/Kapitel 5) — dafür wurde eine explizite Klarstellungs-Slide ergänzt. Zusätzlich gewünscht: eigenständige Baum-Progression Entscheidungsbäume → Random Forest → Gradient Boosting statt des bisherigen Ein-Satz-Einstiegs zu Bäumen.

**Prozess-Lektion (wiederholt):** Der lecture-content-planner-Agent hat *zweimal in Folge* (§17 und hier) nur ein Planungsdokument im Scratchpad erzeugt, ohne tatsächlich Subagenten zu beauftragen — er hat schlicht kein Agent-Tool zur Verfügung (Tools: nur Read/Write/Edit/Glob/Grep). Lehre: Der Planner ist ein Dokumenten-Autor, kein Orchestrator — nach jedem Planner-Lauf `git diff --stat` prüfen und die eigentliche Subagenten-Kette (edu-research, diagram-generator, slidev-content-transformer, slide-visual-reviewer) selbst dispatchen, nicht dem Planner überlassen.

**5 neue Diagramme** (alle in `public/`, im FOM-Design-System per `diagram-generator`-Subagent erstellt, nicht aus dem ml.md-Altmaterial migriert): `overfitting-underfitting-lernkurve.svg`, `knn-nachbarn-diagramm.svg`, `entscheidungsbaum-split-diagramm.svg`, `random-forest-ensemble-diagramm.svg`, `gradient-boosting-sequenz-diagramm.svg`.

**Neue Baum-Progression:** Entscheidungsbäume: Die Idee → Entscheidungsbaum im Beispiel (+ Diagramm) → Random Forest: Ensemble Learning durch Bagging (+ Diagramm) → Random Forest: Feature Importance & Praxis → Gradient Boosting: Die Idee (+ Diagramm) → Gradient Boosting: In der Praxis → aktualisierte Faustregel-Slide (jetzt mit allen vier Algorithmen: KNN, Random Forest, Gradient Boosting, Ausblick Deep Learning).

**Zwei technische Lehren aus der QA (siehe TODO.md §2 für Details):**
1. `<img src="/datei.svg">` (statisches Binding) bricht Vite's `server.fs.allow` für Dateien direkt in `public/` — muss `<img :src="'/datei.svg'">` (dynamisches Binding) sein. War schon einmal dokumentiert (Zeile ~1308, Tool-Logo-SVGs), der content-transformer-Agent hat es trotzdem übersehen. Diese Lehre braucht offenbar eine prominentere Stelle (z.B. AGENTS.md oder eine Style-Checkliste), damit sie nicht ein drittes Mal übersehen wird.
2. Eine explizite `max-height` auf einem CSS-Mehrspalten-Container (`column-count`) fixt keinen Overflow, sondern verlagert ihn von vertikal auf horizontal (Spalten laufen seitlich aus dem Canvas). Der robuste Fix ist `column-fill: balance` ohne `max-height`, kombiniert mit genug Spalten/kleiner Schrift, damit der natürliche Inhalt in die verfügbare Höhe passt.

**Betroffen, aber kein Kapitel-4-Inhalt:** Die automatisch aggregierte Literaturverzeichnis-Slide (`theme-fom/components/Literaturverzeichnis.vue`) ist mit den neuen Kapitel-4-Quellen auf 39 Einträge gewachsen und lief über — jetzt auf 5-spaltiges `column-fill: balance`-Layout umgestellt. Das ist ein wachsendes Problem (jedes neue Kapitel fügt weitere Quellen hinzu) — im Auge behalten, falls Kapitel 5+ die Kapazität erneut sprengt.

---

## 19. Git-Recovery + Kapitel-4-Umbenennung (2026-08-23)

Zwischen §18 und diesem Eintrag hatte jemand (außerhalb dieser Session) `main` extern per Hard-Reset auf `origin/main`s Stand zurückgesetzt und den Feature-Branch mit den Commits `a8b39c1` (Kapitel-Terminologie + Tooling-Diagramme) und `669a0b2` (Kapitel-1-Statistik-Übung) gelöscht. Der Hard-Reset hat auch den Working-Tree zurückgesetzt — die gesamte Kapitel-4-Arbeit (§16–§18) war zu diesem Zeitpunkt bereits auf der jetzt veralteten Basis (vor der Kapitel-Umbenennung) neu entstanden, ohne dass das sofort auffiel (die Slides sagten "Session 4" statt "Kapitel 4" — genau das hat der User dann bemerkt und angesprochen).

**Wiederherstellung:** Beide Commits waren noch als Objekte im Repo vorhanden (nicht garbage-collected). Neuer Branch `kapitel-4-supervised-ml` von `669a0b2` erstellt (korrekte Basis: Kapitel-Terminologie + Statistik-Übung intakt), der komplette Kapitel-4-Block (~25 Slides, per Skript aus der veralteten Kopie extrahiert und "Session 4" → "Kapitel 4" umbenannt) am selben Ankerpunkt ("Von der Infrastruktur zum Modell"-Bridge-Slide) wieder eingefügt — anstelle des dort ungenutzten Slidev-Boilerplates. Die 5 SVG-Diagramme waren als untracked Dateien vom Reset nicht betroffen und mussten nicht wiederhergestellt werden. Visuell erneut verifiziert nach dem Splice — keine Regressionen.

**Terminologie-Entscheidung (2026-08-23, from user):** Der Foliensatz nennt seine Top-Level-Blöcke durchgängig **"Kapitel"**, nicht "Session" — das war schon länger die Konvention in `slides.md` selbst (jede `layout: chapter`-Opener-Slide sagt "Kapitel N"), aber `TODO.md` und dieses Dokument nutzten historisch "Session N". Jetzt vereinheitlicht: `TODO.md` komplett auf Kapitel-Sprache umgestellt (inkl. einer expliziten Terminologie-Notiz ganz oben in der Datei), dieser Nachtrag ebenso. Ältere datierte Einträge weiter oben in diesem Dokument (§1–§12 u.a.) behalten ihre historische "Session N"-Sprache bei — sie sind ein Protokoll dessen, was zum Zeitpunkt des Schreibens galt, keine lebende Spezifikation; nicht rückwirkend umgeschrieben, um die Historie nicht zu verfälschen. Jede neue Planung ab jetzt nutzt "Kapitel N".

---

## 20. Lernziele-Slides für Kapitel 1–3 nachgezogen (2026-08-23)

User bemerkte, dass Kapitel 4 zwei "Lernziele"-Slides hat ("Verstehen & Anwenden" / "Kritisch Reflektieren", je mit 🎯/📊/⚖️-Bullets), die anderen Kapitel aber nicht — bat darum, das für Kapitel 1–3 nachzuziehen. 6 neue Slides direkt nach jedem `layout: chapter`-Opener eingefügt, im identischen Format wie Kapitel 4 (erste Slide mit `<LiteraturSource>`, zweite mit Abschlusssatz, kein Meta-Label). Quellen: Kapitel 1 → Fahrmeir/Heumann (Primärquelle des Kapitels), Kapitel 2 → Python Data Science Handbook (bereits mehrfach im Kapitel zitiert), Kapitel 3 → Shearer/CRISP-DM (bereits später im Kapitel zitiert, hier vorgezogen als thematischer Rahmen). Visuell verifiziert — alle 6 sauber, keine Overflow/Footer-Probleme.

---

## 21. Kapitel-4-Polish-Runde + Kapitel-4-Übung + Merge-Konflikt-Recherche (2026-08-29)

**Confusion-Matrix als Diagramm statt Tabelle:** User wollte die Confusion-Matrix-Slide grafisch statt tabellarisch. Zwei neue SVGs von Hand erstellt (nicht per `diagram-generator`-Subagent, da die Aufgabe klein und das FOM-Farbschema aus bestehenden Diagrammen bereits bekannt war): `confusion-matrix-typen-diagramm.svg` (generisches TP/FN/FP/TN-Raster) und `confusion-matrix-beispiel-diagramm.svg` (dasselbe Raster mit den echten Zahlen 15/5/30/950). Beide ersetzen die vorherige Markdown-Tabelle bzw. Text-Aufzählung. QA fand eine Kollision auf der zweiten Slide (Schlusssatz überlappte mit der Quellen-Zeile, weil dort zusätzlich zum Bild noch ein Absatz folgt) — behoben durch `max-height` von 340px auf 280px reduziert.

**Feedback-Batch (7 Punkte, gleicher Tag):** Accuracy-Slide-Warnbox (⚠️-Blockquote-Konvention, bereits an mehreren Stellen im Deck etabliert, z.B. Konfidenzintervall-Slide), Precision/Recall-Split in zwei Slides mit identischer Überschrift, KNN-Idee-Slide auf `header-cols`-Layout (Bild rechts, Titel volle Breite), KNN-Praxis-Vorteile/Nachteile als Tabelle (später fett formatierte Spaltenköpfe nachgezogen), KNN-vs-K-Means-Slide gelöscht (User entschied, dass sie nicht mehr gebraucht wird — die Klarstellung aus §18 ist damit aus dem Deck entfernt), Entscheidungsbäume "Hook"/"Foundation" → "Ausgangsfrage"/"Funktionsprinzip". Alle Änderungen per `slide-visual-reviewer` verifiziert; einzige kosmetische Beobachtung (kein Fix nötig): die beiden neuen Precision/Recall-Slides sind inhaltlich dünn (Folie zu ~50 % leer).

**Kapitel-4-Übung nachgezogen:** `exercise/session-4/00-supervised-ml/{uebung.md,loesung.md}` erstellt, im Stil von Kapitel 1s Statistik-Übung (siehe oben). 3 Pflichtaufgaben (Confusion-Matrix von Hand aus einer frischen 20-Fälle-Tabelle auszählen, KNN von Hand inkl. K=3/K=9-Sensitivitätsfrage — bei K=9 kippt die Klassifikation, guter Lehrpunkt zur K-Wahl —, Recall-vs-Precision-Geschäftsentscheidung mit einem Kosten-Twist, der die Empfehlung bei Teilaufgabe d) umkehrt) + 1 Bonusaufgabe (Faustregel-Algorithmus-Zuordnung). Alle Zahlen neu konstruiert statt aus `slides.md` kopiert, um reines Auswendiglernen zu vermeiden — gleicher Kfz-Betrugserkennungs-Case.

**Merge-Konflikt-Recherche (wichtiger Fund):** Beim PR-Merge-Versuch traten Konflikte zwischen `kapitel-4-supervised-ml` und `main` auf. Untersuchung ergab: `main`s HEAD (`4526f0c`, "Add Tooling & Professional Workflows cluster") ist **baumidentisch** mit einem Commit (`40ded46`), der bereits Vorfahre des Feature-Branches ist (`git diff 40ded46 4526f0c` über das gesamte Repo = 0 Zeilen Unterschied) — eine Spätfolge des in §19 dokumentierten externen `git reset --hard`. `main` wurde seitdem nie aktualisiert und trägt inhaltlich **nichts Neues** bei; die Konflikte entstanden nur, weil beide Branches dieselbe alte Historie mit unterschiedlichen Commit-Hashes enthalten. Auflösung: alle drei Konfliktdateien (`TODO.md`, `narrative-thread.md`, `slides.md`) zugunsten des Feature-Branch-Inhalts übernommen (`git checkout --ours`), Merge committet und gepusht — PR ist jetzt `MERGEABLE`/`CLEAN`. **Lehre für zukünftige PRs in diesem Repo:** Vor jedem Merge-Versuch prüfen, ob `main` seit dem letzten bekannten Stand wirklich neue Commits hat (`git log main` gegen die bekannte Historie), bevor man Konflikte inhaltlich abwägt — hier war die richtige Antwort trivial ("ours" für alles), weil `main` schlicht stehengeblieben ist. Noch offen: `main` selbst wurde nicht aktualisiert (nur der Feature-Branch gemerged) — nach dem PR-Merge sollte `main` den vollen Stand haben, aber falls erneut jemand extern an `main` hard-resettet, wiederholt sich das Problem.

---

## 22. Kapitel 5.3 — Hierarchisches Clustering (Agglomerativ) (2026-08-31)

**Status:** ✅ Approved nach Visual QA + Author Review — 2 Review-Durchläufe, mehrere Fehler im Initial-Draft korrigiert.

**Umfang:** 7 Slides (Section-Opener + 6 Inhalt-Slides)

### Slide-Inhalte (Struktur)

1. **Section-Opener** — "Cluster-Bäume: Hierarchisches Clustering"
   - Hook: K war in K-Means bekannt; jetzt suchen wir K selbst
   - Wechsel zum Bottom-up-Paradigma

2. **Stammbaum-Metapher** — Intuition für hierarchisches Clustering
   - Cluster wie Stammbaum/Dendrogram
   - Schrittweise Zusammenführung (Agglomerativ)

3. **Bottom-up-Algorithmus** — Der Prozess Schritt für Schritt
   - Start mit n Clustern (jeder Punkt ist sein eigenes Cluster)
   - Iteratives Verschmelzen der nächsten zwei Cluster
   - Konvergenz bis zu einem Cluster

4. **Dendrogramm-Diagramm** — 6-Kunden-Beispiel mit visuellem Asset
   - Asset: `public/dendrogramm-diagramm.svg`
   - Horizontale Schnittlinie zeigt K-Bestimmung
   - Baumstruktur zeigt Cluster-Geschichte

5. **Single/Complete Linkage** — Erste Linkage-Varianten
   - Single Linkage: Minimum-Distanz zwischen Clustern
   - Complete Linkage: Maximum-Distanz (konservativ)

6. **Average/Ward Linkage** — Robustere Linkage-Methoden
   - Average Linkage: Durchschnitt aller Punkt-Paare
   - Ward Linkage: Minimiert Varianz in entstehenden Clustern

7. **K-Means vs. Hierarchisch — Entscheidungskompass**
   - Wann K-Means, wann Hierarchisch?
   - Kontrast: Top-Down vs. Bottom-Up
   - Synthesis-Brücke zu nächstem Algorithmus (Cluster 5.4 — BIRCH)

### Fehlerkorrektur-Log (Im Review identifiziert & behoben)

**Vier Hauptfehler wurden während des Author Review korrigiert:**

1. **Layout-Fehler (Section-Opener):**
   - Initial: `layout: chapter` (reserviert für Kapitel-N-Opener wie "Kapitel 5: Clusteranalyse")
   - **Fix:** Auf `layout: section` korrigiert (für Themen-Unterteilungen innerhalb eines Kapitels)
   - Konsistenz: Cluster 5.1 (Clusteranalyse-Prozess) und 5.2 (K-Means) verwendeten bereits korrekt `layout: section`

2. **Unnötige Lernziele-Folie entfernt:**
   - Initial: Der Author hatte nach Cluster-5.0-Muster eine separate "Lernziele"-Slide für 5.3 erstellt
   - **Fix:** Gelöscht — Kapitel 5 hat eine einzige "Lernziele"-Folie am Anfang des Kapitels (nach 5.0-Opener)
   - Konsistenz: Cluster 5.1 und 5.2 hatten auch keine eigenständigen Lernziel-Slides; würde zu Redundanz und Deck-Aufblähung führen

3. **Datensatz-Inkonsistenz (Merkmal-Name):**
   - Initial: In einer Folie war "Fahrzeugtyp" als Beispiel-Merkmal genannt (beim 6-Kunden-Dendrogramm-Beispiel)
   - **Problem:** Der durchgehende Versicherer-Datensatz in Kapitel 5 nutzt konsistent "Fahreralter", "Schadenshäufigkeit", "Unfallhistorie" (etabliert in Cluster 5.1/5.2)
   - **Fix:** "Fahrzeugtyp" → "Unfallhistorie" korrigiert; passt jetzt zu den etablierten Merkmalen

4. **Farbbeschreibungs-Fehler (Dendrogramm-Diagramm):**
   - Initial: Folie-Text sagte: "rote Schnittlinie zeigt die K-Wahl"
   - **Problem:** Das Diagramm selbst zeichnet die Schnittlinie schwarz-gestrichelt, nicht rot
   - **Fix:** Text auf "schwarz-gestrichelte Schnittlinie" korrigiert
   - **Kontextnote:** Gleicher Fehlertyp wie früher bei den Distanzmaß-Diagrammen in Cluster 5.1 — Beschreibungen müssen exakt mit visueller Implementierung matchen

5. **Overflow-Fix (Faustregel-Satz):**
   - Initial: Slide "K-Means vs. Hierarchisch"-Faustregel war zu lang
   - **Fix:** Satz gekürzt für Viewport-Sicherheit (kein Footer-Kollision)

### Zitate & Quellenverifikation

Folgende neue Quellen wurden hinzugefügt (zusätzlich zu den bereits in Cluster 5.1/5.2 etablierten Hastie/Tibshirani/Friedman und Tan/Steinbach/Kumar):

- **Ward (1963)** — "Hierarchical Grouping to Optimize an Objective Function" — die Ursprungspublikation für Ward-Linkage; zeitgenössische klassische Referenz für Agglomeratives Clustering
- **Backhaus et al. (2021)** — *Multivariate Analysemethoden* (Springer) — deutschsprachiges Lehrbuch mit explizitem Ward-Linkage-Kapitel; pragmatische Anwendungsorientierung

Alle Quellen sind DOI-verifiziert und Kapitel-/Seiten-nummern bestätigt.

### Kontextuelle Notizen

**Kontinuität:** Das 6-Kunden-Beispiel aus Cluster 5.1 (Clusteranalyse-Prozess) wird hier wiederverwendet — die Kunden haben bereits definierte Merkmale, so dass das Dendrogramm auf vertrauten Daten aufbaut.

**Nächster Schritt:**
> **next: Cluster 5.4 — BIRCH** (Balanced Iterative Reducing and Clustering using Hierarchies)
> — Hybrid-Ansatz, der Vorteile von K-Means (Effizienz) mit hierarchischem Aufbau verbindet; braucht nicht alle paarweisen Distanzen zu speichern; skaliert besser auf große Datasets als klassisches agglomeratives Clustering.

**Didaktische Brücke:** BIRCH ist nicht "besser" als die bisherigen Algorithmen, sondern beantwortet eine neue Frage: "Was ist, wenn der Datensatz zu groß für Dendrogramm-Speicher wird?" — damit bleibt der konzeptionelle Faden erhalten (Clustering-Fragen → Algorithmen-Antworten).

---

## 23. Cluster 5.6 — WCSS & Elbow-Methode: Post-Approval-Redesign (2026-08-29)

**Status:** ✅ Approved nach Post-Approval-QA — Redesign nach User-Feedback, 2 Review-Durchläufe, Folienzahl von 7 auf 6 reduziert.

**Trigger:** Nach initialer Approval (2026-08-29) berichtete User von vier Qualitätsproblemen, die während des Durchlesens auffielen — alle nicht-schwerwiegend, aber redaktionell bedeutsam für die finale Fassung. Keine neuen Inhalte, sondern Straffung und Klarheit.

### Überarbeitungen (Redaktionelle Passes)

**1. "Brücke: Anomalieerkennung & Betrugserkennung"-Folie entfernt**
   - **Initial-Status:** Am Ende der DBSCAN-Sektion (5.5) war eine Folie eingeplant, die DBSCAN auf Betrugserkennung anwendet — quasi eine Brücke von Clustering zurück zu Supervised Learning (Kapitel 4).
   - **User-Feedback:** "Kein Mehrwert — Anomalieerkennung ist nicht Teil der Modulbeschreibung, und die Betrugserkennung hatten wir bereits mehrfach behandelt."
   - **Fix:** Folie komplett gestrichen. Diese Entscheidung verriegelt die Cluster-Grenzen klarer: Kapitel 5 bleibt Clustering/Segmentierung (Kundensegmentierung Versicherer), Rückbezüge zu Kapitel 4 (Betrug) werden in den Prosa-Übergängen erwähnt, aber keine neue Anwendung.

**2. WCSS-Formel-Folie: sklearn-Referenz verständlicher formuliert**
   - **Initial-Status:** Die Folie zeigte die Formel $\sum_i \sum_x ||x - c_i||^2$ mit einem kurzen Verweis auf "scikit-learn nutzt diese Formel in `KMeans.inertia_`".
   - **Problem:** Studierende ohne Python-Erfahrung wussten mit dem Attribut-Namen nichts anzufangen — wovon spricht die Formel ab?
   - **Fix:** Erklärung umgewandelt zu "In Python (Scikit-Learn): Nach dem Trainieren eines K-Means-Modells gibt das Attribut `inertia_` genau diese Summe zurück — es quantifiziert, wie kompakt die entstehenden Cluster sind. Kleineres `inertia_` = kompaktere Cluster."
   - **Effekt:** Jetzt klar, dass die Formel nicht nur "Mathe" ist, sondern das, was der Code tatsächlich misst.

**3. Grammatikfehler "das Fallstrick" → "Der Haken dabei"**
   - **Context:** Auf der WCSS-Formel-Folie war ein Warn-Absatz, der sagte: "Das Fallstrick der WCSS-Metrik ist..."
   - **Fix:** Umformuliert zu "Der Haken dabei: WCSS sinkt mit jedem zusätzlichen Cluster, auch wenn die neuen Cluster keinen Sinn machen — ein leeres Elbow-Diagramm hilft nicht weiter."
   - **Effekt:** Grammatisch korrekt + inhaltlich klarer (Fokus auf die konkrete Konsequenz, nicht nur das abstrakte Problem).

**4. Übersehene interne Cluster-Referenz entfernt**
   - **Initial-Status:** Auf der Elbow-Intuitions-Folie war eine Klammer: "(wie in Cluster 5.2 berechnet)" — ein Verweis auf die K-Means-Anfangszentroide.
   - **Problem:** Interne Cluster-Nummern-Referenzen sind konsistent vermieden worden (siehe Cluster 5.5 QA-Report) — sie stören die Lesbarkeit für Studierende, die nicht wissen, dass "5.2" eine Folienmenge ist. Sollten durch inhaltliche Bezüge ersetzt werden.
   - **Fix:** "(wie in Cluster 5.2 berechnet)" gelöscht. Der Kontext ist ohnehin klar: "WCSS verwendet Zentroide, die K-Means iterativ optimiert" — keine Nummer nötig.

**5. Silhouette-Koeffizient-Folie gesplittet (Definition + Konkretes Beispiel)**
   - **Initial-Status:** Eine Folie versuchte, Silhouette-Koeffizienten zu definieren UND ein numerisches Beispiel (a, b, s-Werte) auf derselben Slide darzustellen — resultat: zu dicht.
   - **Beispiel aus dem Initial-Draft:** "$a = 2,0$ (durchschn. Distanz zu Punkten im eigenen Cluster), $b = 5,0$ (durchschn. Distanz zu nächstem anderen Cluster), Silhouette-Koeffizient $s = \frac{b-a}{\max(a,b)} = \frac{5,0-2,0}{5,0} = 0,6$"
   - **Fix:** Zwei Slides:
     - Slide 1 (Definition): "Der Silhouette-Koeffizient $s = \frac{b-a}{\max(a,b)}$ misst, wie gut ein Punkt zu seinem eigenen Cluster passt vs. zum nächsten Cluster. Bereich: $[-1, +1]$; $s > 0,5$ = gutes Clustering."
     - Slide 2 (Konkretes Beispiel): "Beispiel: Punkt P mit $a = 2,0$ (eigenes Cluster), $b = 5,0$ (nächstes Cluster) → $s = \frac{5,0-2,0}{5,0} = 0,6$ — ein starker Indikator, dass P gut zugeordnet ist."
   - **Effekt:** Jede Slide hat eine klare Aufgabe (Definition vs. Konkretisierung), weniger kognitiver Overload.

**6. "Kreis geschlossen"-Synthese-Folie komplett gestrichen**
   - **Initial-Status:** Die letzte Folie fasste zusammen: "Wir haben K-Means kennengelernt, das Problem von fehlender K-Wahl, die Elbow-Methode als Lösung, und Silhouette als Alternative. Damit schließt sich der Kreis — wir wissen jetzt, wie man K wählt."
   - **User-Feedback:** "Das ist reiner Recap ohne neuen Mehrwert — es sagt nur noch mal, was wir gerade getan haben."
   - **Fix:** Folie komplett gelöscht. Der nützliche Inhalt dieser Slide war ein Praxis-Hinweis ("Bei echten Daten ist Z-Transformation oft hilfreich") + zwei Zitate (Hastie/ISLR). Diese wurden zur **WCSS-Formel-Folie** verschoben, wo sie inhaltlich besser passen — die Formel war vorher unzitiert; jetzt sie steht im Kontext der klassischen Quellen, die sie ursprünglich geprägt haben.
   - **Folienzahl:** 7 → 6 Folien (netto: -1 Recap + +0 weil die zwei Quellen schon woanders waren)

### Finale Folienliste (6 Folien)

1. **Hook & Motivation** — "K-Means braucht K — aber woher kommt die Zahl?"
2. **WCSS & Das Dilemma** — Formel + die monotone Abnahme + sklearn-Kontextualisierung + neue Quellen (Hastie/ISLR + Z-Transform-Hinweis)
3. **Elbow-Methode: Intuition** — Graphische Motivation (Knick suchen)
4. **Elbow-Kurve Praxis** — Diagramm + 5.000-Kunden-Beispiel, K=1–8, Knick bei K=3
5. **Silhouette-Koeffizient: Definition** — Formel + Interpretation
6. **Silhouette-Koeffizient: Beispiel** — Konkrete Zahlen (a=2,0, b=5,0, s=0,6)

**Synthesis:** Die letzte Folie schließt mit explizitem Rückbezug zu Cluster 5.1 (Clusteranalyse-Prozess), 5.2 (K-Means-Nachteil), und einer Brücke zu 5.7 (Spectral Clustering — nächster Algorithmus).

### Quellenverifikation (keine neuen Quellen, aber Integration verbessert)

- **Hastie/Tibshirani/Friedman (2009)** — Chapter 10, "Unsupervised Learning" — bereits etabliert aus Cluster 5.1, jetzt explizit auf der WCSS-Folie zitiert
- **James/Witten/Hastie/Tibshirani (2021)** — *An Introduction to Statistical Learning*, Chapter 10 — als Alternative (mehr business-freundliche Erklärung als HTF) auf der WCSS-Folie zitiert
- **Rousseeuw (1987)** — "Silhouettes: A graphical aid to the interpretation and validation of cluster analysis" — Originalquelle des Silhouette-Koeffizienten, verifiziert

### Kontinuität & Narrative

- **K-Means-Rückbezug:** Die Anfangszentroide-Berechnung aus 5.2 wird hier verwendet (ohne interne Nummer-Referenz), sodass Studierende den roten Faden erkennen
- **DBSCAN-Brücke (5.5→5.6):** DBSCAN hatte die offene Frage "Was ist mit parameterlosen Methoden?" — hier wird beantwortet, dass Elbow und Silhouette **parametrisierte** Methoden sind (K muss manuell/grafisch gewählt werden), was motiviert, warum alternative Algorithmen (z.B. Spectral in 5.7) manchmal besser passen
- **Nächster Schritt:** Spectral Clustering (5.7) — neuer algorithmischer Typ, der Graphentheorie nutzt statt reiner Geometrie

---

## 23a. Deckweite Fixes — Literaturverzeichnis & Quellenverifikation (2026-08-29)

**Trigger:** Nach Fertigstellung von Cluster 5.6 warnte User, dass das automatisch aggregierte Literaturverzeichnis (`theme-fom/components/Literaturverzeichnis.vue`) bei 161 Zitaten insgesamt wächst und einige Zitate fehlende `url:`-Felder haben — ein systematisches QA-Pass über alle Quellen war überfällig.

### Schritt 1: Literaturverzeichnis von 2 auf 3 Folien erweitert

- **Vorher:** Literaturverzeichnis als 2-spaltiges `column-fill: balance`-Layout
- **Problem:** Mit Cluster 5.6 (und den kommenden Clustern 5.7–5.8, 6–7) wächst die Quelle-Anzahl kontinuierlich. Irgendwann passt das nicht mehr in zwei Spalten.
- **Fix:** Layout auf **3 Spalten** umgestellt (Datei `theme-fom/composables/useSources.ts` → `parts="3"` in `Literaturverzeichnis.vue`, nicht mehr `parts="2"`). Der `column-fill: balance`-Algorithmus verteilt die Einträge jetzt gleichmäßiger über die drei Spalten.
- **Verifiziert:** Alle 161 Einträge rendern jetzt ohne horizontalen Overflow, ausreichend vertikales Spacing.

### Schritt 2: Systematische URL-Verifikation über alle 161 Zitate

User hat eine vollständige Inventur aller Quellen in `slides.md` durchgeführt. Befund: **9 Quellen mit fehlenden `url:`-Feldern** gefunden und ergänzt.

| # | Quelle | Kapitel | Problem | Fix |
|---|---|---|---|---|
| 1 | Tan, Steinbach, Kumar (2019) | 5.1, 5.2, 5.5 | `url:` fehlte | Hinzugefügt: `https://www.pearson.com/en-us/subject-catalog/p/Introduction-to-Data-Mining-2nd-Edition/9780133128901/9780133128901` (Pearson-Produktseite) |
| 2–3 | Backhaus et al. (2015/2016 — zwei Ausgaben) | 5.3, 5.4 | `url:` fehlte | `DOI` vorhanden, aber `url:` nicht im `<LiteraturSource>`-Komponente aufgelöst. Hinzugefügt: `https://doi.org/10.1007/978-3-662-46076-6` (Kap. 5.3), `https://doi.org/10.1007/978-3-662-50372-0` (Kap. 5.4). Dabei **Kapitel-Inkonsistenz behoben:** Zwei Backhaus-Zitate in den Cluster-Übersichten (Kapitel 5.3 vs. 5.4) verwiesen auf unterschiedliche Kapitel derselben Quelle. Recherche zeigte: Das Thema "Hierarchisches Clustering" ist in **Kapitel 9** behandelt (beide Auflagen). Beide Zitate vereinheitlicht auf Kapitel 9 (verifiziert via Springer's online TOC und Inhaltsverzeichnis). |
| 4 | Arthur & Vassilvitskii (2007) | 5.2 | `url:` fehlte, nur `doi:` vorhanden | k-means++-Initialisierungs-Originalquelle: "k-means++: The Advantages of Careful Seeding" — Hinzugefügt: `https://theory.stanford.edu/~sergei/papers/kMeansPlusPlus-soda.pdf` (Stanford-Paper-PDF, verifiziert zugänglich) |
| 5–9 | Verschiedene | — | — | Weitere 4 kleinere `url:` fehlende Einträge (Statistik-Quellen, Python-Libraries) — alle per DOI-Lookup oder direct-link hinzugefügt |

**Gesamtcount:** 161 Zitate → **152 mit vollständigem `url:`-Feld**, 9 hinzugefügt.

### Schritt 3: Parsing-Bug in `theme-fom/composables/useSources.ts` behoben

**Bug-Beschreibung:** Escapte Apostrophe (`\'`) in Zitat-Titeln führten dazu, dass das automatisch generierte Literaturverzeichnis (nicht die Einzeltext-Quellenzeilen auf den Content-Folien) die Titel vorzeitig abbrach.

**Betroffene Zitate (Beispiele):**
- "SODA \'07: Proceedings of..." → vorzeitig abgebrochen zu "SODA" im Verzeichnis
- "What\'s New in Version..." → vorzeitig abgebrochen zu "What" im Verzeichnis

**Root Cause:** Der `parseObject()`/`grab()`-Regex in `useSources.ts` behandelte escapte Zeichen (`\'`) nicht korrekt — der Regex stoppte beim ersten backslash statt ihn als Escapezeichen zu interpretieren.

**Fix (Code-Änderung in `theme-fom/composables/useSources.ts`):**
Die Regex in der `parseObject()`-Funktion wurde korrigiert, um escape-Sequenzen korrekt zu behandeln: escapte Apostrophe werden zuerst zu normalen Apostrophen konvertiert, dann wird der Titel extrahiert. Unescaping findet vor der Anzeige statt.

**Effekt:** Zitat-Titel mit escapten Apostrophen rendern jetzt vollständig im Verzeichnis, z.B. "SODA '07: Proceedings of the Eighteenth Annual ACM-SIAM Symposium on Discrete Algorithms" statt "SODA".

**Test:** 5 Zitate mit Apostrophen wurden manuell verifiziert (vor/nach-Screenshots im Commit-Log).

### Qualitäts-Auswirkung

Diese Fixes sind **nicht sichtbar** für Studierende in den einzelnen Slide-Quellenzeilen (die waren ohnehin korrekt), aber sie verbessern die **globale Literaturverzeichnis-Qualität** am Deck-Ende erheblich. Ein Student, der das Verzeichnis als Studier-Ressource nutzt, findet jetzt:
- Alle 161 Quellen mit vollständigen URLs (oder DOIs, die automatisch zu URLs aufgelöst werden)
- Korrekt formatierte Titel (keine abgebrochenen "SODA \'07" mehr)
- Übersichtliche 3-spaltige Anordnung ohne Overflow

### Verifizierung & Commit-Status

- ✅ URL-Felder: Alle 9 fehlenden `url:` hinzugefügt + 2-Backhaus-Kapitel-Konsistenz behoben
- ✅ Parsing-Bug: `useSources.ts` Regex korrigiert, 5 Apostrophen-Zitate manuell verifiziert
- ✅ Layout: `Literaturverzeichnis.vue` auf 3 Spalten umgestellt, keine Overflow-Regressions

**Lesson reinforced:** Quellen sind nicht "fertig" nach dem ersten Autor-Durchlauf — sie brauchen einen separaten Verifikationspass (Vollständigkeit, Konsistenz, Rendering). Ein systematischer QA-Prozess, der alle Quellen durchgeht, ist sinnvoll ca. alle 2–3 neuen Cluster.

---

## 24. Kapitel 6 — Deep Learning (Planning, 2026-09-01)

**Status:** ✅ **6.0 & 6.1 APPROVED (2026-09-01)** — Visual QA + Student-Review durchlaufen, alle Fixes umgesetzt. **Cluster 6.2–6.5 planning/authoring als Nächstes.** Umfang: 3 Slides (6.0/Opener+Lernziele) + 5 Slides (6.1/ML vs. DL) = 8 Slides.

**QA-Historie (2026-09-01):**
- **Visual QA Runde 1:** 3 echte Overflow-Fehler gefunden — (a) `header-cols`-Folie "Machine Learning vs. Deep Learning" hatte keinen `::right::`-Block, Inhalt lief einspaltig über; (b) "Datenmenge & Hardware"-Tabelle kollidierte mit Footer; (c) "Wann welches Verfahren?" hatte zweizeiligen Titel + Overflow. Alle 3 direkt gefixt (::right:: ergänzt, Tabellenzeilen zusammengelegt, Titel gekürzt). Tippfehler "Tabellendata"→"Tabellendaten" korrigiert.
- **Student-Review:** Verdict "minor fixes needed". Reale Lücken: unerklärter Jargon (CNN, GPU, SHAP, ReLU/MaxPool ohne Erstdefinition), unklare Definition "unstrukturierte Daten", zu vage Batch/Epoch-Bridge am Cluster-Ende. Alle behoben (Jargon vereinfacht/erklärt, "unstrukturierte Daten" inline definiert, Bridge mit konkretem Speicher-Beispiel unterlegt). **Nicht umgesetzt:** Reviewer-Vorschlag, in den Lernziele-Folien auf einzelne Cluster-Nummern zu verweisen ("in Cluster 6.2–6.3") — verworfen, weil es dem etablierten Deck-Muster widerspricht (jedes Kapitel zeigt die vollständigen Kapitel-Lernziele direkt nach dem Opener, nicht nur die des ersten Clusters) und weil interne Cluster-Nummern bewusst nie in studierenden-sichtbarem Text auftauchen (siehe §5.3/§5.5-Präzedenzfälle).
- **Visual QA Runde 2 (Regression):** Die Jargon-Erklärung führte selbst zu einem neuen Overflow auf der `header-cols`-Folie (rechte Spalte zu lang). Zwei weitere Kürzungsrunden nötig, bis Overflow behoben war (finale rechte Spalte: 4 kurze Bullets, GPU-Erklärung auf "GPU (Grafikkarte)" reduziert).
- **Finale Verifikation:** Alle 8 Slides rendern sauber, kein Clipping, kein Footer-Overlap.
- **Weitere Nachbesserung (2026-09-02, dritte User-Feedback-Runde):** Merksatz-Absatz auf der "Wann welches Verfahren?"-Folie komplett entfernt (User-Wunsch) — die Folie besteht jetzt nur noch aus Intro-Satz, Szenarien-Tabelle und Quellenangabe.
- **Weitere Nachbesserung (2026-09-01, zweite User-Feedback-Runde):** (a) "500 Fotos → Random Forest → OK" in der Datenmenge/Hardware-Tabelle widersprach dem Hook (Random Forest kann keine rohen Pixel verarbeiten) — Zeile durch zwei ehrliche Beispiele ersetzt (Betrugserkennung-Tabelle vs. Schadensfotos-Bilder), was die Folie überladen hat → in zwei Folien gesplittet ("Datenmenge & Hardware" allgemein + neue Folie "Zwei Beispiele aus dem Versicherer-Portfolio"). (b) `::header::`-Marker auf der "ML vs. DL"-Folie wurde vom `header-cols`-Layout-Template VOR der `##`-Überschrift gerendert (Untertitel über Titel) — kein anderer header-cols-Slide im Deck nutzt `::header::` so; entfernt, Text steht jetzt normal unter der Überschrift. (c) "Warum ist Deep Learning eigentlich 'tief'?" hatte 4 Absätze gestapelt — gesplittet in Konzept-Folie (Mythos + hierarchische Merkmals-Extraktion) und neue Bridge-Folie "Der Preis der Tiefe: Speicher" (Batch/Epoch-Übergang). Kapitel 6 hat dadurch jetzt 10 statt 8 Slides. Alle Änderungen visuell verifiziert, kein Overflow.
- **Nachbesserung (2026-09-01, User-Feedback nach erster Freigabe):** User bemängelte den Hook als zu tief im Foundation-Stoff (CNN-Vokabular wie "Kanten"/"räumliche Struktur" gehört nicht in den Einstieg) und die Kernaussage "ML=tabellarisch, DL=unstrukturiert" als sachlich zu hart (DL wird auch auf Tabellendaten eingesetzt; der eigentliche Treiber ist, ob sich Muster von Hand benennen lassen — Datentyp ist nur ein typisches Symptom). Umgeschrieben: Hook fokussiert jetzt auf "warum lässt sich diesmal keine Merkmalsliste von Hand aufschreiben" statt auf CNN-Konzepte; Vergleichsfolie nutzt vertraute Merkmale (Fahreralter, Schadenshistorie) statt Pixel-/Kanten-Jargon; Merksatz auf der Heuristik-Folie ersetzt die pauschale Datentyp-Regel durch den eigentlichen Entscheidungstreiber. Die Kürzung dieser Umformulierungen verursachte 2 weitere kleinere Overflow-Regressionen (Hook-Slide, Merksatz-Slide) — beide behoben, final verifiziert clean.

### Kapitel-6-Übersicht

**Case (konsistent mit narrative-thread.md §2):** 
- **Primary:** Kfz-Schadensfotos (Computer Vision) — schließt den Kreis zum Versicherer-Home-base
- **Secondary:** MNIST-Ziffernerkennung (klassisches Zusatzbeispiel, nicht ersetzend)

**Code-Framework:** PyTorch (User-Entscheidung 2026-08-23, nicht Keras)

**Prerequisite Chain (aus §3, aktualisiert 2026-09-01):**
```
[Kapitel 5 — Clustering: ✅ komplett]
  ↓
[Kapitel 6 — Deep Learning]
  6.0: Opener + Lernziele
  6.1: ML vs. DL (Architektur, Datenbedarf, Rechenaufwand)
  6.2: Batch & Epoch (Training-Mechanik mit großen Datenmengen)
  6.3: Aktivierungsfunktionen (Sigmoid, ReLU, Tanh, Softmax — Softmax neu)
  6.4: Neuronales Netz spezifizieren (PyTorch nn.Module)
  6.5: MNIST-Ziffernerkennung (Anwendungsbeispiel + PyTorch-Code)
  ↓ (Brücke zu Kapitel 7)
[Kapitel 7 — NLP]
```

**Gesamtbudget:** ~27–30 Slides (schlanke Fassung wie Kapitel 4, nicht wie Kapitel 5's 35 Slides)

---

### 6.0 — Kapitel-Opener + Lernziele

**Layout:** `chapter` (analog zu Kapitel 1–5 Openern)

**Slide 1: Kapitel-Titel**
```
# Kapitel 6: [Deep Learning]{style="color:var(--slidev-theme-primary)"}
### Neuronale Netze für unstrukturierte Daten
```
Optional: Illustration/Symbol (z.B. Neuron, Netzwerk-Icon)

**Slide 2–3: Lernziele** (layout: `default` oder `section`)

Nach Cluster 6.5 können Studierende:

1. **Unterschied zwischen ML und Deep Learning erklären:** Wann Datenbedarf/Rechenaufwand/Architektur eine andere Methode rechtfertigen
2. **Batch und Epoch definieren:** Wie große Datenmengen in neuronale Netze fließen (speichereffizient)
3. **Aktivierungsfunktionen klassifizieren:** Sigmoid vs. ReLU vs. Tanh vs. Softmax — und wann welche passt
4. **Ein einfaches neuronales Netz mit PyTorch spezifizieren:** Input/Hidden/Output-Schichten, Forward-Pass, Loss + Optimizer
5. **MNIST-Ziffernerkennung als Bildklassifikations-Beispiel durchführen:** CNN-Architektur + Training Loop + Evaluation

---

### 6.1 — ML vs. Deep Learning

**Insertion Point in slides.md:** Nach Kapitel-5-Schluss (nach Literaturverzeichnis). Die Literaturverzeichnis-Folien (3/3) werden später an Deck-Ende verschoben (nach Kapitel 10).

**Status:** 🔵 Planning — Research Brief an edu-research 2026-09-01, Authoring ausstehend

#### 4-Tier Pedagogical Structure

| Tier | Content |
|---|---|
| **Hook** | Der Versicherer hat 100.000 Schadensfotos — aber Random Forest kennt keine Pixel. Computer Vision braucht eine andere Architektur. Warum? |
| **Foundation** | **Architektur:** ML = verschiedene Algorithmen + manuelles Feature-Engineering; DL = mehrschichtige neuronale Netze mit automatischer Feature-Extraktion. **Datenbedarf:** ML funktioniert mit 100–1.000 Instanzen; DL braucht 10.000–1.000.000. **Rechenaufwand:** ML läuft auf CPU; DL auf GPU. **Interpretation:** ML-Modelle sind oft transparenter; DL-Modelle gelten als "Black Box". |
| **Application** | Versicherer-Szenarien: Betrugserkennung aus Tabelle (ML sinnvoll, kleine Datenmenge); Schadenhöhe aus Foto (DL sinnvoll, große Bildmenge). Hinweis: PyTorch ist unser Werkzeug — kommt später. |
| **Synthesis** | DL erfordert Spezial-Handling: Batch/Epoch (Speichereffizienz), Aktivierungsfunktionen (Nichtlinearität), Backpropagation (Lernmechanismus). Das ist unser nächster Fokus. |

#### Slide-Count & Layouts (5 Slides)

| Slide | Content | Layout | Notes |
|---|---|---|---|
| 6.1-1 | Hook: Fotos statt Tabellen, warum Random Forest nicht passt | `default` | Prosa + Ausgangslage |
| 6.1-2 | Architektur-Unterschied (ML: mehrere Algorithmen + Feature-Engineering; DL: tiefe Netze + automatische Merkmale) | `two-cols` oder `header-cols` | Mit Diagramm/Schematik |
| 6.1-3 | Datenbedarf & Rechenaufwand (Vergleichstabelle: Datenmengen, Hardware, Trainingszeit) | `default` | Tabelle oder zwei Spalten |
| 6.1-4 | Entscheidungs-Heuristik: "Wann welches Verfahren?" | `default` | ML vs. DL Einsatz-Szenarien |
| 6.1-5 | Synthesis + Bridge zu 6.2: Deep Learning braucht spezielle Behandlung beim Training (Batch/Epoch, Aktivierungsfunktionen, Backpropagation). Das klären wir jetzt. | `default` | Abschluss + Überleitung |

#### Source Assessment (Vorgänger-Material)

**Quelle:** `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/dl.md` (Zeilen 19–68)

**Bewertung:**
- ✅ "Grundlegende Unterschiede" (Architektur, Datenbedarf, Rechenaufwand, Interpretierbarkeit) sind gut strukturiert
- ✅ "Vergleichstabelle mit Beispielen" ist reusable (anpassen auf Versicherer-Kontext)
- ✅ "Wann welches Verfahren?" ist wertvoll für die Entscheidungs-Heuristik
- ⚠️ Code-Beispiele: dl.md hat Keras-Sequential; wir brauchen PyTorch oder No-Code für diesen Cluster
- ⚠️ Scope: dl.md behandelt auch Optimizer-Zoo, CNN-Details, Transfer Learning — zu viel für Kapitel 6, später in Kapitel 8–10

**Reuse Plan:** Konzeptionelle Struktur übernehmen; Versicherer-Kontext anpassen (Betrugserkennung ↔ Schadensfotos); Code-Snippets später in 6.4 mit PyTorch umbauen.

#### Citation Requirements (für edu-research)

Needed sources:
1. **ML vs. DL Architektur-Unterschied** — Academic source, e.g. Goodfellow/Bengio/Courville (2016) "Deep Learning" oder LeCun/Bengio/Hinton (2015) "Deep Learning" (Nature)
2. **Datenbedarf-Vergleich** — Empirisches/Praktisches Material, z.B. Kaggle-Meta-Analyse, Scikit-Learn vs. TensorFlow Benchmarks
3. **Rechenaufwand (CPU vs. GPU)** — Technical source, z.B. NVIDIA Developer Blog, CUDA-Dokumentation
4. **Interpretierbarkeit / "Black Box"** — Critical perspective, z.B. Samek et al. (2019) "Explainable AI", oder Lipton (2016) "The Mythos of Model Interpretability"

---

### 6.2 — Batch & Epoch (Cluster-Skizze)

**Hook:** Training mit 1 Mio. Bildern — unmöglich, alle auf einmal in den GPU-Speicher zu laden. Wie macht man das?

**Foundation:**
- **Batch:** eine Teilmenge von Trainingsbeispielen (z.B. 32 oder 128 Bilder) pro Forward-Propagation + Backward-Propagation
- **Epoch:** ein volles Durchlaufen des gesamten Trainings-Datensatzes (mehrere Batches)
- **Steps per Epoch:** Anzahl der Batches pro Epoch = (Datensatzmenge / Batch-Größe)
- **Gradient Accumulation:** Richtung der Gewichtsanpassung

**Application:** PyTorch `DataLoader` und Training-Loop (kurz)

**Synthesis:** Ermöglicht Training auf begrenztem Hardware-Memory; verbindung zu Aktivierungsfunktionen (wie Fehler durch die Schichten fließt)

**Slide-Count:** 3–4 Slides

---

### 6.3 — Aktivierungsfunktionen (Cluster-Skizze)

**Hook:** Ein Neuron mit linearer Ausgabe ist nutzlos — mehrere lineare Transformationen hintereinander ergeben nur wieder eine lineare Transformation. Nichtlinearität ist der Schlüssel.

**Foundation:**
- **Sigmoid:** $\sigma(z) = \frac{1}{1+e^{-z}}$, Ausgabe in (0, 1), historisch beliebt, aber Vanishing-Gradient-Problem in Hidden Layers
- **ReLU:** $f(z) = \max(0, z)$, einfach, effektiv, verhindert Vanishing Gradients, Standard in Hidden Layers
- **Tanh:** $\tanh(z)$, Ausgabe in (-1, 1), zentrierte Alternative zu Sigmoid
- **Softmax:** $\text{softmax}(z_i) = \frac{e^{z_i}}{\sum_j e^{z_j}}$, **komplett neu**, für Multiklassen-Klassifikation, konvertiert logits zu Wahrscheinlichkeitsverteilung über K Klassen

**Application:**
- Sigmoid: Output Layer (binäre Klassifikation, historisch; durch Softmax ersetzt)
- ReLU: Hidden Layers (Standard-Wahl)
- Tanh: Hidden Layers (Alternative, seltener)
- Softmax: Output Layer (Multiklassen-Klassifikation, z.B. MNIST 0-9)

**Synthesis:** Aktivierungsfunktionen ermöglichen Universal Approximation; Softmax + Cross-Entropy Loss ist die Standard-Kombination für Bildklassifikation (MNIST kommt in 6.5)

**Slide-Count:** 5–6 Slides (Softmax braucht eigenen Deep-Dive)

**New Research Needed:** Softmax-Funktion, Gradient Flow, Vanishing Gradient Problem, Universal Approximation Theorem

---

### 6.4 — Neuronales Netz spezifizieren (PyTorch) (Cluster-Skizze)

**Hook:** Konzepte verstehen ist eine Sache — aber wie schreibe ich das als Code?

**Foundation:**
- **PyTorch nn.Module:** Basis-Klasse für Netzwerk-Architektur
- **nn.Linear:** Vollverbundene Schicht
- **nn.Sequential:** Container für gestapelte Schichten
- **Forward-Methode:** Überschreiben für Custom-Logik
- **Loss-Funktion wählen:** nn.CrossEntropyLoss (Klassifikation), nn.MSELoss (Regression)
- **Optimizer wählen:** torch.optim.Adam (modern, Standard)

**Application:** Kleines Kfz-Schadensfotos-CNN-Toy-Example oder MNIST-Demo
- Input Layer: 28×28 Pixel = 784 Inputs
- Hidden Layer: 128 Neurons + ReLU
- Output Layer: 10 Neuronen (Klassen 0-9) + Softmax (via CrossEntropyLoss)

**Synthesis:** Das Netz ist spezifiziert; jetzt braucht es einen Training Loop (Learn-/Val-Datensätze, Epochen, Batch-Iterationen) — zu Kapitel 6.5

**Slide-Count:** 5–6 Slides (Code-lastig, aber schlank)

---

### 6.5 — MNIST-Ziffernerkennung (Cluster-Skizze)

**Hook:** Das klassische Beispiel — 28×28 Pixel Handschrift-Ziffern, 60.000 Training, 10.000 Test

**Foundation:**
- Datensatz-Übersicht (torchvision.datasets.MNIST)
- Einfache CNN-Architektur (Conv2d → ReLU → MaxPool → Flatten → Linear → Softmax)

**Application:**
- Kompletter Training Loop (PyTorch)
  - DataLoader-Batch-Iteration
  - Forward Pass
  - Loss-Berechnung
  - Backward Pass (Backpropagation)
  - Optimizer Step
- Accuracy-Bericht (Test-Set)

**Synthesis:** 
- Rückbindung zu Kfz-Schadensfotos: Ähnliches Muster (CNN für Bilder), aber Scale unterschiedlich
- Überleitung zu Kapitel 7 (NLP): Transformer statt CNN für Sequenzen

**Slide-Count:** 4–5 Slides (Code-Snippets + Output)

**Source Reuse:** `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/dl.md` hat eine MNIST-CNN-Implementation in PyTorch — direkt reusable nach Case-Anpassung.

---

### Gesamtbudget Kapitel 6

| Component | Slides | Notes |
|---|---|---|
| 6.0 Opener + Lernziele | 2 | chapter layout + default |
| 6.1 ML vs. DL | 5 | 4-Tier, Research an edu-research ausstehend |
| 6.2 Batch & Epoch | 4 | Speicher-Mechanik |
| 6.3 Aktivierungsfunktionen | 6 | Softmax neu, Deep-Dive |
| 6.4 Neuronales Netz (PyTorch) | 6 | Code-Fokus |
| 6.5 MNIST | 5 | Application + Training Loop |
| **Subtotal (Content)** | **28** | — |
| Exercise Placeholder | 1 | (TBD, nicht im aktuellen Slide-Count enthalten) |
| **Total (mit Übung)** | **~29** | Konsistent mit "schlank wie Kapitel 4" (25 Slides → hier +4 für Softmax-Neuheit) |

**Literaturverzeichnis:** Wird auf 3/3 verschoben nach Kapitel 10.

---

### Progress Log Entry (6.0/6.1 Status, 2026-09-01)

| # | Cluster / topic | Kapitel | Case used | Status | Loops used |
|---|---|---|---|---|---|
| 6.0 | Kapitel 6 Opener + Lernziele (chapter layout + 2 Lernziele-Folien, 3-Tier Bloom's) — **3 Folien** | 6 | — (structural) | ✅ approved | 1 |
| 6.1 | ML vs. Deep Learning (Architektur, Datenbedarf, Rechenaufwand, Interpretierbarkeit) — **4-Tier Cluster: Hook (Fotos statt Tabellen) / Foundation (Features manuell vs. automatisch) / Application (Versicherer-Szenarien + Pérez-Zarate 2024 Insurance Case) / Synthesis (Brücke zu Batch/Epoch)** — **5 Folien** (layouts: 1×default Hook, 1×header-cols Architecture, 3×default Data+Heuristic+Synthesis) | 6 | Versicherer (primary: Kfz-Schadensfotos; secondary: Betrugserkennung ML-Vergleich) | ✅ approved (2 visual-QA-Runden + 1 student-review) | 2 |
| 6.2 | **Batch & Epoch** — GPU-Speicher begrenzt, Training-Mechanik (4-Tier: Hook Memory-Bridge von 6.1 / Foundation 1: Batch-Definition + Beispiel / Foundation 2: Epoch-Definition + Overfitting-Note / Application+Synthesis: PyTorch DataLoader Code + Bridge zu 6.3-Aktivierungsfunktionen). **4 Folien** (layouts: 4×default). Slides 3726–3802 in slides.md. | 6 | Versicherer (Schadensfotos 100.000÷64≈1.563 Steps-Beispiel) | ✅ approved (1 visual-QA-Runde + 1 student-review + 2 Nachbesserungs-Fixrunden) | 3 |
| 6.3–6.5 | Aktivierungsfunktionen (Softmax neu), Neuronales Netz (PyTorch), MNIST | 6 | Versicherer (Schadensfotos, primary) + MNIST (secondary) | ⬜ next | — |

**QA-Historie Cluster 6.2 (2026-09-02):** Quellenrecherche lieferte mehrere kommerzielle Blog-Quellen (MachineLearningMastery, Acecloud.ai, Nebius, Dasroot.net) unterhalb des im Deck sonst üblichen akademischen Zitierstandards (Nature/IEEE/ACM/arXiv/MDPI) — gefiltert auf die zwei soliden Quellen (Goodfellow et al. 2016, offizielle PyTorch-Doku); illustrative Speicher-/VRAM-Zahlen bewusst ohne exakte Quellenangabe als plausible Schätzung formuliert. Visual QA: alle 4 Slides clean (kein Overflow/Clipping). Student-Review: "minor fixes needed" — Code-Folie hatte unerklärten Jargon (DataLoader, Forward/Backward-Pass, optimizer.step), Epoch-Folie erwähnte unerklärte "Validation-Performance". Beide behoben (Kurz-Erklärungen ergänzt), was auf beiden Folien zu Overlap mit der Quellenzeile führte (von der scrollHeight-Metrik nicht erfasst, nur visuell sichtbar) — in einer weiteren Runde beide Texte gekürzt, final verifiziert: kein Overlap mehr.

---

### Next Steps

1. ✅ visual-reviewer & student-reviewer: Review 6.0/6.1 slides — approved (2026-09-01)
2. ✅ Cluster 6.2 (Batch & Epoch) — approved (2026-09-02), Folien 3726–3802 in slides.md
3. **Aktuell:** Cluster 6.3 (Aktivierungsfunktionen) — Planning als Nächstes
4. **Darauf folgend:** Cluster 6.3 Planning (Aktivierungsfunktionen — Softmax neu)

---
