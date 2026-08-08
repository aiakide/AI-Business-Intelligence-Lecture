# Zusammenfassung: Orientierungsskript – AI & Business Intelligence

## I. Einführung und Grundlagen
* **Slide 1-2:** Einführung in das Modul AI - Business Intelligence an der FOM Hochschule.
* **Slide 3:** Die Ziele der Veranstaltung umfassen den Einstieg in Data Science mit Python, die Verarbeitung großer Datenmengen sowie das Kennenlernen von Prozessmodellen und Tools.
* **Slide 4:** Data Science wird als Prozess zur Erkenntnisgewinnung definiert, bestehend aus Datenerfassung, -bereinigung, -verarbeitung, -analyse und -visualisierung.


[Image of Data Science process lifecycle]

* **Slide 5:** Ziel ist die Identifikation von Mustern und Trends mittels Statistik und Machine Learning zur Unterstützung von Entscheidungen.
* **Slide 6:** Praktisches Beispiel einer Bildvisualisierung mit Python-Code (`plt.imshow`).
* **Slide 7:** Big Data beschreibt große, komplexe Datensätze in strukturierten oder unstrukturierten Formaten. In der Versicherungsbranche werden so Verhaltensmuster und Schadenswahrscheinlichkeiten analysiert.
* **Slide 8:** Im Gesundheitswesen wird Big Data für Wirksamkeitsanalysen von Arzneien, Genom-Sequenzierung und individuelle Behandlungen genutzt.
* **Slide 9:** Exkurs zur Charakterisierung von Big Data.

## II. Programmierung und Tools (Python)
* **Slide 10:** Python ist eine interpretierte, objektorientierte Sprache mit klarer Syntax, die plattformunabhängig arbeitet und eine Vielzahl von Bibliotheken bietet.
* **Slide 11:** Die Vorteile liegen in der einfachen Erlernbarkeit, der Automatisierung durch Skripte und der großen Community.
* **Slide 12-13:** Grundlegende Datenstrukturen sind Listen, unveränderliche Tupel, Dictionaries (Schlüssel-Wert-Paare), Sets, Arrays, DataFrames und Stacks.
* **Slide 14:** Code-Beispiele für Tupel-Operationen und die Verwendung von Stacks via `append` und `pop`.
* **Slide 15:** Jupyter Notebooks dienen als interaktive Open-Source-Umgebung für Programmierung und Dokumentation.
* **Slide 16:** Docker nutzt Container zur Distribution, um vollständige Umgebungen inklusive aller Abhängigkeiten skalierbar zu machen.
* **Slide 17:** Kubernetes automatisiert die Bereitstellung und Verwaltung von Containern in Multi-Server-Architekturen.
* **Slide 18:** GitHub ermöglicht als Versionskontrollsystem die kollaborative Projektarbeit durch Funktionen wie commit, push und pull.
* **Slide 19:** Das CRISP-DM Modell beschreibt den Standardprozess für Data Mining vom Business-Verständnis bis zur Implementierung.

* **Slide 20:** Exkurs zur Adaption des CRISP-DM Prozesses.

## III. Python Bibliotheken
* **Slide 21-22:** NumPy ist die Bibliothek für numerische Berechnungen und effiziente Operationen auf großen Datenmengen.
* **Slide 23:** Pandas ermöglicht die Datenmanipulation, insbesondere durch die Arbeit mit Series (1D) und DataFrames (2D) sowie Datenimport/-export.
* **Slide 24:** Scikit-Learn bietet Werkzeuge für maschinelles Lernen, einschließlich Algorithmen für überwachte und unüberwachte Verfahren sowie Modellbewertung.
* **Slide 25:** Matplotlib ist eine flexible Bibliothek zur Erstellung von Grafiken und Diagrammen auf Basis von Python-Objekten.

## IV. Statistische Grundlagen
* **Slide 26-27:** Unterscheidung zwischen Data Mining (Informationsfreilegung aus Daten) und Data Crawling (automatische Extraktion aus Quellen wie Webseiten).
* **Slide 28:** Definition der Grundgesamtheit (alle Elemente) versus Stichprobe (Teilmenge der Grundgesamtheit).
* **Slide 29:** Das Konfidenzniveau gibt die Wahrscheinlichkeit an, mit der ein geschätzter Parameter in einem Intervall liegt.
* **Slide 30-31:** Die Fehlermarge ist die Differenz der Intervallgrenzen und sinkt bei steigender Stichprobengröße.
* **Slide 32:** Der Modus ist der häufigste Beobachtungswert in nominalskalierten Daten.
* **Slide 33:** Der Median ist der mittlere Wert einer geordneten Datenreihe.
* **Slide 34:** Das arithmetische Mittel berechnet sich aus der Summe aller Werte dividiert durch die Anzahl der Fälle.
* **Slide 35:** Die Varianz misst die Streuung der Datenpunkte um das arithmetische Mittel.
* **Slide 36:** Die Kovarianz zeigt an, wie die Streuung einer Variable X die einer Variable Y beeinflusst.
* **Slide 37-38:** Die Standardabweichung ist ein standardisiertes Streumaß und Grundlage für die z-Transformation.
* **Slide 39-40:** Die Korrelation misst die Linearität des Zusammenhangs zwischen zwei Variablen.

## V. Regressionsanalysen
* **Slide 41-42:** Die lineare Regression ermöglicht Vorhersagen bei linearen Zusammenhängen, wobei das Bestimmtheitsmaß $R^2$ die Modellgüte angibt.
* **Slide 43:** Die logistische Regression wird bei nominalskalierten Variablen eingesetzt, um die Wahrscheinlichkeit für das Eintreten eines Ereignisses (Y=1) zu bestimmen.
* **Slide 44-46:** Die Bestimmung erfolgt über logarithmierte Odds Ratios (Logits). Beispiel: Odds für Star Wars Fans unter Nerds vs. Normalos.
* **Slide 47-48:** Interaktionseffekte beschreiben, wenn der Effekt einer Variable X von einer anderen Variable abhängt (Produktterm).
* **Slide 49:** Bootstrapping erzeugt durch Ziehen mit Zurücklegen künstliche Stichproben zur Ermittlung von Konfidenzintervallen bei unbekannter Verteilung.
* **Slide 50-51:** Signifikanz beschreibt die Gewissheit eines nicht-zufälligen Zusammenhangs. Es wird gegen die Nullhypothese getestet. Kritisch zu betrachten sind dabei die "Researcher degrees of freedom".

## VI. Machine Learning (ML) und Deep Learning
* **Slide 52-53:** ML ist ein Teilgebiet der KI zur Mustererkennung für Vorhersagen, etwa in der Sprach- oder Bilderkennung.
* **Slide 54-55:** Der ML-Prozess umfasst Datensammlung, -aufbereitung, Modellwahl, Training (über Epochen), Validierung und Optimierung.

* **Slide 56-57:** Code zur manuellen Identifikation und Exkurs zu häufigen Fehlern im ML.
* **Slide 58-59:** Daten werden in Trainingsdaten (ca. 70-80 %) zum Lernen und Validierungsdaten (ca. 20-30 %) zur Performancebewertung unterteilt.
* **Slide 60-61:** Metriken zur Evaluierung von Klassifikationsmodellen sind Accuracy (Genauigkeit), Precision (Präzision), Recall (Sensitivität) und der F1-Score.
* **Slide 62:** Praktisches Beispiel der Modell-Evaluierung mit Accuracy-Werten.
* **Slide 63-64:** Deep Learning basiert auf künstlichen neuronalen Netzen (KNN), bei denen Daten durch Schichten geleitet werden. Zentral ist hierbei das Gradient Descent Verfahren.


[Image of Artificial Neural Network layers]

* **Slide 65-66:** Ein Batch ist ein Teil der Trainingsdaten zur Gewichtsanpassung. Eine Epoche ist ein vollständiger Durchlauf aller Daten.
* **Slide 67-68:** Aktivierungsfunktionen wie Sigmoid, ReLU, Tanh oder Softmax bestimmen die Datenweitergabe zwischen den Neuronen.

* **Slide 69:** Code-Beispiel für ein Sequential-Modell mit Schichten und Aktivierungsfunktionen.

## VII. Automatisierte Textanalyse
* **Slide 70-73:** Transformer ermöglichen die Verarbeitung von Sequenzen und deren Beziehungen mittels Multi-Head-Attention-Modulen (parallele Verarbeitung).

* **Slide 74-75:** Natural Language Processing (NLP) umfasst Tokenisierung, morphologische, Syntax-, semantische und Diskursanalysen.
* **Slide 76-78:** Die Sentimentanalyse klassifiziert Stimmungen in Texten als positiv, neutral oder negativ, was u.a. für Feedback-Analysen oder Börsenprognosen genutzt wird.

## VIII. Algorithmen (Unsupervised Learning)
* **Slide 79-81:** Die Clusteranalyse gruppiert Objekte in homogene Untergruppen mittels Distanz- oder Ähnlichkeitsmaßen.
* **Slide 82-84:** Übersicht gängiger Clustering-Algorithmen und deren Ziele im Vergleich zu Klassifikation oder Regression.
* **Slide 85:** Der K-Nearest Neighbors (KNN) Algorithmus dient der Klassifikation durch Vorhersage von Labeln (Supervised Learning).
* **Slide 86:** K-Means startet mit zufälligen Zentren und iteriert diese zur Optimierung der Gruppenhomogenität.
* **Slide 87:** Random Forest nutzt mehrere Entscheidungsbäume und ist resistent gegen Overfitting.
* **Slide 88:** Agglomeratives Clustering ist ein Bottom-up-Verfahren, das in einem Dendrogramm resultiert.
* **Slide 89:** BIRCH ist für sehr große Datenmengen optimiert.
* **Slide 90:** DBSCAN ermöglicht dichte-basiertes Clustering und erkennt Ausreißer.
* **Slide 91-93:** Weitere Algorithmen sind Spectral Clustering (Graphentheorie), Mean Shift (Dichteanalyse) und Gaussian Mixture (probabilistisches Clustering).

## IX. Vertiefungen
* **Slide 94-95:** Die Maximum-Likelihood-Methode schätzt Parameter einer Wahrscheinlichkeitsverteilung basierend auf den beobachteten Daten.
* **Slide 96-97:** Die Within Cluster Sum of Squares (WCSS) bewertet die Clustering-Qualität; die Elbow Method hilft bei der Bestimmung der optimalen Clusteranzahl.

* **Slide 98-99:** Die Faktorenanalyse dient der Dimensionsreduktion. Eigenwerte geben an, wie eine Matrix auf einen Vektor wirkt, und sind zentral für die Varianzanalyse.
* **Slide 100:** Abschluss der Veranstaltung.