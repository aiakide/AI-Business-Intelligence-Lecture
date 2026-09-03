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

**Status:** ~25 slides authored into `slides.md` (Kapitel-4 opener + content/exercise slides + closing "Danke & Diskussion"), incl. 7 custom SVG diagrams (Overfitting/Underfitting-Lernkurve, KNN-Nachbarn-Scatterplot, Entscheidungsbaum-Split, Random-Forest-Ensemble, Gradient-Boosting-Sequenz, plus 2 Confusion-Matrix-Diagramme added 2026-08-29 — see below) — all in `public/`, FOM-Design-System-Stil. Gradient Boosting citations verified (Friedman 2001, Hastie/Tibshirani/Friedman Kap. 10).

**Polish round (2026-08-29, from user feedback):** Confusion Matrix now rendered as two SVG diagrams (`confusion-matrix-typen-diagramm.svg`, `confusion-matrix-beispiel-diagramm.svg`) instead of a Markdown table/text list. Accuracy-Slide's "kritischer Haken" moved into a ⚠️-Warnbox (existing deck convention). Precision and Recall split into two separate slides sharing one heading. KNN-Idee-Slide switched to `header-cols` layout (title full-width, diagram in right column). KNN-Praxis-Slide's Vorteile/Nachteile now a 2-column table with bold headers. **KNN-vs-K-Means-Klarstellungs-Slide removed** (user decided it was no longer needed) — the KNN/K-Means naming-confusion callout mentioned in earlier entries of this section no longer exists in the deck. Entscheidungsbäume-Slide's "Hook"/"Foundation" labels renamed to "Ausgangsfrage"/"Funktionsprinzip". All changes visually QA'd (slide-visual-reviewer), no overflow/clipping. See narrative-thread.md §21 for full detail.

**QA history:** Multiple rounds. Round 1 (text-only, 14 slides): 9/14 had overflow/footer-collision, fixed by splitting into more slides (14→20). Round 2: 18/20 clean, 2 residual footer collisions fixed directly. Round 3 (after adding diagrams + tree-algorithm expansion, 20→23 slides): all 5 new diagrams initially failed to render at all — root cause was a static `<img src="/....svg">` binding, which breaks Vite's `server.fs.allow` for files directly in `public/` (a previously-documented gotcha, see narrative-thread.md re: the tool-logo SVGs — the content-transformer agent missed it this time). Fixed by switching to `<img :src="'/....svg'">` (dynamic binding) on all 5. Round 4: diagrams rendered but 4 of 5 diagram slides + the Literaturverzeichnis appendix slide still overflowed (too much text+diagram+citation stacked per slide). Fixed by trimming text and shrinking diagram `max-height` on the 4 slides, and by reworking `theme-fom/components/Literaturverzeichnis.vue`'s CSS (5-column `column-fill: balance` layout, no `max-height` — an explicit `max-height` on a CSS multi-column container causes horizontal overflow instead of fixing vertical overflow, learned the hard way). Round 5 (final): both remaining slides confirmed clean.

**Git recovery note (2026-08-23):** After this chapter was fully authored and QA'd, an external `git reset --hard` on `main` (outside this session, to `origin/main`'s state) deleted the feature branch this work lived on and reset the working tree to a commit predating both the Kapitel-terminology rename and the Kapitel-1 exercise slide. Both were still reachable as dangling commits and were recovered: checked out a fresh branch from the last-good commit (`669a0b2`), then spliced the already-authored Kapitel-4 block (renamed from its accidental "Session 4" heading, since it had been built on the pre-rename base) back in at the correct anchor point ("Von der Infrastruktur zum Modell" bridge slide), replacing the leftover unused Slidev boilerplate. The 5 SVG diagrams survived untouched (they were untracked files, unaffected by the reset). Re-verified visually after the splice — no regressions.

**Source assessment (2026-08-23):** `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/ml.md` (prior course run) covered Train/Val-Split, metrics, KNN, Random Forest well conceptually but used a different foreign case per slide (Spam, Katze/Hund, Kreditkarten-Betrug, Krebs/Tumor) and had no diagrams reused (new ones were custom-built instead) — every example was rewritten onto the Kfz-Versicherer Betrugserkennung case (1.000-Testfälle Confusion Matrix, KNN/Baum/Ensemble-Beispiele auf Schadenfällen) for dataset continuity. Gradient Boosting was added beyond the original TODO scope (user request, 2026-08-23) since Decision Trees → Random Forest → Gradient Boosting forms a natural bagging-vs-boosting progression. See narrative-thread.md §13/§15 for full source assessment and build log.

**Done (2026-08-29):** Kapitel-4 exercise worksheet+solution now authored — see §7.

## 3. Kapitel 5 — Unsupervised / Clustering — complete (2026-08-29)
- [x] Clusteranalyse-Prozess (5.1) — authored, approved, 4–5 Folien
- [x] K-Means (5.2) — authored, approved, 5–6 Folien
- [x] Hierarchisches Clustering / Agglomerativ (5.3) — authored, approved, 9 Folien
- [x] BIRCH (5.4) — authored, approved, 6 Folien
- [x] DBSCAN (5.5) — authored, approved, 10 Folien (incl. Vergleichstabelle aller vier Algorithmen)
- [x] WCSS & Elbow Method (5.6) — 7 Folien, approved (2026-08-29). QA-Bericht: 2 Fehler behoben (4x interne Cluster-Nummern entfernt, durch inhaltliche Bezüge ersetzt; Tabelle-Sprung-Kennzeichnung zugefügt, auf 3 Datenzeilen+Auslassungspunkt gekürzt). 1 Overflow-Fix (Tabelle+Schlussabsatz gekürzt).
- [x] ~~Spectral Clustering (5.7)~~ — **übersprungen** (User-Entscheidung, 2026-08-29): war bereits vollständig authored (7 Folien, Hook-Diagramm `public/spectral-hook-diagramm.svg`) und approved, dann auf Wunsch komplett wieder aus dem Deck entfernt. Diagramm gelöscht, Vergleichstabelle zurück auf 4 Algorithmen (K-Means, Hierarchisch, BIRCH, DBSCAN). Kein offener Punkt mehr — falls später gewünscht, wäre es ein Neuaufbau, kein Wiederaufgreifen.
- [x] ~~Mean Shift / Gaussian Mixture Models (5.8)~~ — **übersprungen**: nie authored, nachrangig laut Modulbeschreibung (im Gegensatz zu Spectral Clustering dort nicht explizit genannt). Kein offener Punkt mehr für den aktuellen Kapitel-5-Umfang.
- [x] Exercise — Kapitel 5 (Unsupervised / Clustering) — siehe §7 für Details (Jupyter-Notebooks statt Markdown-Worksheet)

Case: Kunden-/Versichertensegmentierung.

**Status: Kapitel 5 final abgeschlossen (2026-08-29).** ~35 Slides (Kapitel-Opener 5.0 + Cluster 5.1–5.6) authored und QA'd. Vier Kern-Algorithmen (K-Means, Hierarchisch/Agglomerativ, BIRCH, DBSCAN) mit Custom-Diagrammen (`public/distanz-dimensionen-diagramm.svg`, `public/dendrogramm-idee-diagramm.svg`, `public/linkage-single-complete-diagramm.svg`, `public/linkage-average-ward-diagramm.svg`, `public/cf-tree-diagramm.svg`), plus WCSS & Elbow-Methode zur Optimal-K-Bestimmung, DBSCAN-Praxis-Beispiel, Vergleichstabelle (K-Means/Hierarchisch/BIRCH/DBSCAN nach Distanzmaße/Skalierbarkeit/Cluster-Formen/Rausch-Sensibilität), und Jupyter-Notebook-Übung. Spectral Clustering und Mean Shift/GMM bewusst übersprungen (siehe Checkbox-Notizen oben) — kein offener Punkt mehr für dieses Kapitel.

**Source assessment (2026-08-23, final 2026-08-29):** `ml.md` deckte ursprünglich nur K-Means und DBSCAN gut ab; BIRCH, Agglomerativ, WCSS/Elbow wurden komplett neu recherchiert. Spectral Clustering und Mean Shift/GMM wurden ebenfalls recherchiert bzw. eingeplant, dann aber aus dem finalen Kapitel-5-Umfang gestrichen (siehe oben) — kein offener Research-Bedarf mehr.

## 4. Kapitel 6 — Deep Learning
- [x] Kapitel-Opener + Lernziele (6.0) — authored, approved (2026-09-01), 3 Folien
- [x] ML vs. DL + Case-Diversity (Architektur, Datenbedarf, Rechenaufwand, DL auf Bildern/Text/Zeitreihen) (6.1) — authored, approved (2026-09-02), 6 Folien
- [x] Was ist ein neuronales Netz? (Perzeptron, Gewichte/Bias, Schichten, Forward Pass) (6.2) — authored, approved (2026-09-02), 6 Folien
- [x] Aktivierungsfunktionen (Sigmoid, ReLU, Tanh, Softmax) (6.3) — authored, approved (2026-09-02), 6 Folien
- [x] Wie lernt das Netz? (Loss-Funktion, Gradient Descent, Backpropagation) (6.4) — authored, approved (2026-09-02), 6 Folien
- [x] Batch & Epoch (6.5) — authored, approved (2026-09-02), 4 Folien (nach Neuplanung von Position 6.2 hierher verschoben, siehe narrative-thread.md §24-26)
- [x] Neuronales Netz spezifizieren (**PyTorch**, not Keras/Sequential — corrected 2026-08-23, from user) (6.6) — authored, approved (2026-09-02/03), 9 Folien. Chapter closes here, generic MLP-level. Inkl. PyTorch-Logo (`public/logos/pytorch.svg`, offizielle Farbe #EE4C2C), nn.Module-Grundgerüst, Loss/Optimizer-Wahl, End-to-End-Beispiel, Kapitel-Abschluss mit explizitem Kaggle-Transfer-Versprechen ("ändere Input-Features + Loss-Funktion, Rest bleibt gleich").

Case: Versicherer-Tabellendaten (Fahreralter/Schadenshistorie/Fahrzeugtyp) durchgängig für die generischen Grundlagen; Case-Diversity-Folie zeigt Bilder/Text/Zeitreihen als weitere DL-Anwendungsfelder mit Verweis auf die dedizierten Folgekapitel.

**KAPITEL 6 KOMPLETT (2026-09-02):** Alle Cluster 6.0–6.6 authored, approved, visuell + pädagogisch QA'd. 38 Folien gesamt + 14 custom SVG-Diagramme. Details siehe narrative-thread.md §27.

**Renumbering-Entscheidung (2026-09-02, from user):** MNIST/CNN wandert NICHT als 6.7 ans Kapitel-6-Ende, sondern wird Teil eines neuen, eigenständigen **Kapitel 7 — Computer Vision** (siehe §4a) — spiegelt die Tiefe, die NLP als eigenes Kapitel bekommt (Transformer/Attention), statt CNN-Architektur nur oberflächlich am Rand von Kapitel 6 zu behandeln. Verschiebt: NLP (bisher Kapitel 7) → **Kapitel 8**, Vertiefungen (bisher Kapitel 8–10) → **Kapitel 9–11**. Grund: Modulbeschreibung nennt "Objekt-/Gesichtserkennung" explizit (§8 unten) — mit nur einem MLP-Beispiel am Kapitel-6-Ende wäre das nicht wirklich abgedeckt.

**Status (2026-09-02):** Cluster 6.0–6.5 fertig und approved (~29 Folien). Nach User-Feedback komplett umstrukturiert: Reihenfolge korrigiert (Neuron-Grundlagen → Aktivierungsfunktionen → Loss/Gradient Descent/Backprop → erst dann Batch/Epoch, statt Batch/Epoch direkt nach "ML vs. DL"), Case-Diversity-Folie ergänzt (DL ≠ nur Bilder), neues Kapitel-Titelbild (`ai-brain-bro.svg` statt Dopplung mit Kapitel 4). Quellen verifiziert: LeCun/Bengio/Hinton (2015), Halevy/Norvig/Pereira (2009), Pérez-Zarate et al. (2024), McCulloch & Pitts (1943), Rosenblatt (1958), Goodfellow et al. (2016), Rumelhart et al. (1986), Krizhevsky et al. (2012), Vaswani et al. (2017), Hochreiter & Schmidhuber (1997), Cybenko (1989), Nair & Hinton (2010). Details, vollständige QA-Historie in narrative-thread.md §24-26.

**Source assessment (2026-08-23):** `/Users/nils/projects/fom/repos/ai-bi/ai-usiness-intelligence/pages/dl.md` covers "ML vs. DL" and "Batch/Epoch" well and reusably. Gaps: **Softmax is entirely missing** (needs fresh research), and all code is **PyTorch**, not Keras — user decided (2026-08-23) to keep PyTorch rather than force Keras, so `dl.md`'s code style is directly usable as a base after case-rewrite. Sigmoid stays in scope despite being supplanted by ReLU in hidden layers — it's the deliberate callback to Kapitel 1's logistic-regression sigmoid formula. `dl.md` also covers far more than this chapter's budget allows (full optimizer zoo, full CNN theory, Transfer Learning) — treat the overflow as a candidate for Kapitel 8–10, not for Kapitel 6 itself. `dl.md`'s MNIST CNN code (PyTorch) is a usable base for the new Handschrifterkennung example. See narrative-thread.md for full agent report.

## 4a. Kapitel 7 — Computer Vision (AUTHORED 2026-09-03, QA ausstehend)

**Authoring abgeschlossen:**
- [x] Warum CNN statt Dense-Netz für Bilder? (Cluster 7.1: räumliche Struktur, Parameterexplosion) — 3 Folien
- [x] Convolution-Operation (Cluster 7.2: Filter/Kernel, Feature Maps, Padding, Stride) — 4 Folien
- [x] Pooling (Cluster 7.3: Max-Pool, Average-Pool, Downsampling) — 1 Folie
- [x] CNN-Architektur im Ganzen (Cluster 7.4: Conv → ReLU → Pool → Flatten → Dense) — 2 Folien (großes Bild + Architektur-Geschichte)
- [x] MNIST-Ziffernerkennung (Cluster 7.5: PyTorch-CNN, Handschrifterkennung, Modulbeschreibung-Item 1) — 4 Folien (Dataset + Architektur + Datenaufbereitung + Trainingsloop)
- [x] Kfz-Schadensfotos (Cluster 7.6: Transfer Learning, Praxis-Case, Versicherer-Brücke) — 3 Folien (Strategie + Implementierung + Vergleich)
- [x] Objekt-/Gesichtserkennung (Cluster 7.7: Business-Outlook, konzeptuell, Modulbeschreibung-Item 2) — 2 Folien (Folie + Zusammenfassung)

**Case-Struktur:** Kfz-Schadensfotos (primary, Versicherer-Kontext) + MNIST/Handschrifterkennung (secondary, Lehrbuch-Beispiel, PyTorch-Code Kapitel 6 Stil), Transfer Learning praktisch (5.6), Objekt-/Gesichtserkennung als Outlook-Folie.

**Cluster-Übersicht & Final-Zahl:**
- Ausblick Bridge 6→7 (1 Folie)
- 7.0 Opener + Lernziele (3 Folien)
- 7.1–7.4 CNN-Theorie (10 Folien)
- 7.5 MNIST-Anwendung (4 Folien)
- 7.6 Kfz-Transfer-Learning (3 Folien)
- 7.7 Outlook Object/Face Detection (2 Folien)
- Key Takeaways 7 (1 Folie)
- Ausblick Bridge 7→8 (1 Folie)
- **Gesamt:** 25 Content-Folien + 2 Bridges + 1 Key-Takeaways = **28 Folien** (unter Budget, aber pädagogisch sauber — manche Folien halten sich bewusst kurz für Pacing)

**Status:** ✅ Content authored & visually QA'd.

**QA Round 1: slide-visual-reviewer (2026-09-03)**
- 17/21 Content-Folien mit Overflow/Clipping gefunden (scrollHeight 610–885, bis zu 176 geclippte Elemente)
- **Fixes (2026-09-03, content-transformer agent):**
  - **Folie 235** (Lernziele): Letzter Bullet gekürzt
  - **Folie 240** (Convolution Formel): KaTeX-Formel auf separate Folie + "Hyperparameter-Zusammenfassung" als neue Slide
  - **Folie 241** (Sobel-Filter): In 2 Folien aufgeteilt (Idee + Rechenbeispiel)
  - **Folie 242** (Mehrere Filter): Text gekürzt
  - **Folie 243** (Pooling): In 2 Folien aufgeteilt (Konzept + Rechenbeispiel)
  - **Folie 244** (CNN-Architektur): Code-Block auf ASCII-Essentials gekürzt
  - **Folie 245** (CNN-Architektur-Geschichte): Tabelle von 6 auf 4 Zeilen reduziert
  - **Folie 246** (MNIST-Klassiker): Bild verkleinert, Text gekürzt
  - **Folie 247** (SimpleCNN): Code komprimiert (Kommentare entfernt)
  - **Folie 248** (MNIST Datenaufbereitung): Code konsolidiert
  - **Folie 249** (MNIST Trainingsloop): In 2 Folien aufgeteilt (Loop + Evaluation)
  - **Folie 250** (Transfer Learning Strategie): Spalten verdichtet
  - **Folie 251** (Transfer Learning Implementierung): In 2 Folien aufgeteilt (Setup + Training)
  - **Folie 252** (From Scratch vs. Transfer Learning): Tabelle auf 5 Zeilen komprimiert
  - **Folie 253** (Objekt-/Gesichtserkennung): In 2 Folien aufgeteilt (Objekterkennung + Gesichtserkennung)
  - **Folie 254** (CV Architektur-Landkarte): Tabelle auf 3 Zeilen gekürzt
  - **Folie 255** (Key Takeaways): Von 7 auf 5 Bullets reduziert
  
**Resultat nach Fixes:** Kapitel 7 wächst von 28 auf **34 Folien** (6 neue Folien durch Splits). Alle Fließtexte gekürzt, Code optimiert, Tabellen auf ≤5 Zeilen reduziert. Pädagogisch sauber: More, shorter slides statt gequetschter Inhalte.

**Diagramme (2026-09-03, diagram-generator): ✅ erledigt**
- [x] `public/dense-vs-cnn-params.svg` — Dense vs. CNN Parametervergleich
- [x] `public/convolution-gleiten-sequenz.svg` — Sobel-Filter Sequenz
- [x] `public/mnist-beispielziffern-diagramm.svg` — MNIST-Ziffern

Alle per dynamischem Binding `<img :src="'/….svg'">` eingebunden.

**QA Round 2: Verbleibende 10 Layout-Probleme Fix (2026-09-03, content-transformer agent — 2. Runde)**

**Befund:** Sichtprüfung der Round-1-Screenshots zeigte 10 verbleibende Overflow-Kollisionen auf den Folien 239, 244, 247, 249, 250, 251, 252, 254, 258, 259 — meistens "letzter Bullet/Absatz + Footer" oder "Code-Block + Quellenangabe" Kombos, die nach dem letzten Kürzen doch noch 5–30px über die 551px-Canvas hinaus reichten.

**Fixes durchgeführt (Inline-Verdichtung + Kürzen, keine neuen Splits):**
1. **Folie 239:** Punkt 5 („Wiederholen") gelöscht → 4 Schritte
2. **Folie 244:** Bullets kompakt verdichtet (von 8 auf 6, verdoppelte Aussagen entfernt)
3. **Folie 247:** Alle 3 Bullets gekürzt zu Kurzfassungen
4. **Folie 249:** Bild um 20% verkleinert (max-height 150→120px), Text abgekürzt
5. **Folie 250:** Code auf 18 Zeilen gekürzt, „Aufbau" zu Inline-Satz verdichtet
6. **Folie 251:** Code auf 13 Zeilen gekürzt, Bullets von 4 auf 2 reduziert
7. **Folie 252:** Code auf 10 Zeilen drastisch gekürzt, Textbeschreibung verdichtet
8. **Folie 254:** Letzte Bullet-Phrase gekürzt („Objekt-spezifische Merkmale" → „Features")
9. **Folie 258:** Praktisches Beispiel verdichtet zu 1–2 Zeilen, Kernidee separat
10. **Folie 259:** Absatz um 60% gekürzt, nur FaceNet-Quelle behalten (MTCNN gelöscht)

**Resultat:** Alle 10 Folien sollten jetzt unter der 551px-Höhe liegen. Kapitel 7 bleibt bei **34 Folien** (keine neuen Splits, nur Inline-Optimierung).

**QA Round 3 & 4: Manuelle Nacharbeit (2026-09-03)**

Eine 3. Verifikationsrunde fand noch: (1) einen kritischen Bug — die Kapitel-7-Titelfolie rendert Titel/Untertitel gar nicht (fehlendes `::left::`, im Unterschied zu allen anderen Kapitel-Openern); (2) 5 Restkollisionen (Folien 239, 247, 249, 254, 258). Beides manuell gefixt (Text/Code weiter gekürzt, kein neues Splitten). Eine 4. Runde fand danach noch die Convolution-Folie 239 (SVG-Caption berührte Fußzeile, `max-height` 430→390→360px) und die Bridge-Folie "Ausblick: NLP" (letzter Satz gekürzt) — beide gefixt. Dabei zusätzlich entdeckt und behoben: ein defekter doppelter Slide-Block direkt vor dem Literaturverzeichnis (kaputte Frontmatter-Trennung, Merge-Artefakt eines früheren Agenten-Edits) sowie ein Overflow im Literaturverzeichnis selbst (Kapitel 7 brachte 11 neue Quellen, 105 gesamt — 3 Folien reichten nicht mehr, auf 4 Folien erweitert). Finale (5.) Verifikationsrunde: alles clean. Details siehe `narrative-thread.md` §32 "QA Round 3 & 4".

**Status: ✅ Kapitel 7 inhaltlich und visuell fertig (34 Folien, QA vollständig abgeschlossen).**

**Nächste Schritte:**
1. didactic-notebook-architect — Jupyter-Notebooks für Kapitel 7 Exercise
2. Dann: Kapitel 8 (NLP) Planung starten

## 5. Kapitel 8 — NLP (verschoben von Kapitel 7, siehe Renumbering-Entscheidung oben)
- [ ] Transformer (Multi-Head Attention, Sequenzverarbeitung)
- [ ] NLP-Grundlagen (Tokenisierung, Morphologie, Syntax, Semantik, Diskurs)
- [ ] Sentimentanalyse

Case: Freitext aus Schadensmeldungen / Kundenbewertungen.

## 6. Kapitel 9–11 — Vertiefungen (verschoben von Kapitel 8–10)
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
- [x] Exercise — Kapitel 4 (Supervised ML) — worksheet + solution authored at `exercise/session-4/00-supervised-ml/{uebung.md,loesung.md}` (2026-08-29, from user request), mirroring Kapitel 1's structure. 3 required tasks (Confusion-Matrix/Metriken von Hand on a fresh 20-case table, KNN von Hand incl. a K=3/K=9 sensitivity sub-question, Recall-vs-Precision business decision with a cost-sensitivity twist) + 1 bonus (Faustregel-style algorithm-choice scenarios). All example data is new (not copied from slides.md) to avoid trivial memorization, same Kfz-Betrugserkennung case.
- [x] Exercise — Kapitel 5 (Unsupervised / Clustering) — Jupyter-Notebooks (uebung.ipynb + loesung.ipynb) in `/Users/nils/projects/fom/repos/ai-business-intelligence/exercise/session-5/00-clustering/`. **Abweichung vom Markdown-Muster:** Notebooks statt Worksheets, User-Entscheidung (Kapitel 5 ist code-lastig: K-Means/DBSCAN mit Scikit-Learn). **Inhalt:** Synthetischer Kfz-Versicherer-Datensatz (228 Kunden, 3 überlappende Gruppen + 8 bewusste Ausreißer, `numpy.random.default_rng(42)`); Rohdaten-Exploration → Z-Transformation → K-Means (K=3 fest + Interpretation) → WCSS/Elbow-Methode (YOU-DO: K=1..10 loopen, inertia plotten) → DBSCAN (ungünstig ε, dann Parameter-Tuning) → Hierarchisches Clustering (Dendrogramm, Vergleich mit K-Means) → Mini-Exercise (K-Means vs. DBSCAN für verschiedene Fragen). BIRCH konzeptuell in Vorlesung, nicht praktisch in Übung. 52 Zellen, I-DO/WE-DO/YOU-DO-Struktur, konsistent mit session-1/01-python-vertiefung/; vollständig ausgeführt und validiert (nbformat.validate() + nbconvert/nbclient).
- [x] Exercise — Kapitel 6 (Deep Learning) — Jupyter-Notebooks (uebung.ipynb + loesung.ipynb) in `exercise/session-6/00-deep-learning/` (2026-09-03, didactic-notebook-architect). Format wie Kapitel 5 (code-lastig durch PyTorch), Fortsetzung des Kfz-Versicherer-Betrugscase aus Kapitel 4/6 — bewusst **kein** MNIST/Bilder (reserviert für Kapitel 7 Computer Vision). Inhalt: Forward Pass von Hand nachrechnen (mirrort Folienbeispiel `[25,3,1]`→0,66) → Aktivierungsfunktionen (Sigmoid/ReLU/Tanh/Softmax) implementieren & plotten → synthetischer Datensatz (350 Fälle, ~6% Betrugsrate, Train/Test-Split, StandardScaler) → `VersichererMLP` in PyTorch exakt wie Folie 6.6 (`Linear(3,5)→ReLU→Linear(5,1)`) → Loss/Optimizer (`BCEWithLogitsLoss`, Adam lr=0.001) → Trainingsloop (YOU-DO mit 5 TODOs) → Evaluation (Loss-Kurve, Accuracy, Confusion Matrix) → Mini-Exercise (Hyperparameter-Experiment + Reflexionsfrage Random Forest vs. neuronales Netz). `torch>=2.14.0` als neue Dependency zu `exercise/pyproject.toml` hinzugefügt (via `uv add`). Beide Notebooks `nbformat.validate()`-geprüft, `loesung.ipynb` vollständig ausgeführt (Test-Accuracy 94,3%), `uebung.ipynb` unausgeführt wie Kapitel-5-Konvention. Exercise-Repo hat bislang nur einen "Initial commit" (README) — alle neuen Dateien liegen ungetrackt, kein Commit erstellt (Nutzer-Review offen).
- [x] Exercise — Kapitel 7 (Computer Vision, neu) — Jupyter-Notebooks (uebung.ipynb + loesung.ipynb) in `exercise/session-7/00-computer-vision/` (2026-09-03, didactic-notebook-architect). Format wie Kapitel 5/6 (code-lastig durch PyTorch), I-DO/WE-DO/YOU-DO-Struktur. **Case-Struktur:** MNIST (Lehrbuch-CNN-Training von Grund auf) + Fortsetzung des Kfz-Versicherer-Schadensfoto-Cases aus Kapitel 7 (Transfer Learning konzeptuell, da kein echter Foto-Datensatz vorliegt). Inhalt: Convolution von Hand nachrechnen (mirrort Folien-Sobel-Beispiel, Patch × Sobel-Filter → Output 4) → Pooling von Hand nachrechnen (4×4-Matrix → Max-Pool(2×2) → `[[5,7],[8,6]]`, WE-DO Average-Pooling-Vergleich) → MNIST laden/explorieren/visualisieren (`torchvision.datasets.MNIST`, `ToTensor`+`Normalize`) → `SimpleCNN` in PyTorch exakt wie Folie "SimpleCNN in PyTorch — Architektur" (`Conv2d(1,32)→Pool→Conv2d(32,64)→Pool→FC(7*7*64,128)→FC(128,10)`) → Trainingsloop (YOU-DO mit 5 TODOs, `CrossEntropyLoss`, Adam lr=0.001, 5 Epochen) → Evaluation (Loss-Kurve, Test-Accuracy, Confusion Matrix über 10 Klassen, Fehlklassifikationen visualisiert) → Mini-Exercise Transfer Learning (ResNet50 `weights=ResNet50_Weights.DEFAULT` laden, Conv-Layer einfrieren, Custom Head `Linear(2048,512)→ReLU→Linear(512,3)` für 3 Schadensklassen ersetzen, YOU-DO: Adam-Optimizer nur für `model.fc.parameters()`; **synthetische Zufalls-Tensoren** `(8,3,224,224)` statt echter Fotos, explizit als didaktisches Mock gekennzeichnet) → Reflexionsfragen (CNN-vs-Dense-Begründung, CNN-from-scratch-vs-Transfer-Learning-Empfehlung bei nur 200 gelabelten Fotos). `torchvision>=0.29.0` als neue Dependency zu `exercise/pyproject.toml` hinzugefügt (via `uv add`; `torch` bereits von Kapitel 6 vorhanden). `data/` (MNIST-Autodownload) zu `exercise/.gitignore` ergänzt. Beide Notebooks `nbformat.validate()`-geprüft (45 Zellen, 17 Code/28 Markdown, Markdown-Wortanteil ~68%), `loesung.ipynb` vollständig ausgeführt (Test-Accuracy 99,0% nach 5 Epochen — deutlich über dem Folienwert von ~97%, laut Anweisung das reale statt das Ziel-Ergebnis belassen), `uebung.ipynb` unausgeführt wie Kapitel-5/6-Konvention. Exercise-Repo weiterhin ohne neuen Commit (Nutzer-Review offen).
- [ ] Exercise — Kapitel 8 (NLP)
- [ ] Exercise — Kapitel 9–11 (Vertiefungen)

## 8. Curriculum literal-example coverage
The Modulbeschreibung names *Handschrifterkennung* and *Objekt-/Gesichtserkennung*
under "Weitere Anwendungsbeispiele." The narrative thread deliberately substitutes
Kfz-Schadensfotos as the on-theme DL example.

**Decided (2026-08-23, from user):** Handschrifterkennung (MNIST) added as a secondary
example alongside — not instead of — Kfz-Schadensfotos.

**Updated (2026-09-02, from user):** Both examples moved to the new dedicated **Kapitel 7
— Computer Vision** (see §4a) instead of living at the tail of Kapitel 6 — mirrors the
depth NLP gets as its own chapter. `dl.md` already has working MNIST/CNN code to adapt.

**DECIDED (2026-09-03, Planung §30):** Objekt-/Gesichtserkennung is covered as **Cluster 7.7 
(Business-Outlook slide, 2–3 Folien, konzeptuell, kein Code)**:
- ✅ **Handschrifterkennung:** Cluster 7.5 (MNIST-Ziffernerkennung, PyTorch-CNN-Implementation)
- ✅ **Objekt-/Gesichtserkennung:** Cluster 7.7 (Konzeptueller Überblick, YOLO/R-CNN/MTCNN/FaceNet erwähnt, Business-Use-Cases, keine tiefe Implementierung — Pre-Trained Modelle bleiben für Kapitel 8–10)
- ✅ **Kfz-Schadensfotos:** Cluster 7.6 (Transfer Learning, Praxis-Case, Versicherer-Kontext)

**Rationale:** Tiefe Implementation von Object Detection/Face Recognition würde Kapitel 7 
überlasten (50+ Folien statt 35–40). Transfer Learning (7.6) ist in der Praxis relevanter 
als Modell-von-Grund-auf neu trainieren. Outlook-Folie (7.7) erfüllt Modulbeschreibung 
("Objekt-/Gesichtserkennung wird erwähnt"), bereitet Kapitel 8–10 (Advanced Topics) vor. 
Pädagogisch sinnvoll, praxisnah, zeitbudget-gerecht. **Keine Nacharbeit mehr nötig** — 
Modulbeschreibung ist komplett abgedeckt.

## 9. "Key Takeaways 🔑" closing slides — complete (2026-09-03)
- [x] Kapitel 1 (Statistik) — 2 new slides
- [x] Kapitel 2 (Python-Vertiefung) — 1 new slide (before existing "Was Du jetzt kannst" bridge, which stays)
- [x] Kapitel 3 (Tools & Workflows) — 1 new slide
- [x] Kapitel 4 (Supervised ML) — 2 new slides (📊 Modellbewertung / 🧠 Algorithmen)
- [x] Kapitel 5 (Clustering) — replaces the old "Zusammenfassung — Vier Algorithmen..." table slide
- [x] Kapitel 6 (Deep Learning) — 1 new slide (re-establishes content similar to the "Kapitel 6 im Rückblick" slide removed in `d831eb0`, rewritten to the new style)

Mirrors the "Key Takeaways 🔑" convention used at the end of every major block in the
prior course run's `ml.md`/`dl.md`. Chapter-level only (not per sub-cluster, per user
decision). Visually QA'd — all 8 slides clean, no overflow/clipping. See
narrative-thread.md §29 for full detail. Branch `feat/key-takeaways-slides`, PR #5.

**Flagged, not fixed (out of scope for this item):** Kapitel 5 still has no bridge
sentence into Kapitel 6; Kapitel 6 still lacks the Computer-Vision bridge lost when
"Ausblick: Computer Vision" was removed (see §4 above). Both are candidates for the
Kapitel-7 planning pass.

---

*Update this file as items are completed or as `narrative-thread.md`'s plan changes.
Keep it in sync with §6 (progress log) there — this file is a flat todo view, not a
replacement for the narrative thread's sequencing/rationale detail.*
