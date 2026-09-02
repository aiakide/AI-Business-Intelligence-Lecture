---
theme: ./theme-fom
title: AI in Business Intelligence
info: |
  ## AI in Business Intelligence
  Lecture slides.
transition: fade
mdc: true
themeConfig:
  primary: '#00C6B2'
  logo: /fom_logo.svg
  author: Nils Uhrberg
  date: '03.07.2026'
layout: intro
class: "text-center"
---

# AI & Business Intelligence

[🧠]{style="font-size:4rem"}

<!--
Willkommen zum Modul AI in Business Intelligence.
-->

---
layout: header-cols
---

## Hi, ich bin Nils 👋

::left::

<img class="me" src="./me.png">

::right::

### 🧠 Machine Learning Engineer @ codecentric — Nils Uhrberg

**Education 👨‍🎓**
* 2016 - 2019 Betriebliches Informationsmanagement (B.Sc.)
* 2019 - 2022 Wirtschaftsinformatik (M.Sc.)

**Work 👨‍💻**
* 2022 - today ML Engineer (MLOps / CV)

**Volunteer Work**
* DS/DL Mentor bei TechLabs Münster

---
layout: header-cols
---

## 🎯 Lernziele des Moduls

::left::

* 🔍 Verstehen der theoretischen und methodischen Grundlagen von KI
* 🧠 Fähigkeit, Machine Learning (ML) und Deep Learning (DL) zu beschreiben und zu erklären
* ⚙️ Auswahl, Bewertung und ggf. eigenständige Anpassung dieser Methoden
* 💻 Durchführung und Anpassung praktischer Beispiele
* 📊 Kritische Bewertung von BI-Daten und effektive Extraktion der enthaltenen Informationen
* ⚖️ Reflexion über die Grenzen ML- und DL-Techniken

::right::

## 📝 Orga & Erwartungen

**Session 1**: 📘 Einführung Machine Learning

**Session 2**: 🤖 Grundlagen Deep Learning

**Session 3**: 💻 Praktische Anwendungen

**Session 4**: 🤓 Präsentation / Prüfung

### 📌 Erwartungen an Euch:

- **Aktive Teilnahme**: 🧑‍🏫 Engagement in Vorlesungen & Übungen
- **Kritische Reflexion**: 🧠 Methoden & Daten im BI-Kontext bewerten
- **Eigenständige Anwendung**: 🔧 Gelerntes auf eigene Fragen übertragen

---
layout: chapter
---

::left::

# Kapitel 1: [Statistik]{style="color:var(--slidev-theme-primary)"} als Fundament

::right::

<Illustration src="/illustrations/business-analytics-bro.svg" alt="Business Intelligence & Data Science" width="90%" />

---
layout: default
---

## Lernziele — Verstehen & Anwenden

**Am Ende dieses Kapitels kannst du:**

🎯 **Verstehen & Erklären:**
- Stichprobe, Konfidenzintervall und Fehlermarge als Basis jeder Aussage über Daten
- Warum Mittelwert, Median und Modus unterschiedliche Geschichten erzählen können
- Wie Kovarianz und Korrelation Zusammenhänge beschreiben — ohne Kausalität zu beweisen

📊 **Anwenden & Bewerten:**
- Lagemaße, Streuung, Kovarianz und Korrelation für einen Datensatz von Hand berechnen
- Eine lineare Regressionsgerade herleiten und mit R² ihre Güte beurteilen
- Eine logistische Regression zur Klassifikation (z. B. Betrug ja/nein) aufstellen und interpretieren

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## Lernziele — Kritisch Reflektieren

**Am Ende dieses Kapitels kannst du auch:**

⚖️ **Kritisch Reflektieren:**
- Warum Korrelation nicht Kausalität bedeutet — und wo das in der Praxis zu Fehlschlüssen führt
- Interaktionseffekte erkennen, die ein rein additives Modell übersieht
- p-Werte und statistische Signifikanz einordnen, ohne sie mit praktischer Relevanz zu verwechseln

Das sind die Werkzeuge, auf denen jedes Modell in diesem Kurs aufbaut.

---
layout: header-cols
---

## 🏢 Deine Ausgangslage als Analyst

::left::

Du bist Analyst bei einem Versicherer mit **400.000 Verträgen**.

- 📈 **Steigende Schadensquoten** — Ursachen unklar
- 🕵️ **Betrugsverdacht** in vielen Fällen — aber wer konkret?
- ⚡ **Wettbewerber mit KI-Modellen** unterbieten Deine Preise

> **Entscheidungsfrage:** *Wen versichere ich zu welchem Preis — und welche Schäden sind Betrug?* Diese Fragen ziehen sich als roter Faden durch den Kurs.

<LiteraturSource :sources="[
  { title: 'Accenture: Transforming Claims and Underwriting with AI (Survey Report)', url: 'https://www.accenture.com/us-en/insights/insurance/ai-insurance', year: '2022' },
  { title: 'Ngai et al.: The Application of Data Mining Techniques in Financial Fraud Detection. Decision Support Systems 50(3)', url: 'https://doi.org/10.1016/j.dss.2010.08.006', year: '2011' },
]" />

::right::

<Illustration src="/illustrations/data-analysis-bro.svg" alt="Datenanalyse" width="90%" />

<!--
Zusatzinfo für Vortrag: Laut Literatur entfallen 5–20 % der gemeldeten Fälle in Finanzbetrugsdaten auf tatsächlich betrügerische Transaktionen (Ngai et al., 2011). Das 170-Mrd.-USD-Prämienvolumen stammt aus dem Accenture-Survey 2022.
-->

---
layout: default
---

## Von der [Frage]{style="color:var(--slidev-theme-primary)"} zum Modell

**🧵 Roter Faden des Kurses — Der Lifecycle jeder datengetriebenen Entscheidung am Beispiel des Versicherers:**

1. 🔎 **Problem** — Wer meldet wann einen Schaden?
2. 🗄️ **Daten** — Vertrags-, Schadens- & Kundendaten
3. 🔬 **Methode** — Statistik → ML → Deep Learning
4. 🤖 **Modell** — gibt Vorhersagen aus (z. B. Betrugswahrscheinlichkeit, Schadenhöhe)
5. ⚖️ **Bewertung** — gut genug für Geschäftsentscheid?
6. ✅ **Entscheidung** — Prämie anpassen, Betrug melden

*Diesen Lifecycle kennt die Praxis als CRISP-DM — dazu mehr später.*

*Jedes Kapitel fügt eine Werkzeugschicht hinzu — weil die vorherige an ihre Grenzen stößt.*

Welche Methode löst welche Frage — und in welchem Kapitel? Die Übersicht zeigt Dir den Plan auf einen Blick.

<LiteraturSource :sources="[
  { title: 'Chan, Hogaboam & Cao: Applied Artificial Intelligence in Business. Springer.', url: 'https://doi.org/10.1007/978-3-031-05740-3', year: '2022' },
  { title: 'Vo et al.: Next Generation Business Intelligence and Analytics: A Survey. arXiv.', url: 'https://doi.org/10.48550/arXiv.1704.03402', year: '2017' },
]" />

---
layout: default
---

## Was Dich in diesem Kurs erwartet

*Jede Frage erfordert eine neue Methode — und jede Methode baut auf der vorherigen auf.*

| Geschäftsfrage | Methode | Kapitel |
|---|---|---|
| Schadenhöhe schätzen | Regression (Statistik) | K1 |
| Betrug erkennen? | Klassifikation (ML) | K4 |
| Kundengruppen finden | Clustering | K5 |
| Schadenfoto auswerten | Deep Learning / CV | K6 |
| Meldungstext lesen | NLP | K7 |
| Prognose & Strategie | Vertiefung / Kombination | K8–10 |

<LiteraturSource :sources="[
  { title: 'Chan, Hogaboam & Cao: Applied Artificial Intelligence in Business. Springer.', url: 'https://doi.org/10.1007/978-3-031-05740-3', year: '2022' },
]" />

---
layout: default
---

## Warum beginnen wir mit [Statistik]{style="color:var(--slidev-theme-primary)"}?

> 💡 *Erfahrung ist unbewusste statistische Intuition — Statistik macht sie explizit, überprüfbar und übertragbar. Und sie zeigt Dir, wann Deine Intuition täuscht.*

- 🧱 **Statistik ist das Fundament:** Jedes ML-Modell baut auf statistischen Grundprinzipien auf. Wer das Fundament nicht kennt, kann Modelle weder bewerten noch erklären.
- 💸 **Fehler haben echte Konsequenzen:** Falsche Prämien bedeuten Verlust oder Kundenflucht; fehlerhafte Betrugserkennung erzeugt Rechts- und Diskriminierungsrisiken.

Statistik fängt mit einer simplen Frage an: Was ist ein typischer Schaden in unserem Portfolio? Und genau diese Frage führt uns sofort in eine Falle — die der Mittelwert stellt.

<LiteraturSource :sources="[
  { title: 'Weber: Artificial Intelligence for Business Analytics. Springer.', url: 'https://doi.org/10.1007/978-3-658-37599-7', year: '2023' },
  { title: 'Chan, Hogaboam & Cao: Applied Artificial Intelligence in Business. Springer.', url: 'https://doi.org/10.1007/978-3-031-05740-3', year: '2022' },
]" />

---
layout: header-cols
---

## [Data Mining]{style="color:var(--slidev-theme-primary)"} vs. Data Crawling

::left::

**Data Mining** — Muster finden in vorhandenen Daten

- Algorithmisches Aufdecken verborgener Strukturen
- Quelle: interne Datensätze (z. B. 400.000 Verträge)
- Beispiel: Betrugsmuster im Vertragsportfolio erkennen
- Kerngedanke: *analysieren*

::right::

**Data Crawling** — externe Daten automatisiert beschaffen

- Automatisches Extrahieren aus externen Quellen
- Quelle: Web-APIs, öffentliche Register, Webseiten
- Beispiel: Wetterdaten per API für Naturschadenwahrscheinlichkeiten
- Kerngedanke: *beschaffen*

<p class="text-center italic opacity-70 mt-6" style="border-top: 1px solid var(--slidev-theme-primary); padding-top: 0.75rem;">Erst beschaffen (Crawling), dann analysieren (Mining). Aber was analysieren wir — alle 400.000 Verträge oder nur einen Ausschnitt?</p>

<LiteraturSource :sources="[
  { title: 'Chan, Hogaboam & Cao: Applied Artificial Intelligence in Business, Kap. 2 – Big Data Powering Business Intelligence', url: 'https://doi.org/10.1007/978-3-031-05740-3', year: '2022' },
]" />

---
layout: header-cols
---

## [Stichprobe]{style="color:var(--slidev-theme-primary)"} & Grundgesamtheit

::left::

**Grundgesamtheit** $N$ — alle relevanten Objekte

- Alle Objekte, über die eine Aussage gemacht werden soll
- Hier: alle **400.000 Versicherungsverträge**
- $\mu$ = der wahre, unbekannte Mittelwert der Population
- In der Praxis selten vollständig beobachtbar

::right::

**Stichprobe** $n$ — die tatsächlich erhobene Teilmenge

- Repräsentativ ausgewählter Ausschnitt der Grundgesamtheit
- Hier: die **6 Schadenshöhen** aus unserem Datensatz
- $\bar{x}$ = Stichprobenmittel — eine *Schätzung* von $\mu$
- Nie identisch mit $\mu$, aber bei guter Ziehung nah genug

Und wie nah genau? Das beantwortet das Konfidenzintervall.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 9 – Parameterschätzung', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [Konfidenzintervall]{style="color:var(--slidev-theme-primary)"} & Konfidenzniveau

Der Versicherer schätzt: Die mittlere Schadenshöhe liegt bei ca. EUR 5.200. Aber reicht ein einziger Punkt-Schätzwert für eine Prämienentscheidung über 400.000 Verträge?

- **Konfidenzniveau** $(1-\alpha)$: Typisch 95 % — wir akzeptieren ein 5 % Risiko, danebenzuliegen (formal: bei 100 Stichproben würden 95 der berechneten Intervalle $\mu$ enthalten)
- **Konfidenzintervall**: $[\bar{x} - E,\; \bar{x} + E]$ — der Bereich, in dem $\mu$ mit $(1-\alpha)$ Sicherheit liegt

**Versicherer-Beispiel:** $\bar{x}$ = EUR 5.200, 95 %-KI = [EUR 4.100, EUR 6.300]

$$\bar{x} \pm z_{\alpha/2} \cdot \frac{s}{\sqrt{n}}$$

> ⚠️ **Häufiger Denkfehler — μ ist fix, das Intervall ist zufällig**
>
> Das Intervall sagt *nicht*: „μ liegt mit 95 % Wahrscheinlichkeit hier drin." Es sagt: „95 % der so berechneten Intervalle *würden* den wahren Wert enthalten."

<!-- Presenter note: Bei kleinem n (hier n=6) ist streng genommen die t-Verteilung korrekt, nicht z. Für die Einführung nutzen wir z als Näherung — das reicht für das konzeptionelle Verständnis. | Überleitung: Die Breite dieses Intervalls hat drei Steuergrößen — dazu gleich mehr. -->

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 9 – Parameterschätzung', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [Fehlermarge]{style="color:var(--slidev-theme-primary)"} — drei Steuergrößen, eine Aussage

Die Fehlermarge $E$ ist die halbe Intervallbreite und bestimmt, wie präzise unsere Schätzung ist:

$$E = z_{\alpha/2} \cdot \frac{s}{\sqrt{n}}$$

- ↑ **Konfidenzniveau** (z. B. 99 % statt 95 %) → $E$ wird **größer** — mehr Sicherheit kostet Präzision
- ↑ **Streuung** $s$ (heterogenere Daten) → $E$ wird **größer** — unruhige Portfolios sind schwerer zu schätzen
- ↑ **Stichprobengröße** $n$ (mehr Daten) → $E$ wird **kleiner** — mehr Daten = engeres Intervall

**Merksatz:** Mehr Daten und weniger Streuung → engeres Intervall → sicherere Aussage.

Unser Datensatz (n = 6) ergibt eine sehr breite Fehlermarge — das ist gewollt: Er illustriert das Prinzip. Echte Versicherer arbeiten mit $n \geq 300$–$1.000$ je Risikogruppe.

**Jede Kennzahl, die wir ab jetzt berechnen, trägt diese Unsicherheit im Hinterkopf — und der Mittelwert verschweigt sie am gründlichsten.**

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 9 – Parameterschätzung', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: fact
---

# Der Mittelwert lügt

Ø-Schaden EUR 7.433 — die falsche Zahl für Deine Prämienkalkulation.

<LiteraturSource :sources="[
  { title: 'Klugman, Panjer & Willmot: Loss Models – From Data to Decisions (4th ed.)', url: 'https://doi.org/10.1002/9781118787106', year: '2013' },
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 3 – Univariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_3', year: '2017' },
]" />

---
layout: default
---

## Das arithmetische Mittel — und was es verschweigt

<div class="pb-14">

Datensatz (Schadenshöhen in EUR): **800 · 1.100 · 1.100 · 1.400 · 2.200 · 38.000**

**Arithmetisches Mittel** — $\bar{x} = \dfrac{\sum x_i}{n}$ — angewendet:

$$\bar{x} = \frac{800 + 1.100 + 1.100 + 1.400 + 2.200 + 38.000}{6} = \frac{44.600}{6} = 7.433 \text{ €}$$

**Modus:** EUR 1.100 (2×) &nbsp;·&nbsp; **Median:** (1.100 + 1.400) / 2 = **EUR 1.250**

> Der Großschaden (38.000 €) zieht den Mittelwert auf mehr als das **Fünffache** des Medians — klassische **Rechtsschiefe** (langer rechter Ausläufer) in Versicherungsdaten.

</div>

Der Mittelwert allein ist für schiefe Verteilungen keine verlässliche Kennzahl. Was brauchen wir stattdessen? Modus und Median — zwei robustere Alternativen.

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 2 – Variablen und Skalenniveaus', url: 'https://doi.org/10.1007/978-3-658-10675-1_2', year: '2017' },
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 3 – Univariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_3', year: '2017' },
]" />

---
layout: header-cols
---

## Modus & Median — zwei Korrektive

::left::

**Modus** — der häufigste Wert
- → Häufigster Schadenstyp im Portfolio
- Robust bei nominalen Kategorien
- Nur eindeutig bei klarem Einzelwert

::right::

**Median** — der mittlere Wert der sortierten Reihe
- → Typische Schadenshöhe, ausreißerrobust
- Großschäden verschieben ihn kaum
- Teilt Verteilung in zwei Hälften


---
layout: default
---

## Alle drei auf einen Blick

Modus, Median und Mittelwert — auf einer Zahlengerade nebeneinandergestellt, wird der Unterschied sofort sichtbar.

<img src="./lagemasse_vergleich.svg" alt="Vergleich Modus, Median und Mittelwert auf einer Zahlengerade" style="max-height: 350px; margin: 0 auto; display: block;" />

---
layout: header-cols
---

## Welches Lagemaß — wann?

::left::

| **Skalenniveau** | **Lagemaß** | **Versicherer-Beispiel** |
|---|---|---|
| Nominal | Modus | Häufigste Schadenart |
| Metrisch + Ausreißer | Median | Typische Schadenshöhe |
| Metrisch, symmetrisch | Mittelwert | Ø Schadenhöhe (homogen) |

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 3 – Univariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_3', year: '2017' },
  { title: 'Klugman, Panjer & Willmot: Loss Models – From Data to Decisions (4th ed.)', url: 'https://doi.org/10.1002/9781118787106', year: '2013' },
]" />

::right::

<Illustration src="/illustrations/statistics-bro.svg" alt="Statistik & Lagemaße" width="90%" />

---
layout: statement
---

## Dasselbe Prinzip, andere Branche

Dieses Prinzip gilt weit über den Versicherungskontext hinaus — ein Beispiel aus dem Personalwesen macht es sofort greifbar:

9 Mitarbeiter: **2.000 €** &nbsp;·&nbsp; 1 Geschäftsführer: **200.000 €**

→ Mittelwert: **21.800 €** &nbsp;|&nbsp; Median: **2.000 €**

**9 von 10 Personen verdienen weniger als der Mittelwert.**

<p style="opacity:0.45; font-size:0.85em; margin-top:1.5rem;">— ein klassisches Beispiel aus der Statistik-Didaktik</p>

*Der Mittelwert (21.800 €) und der Median (2.000 €) erzählen unterschiedliche Geschichten — beide sind aber nur die "Mitte". Wie weit die Werte um diese Mitte streuen, verrät uns noch nichts. Das klären wir jetzt.*

---
layout: header-cols
---

## Gleicher Mittelwert — völlig anderes Risiko (1/2)

Zwei Versicherer-Portfolios, identischer Mittelwert von EUR 1.000:

::left::

**Portfolio A** — enger Bereich:

| Schaden | Abweichung |
|---|---|
| EUR 950 | −50 |
| EUR 980 | −20 |
| EUR 1.000 | ±0 |
| EUR 1.020 | +20 |
| EUR 1.050 | +50 |

::right::

<div class="flex flex-col items-center justify-center h-full gap-4 mt-2 pb-8">
  <div class="text-center px-6 py-4 rounded-xl border-2" style="border-color:var(--slidev-theme-primary)">
    <div class="text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">Portfolio A — Spanne</div>
    <div class="text-3xl font-bold" style="color:var(--slidev-theme-primary)">EUR 950 – EUR 1.050</div>
    <div class="mt-2 text-sm font-semibold opacity-70">sehr eng &nbsp;·&nbsp; Δ = 100</div>
  </div>
  <div class="text-sm opacity-40 mt-2">→ Portfolio B: siehe nächste Folie</div>
</div>

---
layout: header-cols
---

## Gleicher Mittelwert — völlig anderes Risiko (2/2)

::left::

**Portfolio A:** EUR 950–1.050 (Δ 100)

**Portfolio B** — weiter Bereich:

| Schaden | Abweichung |
|---|---|
| EUR 200 | −800 |
| EUR 600 | −400 |
| EUR 1.000 | ±0 |
| EUR 1.400 | +400 |
| EUR 1.800 | +800 |

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 3 – Univariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_3', year: '2017' },
]" />

::right::

<div class="flex flex-col items-start gap-4 mt-8">
  <div class="text-5xl font-bold" style="color:var(--slidev-theme-primary)">Spanne A</div>
  <div class="text-2xl font-semibold">EUR 100</div>
  <div class="text-5xl font-bold mt-4" style="color:#e05252">Spanne B</div>
  <div class="text-2xl font-semibold">EUR 1.600</div>
  <div class="text-sm opacity-60 mt-4">Identischer Mittelwert — 16× mehr Streuungsrisiko</div>
  <blockquote class="mt-6"><strong>Gleicher Mittelwert. Welcher Versicherer braucht mehr Eigenkapitalreserve?</strong></blockquote>
</div>

---
layout: default
---

## Varianz & Standardabweichung — das Streuungsmaß

Portfolio B brauchte mehr Reserve — ein Maß, das Streuung präzise quantifiziert, sagt uns wie viel mehr: die **Varianz**.

<div class="pb-10">

Datensatz (dieselben 6 Schäden wie zuvor): **800 · 1.100 · 1.100 · 1.400 · 2.200 · 38.000 EUR**

**Stichprobenvarianz** — $s^2 = \dfrac{1}{n-1}\displaystyle\sum_{i=1}^{n}(x_i - \bar{x})^2$

Wir quadrieren die Abweichungen, damit sich positive und negative Ausreißer nicht gegenseitig aufheben — und damit große Abweichungen überproportional bestraft werden.

<div class="text-xs opacity-50 mt-1 mb-2">

Ausgerechnet: $s^2 = \dfrac{(-6{.}633)^2 + (-6{.}333)^2 + (-6{.}333)^2 + (-6{.}033)^2 + (-5{.}233)^2 + (+30{.}567)^2}{5} \approx 225{.}000{.}000$

</div>

<div class="text-2xl font-bold mt-3" style="color:var(--slidev-theme-primary)">

Ergebnis: $s = \sqrt{s^2} \approx$ EUR 15.000

</div>

> ⚠️ **Ein einziger Ausreißer verändert alles:** Ohne den Großschaden (38.000 €) sinkt $s$ von ~EUR 15.000 auf ~**EUR 536** — Faktor **28** durch einen einzigen Datenpunkt.

</div>

Streuung beschreibt, wie weit *ein* Merkmal schwankt. Aber hängen *zwei* Merkmale zusammen — etwa Fahreralter und Schadenhäufigkeit? Das beantwortet die Korrelation.

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 3 – Univariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_3', year: '2017' },
]" />

---
layout: default
---

## [Kovarianz]{style="color:var(--slidev-theme-primary)"} — von einer zu zwei Variablen

Die Varianz misst, wie stark **ein** Merkmal um seinen Mittelwert schwankt. Jetzt: Bewegen sich **zwei** Merkmale gemeinsam?

**Idee:** Statt die Abweichungen zu quadrieren (→ Varianz), multiplizieren wir die Abweichungen beider Variablen miteinander:

$$\text{Cov}(X,Y) = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})$$

<div class="flex gap-2 mt-2 mb-3 text-xs font-mono items-center" style="color:var(--slidev-theme-primary)">
  <span class="px-2 py-1 rounded" style="background:rgba(0,198,178,0.1)">Cov &gt; 0: gemeinsamer Anstieg</span>
  <span class="opacity-40">·</span>
  <span class="px-2 py-1 rounded" style="background:rgba(0,198,178,0.1)">Cov &lt; 0: gegenläufig</span>
  <span class="opacity-40">·</span>
  <span class="px-2 py-1 rounded" style="background:rgba(0,198,178,0.1)">Cov ≈ 0: kein linearer Zusammenhang</span>
</div>

**(„Linear" heißt: keine Kurven wie ein U — dazu gleich mehr.)**

Ein Beispiel macht das greifbar: Fahrzeugalter und Reparaturkosten bei vier Fahrzeugen.

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 4 – Bivariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_4', year: '2017' },
]" />

---
layout: default
---

## Kovarianz — ein Rechenbeispiel

**Fahrzeugalter $X$ (Jahre) & Reparaturkosten $Y$ (EUR)** — $\bar{x} = 2{,}5$, $\bar{y} = 400$

<div class="text-xs compact-table">

| i | xᵢ, yᵢ | Abweichungen | Produkt |
|:---:|:---:|:---:|:---:|
| 1 | 1, 200 | −1,5 · −200 | +300 |
| 2 | 2, 300 | −0,5 · −100 | +50 |
| 3 | 3, 500 | +0,5 · +100 | +50 |
| 4 | 4, 600 | +1,5 · +200 | +300 |

</div>

Summe = 700 → $\text{Cov}(X,Y) = \tfrac{700}{3} \approx 233\ \text{EUR·Jahre}$

> ⚠️ **Skalenproblem:** „233 EUR·Jahre" klingt bedeutungslos — und misst Du *Y* statt in EUR in Cent, springt Cov auf 23.300 Cent·Jahre, obwohl sich am echten Zusammenhang nichts ändert.

Die Lösung: Division durch $s_X \cdot s_Y$ hebt die Einheiten auf — das ergibt den einheitenlosen **Pearson-Korrelationskoeffizienten** $r = \frac{\text{Cov}(X,Y)}{s_X \cdot s_Y}$.

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 4 – Bivariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_4', year: '2017' },
]" />

---
layout: header-cols
---

## Korrelation — Zusammenhang, nicht Ursache

::left::

<div class="pb-20">

**Pearson-Korrelationskoeffizient $r$**

- Misst den *linearen* Zusammenhang zweier metrischer Variablen
- Wertebereich: $-1 \leq r \leq +1$ (0 = kein linearer Zusammenhang)
- $r \approx 0$ bedeutet **nicht** "kein Zusammenhang"
  - → Fahreralter–Schadenhäufigkeit: U-Form → würde $r \approx 0$ ergeben, obwohl real

<div class="flex gap-2 mt-2 text-xs font-mono items-center" style="color:var(--slidev-theme-primary)">
  <span class="px-2 py-1 rounded" style="background:rgba(0,198,178,0.1)">Jung: hoch</span>
  <span class="opacity-40">·</span>
  <span class="px-2 py-1 rounded" style="background:rgba(0,198,178,0.1)">Mittel: niedrig</span>
  <span class="opacity-40">·</span>
  <span class="px-2 py-1 rounded" style="background:rgba(0,198,178,0.1)">Alt: hoch</span>
  <span class="opacity-60 ml-1">→ U-Form (die Kurve macht's sofort klar)</span>
</div>

</div>

::right::

> **Klassisches Lehrbeispiel der Statistik:**
>
> An heißen Tagen wird mehr Eis verkauft — und es gibt mehr Ertrinkungstote. Eis verkaufen verursacht keine Ertrinkungstode. Die gemeinsame Ursache ist die **Temperatur** (Konfundierungsvariable).
>
> Korrelation zeigt einen Zusammenhang — sie sagt nichts über die Richtung oder Ursache.
>
> *— Spurious Correlations: ein Standardbeispiel der Statistik-Didaktik*

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 4 – Bivariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_4', year: '2017' },
  { title: 'Pearl & Mackenzie: The Book of Why – The New Science of Cause and Effect', url: 'https://www.basicbooks.com/titles/judea-pearl/the-book-of-why/9780465097616/', year: '2018' },
]" />

---
layout: default
---

## Die U-Form sichtbar gemacht

<img src="./fahreralter_ushap.svg" alt="Fahreralter vs. Schadenhäufigkeit: U-förmiger Zusammenhang" style="max-height: 440px; margin: 0 auto; display: block;" />

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 4 – Bivariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_4', year: '2017' },
]" />

---
layout: default
---

## Drei Werkzeuge zum *Beschreiben* — jetzt wird's *vorhersagend*

**Drei Fragen — drei deskriptive Werkzeuge:**

- 📍 **Lagemaße** *(Modus, Median, Mittelwert)* — Was ist der typische Wert?
- 📏 **Streuungsmaße** *(Varianz $s^2$, Standardabweichung $s$)* — Wie verlässlich ist diese Typik?
- 🔗 **Korrelation** *(Pearson $r$)* — Hängen zwei Größen zusammen? *Aber Vorsicht — wie die U-Form gerade gezeigt hat: ein Zusammenhang kann trotz $r \approx 0$ real sein, wenn er nicht linear ist.*

**→ Diese drei Werkzeuge sind jetzt komplett — aber nur für die *Beschreibung*. Sie sagen nichts über die Zukunft voraus.**

**Brücke nach vorn — Korrelation ist die Vorstufe der Regression:**

> Anders als beim Fahreralter ist der Zusammenhang zwischen **Fahrzeugalter und Reparaturkosten** tatsächlich linear und stark ($r \approx 0{,}99$). Die **lineare Regression** macht daraus ein Vorhersagemodell — und baut auf diesen drei Werkzeugen auf, statt sie zu ersetzen.

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 4 – Bivariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_4', year: '2017' },
]" />

---
layout: default
---

## [z-Transformation]{style="color:var(--slidev-theme-primary)"}: Idee & Motivation

„233 EUR·Jahre klingt bedeutungslos" — das Skalenproblem der Kovarianz kennen wir bereits. Jetzt tritt es erneut auf: Fahrzeugalter misst in Jahren (1–4), Reparaturkosten in EUR (200–600). Wie vergleichen wir diese auf einer gemeinsamen Skala?

**Lösung:** Jede Beobachtung wird in Standardabweichungen vom Mittelwert ausgedrückt — unabhängig von der ursprünglichen Einheit.

Für unser Zwei-Variablen-Beispiel ist das eine nette Nebenrechnung. Der eigentliche Gewinn zeigt sich, sobald ein Modell **mehrere Features gleichzeitig** verarbeitet: Ohne Standardisierung dominiert das Feature mit den größten Zahlen automatisch die Berechnung — unabhängig davon, ob es inhaltlich wichtig ist. Die z-Transformation ist deshalb Standardpraxis in **Machine-Learning-Pipelines** (Kapitel 4) und ein Werkzeug, das Dich bis zu neuronalen Netzen begleitet.

<!-- Überleitung: Wie genau das funktioniert, schauen wir uns jetzt mit der Formel an. -->

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 3 – Deskriptive Statistik', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [z-Transformation]{style="color:var(--slidev-theme-primary)"}: Formel & Anwendung

Die **z-Transformation** skaliert Daten so, dass sie vergleichbar werden:

$$z_i = \frac{x_i - \bar{x}}{s}$$

Das Ergebnis hat stets **Mittelwert 0** und **Standardabweichung 1** — unabhängig von der ursprünglichen Einheit. Am Fahrzeugalter wird das sofort greifbar.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 3 – Deskriptive Statistik', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## z-Transformation — angewendet auf unser Beispiel

**Fahrzeugalter** ($\bar{x} = 2{,}5$, $s \approx 1{,}29$):

<div class="text-xs compact-table">

| $X$ | $X - \bar{x}$ | $z$ |
|:---:|:---:|:---:|
| 1 | −1,5 | −1,16 |
| 2 | −0,5 | −0,39 |
| 3 | +0,5 | +0,39 |
| 4 | +1,5 | +1,16 |

</div>

Jetzt kennen wir das Prinzip der Standardisierung — ein Werkzeug, das Dich durch Machine Learning bis zu neuronalen Netzen begleiten wird. Für unser Lehrbeispiel rechnen wir aus Gründen der Nachvollziehbarkeit weiter in Originaleinheiten: Als Nächstes legen wir die Regressionsgerade direkt über die Rohdaten.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 3 – Deskriptive Statistik', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [Die Regressionsgerade]{style="color:var(--slidev-theme-primary)"} — Die Idee

Pearson $r \approx 0{,}99$ sagt: starker linearer Zusammenhang zwischen Fahrzeugalter und Reparaturkosten. Aber $r$ sagt nur „da ist etwas" — nicht wie viel EUR jedes zusätzliche Lebensjahr kostet. Dafür brauchen wir eine Gerade.

**OLS-Idee:** Lege $\hat{Y} = a + bX$ so, dass die Summe der quadrierten Residuen minimal wird.

<!-- Überleitung: Wie wir diese Minimierung konkret berechnen, sehen wir auf der nächsten Folie. -->

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 12 – Regressionsanalyse', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [Die Regressionsgerade]{style="color:var(--slidev-theme-primary)"} — Die Formeln

Zur Berechnung der optimalen Regressionsgeraden nutzen wir die **Methode der kleinsten Quadrate (OLS)**, um $a$ (Achsenabschnitt) und $b$ (Steigung) zu finden:

$$b = \frac{\text{Cov}(X,Y)}{s_X^2} \qquad a = \bar{y} - b \cdot \bar{x}$$

Wir kennen bereits aus vorherigen Berechnungen: $\text{Cov}(X,Y) = \tfrac{700}{3} \approx 233$ und $s_X^2 = \tfrac{5}{3}$.

Rechnen wir es aus.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 12 – Regressionsanalyse', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [Die Regressionsgerade]{style="color:var(--slidev-theme-primary)"} — Die Berechnung

**Berechnung der Koeffizienten $a$ und $b$:**

$$b = \frac{700/3}{5/3} = \frac{700}{5} = 140\ \text{EUR/Jahr}$$

$$a = 400 - 140 \times 2{,}5 = 50\ \text{EUR}$$

**Unser Regressionsmodell:**

$\hat{Y} = 50 + 140X$ — pro Lebensjahr **+140 EUR** Reparaturkosten.

**Vorhersage für ein 5 Jahre altes Fahrzeug:**

$\hat{Y} = 50 + (140 \times 5) = 50 + 700 = \mathbf{750\ \text{EUR}}$

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 12 – Regressionsanalyse', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [R²]{style="color:var(--slidev-theme-primary)"} — Das Bestimmtheitsmaß

Das Modell macht Vorhersagen — aber wie gut? **R² (Bestimmtheitsmaß)** misst, welcher Anteil der Gesamtstreuung von $Y$ durch das Modell erklärt wird:

$$R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}$$

- $SS_{\text{res}} = \sum (Y - \hat{Y})^2$ — Residualstreuung (unerklärter Rest)
- $SS_{\text{tot}} = \sum (Y - \bar{Y})^2$ — Gesamtstreuung

**Wertebereich:** $0 \leq R^2 \leq 1$ — ein $R^2 = 1$ bedeutet perfekte Vorhersage, $R^2 = 0$ bedeutet das Modell erklärt nichts.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 12 – Regressionsanalyse', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## [R²]{style="color:var(--slidev-theme-primary)"} — Unser Beispiel

**Unser Fahrzeugalter-Beispiel:** Modell $\hat{Y} = 50 + 140X$

<div class="text-xs compact-table">

| $X$ | $Y$ (echt) | $\hat{Y}$ (Modell) | $Y - \hat{Y}$ | $(Y-\hat{Y})^2$ |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 200 | 190 | +10 | 100 |
| 2 | 300 | 330 | −30 | 900 |
| 3 | 500 | 470 | +30 | 900 |
| 4 | 600 | 610 | −10 | 100 |

</div>

$SS_{\text{res}} = \sum (Y - \hat{Y})^2 = 100 + 900 + 900 + 100 = 2.000\ \text{EUR}^2$

$SS_{\text{tot}}$ (Gesamtstreuung der echten $Y$-Werte) $= 100.000\ \text{EUR}^2$

$$R^2 = 1 - \frac{2.000}{100.000} = 0{,}98$$

**Das Fahrzeugalter erklärt 98 % der Varianz in den Reparaturkosten** — ein fast perfektes lineares Modell für dieses kleine Beispiel.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 12 – Regressionsanalyse', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## $R^2$ in der Praxis

98 % der Schwankungen in den Reparaturkosten werden durch das Fahrzeugalter erklärt — nur 2 % sind Rauschen.

- **Einordnung:** $R^2 = 0{,}98$ ist außergewöhnlich hoch (4 Datenpunkte, didaktisches Beispiel) — in echten Versicherungsmodellen gilt $R^2 \geq 0{,}6$–$0{,}7$ bereits als gutes Ergebnis.
- ⚠️ **Hohes $R^2$ ist kein Kausalitätsbeweis** — wie Korrelation $\neq$ Kausalität, bereits bekannt.

Lineare Regression sagt eine Zahl vorher (EUR). Was aber, wenn die Zielvariable *„Betrug: ja/nein"* ist? Eine Gerade kann Werte außerhalb $[0,1]$ produzieren — ungeeignet. Das lösen wir jetzt mit der logistischen Regression.

<LiteraturSource title="Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 12 – Regressionsanalyse" url="https://doi.org/10.1007/978-3-662-50372-0" year="2016" />

---
layout: default
---

## Logistische Regression: [Idee & Sigmoid]{style="color:var(--slidev-theme-primary)"}

**Wo lineare Regression an ihre Grenzen stößt:**

Unser Regressionsmodell für Reparaturkosten kann Werte von −200 EUR oder 150 % liefern — für eine **Wahrscheinlichkeit** ist das sinnlos. Für die Frage *„Betrug: Ja/Nein?"* brauchen wir ein Modell, das immer im Bereich $[0, 1]$ bleibt.

**Die Lösung — die Sigmoid-Funktion:**

Die logistische Regression "quetscht" die lineare Vorhersage $z = \beta_0 + \beta_1 x_1 + \ldots$ mit der Sigmoid-Funktion in eine Wahrscheinlichkeit:

<small style="opacity:0.65">(Du siehst ab hier $\beta_0, \beta_1$ statt $a, b$ — dieselbe Idee, nur in der Notation, die in ML-Kontexten üblich ist.)</small>

$$\hat{p} = \sigma(z) = \frac{1}{1 + e^{-z}}$$

Egal wie groß oder klein $z$ wird — $\hat{p}$ bleibt immer zwischen 0 und 1.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 13 – Logistische Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4.4 – Logistic Regression', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Logistische Regression: [Anwendung]{style="color:var(--slidev-theme-primary)"}

**Anwendung im Versicherungsfall:**

Statt *„Schadenshöhe in EUR"* sagt das Modell *„Wahrscheinlichkeit für Betrug"* vorher. Ein Wert von $\hat{p} = 0{,}8$ bedeutet: **80 % Wahrscheinlichkeit für einen Betrugsfall** — direkt handlungsrelevant für die Schadenabteilung.

**Beispiel:** Für einen Kunden mit 3 Vorschäden berechnet das Modell $\hat{p} = 0{,}72$ — eine Betrugswahrscheinlichkeit von 72 %. Ab einem Schwellenwert (z. B. 50 %) wird der Fall zur manuellen Prüfung markiert. Der Schwellenwert lässt sich je nach Risikoappetit anpassen: ein niedrigerer Wert erkennt mehr Betrugsfälle, akzeptiert aber auch mehr Fehlalarme.

> Die Logistische Regression ist der Türöffner zu Klassifikationsproblemen und ein fundamentales Werkzeug im Supervised Machine Learning.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 13 – Logistische Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4.4 – Logistic Regression', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Logit & [Odds Ratio]{style="color:var(--slidev-theme-primary)"}

**Von der Wahrscheinlichkeit zur linearen Welt — und zurück:**

Die Sigmoid-Funktion lässt sich umkehren: Statt $\hat{p}$ direkt zu modellieren, modelliert die logistische Regression den **Logit** — den natürlichen Logarithmus der Odds:

$$\text{logit}(\hat{p}) = \ln\!\left(\frac{\hat{p}}{1 - \hat{p}}\right) = \beta_0 + \beta_1 x_1 + \ldots + \beta_k x_k$$

**Beispiel:** Bei $\hat{p} = 0{,}8$ ist der Logit $\ln(0{,}8 / 0{,}2) = \ln(4) \approx 1{,}39$.

Im Logit-Raum sind die Feature-Einflüsse **additiv** — genau wie in der linearen Regression.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 13 – Logistische Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4.4 – Logistic Regression', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Odds Ratio — [Interpretation]{style="color:var(--slidev-theme-primary)"}

**Odds Ratio — den Koeffizient direkt interpretieren:**

| Begriff | Formel | Bedeutung |
|---|---|---|
| Odds | $\frac{\hat{p}}{1 - \hat{p}}$ | Verhältnis Betrug vs. kein Betrug |
| Odds Ratio | $e^{\beta_j}$ | Faktor, um den die Odds steigen, wenn $x_j$ um 1 steigt |

**Beispiel Betrugsmodell:** Das Merkmal *„Anzahl Vorfälle"* hat einen Koeffizienten $\beta = 0{,}405$, also $e^{0{,}405} \approx 1{,}5$ — mit jedem zusätzlichen Vorfall steigt die Betrugs-Chance um den **Faktor 1,5**.

> Logit & Odds Ratio ermöglichen eine direkte Interpretation einzelner Merkmale — eine Eigenschaft, die bei komplexeren ML-Modellen (Random Forest, Neural Networks) oft verloren geht.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 13 – Logistische Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4.4 – Logistic Regression', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Interaktionseffekte: [Die Idee]{style="color:var(--slidev-theme-primary)"}

**Was, wenn zwei Variablen gemeinsam mehr erklären als jede für sich?**

<!-- Definition (ausführlich): Ein Interaktionseffekt liegt vor, wenn der Einfluss einer unabhängigen Variable x₁ (z.B. Fahreralter) auf die abhängige Variable y (z.B. Schadenhäufigkeit) davon abhängt, welchen Wert eine dritte Variable x₂ (z.B. Geschlecht) annimmt. Die Effekte sind nicht mehr additiv — sie interagieren. -->

Ein **Interaktionseffekt** liegt vor, wenn der Einfluss von $x_1$ auf $y$ davon abhängt, welchen Wert $x_2$ annimmt — die Effekte sind **nicht mehr additiv**.

**Versicherungsbeispiel:**

- Junge Männer zeigen deutlich höhere Schadenhäufigkeiten als junge Frauen
- Bei älteren Fahrenden (60+) nivelliert sich dieser Unterschied stark
- Ein einfaches Modell $y = \beta_0 + \beta_1 \cdot \text{Alter} + \beta_2 \cdot \text{Geschlecht}$ würde dieses Muster **nicht abbilden** — es setzt parallele Effekte voraus

> **Interaktionseffekte** erlauben es, komplexere Realitäten zu modellieren, die über die simple Addition von Einzeleffekten hinausgehen.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 15 – Multiple Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Cohen, West, Aiken: Applied Multiple Regression/Correlation Analysis, Kap. 7 – Interactions', url: 'https://doi.org/10.4324/9781410606266', year: '2014' },
]" />

---
layout: default
---

## Interaktionseffekte: [Interpretation & Beispiel]{style="color:var(--slidev-theme-primary)"}

**Wie modellieren wir Interaktionen — und was bedeuten die Koeffizienten?**

In der multiplen Regression wird ein Interaktionsterm durch **Multiplikation** der beteiligten Variablen erzeugt:

$$y = \beta_0 + \beta_1 \cdot \text{Alter} + \beta_2 \cdot \text{Geschlecht} + \beta_3 \cdot (\text{Alter} \times \text{Geschlecht}) + \varepsilon$$

Der Koeffizient $\beta_3$ beschreibt, **wie stark sich der Alterseffekt zwischen den Gruppen unterscheidet**.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 15 – Multiple Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Cohen, West, Aiken: Applied Multiple Regression/Correlation Analysis, Kap. 7 – Interactions', url: 'https://doi.org/10.4324/9781410606266', year: '2014' },
]" />

---
layout: default
---

## Interaktionseffekte: [Konkrete Interpretation]{style="color:var(--slidev-theme-primary)"}

**Konkrete Interpretation der Koeffizienten:**

| Gruppe | Effekt des Alters auf Schadenhäufigkeit |
|---|---|
| Männer ($x_2 = 1$) | $\beta_1 + \beta_3$ |
| Frauen ($x_2 = 0$) | $\beta_1$ |

Der Koeffizient $\beta_1$ gilt nur noch für Frauen (Referenzkategorie, $x_2 = 0$). Für Männer kommt $\beta_3$ dazu — das ist der **Unterschied im Alterseffekt** zwischen den Gruppen.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 15 – Multiple Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Cohen, West, Aiken: Applied Multiple Regression/Correlation Analysis, Kap. 7 – Interactions', url: 'https://doi.org/10.4324/9781410606266', year: '2014' },
]" />

---
layout: default
---

## Interaktionseffekte: [Grafische Interpretation]{style="color:var(--slidev-theme-primary)"}

**Tipp — Grafik schlägt Formel:** Getrennte Regressionslinien machen Crossover-Interaktionen sofort sichtbar.

<img src="./interaktionseffekt_diagramm.svg" alt="Zwei Regressionslinien für Männer und Frauen mit Crossover-Interaktion: großer Abstand bei jungen Fahrern, Annäherung bei älteren Fahrern" style="max-height: 270px; margin: 0 auto; display: block;" />

> Parallele Linien = kein Interaktionseffekt. Das Auseinanderlaufen und Annähern hier ist der visuelle Fingerabdruck der Interaktion.

<LiteraturSource :sources="[
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 15 – Multiple Regression', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
  { title: 'Cohen, West, Aiken: Applied Multiple Regression/Correlation Analysis, Kap. 7 – Interactions', url: 'https://doi.org/10.4324/9781410606266', year: '2014' },
]" />

---
layout: default
---

## Bootstrapping: [Die Idee]{style="color:var(--slidev-theme-primary)"}

**Wie schätzt Du die Unsicherheit einer Statistik, wenn die Daten klein oder schief verteilt sind?**

Traditionelle Formeln für Konfidenzintervalle setzen oft Normalverteilung voraus — eine Annahme, die bei kleinen Portfolios oder stark rechtsschiefen Schadensverteilungen schnell verletzt wird.

**Bootstrapping** löst dieses Problem durch *Resampling*:

1. **Ziehe wiederholt** Stichproben *mit Zurücklegen* aus Deinen $n$ Beobachtungen (*Bootstrap-Stichprobe*).
2. **Berechne die Statistik** (z.B. $\bar{x}^*$ oder $\hat{\beta}^*$) für jede der $B$ Stichproben.
3. **Schätze die Unsicherheit** aus der Verteilung der $B$ Bootstrap-Statistiken → Konfidenzintervall.

**Versicherungsbeispiel:** Ein kleines Portfolio mit rechtsschiefer Schadensgröße liefert via Bootstrapping ein robustes Konfidenzintervall — **ohne Normalitätsannahme**.

<blockquote class="mb-4">Bootstrapping liefert robuste Konfidenzintervalle ohne Normalitätsannahme.</blockquote>

<LiteraturSource :sources="[
  { title: 'Efron, Hastie: Computer Age Statistical Inference, Kap. 10 – The Bootstrap', url: 'https://doi.org/10.1017/CBO9781316576533', year: '2016' },
  { title: 'Davison, Hinkley: Bootstrap Methods and their Application, Kap. 2', url: 'https://doi.org/10.1017/CBO9780511802843', year: '1997' },
]" />

---
layout: default
---

## Signifikanz: [Die Frage]{style="color:var(--slidev-theme-primary)"}

Unser Versicherungsmodell sagt, dass ältere Fahrzeuge höhere Reparaturkosten haben. Aber ist dieser Effekt **echt**, oder nur Zufall in unserer Stichprobe?

**Statistische Signifikanz** beantwortet die Frage: Wie wahrscheinlich ist es, ein beobachtetes Ergebnis (oder ein noch extremeres) zu sehen, *wenn die Nullhypothese wahr wäre*?

Diese Frage stellt sich bei jedem Regressionskoeffizienten, den wir bisher berechnet haben — ob $b = 140\ \text{EUR/Jahr}$ oder $\beta_3$ im Interaktionsmodell.

- **Nullhypothese (H₀):** Es gibt keinen Effekt — z. B. *„Fahrzeugalter hat keinen Einfluss auf Reparaturkosten"*
- **Alternativhypothese (H₁):** Es gibt einen Effekt — *„Ältere Fahrzeuge verursachen höhere Reparaturkosten"*

<LiteraturSource :sources="[
  { title: 'Wasserstein & Lazar: The ASA Statement on p-Values: Context, Process, and Purpose', url: 'https://doi.org/10.1080/00031305.2016.1154108', year: '2016' },
  { title: 'Amrhein, Greenland & McShane: Scientists rise up against statistical significance', url: 'https://doi.org/10.1038/d41586-019-00857-9', year: '2019' },
]" />

---
layout: default
---

## Signifikanz: [Ein Beispiel]{style="color:var(--slidev-theme-primary)"}

Unser Modell hat einen Regressionskoeffizienten $b = 140\ \text{EUR/Jahr}$ berechnet. Ein Signifikanztest (z. B. ein $t$-Test auf den Koeffizienten) prüft: Wie wahrscheinlich ist ein Koeffizient dieser Größe, wenn der wahre Effekt in Wirklichkeit null wäre? Das Ergebnis ist der $p$-Wert.

**Beispiel — $p$-Wert von 0,03:**

> Würde das Fahrzeugalter die Reparaturkosten *nicht* beeinflussen (H₀ wäre wahr), hätten wir einen Koeffizienten von 140 EUR/Jahr oder ein noch stärkeres Ergebnis in **nur 3 % der Fälle** beobachtet.

Die Signifikanzprüfung hilft uns, echte Muster von zufälligem Rauschen zu trennen — die Grundlage jeder datenbasierten Entscheidung.

<LiteraturSource :sources="[
  { title: 'Wasserstein & Lazar: The ASA Statement on p-Values: Context, Process, and Purpose', url: 'https://doi.org/10.1080/00031305.2016.1154108', year: '2016' },
  { title: 'Amrhein, Greenland & McShane: Scientists rise up against statistical significance', url: 'https://doi.org/10.1038/d41586-019-00857-9', year: '2019' },
]" />

---
layout: default
---

## $p$-Wert und [Entscheidungsregeln]{style="color:var(--slidev-theme-primary)"}

Ein kleiner $p$-Wert — und nun? Was ist die Schwelle, ab der wir an Zufall glauben, und ab wann an einen echten Effekt?

Der **$p$-Wert** quantifiziert die Wahrscheinlichkeit, das beobachtete (oder ein extremeres) Ergebnis zu erhalten, *unter der Annahme, dass H₀ wahr ist*.

**Entscheidungsregel mit Signifikanzschwelle $\alpha$:**

| Bedingung | Entscheidung | Bedeutung |
|:---|:---|:---|
| $p < \alpha$ | H₀ verwerfen | Effekt ist statistisch signifikant |
| $p \geq \alpha$ | H₀ beibehalten | Kein ausreichender Beweis für Effekt |

<small>Gängige Wahl: $\alpha = 0{,}05$ (5 %)</small>

<LiteraturSource :sources="[
  { title: 'Wasserstein & Lazar: The ASA Statement on p-Values: Context, Process, and Purpose', url: 'https://doi.org/10.1080/00031305.2016.1154108', year: '2016' },
  { title: 'Amrhein, Greenland & McShane: Scientists rise up against statistical significance', url: 'https://doi.org/10.1038/d41586-019-00857-9', year: '2019' },
]" />

---
layout: default
---

## $p$-Wert: [Anwendung im Modell]{style="color:var(--slidev-theme-primary)"}

**Anwendung im Versicherungsmodell:**

Unser Modell liefert $p = 0{,}01$ für den „Alter"-Effekt bei $\alpha = 0{,}05$ → $p < \alpha$: Wir verwerfen H₀. Der Alterseffekt ist **statistisch signifikant** — ältere Fahrzeuge haben nachweislich höhere Reparaturkosten.

*   **Wichtig:** Der $p$-Wert ist kein Alleinurteil.
*   Effektgröße, Stichprobengröße und Domänenwissen sind ebenso entscheidend, um valide Schlussfolgerungen zu ziehen und Fehlinterpretationen zu vermeiden.

Wir haben jetzt die Mathematik hinter Mittelwert, Streuung, Korrelation und Regression verstanden — von Hand gerechnet. Zeit, das selbst an einem eigenen Fall durchzurechnen. Denn eines ist klar: Kein Versicherer wertet 400.000 Verträge so aus — genau das übernimmt gleich Code.

<LiteraturSource :sources="[
  { title: 'Wasserstein & Lazar: The ASA Statement on p-Values: Context, Process, and Purpose', url: 'https://doi.org/10.1080/00031305.2016.1154108', year: '2016' },
  { title: 'Amrhein, Greenland & McShane: Scientists rise up against statistical significance', url: 'https://doi.org/10.1038/d41586-019-00857-9', year: '2019' },
]" />

---
layout: header-cols
---

## 💻 [Übung]{style="color:var(--slidev-theme-primary)"} — Statistik als Fundament

::left::

Zeit, selbst zu rechnen: Ein Aufgabenblatt mit zwei Kfz-Versicherer-Datensätzen führt Dich von Hand durch den gesamten Block — Lagemaße bis Odds Ratio.

1. Lagemaße & Streuung
2. Kovarianz & Korrelation
3. z-Transformation
4. Lineare Regression (OLS von Hand)
5. Logistische Regression & Odds Ratio
6. *(Bonus)* Signifikanz in der Praxis

> 🎯 **Dein Auftrag:** Aufgabenblatt durchrechnen — von Hand oder mit Python, ganz wie Du magst.

::right::

<Illustration src="/illustrations/analytics-bro.svg" alt="Statistik-Übung" width="90%" />

---
layout: default
---

## Key Takeaways – Statistik 🔑

- **Lagemaße:** Mittelwert, Median und Modus beschreiben die "Mitte" einer Verteilung — aber der Mittelwert reagiert empfindlich auf Ausreißer, Median und Modus sind robuster
- **Varianz & Standardabweichung:** quantifizieren, wie stark Werte um den Mittelwert streuen
- **Kovarianz & Korrelation:** zeigen Richtung und Stärke eines linearen Zusammenhangs zwischen zwei Variablen — aber Korrelation ist keine Kausalität
- **z-Transformation:** standardisiert Werte unterschiedlicher Skalen auf eine gemeinsame, vergleichbare Basis

---
layout: default
---

## Key Takeaways – Statistik 🔑

- **Lineare Regression & R²:** die Regressionsgerade beschreibt den Zusammenhang zweier Variablen, R² sagt, wie viel Varianz dadurch erklärt wird
- **Logistische Regression & Odds Ratio:** wandelt eine stetige Vorhersage über die Sigmoid-Funktion in eine Klassifikations-Wahrscheinlichkeit um
- **Interaktionseffekte:** die Wirkung einer Variable kann von einer anderen Variable abhängen — das Modell muss das explizit abbilden
- **Bootstrapping & Signifikanz ($p$-Wert):** quantifizieren die Unsicherheit einer Schätzung und helfen zu entscheiden, ob ein Effekt echt oder Zufall ist

---
layout: chapter
---

::left::

# Kapitel 2: [Python-Vertiefung]{style="color:var(--slidev-theme-primary)"}

::right::

<Illustration src="/illustrations/coding-bro.svg" alt="Python-Vertiefung" width="90%" />

---
layout: default
---

## Lernziele — Verstehen & Anwenden

**Am Ende dieses Kapitels kannst du:**

🎯 **Verstehen & Erklären:**
- Grundsyntax: Variablen, Datentypen, Funktionsaufrufe und Kontrollstrukturen (if/for/while)
- Objektorientierte Programmierung: Klasse vs. Objekt, Attribute, Methoden
- Wofür NumPy, Pandas und Matplotlib jeweils stehen — und wie sie zusammenspielen

📊 **Anwenden & Bewerten:**
- Die Statistik-Berechnungen aus Kapitel 1 (Lagemaße, Streuung, z-Transformation, Regression, R²) in Python nachbauen
- Eine eigene Klasse mit Methoden schreiben, um Schadensfälle als Objekte zu modellieren
- Mit Pandas und Matplotlib einen Datensatz laden, aufbereiten und visualisieren

<LiteraturSource :sources="[
  { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', year: '2016' },
]" />

---
layout: default
---

## Lernziele — Kritisch Reflektieren

**Am Ende dieses Kapitels kannst du auch:**

⚖️ **Kritisch Reflektieren:**
- Wann sich vektorisierter NumPy-Code lohnt — und wann eine einfache Schleife reicht
- Typische Fallstricke (Kopier-Falle, NumPy-Streuungs-Fallgrube) erkennen, bevor sie zu falschen Ergebnissen führen
- Warum Scikit-Learn der nächste logische Schritt ist, sobald Code wiederverwendbar sein soll

Das ist die Code-Basis, auf der jedes Modell ab jetzt aufbaut.

---
layout: section
---

# Von der Formel zum [Code]{style="color:var(--slidev-theme-primary)"}

Die Statistik-Grundlagen — jetzt in Python

---
layout: default
---

## Variablen, Listen & `print()`

Variablen sind wie **benannte Speicherkisten** für Deine Schadenswerte. Mit `=` weist Du einem Namen einen Wert zu:

```python
schadenshoehen = [800, 1100, 1100, 1400, 2200, 38000]

print(f"Unsere Schadenshöhen: {schadenshoehen}")
print(f"Anzahl der Schäden: {len(schadenshoehen)}")
print(f"Gesamtsumme: {sum(schadenshoehen)} EUR")
```

**Ausgabe:**
```
Unsere Schadenshöhen: [800, 1100, 1100, 1400, 2200, 38000]
Anzahl der Schäden: 6
Gesamtsumme: 43600 EUR
```

Die `print()`-Funktion mit **f-Strings** (das `f` vor den Anführungszeichen) lässt Dich Variablen direkt in Text einbetten — und die Klammern `[]` erstellen eine **Liste**, die mehrere Werte speichert.

<LiteraturSource :sources="[
  { title: 'Python Software Foundation: The Python Tutorial — Section 3.2 (Numbers and Strings)', url: 'https://docs.python.org/3/tutorial/introduction.html', year: '2024' },
]" />

---
layout: default
---

## Module & `import`

Niemand schreibt jede Funktion selbst. **Module** sind Sammlungen von vorgefertigtem Code, die Du per `import` verfügbar machst:

```python
import statistics
import numpy as np

schadenshoehen = [800, 1100, 1100, 1400, 2200, 38000]

print(statistics.mean(schadenshoehen))  # 7433.33
print(np.mean(schadenshoehen))          # 7433.33
```

Es gibt zwei Quellen:
- **Standard-Library** — mit Python installiert, z.B. `statistics`
- **Third-Party-Pakete** — separat installiert, z.B. `numpy`

Das `as np` ist eine **Alias-Konvention**: Du gibst dem Modul einen Kurznamen, um ihn später schneller zu tippen.

<LiteraturSource :sources="[
  { title: 'Python Software Foundation: The Python Tutorial — Section 6 (Modules)', url: 'https://docs.python.org/3/tutorial/modules.html', year: '2024' },
]" />

---
layout: default
---

## Funktionsaufrufe lesen — [Punkt-Notation]{style="color:var(--slidev-theme-primary)"}

Jede Zeile wie `statistics.mean(schadenshoehen)` folgt dem gleichen Muster: **Modul . Funktion ( Argument )**

Das bedeutet: „Rufe die Funktion `mean` aus dem Modul `statistics` auf, und gib ihr die Liste `schadenshoehen` mit."

Das Gleiche werden wir in Kürze sehen — diesmal mit allen drei Lagemaßen. 

```python
import statistics

schadenshoehen = [800, 1100, 1100, 1400, 2200, 38000]

print(f"Mittelwert: {statistics.mean(schadenshoehen)}")
print(f"Median: {statistics.median(schadenshoehen)}")
print(f"Modus: {statistics.mode(schadenshoehen)}")
```

<LiteraturSource :sources="[
  { title: 'Python Software Foundation: The Python Tutorial — Section 7 (Input and Output)', url: 'https://docs.python.org/3/tutorial/inputoutput.html', year: '2024' },
]" />

---
layout: default
---

## Lagemaße in Python

Beginnen wir mit den **6 Schadenshöhen aus unserem Beispiel-Portfolio**: 800, 1.100, 1.100, 1.400, 2.200, 38.000 EUR. Das Python-Modul `statistics` liefert die Lagemaße direkt:

```python
import statistics

schadenshoehen = [800, 1100, 1100, 1400, 2200, 38000]

print(f"Mittelwert: {statistics.mean(schadenshoehen)}")
print(f"Median: {statistics.median(schadenshoehen)}")
print(f"Modus: {statistics.mode(schadenshoehen)}")
```

**Ausgabe:**
```
Mittelwert: 7433.33
Median: 1250.0
Modus: 1100
```

Das Skalenproblem wird hier live im Code sichtbar.

<LiteraturSource :sources="[
  { title: 'Python Software Foundation: statistics – Mathematical statistics functions', url: 'https://docs.python.org/3/library/statistics.html', year: '2024' },
]" />

---
layout: default
---

## Streuung in Python — statistics.variance & stdev

Jetzt berechnen wir Varianz und Standardabweichung auf denselben 6 Schadenshöhen:

```python
import statistics

s_var = statistics.variance(schadenshoehen)
s_std = statistics.stdev(schadenshoehen)

print(f"Varianz (statistics): {s_var:.0f}")
print(f"Stdev (statistics): {s_std:.0f}")
```

**Ausgabe:**
```
Varianz (statistics): 365433333
Stdev (statistics): 19116
```

Das `statistics`-Modul nutzt **n−1** (die Bessel-Korrektur), genau wie Du von Hand gerechnet hast. Damit stimmt das Ergebnis mit Deinen manuellen Berechnungen überein.

<LiteraturSource :sources="[
  { title: 'Python Software Foundation: statistics – Mathematical statistics functions', url: 'https://docs.python.org/3/library/statistics.html', year: '2024' },
]" />

---
layout: default
---

## Streuung in Python — Die NumPy-Fallgrube

NumPy nutzt **standardmäßig n** (Populationsvarianz) statt n−1 — hier liegt die Fallgrube:

```python
import numpy as np

np_var_wrong = np.var(schadenshoehen)  # n - falsch!
np_var_right = np.var(schadenshoehen, ddof=1)  # n-1 - korrekt!

print(f"NumPy (n, falsch): {np_var_wrong:.0f}")
print(f"NumPy (n-1, korrekt): {np_var_right:.0f}")
```

**Ausgabe:**
```
NumPy (n, falsch): 312870000
NumPy (n-1, korrekt): 365433333  # ← stimmt jetzt überein!
```

**Merksatz:** Für Stichproben-Statistik immer `ddof=1` bei NumPy setzen — sonst unterschätzest Du die Streuung systematisch.

<LiteraturSource :sources="[
  { title: 'NumPy Developers: numpy.var, numpy.std – Official Documentation', url: 'https://numpy.org/doc/stable/', year: '2024' },
]" />

---
layout: default
---

## Korrelation in Python

Wechsel zum **Fahrzeugalter/Reparaturkosten-Datensatz**:

```python
import numpy as np

alter = np.array([1, 2, 3, 4])        # Jahre
kosten = np.array([200, 300, 500, 600])  # EUR

# Korrelationsmatrix berechnen
korr_matrix = np.corrcoef(alter, kosten)
print(korr_matrix)
```

**Ausgabe:**
```
[[1.0000  0.9949]
 [0.9949  1.0000]]
```

Der Wert oben rechts (oder unten links, beide sind identisch) ist **r ≈ 0,99** — genau der Wert, den Du von Hand berechnet hast. Ein starker positiver linearer Zusammenhang: Mit jedem Lebensjahr steigen die Reparaturkosten im Durchschnitt um 140 EUR.

<LiteraturSource :sources="[
  { title: 'NumPy Developers: numpy.corrcoef – Official Documentation', url: 'https://numpy.org/doc/stable/', year: '2024' },
]" />

---
layout: default
---

## z-Transformation in Python — Zentrieren

Der erste Schritt der z-Transformation ist das **Zentrieren**: Wir subtrahieren den Mittelwert von jedem Wert.

```python
alter = np.array([1, 2, 3, 4])        # Jahre
alter_zentriert = alter - np.mean(alter)
print(f"Mittelwert: {np.mean(alter)}")
print(f"Zentriert: {alter_zentriert}")
```

**Ausgabe:**
```
Mittelwert: 2.5
Zentriert: [-1.5 -0.5  0.5  1.5]
```

Nach dieser Zentrierung hat die neue Variable einen Mittelwert von genau 0 — die Abweichungen vom Original-Mittelwert sind klar ersichtlich.

<LiteraturSource :sources="[
  { title: 'NumPy Developers: numpy.std – Official Documentation', url: 'https://numpy.org/doc/stable/', year: '2024' },
]" />

---
layout: default
---

## z-Transformation in Python — Skalieren

Der zweite Schritt ist das **Skalieren**: Wir teilen durch die Standardabweichung, um die Werte dimensionslos und vergleichbar zu machen.

```python
s = np.std(alter, ddof=1)
alter_z = alter_zentriert / s
print(f"Standardabweichung: {s:.2f}")
print(f"z-Werte: {alter_z.round(2)}")
```

**Ausgabe:**
```
Standardabweichung: 1.29
z-Werte: [-1.16 -0.39  0.39  1.16]
```

Jeder z-Wert drückt aus, wie viele Standardabweichungen ein Wert vom Mittelwert entfernt ist — dimensionslos und vergleichbar mit z-Werten aus anderen Datensätzen.

<LiteraturSource :sources="[
  { title: 'NumPy Developers: numpy.std – Official Documentation', url: 'https://numpy.org/doc/stable/', year: '2024' },
]" />

---
layout: default
---

## Lineare Regression in Python

Die Regressionsgerade Ŷ = a + bX berechnen mit `numpy.polyfit()`:

```python
# polyfit(X, Y, Polynograd); Grad 1 = lineare Gerade
koeffizienten = np.polyfit(alter, kosten, deg=1)
b, a = koeffizienten  # Achtung: höchster Grad zuerst!

print(f"Steigung b: {b:.1f} EUR/Jahr")
print(f"Intercept a: {a:.1f} EUR")
```

**Ausgabe:**
```
Steigung b: 140.0 EUR/Jahr
Intercept a: 50.0 EUR
Modell: Y = 50 + 140 * X
```

Das ist **exakt dieselbe Regressionsgerade** $\hat{Y} = 50 + 140X$, die Du von Hand berechnet hast — nur dass NumPy das in einer Zeile schafft.

<LiteraturSource :sources="[
  { title: 'NumPy Developers: numpy.polyfit – Official Documentation', url: 'https://numpy.org/doc/stable/', year: '2024' },
]" />

---
layout: default
---

## Modellgüte: R² in Python

Jetzt überprüfen wir die Modellgüte mit R², um zu quantifizieren, wie gut unser Modell die Reparaturkosten erklärt:

```python
# Vorhersagen berechnen
y_pred = a + b * alter
# R² berechnen
r_quadrat = 1 - np.sum((kosten - y_pred)**2) / np.sum((kosten - np.mean(kosten))**2)
print(f"R²: {r_quadrat:.2f}")
```

**Ausgabe:**
```
R²: 0.98
```

Das ist **dieselbe R² = 0,98**, die wir von Hand berechnet haben. Das Fahrzeugalter erklärt 98 % der Varianz in den Reparaturkosten — ein fast perfektes lineares Modell für dieses Beispiel.

<LiteraturSource :sources="[
  { title: 'NumPy Developers: numpy.polyfit – Official Documentation', url: 'https://numpy.org/doc/stable/', year: '2024' },
]" />

---
layout: default
---

## Von der Berechnung zur Entscheidung

**Bisher:** Sechs Folien Python-Code — aber jedes Mal nur *Ergebnisse angezeigt* (Mittelwerte, Korrelationen, Regressionskoeffizienten).

**Jetzt gefragt:** Kann das Programm auch selbst *entscheiden*?

> 🚨 **Konkretes Beispiel:** Ein neuer Schaden von 45.000 EUR kommt herein. Mittelwert bisheriger Schäden: 7.400 EUR, Standardabweichung: 19.100 EUR. Ist das ein Ausreißer (> 2,5 Standardabweichungen)?

Ohne **Kontrollstrukturen** (`if`/`elif`/`else`) kann ein Programm diese Regel nicht automatisch umsetzen — das ist unser nächstes Werkzeug.

---

## if/elif/else — [die Entscheidungslogik]{style="color:var(--slidev-theme-primary)"}

Zurück zu unserer Frage: Ist der 45.000-EUR-Schaden ein Ausreißer? Setzen wir die Regel in Code um.

Die **Schwelle** für Ausreißer liegt bei 2,5 Standardabweichungen über dem Mittelwert:
- Obere Grenze = 7.400 + (2,5 × 19.100) = **55.150 EUR**

```python
claim = 45000
mean_claim = 7400
stdev_claim = 19100
threshold = 55150

if claim > threshold:
    print("Ausreißer erkannt!")
elif claim > 0:
    print("Normaler Schaden")
else:
    print("Ungültig")
```

**Ergebnis:** 45.000 EUR liegt unter der Schwelle (55.150 EUR) → kein Ausreißer.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
]" />

---

## for-Schleife — [über die bekannten Schadenshöhen]{style="color:var(--slidev-theme-primary)"}

Statt einen einzelnen Schaden zu prüfen: Wende die Regel auf **alle** 6 Werte aus unserem Portfolio an. Mit einer Schleife.

```python
claims = [800, 1100, 1100, 1400, 2200, 38000]
threshold = 10000

for claim in claims:
    if claim > threshold:
        print(f"{claim} EUR — Ausreißer!")
    else:
        print(f"{claim} EUR — Normal")
```

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
]" />

---

## for-Schleife — [über die bekannten Schadenshöhen]{style="color:var(--slidev-theme-primary)"}

Die Schleife führt den gleichen Code 6 Mal aus — einmal für jeden Wert:

```
800 EUR — Normal
1100 EUR — Normal
1100 EUR — Normal
1400 EUR — Normal
2200 EUR — Normal
38000 EUR — Ausreißer!
```

**for vs. while:** Die `for`-Schleife kennt die Iterationszahl im Voraus — genau 6 Werte, also 6 Durchläufe. Der Computer arbeitet die Liste von vorne bis hinten ab.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
]" />

---

## while-Schleife — [bis ein Ziel erreicht ist]{style="color:var(--slidev-theme-primary)"}

Ein anderes Szenario: Der Versicherer hat eine **Prämienreserve** von 10.000 EUR für neue Schadenzahlungen. Die Schäden werden nacheinander bearbeitet, bis die Reserve aufgebraucht ist.

```python
claims = [800, 1100, 1100, 1400, 2200, 38000]
budget = 10000
total = 0
index = 0

while index < len(claims):
    if total + claims[index] <= budget:
        total += claims[index]
        print(f"Zahle {claims[index]} EUR")
        index += 1
    else:
        print(f"Stopp: {claims[index]} EUR")
        break
```

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
]" />

---

## while-Schleife — [bis ein Ziel erreicht ist]{style="color:var(--slidev-theme-primary)"}

Die `while`-Schleife rechnet solange, bis die Bedingung nicht mehr erfüllt ist:

```
Zahle 800 EUR
Zahle 1100 EUR
Zahle 1100 EUR
Zahle 1400 EUR
Zahle 2200 EUR
Stopp: 38000 EUR
```

**while vs. for:** Die `while`-Schleife iteriert solange, bis eine Bedingung erfüllt ist — nicht eine feste Anzahl. Mit **break** können wir den Loop sicher unterbrechen.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
]" />

---

## [Die Kopier-Falle]{style="color:var(--slidev-theme-primary)"}

Du hast gerade die Ausreißer-Prüfung geschrieben: `if claim > threshold: ...`. 

**Problem:** Diese Logik brauchst Du später wahrscheinlich wieder — beim nächsten Portfolio, bei der Betrugserkennung, bei Naturschadenanalysen. Was machst Du dann? Denselben `if`/`elif`-Block **kopieren und einfügen** — überall in Deinem Code.

Das führt zu:
- **Fehleranfälligkeit:** Wenn Du die Schwelle von 10.000 EUR auf 12.000 EUR änderst, musst Du *alle* Kopien anpassen. Vergisst Du eine, arbeiten Teile des Programms mit alten Regeln.
- **Wartungsalptraum:** Der gleiche Block an 10 Stellen zu pflegen, ist unmöglich.

**Lösung:** Die Logik einmal definieren, überall verwenden. Das ist das Konzept der **Funktion** — unser nächstes Werkzeug.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
  { title: 'Python Software Foundation: What\'s New In Python 3.10 – Structural Pattern Matching', url: 'https://docs.python.org/3/whatsnew/3.10.html', year: '2021' },
]" />

---
layout: default
---

## [Funktionen]{style="color:var(--slidev-theme-primary)"} — Logik einmal definieren, überall nutzen

Den `if`/`elif`-Block für die Ausreißer-Prüfung brauchst Du bald überall wieder. **Lösung:** Fasse die Logik in eine **Funktion** — und rufe sie auf, statt sie zu kopieren.

```python
def ist_ausreisser(schaden, schwelle=10000):
    return schaden > schwelle

print(ist_ausreisser(38000))                  # True
print(ist_ausreisser(38000, schwelle=50000))  # False
```

**Struktur:**
- `def ist_ausreisser(...)` — Schlüsselwort + Funktionsname
- `schaden` (erforderlich), `schwelle=10000` (optional, mit Default)
- `return` — liefert das Ergebnis an den Aufrufer zurück

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
  { title: 'Catherine Nelson: Software Engineering for Data Scientists — From Notebooks to Scalable Systems', url: 'https://www.oreilly.com/library/view/software-engineering-for/9781098136192/', year: '2024' },
]" />

---
layout: default
---

## Funktionen anwenden — über das ganze Portfolio

Jetzt wende die Funktion auf **alle 6 Schadenshöhen** an:

```python
schadenshoehen = [800, 1100, 1100, 1400, 2200, 38000]

# Schleife + Funktion kombiniert:
ausreisser = [s for s in schadenshoehen if ist_ausreisser(s)]
print(ausreisser)  # [38000]
```

Die **List Comprehension** `[s for s in ... if ...]` ist eine elegante Kurzform für eine Schleife — sie filtert die Liste auf Werte, die die Bedingung erfüllen. Die klassische `for`-Schleife von Slide 60 funktioniert genauso, nur ausführlicher.

**Das Ergebnis:** Die Funktion `ist_ausreisser()` wird jetzt überall wiederverwendet — und wenn sich die Schwelle ändert, passt Du sie an **einer Stelle** an, nicht an 10.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
  { title: 'Catherine Nelson: Software Engineering for Data Scientists — From Notebooks to Scalable Systems', url: 'https://www.oreilly.com/library/view/software-engineering-for/9781098136192/', year: '2024' },
]" />

---
layout: default
---

## Von Funktionen zu Objekten — der nächste Schritt

Jetzt haben wir wiederverwendbare Funktionen — `ist_ausreisser()`, später vielleicht auch `berechne_praemie()` und `pruefe_betrug()`. Aber jede Funktion braucht die Daten von außen: Schwelle, Schadenshöhe, Risikofaktor werden bei jedem Aufruf neu übergeben.

**Problem:** Sobald Du mit vielen Schäden gleichzeitig arbeitest (unsere 400.000 Verträge), wird das unübersichtlich — Du schleifst die gleichen Variablen überall durch den Code.

**Frage:** Was, wenn die Daten **und** die Funktionen, die zu ihnen gehören, gemeinsam an einem Ort leben sollten? Ein Objekt, das beides bündelt?

Das ist die Idee hinter **Objektorientierter Programmierung (OOP)** — unser nächstes Thema. Du musst Funktionen dafür noch nicht meistern, nur die Lücke sehen, die sie offenlässt.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis, 3rd Edition, Chapter 2 – Python Language Basics', url: 'https://wesmckinney.com/book/python-basics', year: '2022' },
  { title: 'Catherine Nelson: Software Engineering for Data Scientists — From Notebooks to Scalable Systems', url: 'https://www.oreilly.com/library/view/software-engineering-for/9781098136192/', year: '2024' },
]" />

---
layout: header-cols
---

## Klasse vs. Objekt — [Bauplan und Instanz]{style="color:var(--slidev-theme-primary)"}

::left::

### Die Klasse — der Bauplan

Eine Klasse ist wie eine leere **Versicherungsformular-Vorlage** — die Struktur, die festlegt, welche Felder existieren:

- Schadenshöhe: ❓
- Fahreralter: ❓
- Geschlecht: ❓

Die Klasse existiert *abstrakt* — niemand hat diese Vorlage konkret ausgefüllt.

::right::

### Das Objekt — die Instanz

Ein Objekt ist ein **konkret ausgefüllter Vertrag** — eine konkrete Realisation der Klasse mit echten Werten:

- Schadenshöhe: **3.500 €**
- Fahreralter: **45 Jahre**
- Geschlecht: **m**

Jeder Schaden ist ein neues Objekt — alle folgen dem Plan der Klasse, alle haben unterschiedliche Werte.


---
layout: default
---

## [Klassen]{style="color:var(--slidev-theme-primary)"} erstellen

Eine Klasse wird mit `class` definiert. Ihre `__init__`-Methode ist ein **Konstruktor** — eine Anleitung, wie man ein neues Objekt erzeugt:

```python
class Schaden:
    def __init__(self, hoehe, alter_fahrer, geschlecht):
        self.hoehe = hoehe
        self.alter_fahrer = alter_fahrer
        self.geschlecht = geschlecht
schaden_1 = Schaden(3500, 45, 'm')
print(schaden_1.hoehe)  # 3500
```

**Was geschieht hier?**

- `def __init__(self, ...)` — das ist die Konstruktor-Methode
- `self` ist das Objekt selbst — bei `schaden_1.ist_ausreisser()` übergibt Python `schaden_1` automatisch als `self`, deshalb kennt die Methode `self.hoehe`
- `schaden_1 = Schaden(...)` erzeugt eine neue Instanz mit allen Attributen

<LiteraturSource :sources="[
  { title: 'Catherine Nelson: Software Engineering for Data Scientists — From Notebooks to Scalable Systems, Chapter 4 – Object-oriented programming for data scientists', url: 'https://www.oreilly.com/library/view/software-engineering-for/9781098136192/', year: '2024' },
]" />

---
layout: default
---

## Methoden — der `ist_ausreisser()`-[Umbau]{style="color:var(--slidev-theme-primary)"}

So haben wir es in Cluster 11c gemacht — mit einer Funktion:

```python
def ist_ausreisser(hoehe, schwelle=10000):
    return hoehe > schwelle

schaden_1 = Schaden(3500, 45, 'm')
result = ist_ausreisser(schaden_1.hoehe, schwelle=10000)
print(result)  # False
```

Nachteil: Du musst `schaden_1.hoehe` explizit durchreichen.

<LiteraturSource :sources="[
  { title: 'Catherine Nelson: Software Engineering for Data Scientists — From Notebooks to Scalable Systems, Chapter 4 – Object-oriented programming for data scientists', url: 'https://www.oreilly.com/library/view/software-engineering-for/9781098136192/', year: '2024' },
]" />

---
layout: default
---

## Methoden — der `ist_ausreisser()`-[Umbau]{style="color:var(--slidev-theme-primary)"}

Jetzt wird sie eine **Methode** der Klasse — sie gehört zum Objekt und kennt bereits `self.hoehe`:

```python
class Schaden:
    def __init__(self, hoehe, alter_fahrer, geschlecht):
        self.hoehe = hoehe
        self.alter_fahrer = alter_fahrer 
        self.geschlecht =  geschlecht

    def ist_ausreisser(self, schwelle=10000):
        return self.hoehe > schwelle

schaden_1 = Schaden(3500, 45, 'm')
print(schaden_1.ist_ausreisser())  # False
```

**Der Unterschied:** Die Methode kennt die Schadenshöhe bereits — Du brauchst sie nicht zu übergeben. Das ist **Daten + Verhalten zusammenbündeln**.

<LiteraturSource :sources="[
  { title: 'Catherine Nelson: Software Engineering for Data Scientists — From Notebooks to Scalable Systems, Chapter 4 – Object-oriented programming for data scientists', url: 'https://www.oreilly.com/library/view/software-engineering-for/9781098136192/', year: '2024' },
]" />

---
layout: default
---

## [Schäden]{style="color:var(--slidev-theme-primary)"} als Objekte

Jetzt baue mehrere Schadenshöhen (aus unserem bekannten 6er-Portfolio: 800, 1.100, 1.100, 1.400, 2.200, 38.000 €) als Liste von Objekten:

```python
# Schadenshöhen: 800, 1.100, 1.100, 1.400, 2.200, 38.000 EUR
schaeden = [
    Schaden(800, 35, 'w'), Schaden(1100, 50, 'm'),
    Schaden(1100, 42, 'w'), Schaden(1400, 55, 'm'),
    Schaden(2200, 45, 'w'), Schaden(38000, 28, 'm')
]
ausreisser = [s for s in schaeden if s.ist_ausreisser()]
print(len(ausreisser))  # 1 — genau der 38.000-EUR-Schaden
```

Objekte bündeln Daten und Verhalten zusammen. Statt Schadenshöhe überall durchzureichen, fragst Du jetzt einfach `schaden.ist_ausreisser()` — lesbar und wartbar, auch bei 400.000 Verträgen. 

<LiteraturSource :sources="[
  { title: 'Catherine Nelson: Software Engineering for Data Scientists — From Notebooks to Scalable Systems, Chapter 4 – Object-oriented programming for data scientists', url: 'https://www.oreilly.com/library/view/software-engineering-for/9781098136192/', year: '2024' },
]" />

---
layout: default
---

## NumPy — Arrays & [Vektorisierung]{style="color:var(--slidev-theme-primary)"}

Du kennst bereits die `for`-Schleife: Sie läuft von Schaden zu Schaden, rechnet nacheinander. NumPy-Arrays machen das anders — sie rechnen **alle Werte auf einmal**, in optimiertem C-Code statt Python-Schleife. Das Ergebnis ist derselbe Wert, nur 10–100× schneller.

```python
import numpy as np
schaeden = np.array([800, 1100, 1100, 1400, 2200, 38000])
print(schaeden.mean())  # 7433.33 — ein NumPy-Array kennt diese Operationen nativ
```

Vektorisierung ist das Geheimnis: statt `for schaden in liste: summe += schaden`, sagst Du dem Array einfach "berechne Deinen Durchschnitt selbst". NumPy liefert die Geschwindigkeit — Pandas (gleich) baut darauf auf und macht sie benutzerfreundlich.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis — Data Wrangling with pandas, NumPy, and Jupyter, 3rd Edition, Chapters 4–5', url: 'https://www.oreilly.com/library/view/python-for-data/9781098104023/', year: '2022' },
]" />

---
layout: default
---

## Pandas Series — die [Synthese-Demo]{style="color:var(--slidev-theme-primary)"}

Das ist der Payoff-Moment des ganzen Python-Blocks: Dieselben 6 Schadenshöhen, aber jetzt mit Pandas. Vergleich mit der `statistics`-Version:

```python
from statistics import mean, median, stdev
# Alt (Module 11a): drei Funktionsaufrufe, jedesmal die Liste durchscannen
data = [800, 1100, 1100, 1400, 2200, 38000]
print(mean(data), median(data), stdev(data))

# Neu (Pandas, eine Zeile Code):
import pandas as pd
s = pd.Series(data)
print(s.mean(), s.median(), s.std())
# 7433.33 1250.0 15000.0 — identisch zu Deiner Handrechnung
```

Derselbe Schaden-Datensatz, dieselbe Statistik — aber jetzt mit dem Werkzeug, das echte Data Scientists verwenden. Die Leistung ist nicht der Punkt hier; es ist die **Klarheit** und **Wiederverwendbarkeit** einer Datenstruktur, die ihre Operationen mitbringt.

<LiteraturSource :sources="[
  { title: 'Wes McKinney: Python for Data Analysis — Data Wrangling with pandas, NumPy, and Jupyter, 3rd Edition, Chapters 4–5', url: 'https://www.oreilly.com/library/view/python-for-data/9781098104023/', year: '2022' },
  { title: 'pandas documentation: Series.mean() method', url: 'https://pandas.pydata.org/docs/reference/api/pandas.Series.mean.html', year: '2025' },
]" />

---
layout: default
---

## Pandas DataFrame — `.corr()`

Der Fahrzeugalter/Reparaturkosten-Datensatz hier als DataFrame:

```python
import pandas as pd
df = pd.DataFrame({
    'Fahrzeugalter': [1, 2, 3, 4],  # Jahre
    'Reparaturkosten': [200, 300, 500, 600]  # EUR
})
print(df.corr())
# r ≈ 0,99
```

$r \approx 0{,}99$ — exakt der Wert aus Deinen Handrechnungen, jetzt in einer Zeile bestätigt statt mühsam berechnet.

<LiteraturSource :sources="[
  { title: 'pandas documentation: DataFrame.corr() method', url: 'https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.corr.html', year: '2025' },
]" />

---
layout: header-cols
---

## Matplotlib — [Korrelation]{style="color:var(--slidev-theme-primary)"} sichtbar machen

::left::

Zahlentabellen sind korrekt, aber ein Bild ist schneller:

```python
import matplotlib.pyplot as plt
plt.scatter(df['Fahrzeugalter'], df['Reparaturkosten'])
plt.xlabel('Fahrzeugalter (Jahre)')
plt.ylabel('Reparaturkosten (EUR)')
plt.show()
```

::right::

<img src="./fahrzeugalter_streudiagramm.svg" alt="Streudiagramm Fahrzeugalter vs. Reparaturkosten" style="max-height: 300px; margin: 0 auto; display: block;" />

Die vier Punkte liegen fast auf einer geraden Linie — $r \approx 0{,}99$ wird sofort visuell klar.

<LiteraturSource :sources="[
  { title: 'Matplotlib documentation: scatter plot', url: 'https://matplotlib.org/stable/gallery/shapes_and_collections/scatter.html', year: '2025' },
]" />

---
layout: default
---

## Scikit-Learn — [ein Ausblick]{style="color:var(--slidev-theme-primary)"}

NumPy, Pandas und Matplotlib sind die Basis. Der nächste Schritt ist **Scikit-Learn** — eine Bibliothek voll vorgefertigter Algorithmen (Random Forest, KNN, Logistische Regression, Clustering); wir starten damit in Kapitel 4.

<LiteraturSource :sources="[
  { title: 'scikit-learn documentation: Supervised Learning', url: 'https://scikit-learn.org/stable/supervised_learning.html', year: '2024' },
]" />

---
layout: default
---

## Key Takeaways – Python-Vertiefung 🔑

- **Grundsyntax:** Variablen, Listen und `print()` sind die Bausteine, Module (`import`) erweitern den Werkzeugkasten
- **Kontrollstrukturen:** `if`/`elif`/`else` trifft Entscheidungen, `for`- und `while`-Schleifen automatisieren Wiederholungen über ganze Datensätze
- **Die Kopier-Falle:** Listen werden per Referenz zugewiesen, nicht kopiert — ein häufiger Fehlerquell bei veränderlichen Objekten
- **Funktionen:** Logik einmal definieren, überall im Portfolio wiederverwenden
- **Klassen & Objekte:** eine Klasse ist der Bauplan, ein Objekt die konkrete Instanz — Daten und Methoden gehören zusammen
- **NumPy, Pandas & Matplotlib:** vektorisierte Berechnung, tabellarische Daten als DataFrame, Ergebnisse sichtbar machen — die Werkzeuge, mit denen echte Versicherer arbeiten

---
layout: default
---

## [Was Du jetzt kannst]{style="color:var(--slidev-theme-primary)"}

Du verstehst die Statistik dahinter (Mittelwert, Streuung, Korrelation, Regression), kannst sie in reinem Python nachbauen (mit Schleifen, Funktionen, Objekten), und kennst jetzt die Werkzeuge, mit denen echte Versicherer ihre 400.000 Verträge tatsächlich auswerten.

**Der nächste Schritt:** Wie trainiert man ein Modell, das nicht nur *beschreibt* („Der Fahrzeugalter erklärt Reparaturkosten zu $r = 0{,}99$"), sondern *vorhersagt* („Wie hoch ist die Wahrscheinlichkeit, dass ein neuer Schaden betrügerisch ist")? 

---
layout: chapter
---

::left::

# Kapitel 3: [Tools & Workflows]{style="color:var(--slidev-theme-primary)"}

::right::

<Illustration src="/illustrations/devops-tools-bro.svg" alt="Tools & Workflows" width="90%" />

---
layout: default
---

## Lernziele — Verstehen & Anwenden

**Am Ende dieses Kapitels kannst du:**

🎯 **Verstehen & Erklären:**
- Wofür Jupyter Notebooks, Docker und Kubernetes jeweils gebraucht werden — und welches Problem jedes löst
- Git/GitHub als Versionskontrolle und Team-Kollaborationswerkzeug
- CRISP-DM als Prozessrahmen, der Data-Science-Projekte strukturiert

📊 **Anwenden & Bewerten:**
- Ein Colab-Notebook öffnen und lauffähigen Code darin ausführen
- Den Unterschied zwischen Image und Container an einem eigenen Beispiel erklären
- Die CRISP-DM-Phasen auf den eigenen Versicherer-Case (Betrugserkennung) mappen

<LiteraturSource :sources="[
  { title: 'The CRISP-DM Model: The New Blueprint for Data Mining (Colin Shearer, Journal of Data Warehousing vol. 5)', url: 'https://www.scirp.org/reference/ReferencesPapers?ReferenceID=1592780', year: '2000' }
]" />

---
layout: default
---

## Lernziele — Kritisch Reflektieren

**Am Ende dieses Kapitels kannst du auch:**

⚖️ **Kritisch Reflektieren:**
- Warum Reproduzierbarkeit (Docker) und Skalierbarkeit (Kubernetes) über den Prototyp hinaus zum Problem werden
- Wann ein deklarativer Ansatz (Kubernetes) einem imperativen vorzuziehen ist
- Warum CRISP-DM ein Kreislauf ist, kein linearer Prozess

Diese Werkzeuge begleiten Dich ab jetzt bei jedem Modell, das wir bauen.

---
layout: default
---

## <img :src="'/logos/jupyter.svg'" class="inline-block h-9 align-middle mr-2" /> Jupyter Notebooks — Dein interaktives Notizbuch

Wir haben bisher Python-Code geschrieben — Zeile für Zeile, in reiner Textdatei. Aber echte Data Scientists arbeiten nicht in einer `.py`-Datei alleine. Sie nutzen ein **interaktives Notizbuch**, in dem Code, Dokumentation und Visualisierungen zusammenleben.

**Jupyter Notebook**: eine Arbeitsumgebung mit:
- **Code-Zellen** — schreib Python, führe es aus, sehe das Ergebnis sofort
- **Markdown-Zellen** — dokumentiere, erkläre, binde Formeln ein
- **Visualisierungen** — Grafiken direkt inline, kein extra Fenster

Der Name "Jupyter" steht für **Julia + Python + R** — die drei beliebtesten Sprachen der Datenwissenschaft. Open Source, von Millionen genutzt.

**In der Praxis:** In der folgenden Übung nutzt Du **Google Colab** — Jupyter Notebooks direkt im Browser, ohne lokale Installation. Google stellt die Umgebung bereit, Du klickst auf "Ausführen".

<LiteraturSource :sources="[
  { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', year: '2016' }
]" />

---
layout: header-cols
---

## 💻 [Übung]{style="color:var(--slidev-theme-primary)"} — Python-Vertiefung in der Praxis

::left::

Zeit, selbst Hand anzulegen: Sechs Jupyter Notebooks in Google Colab vertiefen genau diesen Block — mit lauffähigem Demo-Code und Übungszellen zum Selbst-Lösen.

1. Python-Grundsyntax
2. Statistik in Python
3. Kontrollstrukturen
4. Funktionen
5. Objektorientierte Programmierung
6. NumPy, Pandas & Matplotlib

> 🎯 **Dein Auftrag:** Notebooks in Colab öffnen, Demo-Zellen ausführen, 🎯-Übungen selbst lösen.

::right::

<Illustration src="/illustrations/coding-bro.svg" alt="Python-Übung" width="90%" />

---
layout: default
---

## <img :src="'/logos/docker.svg'" class="inline-block h-9 align-middle mr-2" /> Docker — Das Problem

In Google Colab übernimmt Google die Umgebung für Dich. Ein Data-Science-Team im Unternehmen hat dieses Privileg nicht: verschiedene Rechner, verschiedene Python-Versionen, ein Produktionsserver mit wieder anderen. Derselbe Code funktioniert plötzlich nicht mehr überall gleich.

Jedes Software-Team kennt diesen Satz: *"Bei mir auf dem Rechner funktioniert's doch..."*

Die Lösung dafür heißt **Docker**.

---
layout: default
---

## <img :src="'/logos/docker.svg'" class="inline-block h-9 align-middle mr-2" /> Docker — Image & Container

**Docker löst genau dieses Problem:** Es packt Deinen Code *und alle seine Abhängigkeiten* in eine Box — das ist ein **Container**, der überall identisch läuft.

- **Docker-Image** = das "Rezept" (Blaupause)
- **Running Container** = eine laufende Kopie davon. Du kannst 10 Kopien gleichzeitig starten

<img :src="'/docker-image-container-diagram.svg'" style="max-height: 210px; margin: 0.5rem auto 0; display: block;" />

<LiteraturSource :sources="[
  { title: 'Docker for Data Science', url: 'https://www.amazon.com/Docker-Data-Science-Extensible-Infrastructure/dp/1484230116', year: '2017' }
]" />

---
layout: default
---

## <img :src="'/logos/docker.svg'" class="inline-block h-9 align-middle mr-2" /> Docker — Im Versicherer-Fall

Dein Betrugserkennung-Modell als Docker-Image — jeder, der es ausführt, bekommt exakt das gleiche Resultat, ob 400.000 Schäden pro Minute oder 100 pro Tag.

Aber eine Kopie reicht nicht: Wer startet 100 Kopien gleichzeitig, verwaltet sie, ersetzt abgestürzte automatisch? Das übernimmt **Kubernetes**.

---
layout: default
---

## <img :src="'/logos/kubernetes.svg'" class="inline-block h-9 align-middle mr-2" /> Kubernetes — Wozu Orchestrierung?

Dein Docker-Container läuft. Jetzt: Der Code crasht — automatisch einen neuen Container starten. Zu viele Anfragen — automatisch mehr starten. Traffic sinkt — automatisch abfahren. Kein Team könnte das von Hand machen, 24/7.

**Kubernetes** ist ein Orchestrierungssystem für Docker-Container — es übernimmt genau diese Aufgabe, dauerhaft und automatisch.

---
layout: default
---

## <img :src="'/logos/kubernetes.svg'" class="inline-block h-9 align-middle mr-2" /> Kubernetes — Deklarativ

Du sagst: *"Ich möchte 5 Replicas meines Modells laufen haben."* Einer crasht — Kubernetes startet einen neuen. Traffic steigt — Kubernetes startet automatisch mehr.

**Das Wichtigste:** Du beschreibst, *was* Du brauchst, nicht *wie* es umgesetzt wird — Kubernetes übernimmt den Rest. Das nennt man **deklarativ**.

<img :src="'/kubernetes-orchestration-diagram.svg'" style="max-height: 210px; margin: 0.5rem auto 0; display: block;" />

<LiteraturSource :sources="[
  { title: 'Designing Machine Learning Systems', url: 'https://www.oreilly.com/library/view/designing-machine-learning-systems/9781098107963/', year: '2022' }
]" />

---
layout: default
---

## <img :src="'/logos/kubernetes.svg'" class="inline-block h-9 align-middle mr-2" /> Kubernetes — Im Versicherer-Fall

Dein Fahrzeugschadenmodell hat 99 % Genauigkeit. Unwetter im Norden bringt 10× mehr Anfragen — Kubernetes erkennt die lange Warteschlange und startet automatisch 50 neue Replicas. Danach fährt es sie wieder herunter. Alles ohne menschliches Zutun. Bei einem kleineren Bestand sind es vielleicht 3 statt 50 — das Prinzip bleibt gleich.

Alle diese Container, alle diese Konfigurationen — wer verwaltet das? Wie stellt man sicher, dass nicht versehentlich eine alte Version deployed wird?

---
layout: default
---

## <img :src="'/logos/git.svg'" class="inline-block h-9 align-middle mr-2" /> Git — Versionskontrolle

Der Data Scientist schreibt den Klassifikationscode. Der DevOps-Engineer schreibt die Kubernetes-Konfiguration. Die Datenbeschafferin ändert die Datenquelle. Ohne zentrale Verwaltung: Chaos.

**Git** ist ein Versionskontrollsystem — es speichert *jede* Änderung an Deinen Dateien:
- Wer hat es geändert?
- Wann?
- Warum? (die Commit-Message)

Aber Teams arbeiten nicht linear — mehrere Leute ändern gleichzeitig verschiedene Dinge, ohne sich gegenseitig zu blockieren. Wie geht das?

---
layout: default
---

## <img :src="'/logos/git.svg'" class="inline-block h-9 align-middle mr-2" /> Git — Branches & Merges

- **Commit** = ein Schnappschuss Deiner Änderungen, mit Autor, Zeitstempel und Commit-Message
- **Branch** = eine parallele Entwicklungslinie — Du entwickelst ein Feature, ohne den Hauptstand (`main`) zu gefährden
- **Merge** = die Branch-Linie wird wieder in `main` zusammengeführt

<img :src="'/git-branch-merge-diagram.svg'" style="max-height: 210px; margin: 0.5rem auto 0; display: block;" />

Aber wo lebt dieses Repository, und wie arbeitet ein ganzes Team gemeinsam daran?

---
layout: default
---

## <img :src="'/logos/github.svg'" class="inline-block h-9 align-middle mr-2" /> GitHub — Zusammenarbeit im Team

**GitHub** ist der Server, auf dem Dein Git-Repository lebt — plus ein Web-Interface und Features wie **Pull Requests**: *"Ich habe diese Änderung gemacht, bitte review sie, bevor ich sie in `main` merge."*

**Im Versicherer-Team:** Entwickler A fixt einen Bug im Datenimport auf Branch `fix/raw-data-encoding`. Entwickler B schreibt parallele Tests auf `feature/automated-validation`. Ein Reviewer approved beide, merged sie in `main` — Production lädt automatisch die neue Version.

**Audit Trail:** Jede Änderung ist nachvollziehbar. Das ist entscheidend in der Versicherung.

Alle diese Werkzeuge — Jupyter, Docker, Kubernetes, GitHub — sind Mittel zu einem Zweck. Der Zweck ist ein **Prozess**.

<LiteraturSource :sources="[
  { title: 'Data Science: A First Introduction, Ch. 12 — Collaboration with Version Control', url: 'https://datasciencebook.ca/version-control.html', year: '2024' }
]" />

---
layout: default
---

## CRISP-DM — Die 6 Phasen

Wir haben jetzt mehrere Kapitel lang Statistik und Code gelernt. Aber in welcher *Reihenfolge* wenden wir alle diese Werkzeuge an, um ein echtes Problem zu lösen? Gibt es einen Standard dafür?

**CRISP-DM** *(Cross-Industry Standard Process for Data Mining)* ist das Framework, das genau das definiert. Es strukturiert Data-Mining-Projekte in **6 Phasen**:

1. **Business Understanding** — Was ist das Problem? Warum ist es wichtig?
2. **Data Understanding** — Welche Daten habe ich? Wie verteilen sie sich? Wo sind Lücken?
3. **Data Preparation** — Bereinigung, Transformation, Feature Engineering
4. **Modeling** — Algorithmusauswahl, Training
5. **Evaluation** — Validierung, Metriken, Überprüfung
6. **Deployment** — das Modell geht live: Model Serving, Monitoring, Retraining-Trigger — genau das, wofür wir gerade Docker und Kubernetes kennengelernt haben

<LiteraturSource :sources="[
  { title: 'The CRISP-DM Model: The New Blueprint for Data Mining (Colin Shearer, Journal of Data Warehousing vol. 5)', url: 'https://www.scirp.org/reference/ReferencesPapers?ReferenceID=1592780', year: '2000' }
]" />

---
layout: default
---

## CRISP-DM — Der Kreislauf

CRISP-DM ist **zyklisch**, nicht linear — die klassische Darstellung zeigt das als Kreis, mit den Daten im Zentrum jeder Phase:

<img :src="'/crisp-dm-cycle-diagram.svg'" style="max-height: 270px; margin: 0.5rem auto 0; display: block;" />

Evaluation oder Deployment schicken uns oft zurück zu einer früheren Phase — das ist normal, kein Scheitern.

---
layout: default
---

## CRISP-DM — Unser Weg (1/2)

Wo genau stehen wir im CRISP-DM-Prozess gerade? Hier die ersten drei Phasen:

| Phase | Wo sind wir im Modul? | Das konkrete Beispiel |
|---|---|---|
| **Business Understanding** | Kapitel 1 | *"Wir brauchen Betrugsdetection, Preismodelle, Kundengruppen"* |
| **Data Understanding** | Kapitel 1 | Stichprobe, Konfidenz, Lagemaße, Varianz, Korrelation |
| **Data Preparation** | Kapitel 4–10 | Transformation, Feature Selection, Outlier-Behandlung |

---
layout: default
---

## CRISP-DM — Unser Weg (2/2)

Und die letzten drei Phasen:

| Phase | Wo sind wir im Modul? | Das konkrete Beispiel |
|---|---|---|
| **Modeling** | Kapitel 4–8 | Regression, Random Forest, Clustering, Deep Learning |
| **Evaluation** | Kapitel 4 | Train/Val-Split, Metriken, Kreuzvalidierung |
| **Deployment** | Kapitel 3 + laufend | Docker-Image bauen, auf Kubernetes ausrollen, Monitoring einrichten |

Mit jedem neuen Algorithmus wenden wir diese Phasen an — manchmal in wenigen Minuten (ein schnelles Experiment), manchmal in Wochen (ein echtes Produktionsmodell). Aber die Struktur bleibt immer gleich.

---
layout: default
---

## Key Takeaways – Tools & Workflows 🔑

- **Jupyter Notebooks:** Code, Dokumentation und Visualisierung in einer interaktiven Umgebung — das Werkzeug echter Data-Science-Arbeit
- **Docker:** verpackt Code und Abhängigkeiten reproduzierbar in Images und Container — läuft überall gleich
- **Kubernetes:** orchestriert Container deklarativ im großen Maßstab, statt jeden Schritt manuell zu steuern
- **Git & GitHub:** Versionskontrolle und Zusammenarbeit im Team über Branches und Merges
- **CRISP-DM:** ein sechsphasiger, zyklischer Prozess von Business Understanding bis Deployment — der rote Faden hinter jedem Modell, das wir bauen

---
layout: statement
---

## Von der Infrastruktur zum Modell

Jetzt lernen wir den nächsten Schritt: wie man ein Modell baut, das nicht nur *beschreibt*, sondern *vorhersagt*.

Das ist **Supervised Learning** — und es beginnt mit dem **Train/Validation-Split**, der Grundlage für alles, was folgt.

---
layout: chapter
---

::left::

# Kapitel 4: [Supervised Learning]{style="color:var(--slidev-theme-primary)"}

Vom Trainieren zum Vorhersagen — Klassifikation in der Praxis

::right::

<Illustration src="/illustrations/artificial-intelligence-bro.svg" alt="Supervised Machine Learning" width="90%" />

---
layout: default
---

## Lernziele — Verstehen & Anwenden

**Am Ende dieses Kapitels kannst du:**

🎯 **Verstehen & Erklären:**
- Train/Validation/Test-Split als Goldstandard für sauberes Modelltraining
- Overfitting & Underfitting als fundamentale ML-Probleme
- Confusion Matrix, Accuracy, Precision, Recall und F1-Score sinnvoll interpretieren

📊 **Anwenden & Bewerten:**
- Metriken aus Testdaten von Hand berechnen (Confusion Matrix → alle Formeln)
- Für ein Betrugsproblem die *richtige* Metrik auswählen (Recall vs. Precision)
- KNN und Random Forest praktisch einsetzen und Hyperparameter anpassen

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 7 – Model Assessment and Selection', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Lernziele — Kritisch Reflektieren

**Am Ende dieses Kapitels kannst du auch:**

⚖️ **Kritisch Reflektieren:**
- Trade-offs zwischen Modellkomplexität, Interpretierbarkeit und Leistung bewerten
- Warum Black-Box-Modelle (KNN, Random Forest) trotz mangelnder Explainability oft gewählt werden
- Geschäftliche Kosten von Falschalarmen vs. übersehenen Betrugsfällen quantifizieren

Das sind die Kriterien, an denen wir unsere Modelle am Ende des Kapitels messen.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 7 – Model Assessment and Selection', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Vom Training zum Test

Du kennst die **Logistische Regression** — sie sagt Betrugswahrscheinlichkeiten vorher. Aber wie weiß ich, ob mein Modell **echt gut ist** oder nur die Trainingsdaten auswendig gelernt hat?

**Das Problem:** Test auf den *gleichen* Daten wie Training → schöne Illusion, aber echte Vorhersagen versagen oft.

**Die Lösung — Daten aufteilen:**
1. **Training Set** — Modell lernt Muster
2. **Validation Set** — Hyperparameter justieren
3. **Test Set** — finale Performance messen

> Die Test-Performance ist die einzige Zahl, auf die zählt — alles andere ist Selbstbetrug.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 7 – Model Assessment and Selection', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Fahrmeir, Heumann et al.: Statistik – Der Weg zur Datenanalyse, Kap. 9 – Parameterschätzung', url: 'https://doi.org/10.1007/978-3-662-50372-0', year: '2016' },
]" />

---
layout: default
---

## Overfitting vs. Underfitting — das Kernproblem

**Overfitting:** Das Modell hat die Trainingsdaten auswendig gelernt — Trainings-Error sinkt, Validierungs-Error *steigt*. **Underfitting:** das Modell ist zu einfach, beide Errors bleiben hoch. Optimal ist die Mitte: beide Errors niedrig, kein Auseinanderdriften.

<img :src="'/overfitting-underfitting-lernkurve.svg'" alt="Lernkurve: Trainingsfehler sinkt, Validierungsfehler ist U-förmig mit Minimum" style="max-height: 320px; margin: 0 auto; display: block;" />

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 7 – Model Assessment and Selection', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Confusion Matrix — vier Ergebnis-Typen

Ein Klassifikationsmodell trifft für jeden Fall eine von vier möglichen Aussagen:

<img :src="'/confusion-matrix-typen-diagramm.svg'" alt="2x2-Matrix: Modell-Vorhersage (Betrug/Kein Betrug) gegen tatsächlichen Zustand, mit TP, FN, FP, TN" style="max-height: 340px; margin: 0 auto; display: block;" />

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Confusion Matrix im Beispiel: 1.000 Testfälle

Tatsächliche Betrugsfälle: 20 (2 % Quote) — legitime Fälle: 980.

<img :src="'/confusion-matrix-beispiel-diagramm.svg'" alt="Confusion Matrix mit konkreten Zahlen: TP 15, FN 5, FP 30, TN 950, Summe 1.000" style="max-height: 280px; margin: 0 auto; display: block;" />

Aus diesen vier Zahlen berechnen wir Accuracy, Precision, Recall und F1-Score.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Accuracy — die täuschend einfache Metrik

**Accuracy** ist der Anteil korrekt klassifizierter Fälle:

$$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$

**Mit unseren Zahlen:**

$$\text{Accuracy} = \frac{15 + 950}{15 + 950 + 30 + 5} = \frac{965}{1000} = 0{,}965 = 96{,}5\%$$

96,5 % klingt hervorragend!

> ⚠️ **Der kritische Haken — Accuracy ist eine Falle bei unbalancierten Klassen**
>
> Ein Modell, das *immer* "Kein Betrug" sagt, hätte 98 % Accuracy (980 von 1.000 Fällen sind tatsächlich legitim) — und würde **100 % der Betrugsfälle übersehen**.

Das erklärt, warum wir Precision und Recall separat messen müssen.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Géron, Aurélien: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (3rd ed.)', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', year: '2022' },
]" />

---
layout: default
---

## Precision vs. Recall — zwei Seiten einer Medaille

**Precision:** Von den Fällen, die das Modell als "Betrug" markiert, wie viele sind *wirklich* Betrug?

$$\text{Precision} = \frac{TP}{TP + FP} = \frac{15}{15 + 30} = \frac{15}{45} \approx 0{,}333 = 33{,}3\%$$

Das Modell markiert 45 Fälle als Betrug. Aber nur 15 davon sind echt — **66,7 % sind Fehlalarme**. Precision misst, wie sehr ich dem Modell *trauen kann*.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Géron, Aurélien: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (3rd ed.)', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', year: '2022' },
]" />

---
layout: default
---

## Precision vs. Recall — zwei Seiten einer Medaille

**Recall:** Von den tatsächlichen Betrugsfällen, wie viele erkennt das Modell?

$$\text{Recall} = \frac{TP}{TP + FN} = \frac{15}{15 + 5} = \frac{15}{20} = 0{,}75 = 75\%$$

Es gibt 20 echte Betrugsfälle, das Modell erwischt 15 — **25 % Betrugsfälle entgehen unerkannt**. Recall misst, wie *vollständig* das Modell ist.

**Die Spannung:** Precision hochfahren senkt oft Recall — restriktive Modelle haben wenige Fehlalarme, übersehen aber mehr echte Betrugsfälle.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Géron, Aurélien: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (3rd ed.)', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', year: '2022' },
]" />

---
layout: default
---

## F1-Score — Precision und Recall ausbalancieren

**F1-Score** ist das harmonische Mittel aus Precision und Recall — es bestraft Modelle, die eine der beiden Metriken vernachlässigen:

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}} = 2 \cdot \frac{0{,}333 \times 0{,}75}{0{,}333 + 0{,}75} \approx 0{,}462 = 46{,}2\%$$

Der F1-Score von 46,2 % ist *deutlich* niedriger als die Accuracy von 96,5 %. Das offenbart: Das Modell klassifiziert zwar insgesamt viele Fälle richtig, aber die Betrugsvorhersage ist schlecht balanciert (hohe Fehlalarme, schwache Erkennung).

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Géron, Aurélien: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (3rd ed.)', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', year: '2022' },
]" />

---
layout: default
---

## Welche Metrik wähle ich?

- **Accuracy:** Nur bei balancierten Klassen — sonst Fallen-Metrik
- **Precision:** Wenn Falschalarme teuer sind (Kundenbeschwerde bei falschem Verdacht)
- **Recall:** Wenn übersehene Fälle teuer sind (unerkannter Betrug = EUR 15.000 Schaden)
- **F1-Score:** Wenn beide Fehler gleich gewichtig sind

Die richtige Wahl ist eine *Geschäftsfrage*, keine mathematische.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Business-Kosten: Baseline-Modell (Recall 75 %)

**Kosten pro Fall:**
- Unerkannter Betrug: EUR 15.000 Schaden
- Falschalarm: EUR 500 (Untersuchung + Kundenverstimmung)

**Unser Modell mit Recall 75 % auf 1.000 Fällen:**
- 5 Betrugsfälle entgehen unerkannt → EUR 75.000 Verlust
- 30 Fehlalarme → EUR 15.000 Kosten
- **Gesamtschaden: EUR 90.000**

Können wir es besser machen?

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Alternative: Aggressiveres Modell (Recall 95 %)

**Hyperparameter ändern → mehr Betrug-Vorhersagen:**
- 1 Betrugsfall entgeht unerkannt → EUR 15.000 Verlust
- 150 Fehlalarme → EUR 75.000 Kosten
- **Gesamtschaden: EUR 90.000**

**Die Lektion:** Precision vs. Recall ist nicht eine mathematische Frage — es ist eine Geschäftsfrage. Hier kosten beide Strategien gleich viel. Die Wahl hängt von Risiko-Toleranz ab, nicht vom Algorithmus.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 4 – Linear Methods for Classification', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: header-cols
---

## k-Nearest Neighbors (KNN) — Lerne von der Vergangenheit

::left::

**Idee:** Um zu entscheiden, ob *dieser* neue Schadensfall Betrug ist, schau auf die K ähnlichsten Fälle aus der Vergangenheit. Wenn die meisten davon Betrug waren, sag "Betrug". Sonst sag "Legitim".

**Majority Voting:** 3 von 5 Nachbarn sagen Betrug → Modell sagt **Betrug**

::right::

<img :src="'/knn-nachbarn-diagramm.svg'" alt="KNN-Beispiel: Neuer Fall von 5 Nachbarn umgeben, 3 sind Betrug, 2 legitim. Majority Voting: Betrug." style="max-height: 280px; margin: 0 auto; display: block;" />

<LiteraturSource :sources="[
  { title: 'Cover, T., Hart, P.: Nearest neighbor pattern classification. IEEE Trans. Inf. Theory 13(1)', url: 'https://doi.org/10.1109/TIT.1967.1053964', year: '1967' },
]" />

---
layout: default
---

## KNN in der Praxis — einfach, aber begrenzt

| ✅ **Vorteile** | ❌ **Nachteile** |
|---|---|
| Funktioniert "ohne Training" — nur Daten speichern (Lazy Learning) | Alle Trainingsdaten müssen im Speicher bleiben (bei 400.000 Fällen problematisch) |
| Keine Annahmen über Datenverteilung nötig | Vorhersagen sind langsam (jede Vorhersage braucht Vergleich mit allen Trainingsfällen) |
| Funktioniert für beliebig komplexe Entscheidungsgrenzen | "Curse of Dimensionality" — mit vielen Features werden die Distanzen schnell uneindeutig |

**Praxis im Versicherer-Portfolio:**
KNN passt für kleine Subsets (z.B. Großschäden > EUR 50.000), nicht für 400.000 Verträge. Für große Datenmengen brauchst du einen robusteren Algorithmus.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 2 – Overview of Supervised Learning', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Entscheidungsbäume: Die Idee

**Ausgangsfrage:** Ein Analyst trifft Vorhersagen mit Wenn-Dann-Fragen: "Schaden > EUR 10.000? Auto älter als 5 Jahre?" — genau das ist ein Entscheidungsbaum.

**Funktionsprinzip — drei Kernideen:**
- **Rekursive binäre Splits:** Der Baum teilt Daten iterativ in immer kleinere, homogenere Gruppen auf
- **Blattknoten = Vorhersage:** Am Ende jedes Pfads sitzt eine Entscheidung (Betrug oder Legitim)
- **Interpretierbar:** Im Gegensatz zu Neural Networks können wir *genau sehen*, warum der Baum so entschieden hat

**Die Herausforderung:** Ein einzelner Baum neigt zu Overfitting — er passt sich zu genau an die Trainingsdaten an. Wie reduzieren wir dieses Risiko? Mit mehreren unabhängigen Bäumen statt einem.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 8 – Tree-Based Methods', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Entscheidungsbaum im Beispiel

<img :src="'/entscheidungsbaum-split-diagramm.svg'" alt="Entscheidungsbaum mit Wurzel, Splits und Blattknoten für Betrugserkennung" style="max-height: 260px; margin: 0 auto; display: block;" />

Wurzel splittet nach dem besten Feature (Schadenhöhe), innere Knoten verfeinern (Fahrzeugalter), Blätter liefern die Vorhersage. Ein Baum allein ist mächtig, aber nicht robust — hundert unterschiedliche Bäume, das ist Random Forest.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 8 – Tree-Based Methods', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Random Forest: Ensemble Learning durch Bagging

100 Analysten, die unabhängig arbeiten, entscheiden oft besser als einer. **Bootstrap-Sampling:** jeder Baum trainiert auf einer zufälligen Stichprobe der Daten. **Majority Voting:** bei der Vorhersage gewinnt die häufigste Klasse.

<img :src="'/random-forest-ensemble-diagramm.svg'" alt="Random Forest: 100 Bäume, die parallel abstimmen" style="max-height: 220px; margin: 0 auto; display: block;" />

Random Forest ist parallel und robust gegen Overfitting. Sequenziell statt parallel — jeder Baum korrigiert gezielt die Fehler des Vorgängers — das ist Gradient Boosting.

<LiteraturSource :sources="[
  { title: 'Breiman, L.: Random Forests. Machine Learning, 45(1), 5–32', url: 'https://doi.org/10.1023/A:1010933404324', year: '2001' },
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 15 – Ensemble Methods', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Random Forest: Feature Importance & Praxis

**Feature Importance — wertvolles Geschäftswissen:**
Random Forest zeigt, welche Features am meisten zur Vorhersage beitragen. Im Betrugsmodell: Schadenhöhe (32 %), Fahrzeugalter (18 %), Kundenalter (15 %) — die Versicherung weiß, worauf sie achten muss.

**Warum Random Forest in der Praxis so beliebt:**
- Robust gegen Overfitting (Bootstrap & Voting wirken wie natürliche Regularisierung)
- Schnell in der Vorhersage (parallele Bäume auf Multi-Core in Millisekunden)
- Hyperparameter-stabil (Ergebnisse ändern sich nicht wild bei Variationen)

**Nachteile:** Black-Box — wir sehen nicht *warum* ein Fall als Betrug klassifiziert wird. Aber die hohe Accuracy ist oft den Interpretationsverlust wert.

<LiteraturSource :sources="[
  { title: 'Breiman, L.: Random Forests. Machine Learning, 45(1), 5–32', url: 'https://doi.org/10.1023/A:1010933404324', year: '2001' },
]" />

---
layout: default
---

## Gradient Boosting: Die Idee

Random Forest stimmt *parallel* ab. Gradient Boosting baut *sequenziell*: Baum 2 lernt, die Fehler (Residuen) von Baum 1 zu korrigieren, Baum 3 die Restfehler — und so weiter, bis der Fehler klein ist.

<img :src="'/gradient-boosting-sequenz-diagramm.svg'" alt="Gradient Boosting: Bäume werden sequenziell gebaut, jeder korrigiert die Fehler des Vorgängers" style="max-height: 220px; margin: 0 auto; display: block;" />

**Der Trade-off:** oft 2–5 % höhere Accuracy als Random Forest, aber mehr Rechenzeit und steigendes Overfitting-Risiko bei zu vielen Iterationen.

<LiteraturSource :sources="[
  { title: 'Friedman, J.H.: Greedy Function Approximation: A Gradient Boosting Machine', url: 'https://doi.org/10.1214/aos/1013203451', year: '2001' },
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 10 – Boosting and Additive Trees', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Gradient Boosting: In der Praxis

**XGBoost — der Standard:**
Wenn Du "Gradient Boosting" hörst, meinst du meist **XGBoost** (Extreme Gradient Boosting) — eine optimierte Open-Source-Implementierung, die im Kaggle-Wettbewerb unschlagbar ist.

**Hyperparameter der Accuracy:**
- **Learning Rate:** Wie schnell lernt Baum K von den Residuen? Kleine Werte (0.01–0.1) sind sicherer, langsamer aber robuster
- **Tiefe & Iterationen:** Tiefe 3–6, Iterationen 100–500 — mehr Bäume = bessere Accuracy, aber Overfitting-Risiko
- **Overfitting-Vorsicht:** Im Gegensatz zu Random Forest brauchst du hier aktives Monitoring via Validation Set

**Wann welches?** Random Forest für schnelles, stabiles Prototyping — Gradient Boosting, wenn 2–5 % bessere Accuracy den Mehraufwand rechtfertigt.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 10 – Boosting and Additive Trees', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Faustregel: Wann welcher Algorithmus?

**Tabellarische Daten, schnelle erste Lösung:**
→ Random Forest. Robust, schnell zu trainieren, stabile Hyperparameter, gute Baseline-Accuracy.

**Tabellarische Daten mit Accuracy-Fokus:**
→ Gradient Boosting (XGBoost). Oft 2–5 % besser als Random Forest, aber komplexer und Overfitting-anfälliger — für Production-Systeme, wenn Precision kritisch ist.

**Kleine, strukturierte Feature-Sets:**
→ k-Nearest Neighbors (KNN). Schnell zu implementieren, aber speicherintensiv — nur für kleine Datenmengen.

**Bilder** (Kfz-Schadensfotos, Dokumenten-Scans):
→ Convolutional Neural Networks (CNN). Kommt in Kapitel 7.

**Text** (Betrugs-Verdachtsbeschreibungen, Chat-Protokolle):
→ Natural Language Processing (NLP). Kommt in Kapitel 8.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 10 – Boosting and Additive Trees', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 15 – Ensemble Methods', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: header-cols
---

## 💻 Übung — Betrugserkennung klassifizieren

::left::

**Deine Aufgaben (siehe Aufgabenblatt):**

1. Berechne Accuracy, Precision, Recall, F1-Score aus TP/TN/FP/FN
2. KNN von Hand: Finde 5 nächste Nachbarn, wende Majority Voting an
3. Business-Entscheidung: Wann wählst du Recall? Rechne die Kosten aus

Alle Details im separaten Aufgabenblatt — oder mit Python und Scikit-Learn üben.

::right::

<Illustration src="/illustrations/robotics-bro.svg" alt="Klassifikation & Vorhersage" width="90%" />

---
layout: default
---

## Key Takeaways – Supervised Learning 🔑

<br>

### [📊 Modellbewertung]{style="text-decoration:underline var(--slidev-theme-primary)"}
- **Train/Validation-Split & Overfitting/Underfitting:** Modellkomplexität muss zum Bias-Variance-Tradeoff passen
- **Confusion Matrix:** TP, TN, FP und FN bilden die Basis aller Klassifikationsmetriken
- **Accuracy, Precision, Recall, F1-Score:** unterschiedliche Blickwinkel auf Modellgüte — welche Metrik zählt, entscheiden die Business-Kosten eines Fehlers

---
layout: default
---

## Key Takeaways – Supervised Learning 🔑

<br>

### [🧠 Algorithmen]{style="text-decoration:underline var(--slidev-theme-primary)"}
- **k-Nearest Neighbors (KNN):** klassifiziert über die K nächsten Nachbarn — einfach, aber speicherintensiv bei großen Datenmengen
- **Entscheidungsbäume:** transparente Wenn-Dann-Regeln, leicht nachvollziehbar
- **Random Forest:** Ensemble vieler Bäume (Bagging) — schnell, stabil, eine gute Baseline
- **Gradient Boosting:** sequenzielles Ensemble, das die Fehler seiner Vorgänger korrigiert — oft genauer, aber komplexer und overfitting-anfälliger

---
layout: statement
---

# Danke & Diskussion

**Fragen zur Klassifikation?**

Deine Kapitel-4-Challenges: Train/Validation-Split, Confusion Matrix berechnen, KNN, Random Forest und Gradient Boosting verstehen — und wissen, wann welcher Algorithmus passt.

---
layout: chapter
---

::left::

# Kapitel 5: [Clusteranalyse & Segmentierung]{style="color:var(--slidev-theme-primary)"}

::right::

<Illustration src="/illustrations/data-analysis-bro.svg" alt="Clusteranalyse & Segmentierung" width="90%" />

---
layout: default
---

## Lernziele — Verstehen & Erklären

**Am Ende dieses Kapitels kannst du:**

🎯 **Verstehen & Erklären:**
- Unsupervised Learning als fundamentale Umkehrung von Supervised Learning (Kapitel 4)
- Distanzmaße (Euklidisch, Manhattan, Cosinus) und ihre Anwendungskontexte
- Den Clusteranalyse-Prozess von Normalisierung über Algorithmus-Wahl bis zur Validierung
- K-Means, Hierarchisches Clustering und DBSCAN als unterschiedliche algorithmische Ansätze

📊 **Anwenden & Bewerten:**
- Distanzen von Hand berechnen und Skalierungsprobleme erkennen
- Den optimalen Wert K mit Elbow-Methode und Silhouette-Koeffizient bestimmen
- Cluster qualitativ bewerten (WCSS, Davies-Bouldin-Index, Domain-Validierung)

---
layout: default
---

## Lernziele — Kritisch Reflektieren

⚖️ **Kritisch Reflektieren:**
- Clustering ist explorativ, nicht kausal — Interpretierbarkeit erfordert Domain-Wissen
- Distanzmaße favorisieren bestimmte Cluster-Formen (sphärisch vs. beliebig geformt)
- Unterschied: Clustering für Segmentierung (Kapitel 5) vs. Clustering für Anomalieerkennung (zurück zu Kapitel 4)

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 14 – Unsupervised Learning', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Tan, Steinbach, Karpatne, Kumar: Introduction to Data Mining, 2nd ed., Kap. 8 – Cluster Analysis: Basic Concepts and Algorithms', url: 'https://www.pearson.com/en-us/subject-catalog/p/Tan-Introduction-to-Data-Mining-2nd-Edition/P200000003204', isbn: '9780137506286', year: '2019' },
]" />

---
layout: default
---

## Supervised vs. Unsupervised — Der fundamentale Shift

Jetzt der Fundamental-Wechsel: In **Kapitel 4** hatten wir Labels (Betrug: 0/1); **Kapitel 5** hat keine. Stattdessen: **Welche versteckten Gruppen stecken in unseren Daten?**

| Eigenschaft | Supervised (Kapitel 4) | Unsupervised (Kapitel 5) |
|---|---|---|
| **Labels** | Vorhand, z. B. Betrug: 0/1 | Unbekannt — werden erst gesucht |
| **Ziel** | Vorhersage einer bekannten Zielgröße | Musterentdeckung, Segmentierung |
| **Ausgabe** | Klassenlabel oder Zahlenwert | Cluster-Zugehörigkeit |

**Intuition:** Supervised = Vorhersage aus Labels; Unsupervised = Gruppenerkennung ohne Labels.

<LiteraturSource :sources="[
  { title: 'Tan, Steinbach, Karpatne, Kumar: Introduction to Data Mining, 2nd ed., Kap. 8 – Cluster Analysis: Basic Concepts and Algorithms', url: 'https://www.pearson.com/en-us/subject-catalog/p/Tan-Introduction-to-Data-Mining-2nd-Edition/P200000003204', isbn: '9780137506286', year: '2019' },
]" />

---
layout: default
---

## Distanzmaße — Die Motivation: Ähnlichkeit im Merkmalsraum

**Zentrale Frage:** Wie misst man, ob zwei Kunden „ähnlich" sind?

<img :src="'/distanz-dimensionen-diagramm.svg'" class="w-full" alt="Distanz im Merkmalsraum: von 2 über 3 zu n Dimensionen" />

**Die Antwort:** Mit einer Zahl — der **Distanz**. Je kleiner die Distanz, desto ähnlicher zwei Kunden. Das erste Panel zeigt das im 2D-Fall: die gestrichelte Linie ist die direkte Luftlinie zwischen zwei Kundenpunkten.

---
layout: default
---

## Distanzmaße — Die Euklidische Distanz: Pythagoras formalisiert

**Zentrale Erkenntnis:** Diese Idee der geometrischen Entfernung ist die Basis für ALLES, was in Kapitel 5 folgt — **Jeder Clustering-Algorithmus braucht ein Distanzmaß.**

Die direkte Luftlinie folgt dem **Satz des Pythagoras**. Betrachten wir zwei konkrete Kunden:

- **Kunde A:** 27 Jahre, 8.500 € Fahrzeugwert
- **Kunde B:** 45 Jahre, 12.000 € Fahrzeugwert

$$d_E = \sqrt{(27-45)^2 + (8.500-12.000)^2} = \sqrt{324 + 12.250.000} \approx 3.501$$

<LiteraturSource :sources="[
  { title: 'Backhaus, Erichson, Plinke, Weiber: Multivariate Analysemethoden, 16. Aufl., Kap. 9 – Clusteranalyse', url: 'https://doi.org/10.1007/978-3-662-56655-8', doi: '10.1007/978-3-662-56655-8', year: '2021' },
]" />

---
layout: default
---

## Distanzmaße — Euklidische Distanz in 3D und n-D

**Die allgemeine Formel:** Die Euklidische Distanz in beliebig vielen Dimensionen lautet:

$$d_E(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{p} (x_i - y_i)^2}$$

**Das zweite Panel (3D):** Kommt ein drittes Merkmal hinzu — z. B. Schadenshäufigkeit — wächst die Formel nur um einen Term. Geometrisch denken wir jetzt im Raum statt der Ebene; rechnerisch bleibt die Logik identisch.

**Das dritte Panel (n-D):** Ab vier Merkmalen ist Zeichnen unmöglich. Aber mathematisch bleibt der Gedanke gleich — die obige Formel funktioniert für alle *p*, egal wie groß.

**Distanz ist jetzt eine reine Rechenvorschrift** — aber die zugrunde liegende Intuition (Luftlinie im Raum) bleibt erhalten, egal wie viele Dimensionen hinzukommen.

---
layout: default
---

## Distanzmaße — Ein Stolperstein bei allen Distanzmaßen

⚠️ **Kritisches Problem:** Merkmale mit unterschiedlichen Skalen dominieren die Distanzberechnung. Ein EUR-Betrag mit Werten im Tausenderbereich überschattet ein Alter in Jahrzehnten. **Lösung: Z-Transformation vor der Clusteranalyse** — alle Merkmale auf Mittelwert 0 und Standardabweichung 1 normalisieren. Dann fließen alle Merkmale gleichgewichtig in die Distanz ein.

<LiteraturSource :sources="[
  { title: 'Backhaus, Erichson, Plinke, Weiber: Multivariate Analysemethoden, 16. Aufl., Kap. 9 – Clusteranalyse', url: 'https://doi.org/10.1007/978-3-662-56655-8', doi: '10.1007/978-3-662-56655-8', year: '2021' },
]" />

---
layout: default
---

## Distanzmaße — Manhattan-Distanz: Ein Schritt nach dem anderen

Nicht jedes Distanzmaß passt zu jedem Datensatz.

### Manhattan-Distanz (L1-Norm)

$$d_M(\mathbf{x}, \mathbf{y}) = \sum_{i=1}^{n} |x_i - y_i|$$

**Intuition:** Statt diagonal abzukürzen gehst du nur nach rechts/oben/unten — wie Straßenblöcke in Manhattan. Die Distanz ist die Summe der Differenzen in jeder Dimension.

**Anwendungsfall:** Robuster gegen Ausreißer; beliebter, wenn Merkmale nominal kodiert oder gemischt typisiert sind (z. B. Kundeneigenschaften mit diskreten und kontinuierlichen Werten).

---
layout: default
---

## Distanzmaße — Cosinus-Distanz: Winkel statt Magnitude

### Cosinus-Distanz

$$\cos(\mathbf{x}, \mathbf{y}) = \frac{\mathbf{x} \cdot \mathbf{y}}{|\mathbf{x}| |\mathbf{y}|}$$

**Intuition:** Zwei Personen können unterschiedlich viel reden, aber über dieselben Themen im gleichen Verhältnis sprechen — Cosinus misst den **Winkel** zwischen den Vektoren, nicht die absolute Magnitude. Wenn beide Vektoren in die gleiche Richtung zeigen, ist der Winkel klein (Cosinus ≈ 1 = ähnlich); wenn sie senkrecht stehen, ist Cosinus ≈ 0 (unähnlich).

**Anwendungsfall:** Standard für Text-Ähnlichkeit und hochdimensionale sparse Daten (z. B. Wort-Häufigkeiten oder Dokument-Vektoren). Brillant, wenn absolute Größen nicht zählen, sondern nur Richtung/Proportion.

---
layout: default
---

## Distanzmaße — Faustregel für die richtige Wahl

- **Euklidisch:** Numerische, kontinuierliche Daten (Standard für Kundenmerkmale wie Alter, Gehalt, Fahrzeugwert)
- **Manhattan:** Gemischte oder diskrete kodierte Daten; robuster gegen Ausreißer
- **Cosinus:** Text, Häufigkeitsvektoren, hochdimensionale sparse Daten

Diese Wahl beeinflusst die Cluster-Ergebnisse erheblich — richtige Distanzmaß ist kein Detail, sondern Design-Entscheidung.

<LiteraturSource :sources="[
  { title: 'Scikit-Learn Clustering User Guide', url: 'https://scikit-learn.org/stable/modules/clustering.html', year: '2025' },
]" />

---
layout: default
---

## Der Clusteranalyse-Prozess — Vorbereitung & Algo-Wahl

Clustering ist nicht nur „Algorithmus anwenden und fertig". Jetzt wenden wir unsere Distanzmaße-Kenntnisse in einer strukturierten 5-Schritt-Abfolge an:

**Schritt 1: Normalisierung**  
Z-Transformation: (x − Mittelwert) / Standardabweichung. Alle Merkmale auf gleiche Skala bringen, damit EUR-Beträge nicht dominieren.

**Schritt 2: Distanzmatrix berechnen**  
Paarweise Distanzen zwischen allen Datenpunkten mit dem gewählten Maß (Euklidisch/Manhattan/Cosinus).

**Schritt 3: Algorithmus wählen**  
- **K-Means (≠ KNN, Kapitel 4):** Schnell, sphärische Cluster, K vorgeben
- **Hierarchisches Clustering:** Dendrogramm-Struktur, bottom-up oder top-down
- **DBSCAN:** Beliebige Cluster-Formen, erkennt Rauschen

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 14 – Unsupervised Learning', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## Der Clusteranalyse-Prozess — Bewertung & Interpretation

Nach der Algorithmus-Anwendung folgt kritische Validierung:

**Schritt 4: Optimale K / Cluster-Anzahl bestimmen**  
- **Elbow-Methode:** Plot WCSS vs. K — gesucht wird der deutliche Knick in der Kurve, an dem sich die Kurve wie ein angewinkelter Arm abflacht (daher engl. „Elbow" = Ellenbogen, im Deutschen oft „Knie der Kurve" genannt)
- **Silhouette-Koeffizient:** Misst, wie gut ein Punkt zu seinem Cluster passt (−1 bis +1)
- **Domain-Wissen:** „Wie viele Kundengruppen ergeben geschäftlich Sinn?"

**Schritt 5: Cluster-Qualität bewerten & interpretieren**  
- WCSS (Within-Cluster Sum of Squares) — niedrig = gute Kohäsion
- Davies-Bouldin-Index — niedrig = gute Trennung zwischen Clustern
- **Domänen-Validierung:** Sind die gefundenen Gruppen geschäftlich sinnvoll?

---

🎯 **Das Wichtigste:** Cluster sind nie 100 % „echt" — Domänenwissen muss bestätigen, dass die Gruppen tatsächlich unterschiedliche Geschäftssegmente darstellen. Jetzt kennen wir den Prozess. Die konkrete Umsetzung startet mit dem einfachsten Algorithmus: **K-Means**.

<LiteraturSource :sources="[
  { title: 'Scikit-Learn Clustering User Guide', url: 'https://scikit-learn.org/stable/modules/clustering.html', year: '2025' },
]" />

---
layout: default
---

## [K-Means]{style="color:var(--slidev-theme-primary)"} — Wenn feste Regeln nicht mehr reichen

**Problem:** Dein Versicherer nutzt starre Segmente: „Anfänger unter 25", „Standard 25–50", „Senior über 50" — ein 26-Jähriger mit 25.000 km/Jahr und 3 Unfällen landet in derselben Schublade wie einer mit 5.000 km/Jahr und 0 Unfällen.

> **Frage:** Wie findest du automatisch die Risikogruppen, die in den Daten wirklich stecken — statt die Grenzen von Hand festzulegen?

<img :src="'/kmeans-idee-diagramm.svg'" alt="K-Means-Grundidee in drei Schritten: drei zufällige Startpunkte, Zuordnung jedes Punkts zum nächsten Startpunkt, Nachrücken der Startpunkte in die Gruppenmitte" style="max-height: 195px; margin: 0 auto; display: block;" />

Wiederholen, bis sich nichts mehr bewegt — **Konvergenz**. So entstehen natürliche Gruppen.

---
layout: default
---

## K-Means Iteration — Die vier Phasen visuell

<img :src="'/kmeans-iteration-diagramm.svg'" alt="K-Means in vier Schritten: zufällige Initialisierung der Zentroide, Zuordnung der Kunden zum nächsten Zentroid, Verschieben der Zentroide auf den Gruppenmittelwert und Konvergenz" style="max-height: 310px; margin: 0 auto; display: block;" />

Das Diagramm zeigt genau das, was die Magnet-Analogie beschreibt:

1. **Initialisierung:** 3 zufällige Start-Zentroide (rote, blaue, gelbe Sterne)
2. **Zuordnung:** Jeder Kunde bekommt Farbe des nächsten Zentoids
3. **Update:** Zentroide springen zu den Mittelpunkten ihrer Gruppen
4. **Konvergenz:** Zentroide haben sich stabilisiert (✓-Badge)

---
layout: default
---

## K-Means Algorithmus — Die vier Schritte

**Schritt 1: Initialisierung**  
Wähle $K$ zufällige Punkte als Start-Zentroide $\mathbf{c}_1, \ldots, \mathbf{c}_K$ (oder besser: **k-means++**, Arthur & Vassilvitskii 2007, wählt erste Zentroide klüger und vermeidet schlechte lokale Minima).

**Schritt 2: Zuordnung**  
Für jeden Punkt $\mathbf{x}_i$: ordne ihn dem nächsten Zentroid nach Euklidischer Distanz zu (Rückbezug Cluster 5.1).

**Schritt 3: Update**  
Für jeden Cluster: berechne den neuen Zentroid $\mathbf{c}_k^{\text{neu}} = \frac{1}{|C_k|} \sum_{\mathbf{x}_i \in C_k} \mathbf{x}_i$ (Mittelwert aller zugeordneten Punkte — daher der Name "K-Means").

**Schritt 4: Konvergenztest**  
Wenn die Zentroide sich nicht mehr bewegt haben: Stop. Sonst: zurück zu Schritt 2.

**Das war's — einfach und elegant.** Das Ergebnis: $K$ Cluster mit minimaler Within-Cluster-Varianz (WCSS).

<LiteraturSource :sources="[
  { title: 'MacQueen, J.: Some Methods for Classification and Analysis of Multivariate Observations, Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability', url: 'https://projecteuclid.org/ebooks/berkeley-symposium-on-mathematical-statistics-and-probability/Proceedings-of-the-Fifth-Berkeley-Symposium-on-Mathematical-Statistics-and/chapter/Some-methods-for-classification-and-analysis-of-multivariate-observations/bsmsp/1200512992', year: '1967' },
  { title: 'Arthur, D. & Vassilvitskii, S.: k-means++: The Advantages of Careful Seeding, SODA \'07 – Proceedings of the Eighteenth Annual ACM-SIAM Symposium on Discrete Algorithms', url: 'https://theory.stanford.edu/~sergei/papers/kMeansPP-soda.pdf', year: '2007' },
]" />

---
layout: default
---

## K-Means in der Praxis — Versicherer-Segmentierung (1/2)

Nach K-Means (mit $K=3$) entstehen drei interpretierbare Kundengruppen:

**Cluster 1 — Hochrisiko:** Jung (24–32 Jahre), hohe Jahreskilometer (18.000+), Unfallhistorie → Prämie +35%

**Cluster 2 — Standard:** Mittleres Alter (35–48 Jahre), normale km (8.000–12.000), wenige Schäden → Baseline-Prämie

**Cluster 3 — Niedrigrisiko:** Älter (50+), niedrige km (<5.000), saubere Geschichte → Prämie −15%

Diese Segmente sind unmittelbar aktiv einsetzbar: Jeder neue Kunde wird zum nächsten Zentroid zugeordnet und erhält damit sofort die passende Prämienklasse.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 14 – Unsupervised Learning', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: default
---

## K-Means in der Praxis — Versicherer-Segmentierung (2/2)

**Konkrete Zuordnung:** Nehmen wir an, die zufällige Initialisierung (Schritt 1) hat diese 3 Start-Zentroide ergeben — jeweils als (Alter, km/Jahr, Unfälle):

$$\mathbf{c}_1 = (30,\ 15.000,\ 1) \qquad \mathbf{c}_2 = (42,\ 9.000,\ 0) \qquad \mathbf{c}_3 = (55,\ 4.000,\ 0)$$

Ein neuer Kunde mit Merkmalen $(27 \text{ Jahre}, 22.000 \text{ km}, 2 \text{ Unfälle})$ wird per Euklidischer Distanz zugeordnet:

$$d_1 = \sqrt{(27-30)^2 + (22.000-15.000)^2 + (2-1)^2} \approx 7.001$$
$$d_2 = \sqrt{(27-42)^2 + (22.000-9.000)^2 + (2-0)^2} \approx 13.229$$
$$d_3 = \sqrt{(27-55)^2 + (22.000-4.000)^2 + (2-0)^2} \approx 18.034$$

→ **Kunde gehört zu Cluster 1** (Zentroid 1 am nächsten) — **Hochrisiko-Segment** mit +35%-Prämie.

<LiteraturSource :sources="[
  { title: 'Tan, Steinbach, Kumar: Introduction to Data Mining, 2nd ed., Kap. 8.1 – Basic Concepts', url: 'https://www.pearson.com/en-us/subject-catalog/p/Tan-Introduction-to-Data-Mining-2nd-Edition/P200000003204', isbn: '9780137506286', year: '2019' },
]" />

---
layout: default
---

## K-Means Vor- & Nachteile — und wann er passt

| **Vorteile** | **Nachteile** |
|---|---|
| Sehr schnell: O(*n* · *K* · *i*) | *K* muss vorab bekannt sein |
| Interpretierbar: Zentroide sind reale Punkte im Merkmalsraum | Ausreißerempfindlich (Kapitel 1: Mittelwert vs. Median) |
| Einfach zu verstehen und umzusetzen | Skalierungsempfindlich → Z-Transformation Pflicht |
| Funktioniert gut bei sphärischen, ähnlich großen Clustern | Nimmt genau das an — bei anderen Formen ungeeignet (DBSCAN später flexibler) |
| — | Lokale Minima möglich (k-means++ hilft) |

K-Means braucht $K$ vorher — welches richtig ist, zeigt die **Elbow-Methode**.

<LiteraturSource :sources="[
  { title: 'Tan, Steinbach, Kumar: Introduction to Data Mining, 2nd ed., Kap. 8.1 – Basic Concepts', url: 'https://www.pearson.com/en-us/subject-catalog/p/Tan-Introduction-to-Data-Mining-2nd-Edition/P200000003204', isbn: '9780137506286', year: '2019' },
]" />

---
layout: section
---

# Hierarchisches Clustering — [wenn K unbekannt ist]{style="color:var(--slidev-theme-primary)"}

Der Gegenentwurf zu K-Means: kein K vorab, sondern Exploration per Dendrogramm

---
layout: default
---

## Der Stammbaum als [Metapher]{style="color:var(--slidev-theme-primary)"}

Stelle Dir vor: Du hast sechs Versicherungskunden — jeder ein unabhängiger Punkt im Kundenmerkmals-Raum (Fahreralter, Jahreskilometer, Unfallhistorie).

**Hierarchisches Clustering baut von unten nach oben:** Die sich ähnlichsten Punkte verschmelzen zuerst, dann die sich ähnlichsten *Gruppen* — Schritt für Schritt, bis am Ende alles in einem gemeinsamen Baum steckt.

<img :src="'/dendrogramm-idee-diagramm.svg'" alt="Grundidee des hierarchischen Clusterings: Aus sechs einzelnen, neutralen Punkten wächst durch schrittweises Verschmelzen benachbarter Punkte nach oben hin ein einziger gemeinsamer Baum" style="max-height: 200px; margin: 0 auto; display: block;" />

Dieser Baum heißt **Dendrogramm** (griech. „dendro" = Baum). Ein horizontaler Schnitt teilt ihn in $K$ Teilbäume — die Höhe des Schnitts bestimmst Du nachträglich, nicht vorab.

---
layout: default
---

## Das Bottom-up-Prinzip — Der [Algorithmus]{style="color:var(--slidev-theme-primary)"}

**Agglomeratives Clustering — vier einfache Schritte:**

1. **Start:** Jeder der $n$ Datenpunkte ist sein eigener Cluster
2. **Wiederhole:** Finde die zwei ähnlichsten Cluster (Distanz minimal) und verschmelze sie
3. **Update:** Du hast jetzt $n - 1$ Cluster; berechne Distanzen neu
4. **Stopp:** Wenn nur noch ein Cluster übrig ist — der globale Wurzelcluster

**Ergebnis:** Ein Dendrogramm mit $n - 1$ Verschmelzungs-Schritten, jeder mit seiner eigenen Verschmelzungs-Distanz dokumentiert.

Anders als K-Means, das Zentroide iterativ bewegt, baut Hierarchisches Clustering eine starre Hierarchie auf. Einmal verschmolzen, können Cluster nicht mehr getrennt werden — deshalb „hierarchisch".

---
layout: default
---

## Das Dendrogramm — Das [6-Kunden-Beispiel]{style="color:var(--slidev-theme-primary)"}

<img :src="'/dendrogramm-diagramm.svg'" alt="Dendrogramm des agglomerativen Clusterings von sechs Versicherungskunden: E und F verschmelzen bei 500, A und B bei 1.000, C und D bei 1.500, danach {C,D} mit {E,F} bei 4.000 und zuletzt alles bei 9.500. Ein Schnitt bei Höhe 2.500 ergibt die drei Cluster {A,B}, {C,D} und {E,F}" style="max-height: 250px; margin: 0 auto; display: block;" />

Dieses Dendrogramm nutzt eine bestimmte Regel, um „ähnlichste Cluster" zu definieren (hier: die jeweils nächstgelegenen Punkte zweier Gruppen) — dazu gleich mehr. **Die gestrichelte Schnittlinie** bei Höhe ≈ 2.500 teilt den Baum in drei Gruppen: **(A,B) · (C,D) · (E,F)** — also $K = 3$.

Das Diagramm zeigt alle Verschmelzungs-Höhen. Eine **höher gezogene Schnittlinie** (z. B. bei 4.000) ergibt weniger Cluster; eine **tiefer gezogene** ergibt mehr. Du wählst $K$ *nachdem* der Baum gebaut ist — nicht davor wie K-Means.

---
layout: default
---

## Single & Complete Linkage — [Erste Kriterien]{style="color:var(--slidev-theme-primary)"}

**Die offene Frage aus dem letzten Dendrogramm:** Sobald der erste Merge passiert ist, hast Du zwei *Gruppen* von Punkten — welche Distanz zwischen ihnen zählt dann? Diese Regel heißt **Linkage**. Zwei Extreme:

<img :src="'/linkage-single-complete-diagramm.svg'" alt="Single Linkage nutzt den kürzesten Abstand zwischen zwei Punkten der Cluster, Complete Linkage den größten Abstand" style="max-height: 200px; margin: 0 auto; display: block;" />

**Single** bevorzugt kettenförmige Cluster (⚠️ Chaining-Problem), **Complete** kompakte, kugelige — Faustregel: beide Extreme meiden, die Mitte liefert oft bessere Cluster.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 14', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'Tan, Steinbach, Kumar: Introduction to Data Mining, 2nd ed., Kap. 8.2', url: 'https://www.pearson.com/en-us/subject-catalog/p/Tan-Introduction-to-Data-Mining-2nd-Edition/P200000003204', isbn: '9780137506286', year: '2019' },
]" />

---
layout: default
---

## Average & Ward Linkage — [Die praktischen Standards]{style="color:var(--slidev-theme-primary)"}

Single/Complete Linkage sind Extreme mit je einer Schwäche. Zwei Alternativen dazwischen sind in der Praxis am häufigsten:

<img :src="'/linkage-average-ward-diagramm.svg'" alt="Average Linkage mittelt alle neun Verbindungen zwischen den Clustern, Ward Linkage vergleicht die Streuung innerhalb der Cluster mit der gemeinsamen Streuung nach der Verschmelzung" style="max-height: 200px; margin: 0 auto; display: block;" />

**Average** ist ein stabiler Kompromiss. **Ward** minimiert dieselbe Idee wie K-Means — die Streuung innerhalb der Cluster —, nur hierarchisch statt iterativ, und liefert oft die besten praktischen Ergebnisse.

<LiteraturSource :sources="[
  { title: 'Ward, J.H.: Hierarchical Grouping to Optimize an Objective Function. Journal of the American Statistical Association', url: 'https://doi.org/10.1080/01621459.1963.10500845', year: '1963' },
  { title: 'Backhaus, Erichson, Plinke, Weiber: Multivariate Analysemethoden, 16. Aufl., Kap. 9 – Clusteranalyse', url: 'https://doi.org/10.1007/978-3-662-56655-8', doi: '10.1007/978-3-662-56655-8', year: '2021' },
]" />

---
layout: default
---

## Hierarchisch oder K-Means? Ein [Entscheidungs-Kompass]{style="color:var(--slidev-theme-primary)"}

Beide lösen dieselbe Frage — Kundensegmentierung — mit unterschiedlichen Annahmen. Welches Werkzeug für welche Situation?

| **Aspekt** | **Hierarchisches Clustering** | **K-Means** |
|---|---|---|
| $K$ vorab nötig? | Nein — erst beim Schnitt | Ja |
| Interpretierbarkeit | Hoch — Dendrogramm zeigt die Struktur | Geringer — nur Endergebnis |
| Datensatzgröße | Klein bis mittel (n < 10.000) | Auch sehr große Datensätze |
| Rechenaufwand | O(n²) bis O(n³) | O(n·K·i) — deutlich schneller |
| Rückgängig machbar? | Nein — einmal verschmolzen, bleibt verschmolzen | Ja — jede Iteration neu zuordenbar |

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 14', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
]" />

---
layout: section
---

# BIRCH — Clustering im [Terabyte-Maßstab]{style="color:var(--slidev-theme-primary)"}

**B**alanced **I**terative **R**educing and **C**lustering using **H**ierarchies — wenn hierarchisches Clustering an seine Grenzen stößt

---
layout: default
---

## Die Skalierungskrise — [Speichern durch Kompression]{style="color:var(--slidev-theme-primary)"}

Hierarchisches Clustering braucht O(n²)–O(n³) Rechenzeit — bei 400.000 Versicherungsdatensätzen unpraktikabel. Der Grund: Jeder Schritt vergleicht alle Cluster miteinander.

**BIRCHs Lösung:** Nur einmal durch die Daten gehen (Single-Pass) und dabei nicht die Rohdaten, sondern pro Cluster nur eine kompakte Zusammenfassung speichern — das **Clustering Feature (CF)**, ein Tripel aus drei Zahlen:

| **Symbol** | **Bedeutung** |
|---|---|
| N | Anzahl der Punkte |
| LS | Summe der Merkmalsvektoren |
| SS | Summe der quadrierten Werte |

<LiteraturSource :sources="[
  { title: 'Zhang, Ramakrishnan, Livny: BIRCH: An Efficient Data Clustering Method for Very Large Databases. ACM SIGMOD Record', url: 'https://dl.acm.org/doi/10.1145/235968.233324', year: '1996' },
]" />

---
layout: default
---

## Die Lager-Analogie

Ein Versandlager hat Tausende Paletten, verteilt auf Hunderte Lagerplätze — jeder mit einer Tragfähigkeits-Grenze. Statt jede Palette einzeln zu wiegen, notiert das System pro Lagerplatz nur drei Zahlen: Anzahl Paletten, Gesamtgewicht, Summe der quadrierten Gewichte. Kommt eine neue Palette dazu, wird sie einsortiert und nur diese drei Zahlen werden aktualisiert — nicht jede Palette erneut gewogen.

Genau das macht ein **Clustering Feature (CF)**: eine kompakte Zusammenfassung statt der Rohdaten. Die Frage ist nur — wie organisiert man tausende solcher CFs?

---
layout: default
---

## Ein CF ganz konkret — [zurück zu den Paletten]{style="color:var(--slidev-theme-primary)"}

Ein Lagerplatz mit drei Paletten: 80 kg, 95 kg, 110 kg. Daraus ergibt sich sein CF:

$$N = 3 \qquad LS = 80+95+110 = 285 \qquad SS = 80^2+95^2+110^2 = 27.525$$

Daraus — ohne die Paletten nochmal einzeln zu wiegen:

$$\text{Ø-Gewicht} = \frac{LS}{N} = 95\text{ kg} \qquad\qquad \text{Streuung} = \frac{SS}{N} - \left(\frac{LS}{N}\right)^2 = 150$$

**Kommt eine vierte Palette (120 kg) dazu:** Das CF wird einfach fortgeschrieben — $N=4$, $LS=405$, $SS=41.925$ — ohne die ersten drei Paletten erneut anzufassen. Genau diese Additivität macht BIRCH so schnell.

<LiteraturSource :sources="[
  { title: 'Zhang, Ramakrishnan, Livny: BIRCH: An Efficient Data Clustering Method for Very Large Databases. ACM SIGMOD Record', url: 'https://dl.acm.org/doi/10.1145/235968.233324', year: '1996' },
]" />

---
layout: default
---

## Der CF-Baum — [Single-Pass, dann Clustern]{style="color:var(--slidev-theme-primary)"}

Die CFs werden in einem balancierten Baum organisiert: Ein neuer Punkt wandert von der Wurzel zum ähnlichsten Blatt, wird dort eingefügt, und alle CFs auf dem Pfad werden aktualisiert. **Additivität:** CF₁ + CF₂ = CF(beide gemeinsam) — ohne Rohdaten.

<img :src="'/cf-tree-diagramm.svg'" alt="Schematischer CF-Tree: Wurzel → 2 interne Knoten mit CF → 4 Blattknoten mit CF; ein neuer Datenpunkt wird in einem Durchlauf eingefügt und sein Blatt-CF aktualisiert" style="max-height: 190px; margin: 0 auto; display: block;" />

**Zwei Phasen:** (1) CF-Tree in einem Durchgang aufbauen — O(n). (2) K-Means oder Agglomerativ auf die wenigen Blatt-CFs anwenden, statt auf n Datensätzen.

<LiteraturSource :sources="[
  { title: 'Zhang, Ramakrishnan, Livny: BIRCH: An Efficient Data Clustering Method for Very Large Databases. ACM SIGMOD Record', url: 'https://dl.acm.org/doi/10.1145/235968.233324', year: '1996' },
]" />

---
layout: default
---

## BIRCH — [Stärken und Grenzen]{style="color:var(--slidev-theme-primary)"}

| **Vorteile** | **Nachteile** |
|---|---|
| Single-Pass: O(n) Rechenzeit | Nur für sphärische Cluster optimal (CF nutzt Radius) |
| Konstanter Speicher unabhängig von n | Einfügungsreihenfolge beeinflusst Ergebnis |
| Findet Ausreißer automatisch | Threshold-Wahl (max. CF-Radius) nicht trivial |
| Online/Streaming-fähig | — |

**Das Wichtigste:** BIRCH beantwortet eine zentrale Frage der Praxis: „Was tun, wenn der Datensatz zu groß für klassisches Clustering wird?" Die Strategie — erst komprimieren, dann clustern — ist ein Muster, das dir in modernen Machine-Learning-Systemen immer wieder begegnet.

<LiteraturSource :sources="[
  { title: 'Zhang, Ramakrishnan, Livny: BIRCH: An Efficient Data Clustering Method for Very Large Databases. ACM SIGMOD Record', url: 'https://dl.acm.org/doi/10.1145/235968.233324', year: '1996' },
  { title: 'Scikit-Learn BIRCH documentation', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html', year: '2024' },
]" />

---
layout: section
---

# DBSCAN — [Dichtebasiertes Clustering]{style="color:var(--slidev-theme-primary)"}

Findet auch nicht-sphärische Cluster — und behandelt Rauschen explizit als eigenständige Kategorie.

---
layout: default
---

## Die Grenzen von K-Means & Hierarchischem Clustering

**Das Problem:** K-Means und Hierarchisches Clustering gehen beide von kompakten, kugelförmigen Clustern aus. Sie funktionieren, solange Deine Kundengruppen ungefähr rund verteilt sind.

> **Aber was, wenn die realen Gruppen halbmondförmig sind?** Oder sehr unterschiedliche Dichten haben? Oder wenn einzelne Ausreißer nicht zwanghaft einem Cluster zugeordnet werden sollen, sondern als **Anomalien** erkannt werden müssen?

**Die Antwort heißt DBSCAN:** **D**ensity-**B**ased **S**patial **C**lustering of **A**pplications with **N**oise. Ein Algorithmus, der Cluster **dichtebasiert** findet — statt geometrisch — und Rauschpunkte explizit als eigenständige Kategorie behandelt, nicht als erzwungene Cluster-Mitglieder.

<LiteraturSource :sources="[
  { title: 'Ester, M., Kriegel, H.-P., Sander, J., Xu, X.: A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases with Noise. KDD-96 Proceedings', url: 'http://cdn.aaai.org/KDD/1996/KDD96-037.pdf', year: '1996' },
]" />

---
layout: default
---

## Die zwei Parameter — ε und MinPts

DBSCAN braucht nur zwei Hyperparameter — und beide lassen sich intuitiv verstehen:

**ε (Epsilon) — Die Nachbarschafts-Sphäre**  
Wie weit ist „nah genug"? ε definiert den Radius um jeden Punkt. Alle Punkte innerhalb dieses Radius sind die **ε-Nachbarschaft** eines Punkts (nutzt Euklidische Distanz, wie in Cluster 5.1 besprochen).

**MinPts — Die Dichte-Schwelle**  
Wie viele Nachbarn braucht ein „dichter" Bereich? Wenn ein Punkt mindestens MinPts Nachbarn (inkl. sich selbst) in seinem ε-Radius hat, gilt er als **dichter Punkt**. Diese Schwelle bestimmt, was „Rauschen" von „Cluster" trennt.

**Beispiel:** Mit ε = 4 und MinPts = 2 bedeutet: Zwei Kunden gelten als "nah", wenn ihr Abstand im Merkmalsraum kleiner als 4 ist — und bilden gemeinsam einen dichten Bereich, falls sich noch ein weiterer Kunde in Reichweite befindet.

---
layout: default
---

## DBSCAN-Punkttypen — Das Dreierduo

**Kernpunkt** (≥MinPts Nachbarn im ε-Radius) · **Randpunkt** (im Radius eines Kernpunkts, aber selbst nicht dicht genug) · **Rauschpunkt** (keins von beidem — Anomalie)

<img :src="'/dbscan-punkttypen-diagramm.svg'" alt="DBSCAN-Punkttypen und Versicherer-Beispiel: Kernpunkt, Randpunkt, Rauschpunkt" class="w-full" style="max-height: 340px; margin: 0 auto; display: block;" />

**A, B, C** sind gegenseitig Kernpunkte und bilden Cluster 1, **D, E** ebenso Cluster 2, **F** ist Rauschpunkt — zu isoliert. Einen Randpunkt zeigt dieses Beispiel nicht, die Legende erklärt ihn schematisch.

---
layout: default
---

## Der DBSCAN-Algorithmus — Die Grundidee

DBSCAN läuft in drei konzeptuellen Schritten:

**Schritt 1: Kernpunkte finden**  
Gehe durch alle Datenpunkte. Markiere jeden als Kernpunkt, wenn er ≥ MinPts Nachbarn in seinem ε-Radius hat.

**Schritt 2: Kernpunkte verbinden**  
Zwei Kernpunkte, deren ε-Radien sich überlappen, gehören zum selben Cluster. Starte von jedem unbesuchten Kernpunkt einen Cluster und ziehe alle erreichbaren Kernpunkte (Tiefensuche) hinein — sie ziehen wiederum *ihre* Kernpunkt-Nachbarn nach. So entstehen zusammenhängende dichtebasierte Gruppen.

**Schritt 3: Randpunkte & Rauschen klassifizieren**  
Randpunkte (nicht dicht genug selbst, aber im ε-Radius eines Kernpunkts) werden ihrem nächsten Kernpunkt-Cluster zugeordnet. Der Rest bleibt Rauschen.

**Das Ergebnis:** Cluster beliebiger Form, Rauschpunkte als explizite Kategorie — keine erzwungene Zuordnung.

<LiteraturSource :sources="[
  { title: 'Ester, M., Kriegel, H.-P., Sander, J., Xu, X.: A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases with Noise. KDD-96 Proceedings', url: 'http://cdn.aaai.org/KDD/1996/KDD96-037.pdf', year: '1996' },
]" />

---
layout: default
---

## DBSCAN in der Praxis — Das 6-Kunden-Versicherer-Beispiel

**Datensatz:** 6 Kunden (Fahreralter / Jahreskilometer):
- A (25/15.000), B (26/16.000), C (27/14.500) — junge Vielfahrer
- D (55/8.000), E (56/7.500) — mittelalte Normalfahrer
- F (82/0,1) — Rentner, fast keine Kilometer

**Parameter:** ε = 4, MinPts = 2 — **Ergebnis:**

| **Bezeichnung** | **Punkte** | **Typ** |
|---|---|---|
| Cluster 1 | A, B, C | Kernpunkte (alle Nachbarn) |
| Cluster 2 | D, E | Kernpunkte (beide Nachbarn) |
| Rauschen | F | Zu isoliert — keine Cluster-Zuordnung |

---
layout: default
---

## DBSCAN — Vorteile & Grenzen

| **Vorteil** | **Grenze** |
|---|---|
| Findet beliebige Cluster-Formen (nicht nur Kugeln) | ε und MinPts zu wählen ist nicht trivial — keine Elbow-Methode wie K-Means |
| Rauschen wird explizit erkannt (nicht erzwungen) | Sehr empfindlich gegenüber Skalierung — z-Transformation (Cluster 5.1) ist fast zwingend notwendig |
| Kein K vorab nötig | Bei unterschiedlichen Cluster-Dichten kann ein ε beide nicht optimal erfassen (dichte Cluster zu klein, dünne zu groß) |
| Wenig Hyperparameter | — |

**Merksatz:** DBSCAN lohnt sich, wenn Du nicht-sphärische Cluster erwartest *oder* wenn Anomalien (Rauschpunkte) genauso wichtig sind wie die Cluster selbst. Für runde Cluster mit homogener Dichte ist K-Means oft schneller und einfacher.

<LiteraturSource :sources="[
  { title: 'Scikit-Learn DBSCAN documentation', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html', year: '2024' },
]" />

---
layout: default
---

## K-Means braucht K — aber woher kommt diese Zahl?

Erinnerung: K-Means verlangt, dass Du *K* (die Cluster-Anzahl) **vorab** festlegst. Aber welches K ist richtig? Zwei Gruppen für unsere 5.000 Versicherten-Kunden oder fünf? Das ist kein akademisches Problem — es bestimmt direkt die Geschäftsentscheidung.

> **Frage:** Gibt es ein Kriterium, das Dir hilft, *K* zu wählen — ohne zu raten?

Die Antwort liegt in einem Kennwert, den K-Means ohnehin berechnet: **WCSS** (Within-Cluster Sum of Squares).

---
layout: default
---

## WCSS — Within-Cluster Sum of Squares

K-Means minimiert während des Laufs ein Ziel-Kriterium: die **WCSS** — die Summe der quadrierten Abstände aller Punkte zu ihrem zugeordneten Zentroid:

$$\text{WCSS} = \sum_{i=1}^{k} \sum_{\mathbf{x}_j \in C_i} \|\mathbf{x}_j - \boldsymbol{\mu}_i\|^2$$

**Intuition:** Je kompakter die Cluster liegen um ihre Zentroide, desto **kleiner** WCSS. WCSS ist ein Maß für die innere Kohäsion — wie gut Punkte zu ihrer Gruppe passen.

*Praktisch: Du musst WCSS nicht selbst berechnen — Scikit-Learn liefert den Wert nach jedem K-Means-Lauf automatisch mit (`kmeans.inertia_`).*

**Praxis-Hinweis:** WCSS basiert auf Distanzen — deshalb ist die **z-Transformation** Pflicht, sonst dominieren Variablen mit großem Wertebereich die Berechnung.

<LiteraturSource :sources="[
  { title: 'Hastie, Tibshirani, Friedman: The Elements of Statistical Learning, Kap. 14 – Unsupervised Learning', url: 'https://doi.org/10.1007/978-0-387-84858-7', year: '2009' },
  { title: 'James, Witten, Hastie, Tibshirani: An Introduction to Statistical Learning (2nd ed.), Kap. 12 – Unsupervised Learning', url: 'https://doi.org/10.1007/978-1-0716-1418-1', year: '2021' },
]" />

---
layout: default
---

## Das Dilemma: WCSS sinkt *immer*

Der Haken dabei: **WCSS sinkt monoton mit wachsendem K** — bei K=n (jeder Punkt sein eigener Cluster) wäre WCSS=0, aber völlig nutzlos.

| K | WCSS |
|:---:|---:|
| 1 | 520.000 |
| 2 | 310.000 |
| 3 | 210.000 |
| … | *(fällt weiter — siehe Kurve)* |

**Knackpunkt:** "Minimiere WCSS" allein reicht nicht — wir brauchen den Punkt, wo der Grenznutzen eines weiteren Clusters stark abnimmt.

---
layout: default
---

## Elbow-Methode — Die Intuition

Die **Elbow-Methode** löst dieses Dilemma durch eine einfache visuelle Heuristik:

1. **Berechne WCSS für K = 1, 2, 3, ..., n**
2. **Plotte WCSS gegen K** — eine Kurve entsteht
3. **Suche den "Knick"** — den Punkt, wo die Kurve von steil zu flach übergeht

Dieser Knick (engl. *Elbow*, im Deutschen oft *Knie der Kurve* genannt) markiert das optimale K: **Mehr Cluster bringen danach nur noch marginale Verbesserung.**

Das ist kein mathematisches Beweis — sondern eine praktische Faustregel, gestützt auf Domänenwissen.

---
layout: default
---

## Die Elbow-Kurve — Praktisches Beispiel (5.000 Kunden)

<img :src="'/wcss-elbow-diagramm.svg'" alt="Elbow-Kurve: WCSS für K = 1 bis 8 fällt von 520.000 steil auf 210.000 bei K = 3 und danach nur noch flach auf 112.000 bei K = 8 — der Knick markiert K = 3 als beste Wahl" style="max-height: 320px; margin: 0 auto; display: block;" />

**Beobachtung:** WCSS fällt steil bis K=3 (210.000), dann deutlich flacher bis K=8 (112.000). Der Knick bei K=3 ist deutlich — ein klares Signal.

**Entscheidung:** K=3 trennt die Hochrisiko-, Standard- und Niedrigrisiko-Segmente — und mehr Cluster bringen keine sinnvolle zusätzliche Trennung.

---
layout: default
---

## Silhouette-Koeffizient — Eine mathematischere Alternative

Neben der Elbow-Methode gibt es den **Silhouette-Koeffizient** (Rousseeuw, 1987):

$$s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}$$

- $a(i)$ = mittlere Distanz von Punkt $i$ zu seinen Cluster-Nachbarn (je kleiner, desto besser passt $i$ rein)
- $b(i)$ = mittlere Distanz zu Punkten des nächstgelegenen anderen Clusters
- $s(i)$ liegt im Bereich $[-1, +1]$ — nahe +1 = gut passend, nahe 0 = Grenzfall, negativ = falsch zugeordnet

---
layout: default
---

## Silhouette-Koeffizient — Ein Beispiel

Ein Kunde im **Standard-Cluster**: mittlere Distanz zu seinen eigenen Cluster-Nachbarn $a(i) = 2{,}0$, mittlere Distanz zum nächstgelegenen anderen Cluster (Hochrisiko) $b(i) = 5{,}0$.

$$s(i) = \frac{5{,}0 - 2{,}0}{\max(2{,}0,\ 5{,}0)} = \frac{3{,}0}{5{,}0} = 0{,}6$$

**Interpretation:** 0,6 liegt deutlich näher an +1 als an 0 — der Kunde ist seinem eigenen Cluster viel näher als dem nächstgelegenen fremden. Gut passend.

Im Gegensatz zur visuellen Elbow-Methode liefert Silhouette eine **mathematische** Rangfolge aller K-Werte — präziser, aber weniger intuitiv. Beide Methoden können voneinander abweichen; Domänenwissen entscheidet dann.

<LiteraturSource :sources="[
  { title: 'Rousseeuw, P.J.: Silhouettes: A Graphical Aid to the Interpretation and Validation of Cluster Analysis', journal: 'Journal of Computational and Applied Mathematics', volume: '20', pages: '53-65', url: 'https://doi.org/10.1016/0377-0427(87)90125-7', year: '1987' },
]" />

---
layout: default
---

## Key Takeaways – Clusteranalyse & Segmentierung 🔑

- **Distanzmaße:** Euklidisch (Standard), Manhattan (schrittweise) und Cosinus (Winkel statt Betrag) — die richtige Wahl hängt vom Merkmalsraum ab
- **K-Means:** schnell und stabil, teilt Kunden in K runde Cluster
- **Hierarchisches Clustering:** das Dendrogramm macht Verschmelzungen nachvollziehbar, K muss nicht vorab feststehen
- **BIRCH:** komprimiert Datenpunkte in CF-Bäumen — speichereffizient auch bei Terabyte-Datenmengen
- **DBSCAN:** dichtebasiert, erkennt beliebige Cluster-Formen und markiert Ausreißer automatisch
- **K-Wahl:** Elbow-Methode (visuell) und Silhouette-Koeffizient (mathematisch) helfen, die passende Cluster-Anzahl zu finden

---
layout: chapter
---

::left::

# Kapitel 6: [Deep Learning]{style="color:var(--slidev-theme-primary)"}

Neuronale Netze für unstrukturierte Daten

::right::

<Illustration src="/illustrations/ai-brain-bro.svg" alt="Deep Learning mit Neuronalen Netzen" width="90%" />

---
layout: default
---

## Lernziele — Verstehen & Erklären

**Am Ende dieses Kapitels kannst du:**

🎯 **Verstehen & Erklären:**
- Machine Learning und Deep Learning voneinander unterscheiden (Architektur, Datenbedarf, Rechenaufwand, Interpretierbarkeit)
- Batch und Epoch definieren und im Trainingsprozess einordnen
- Aktivierungsfunktionen (Sigmoid, ReLU, Tanh, Softmax) unterscheiden und ihre Rolle erklären

📊 **Anwenden & Bewerten:**
- Ein einfaches neuronales Netz in PyTorch spezifizieren (Input/Hidden/Output-Schichten)
- Ein Deep-Learning-Modell auf einem Anwendungsbeispiel (MNIST-Ziffernerkennung) nachvollziehen

<LiteraturSource :sources="[
  { title: 'LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep Learning. Nature, 521(7553), 436–444', url: 'https://doi.org/10.1038/nature14539', year: '2015' },
]" />

---
layout: default
---

## Lernziele — Kritisch Reflektieren

**Am Ende dieses Kapitels kannst du auch:**

⚖️ **Kritisch Reflektieren:**
- Bewerten, wann ein Machine-Learning-Modell ausreicht und wann Deep Learning notwendig wird
- Trade-offs zwischen Datenbeschaffung, Rechenaufwand und Modellgenauigkeit reflektieren
- Grenzen der "Black Box" verstehen und Interpretierbarkeits-Strategien einordnen

Wie immer: nicht jedes Problem braucht neuronale Netze. Das Richtige Werkzeug für die richtige Frage — das ist Handwerk.

<LiteraturSource :sources="[
  { title: 'Lipton, Z. C. (2016). The Mythos of Model Interpretability. Communications of the ACM, 61(10), 36–43', url: 'https://doi.org/10.1145/3233231', year: '2016' },
]" />

---
layout: default
---

## Von Tabellendaten zu Bildern

Bislang haben wir mit **strukturierten Daten** gearbeitet: Zeilen × Spalten, jede Spalte eine Eigenschaft. Der Versicherer schätzte Schadenshöhen aus einer Handvoll Merkmale — **Fahreralter, Fahrzeugtyp, Unfallort, Schadenshäufigkeit**.

Aber jetzt kommt eine neue Aufgabe: Der Versicherer hat **100.000 Kfz-Unfallfotos** und möchte wissen:
- *Wie hoch ist der Schaden?*
- *Betrug oder echter Unfall?*
- *Welche Schadensart liegt vor (Totalschaden, Teilschaden, Kratzer)?*

**Das Problem:** Bei den Vertragsdaten kannten wir die relevanten Spalten. Aber welche "Spalte" beschreibt einen Blechschaden auf einem Foto? Niemand kann eine überschaubare Merkmalsliste aufschreiben, die einen Totalschaden von einem Kratzer unterscheidet — genau hier stoßen unsere bisherigen Methoden an eine Grenze.

> **Frage:** Brauchen wir ein Werkzeug, das sich die relevanten Merkmale selbst beibringt?

---
layout: header-cols
---

## Machine Learning vs. Deep Learning

Die vier Kernunterschiede — warum Tiefe einen Unterschied macht

::left::

### Machine Learning — klassisch

- **Merkmale von Hand definiert:** Ein Mensch entscheidet, welche Eigenschaften wichtig sind (z.B. Fahreralter, Schadenshistorie)
- **Flache Architektur:** 1–2 Verarbeitungsschritte (Input → Klassifikator)
- **Interpretierbar:** Du siehst, welche Merkmale wichtig waren (Feature Importance)
- **Genügsam:** Meist auf einer normalen CPU trainierbar

::right::

### Deep Learning — neuronale Netze

- **Merkmale selbst gelernt:** Das Netz findet relevante Muster in den Rohdaten selbst — ohne dass jemand sie vorher benennt
- **Tiefe Architektur:** Viele Schichten hintereinander (mehr dazu später in diesem Kapitel)
- **"Black Box":** Du siehst die Vorhersage, aber nicht exakt *wie* das Netz dorthin kommt
- **Rechenintensiv:** Meist GPU (Grafikkarte) statt CPU — 10–100× schneller

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

---
layout: default
---

## Datenmenge & Hardware — ein realistischer Vergleich

**Machine Learning** und **Deep Learning** fahren unterschiedliche Strategien:

| **Aspekt** | **Machine Learning** | **Deep Learning** |
|:---|:---|:---|
| **Mindestmenge gelabelter Daten** | 100–1.000 Instanzen (praktikabel) | 10.000–1.000.000+ (bildbasiert) |
| **Trainingszeit & Hardware** | Minuten bis Stunden, Standard-CPU reicht | Stunden bis Tage auf CPU — GPU nötig (10–100x schneller) |

<LiteraturSource :sources="[
  { title: 'Shi, S., Wang, Q., Xu, P., & Chu, X. (2016). Benchmarking State-of-the-Art Deep Learning Software Tools. arXiv preprint arXiv:1608.07249', year: '2016' },
]" />

---
layout: default
---

## Zwei Beispiele aus dem Versicherer-Portfolio

| **Aspekt** | **Machine Learning** | **Deep Learning** |
|:---|:---|:---|
| **Betrugserkennung (Tabelle)** | 500 Fälle, 20 Spalten → Random Forest → OK | Für diese Datenmenge nicht sinnvoll |
| **Schadensfotos (Bilder)** | Nur mit aufwändigem manuellem Feature-Engineering machbar | Erst ab ~100.000 gelabelten Fotos → CNN lernt Merkmale selbst |

**Die Realität:** Für Tabellendaten wie die Betrugserkennung reicht Random Forest schon bei wenigen hundert Fällen völlig aus. Bei Fotos sieht die Rechnung anders aus: Ohne Merkmale von Hand kommt ein Random Forest hier gar nicht erst zum Zug — und Deep Learning braucht selbst dann noch sehr viele Beispiele, um die Merkmale zuverlässig selbst zu lernen.

<LiteraturSource :sources="[
  { title: 'Halevy, A., Norvig, P., & Pereira, F. (2009). The Unreasonable Effectiveness of Data. IEEE Intelligent Systems, 24(2), 8–12', url: 'https://doi.org/10.1109/MIS.2009.36', year: '2009' },
]" />

---
layout: default
---

## Wann welches Verfahren?

Das Versicherer-Portfolio enthält mehrere **echte Szenarien** — jedes mit einer Antwort:

| **Szenario** | **Daten** | **Methode** | **Begründung** |
|:---|:---|:---|:---|
| Betrugserkennung aus Kundenhistorie | Tabelle, 10.000 Fälle | ML (Random Forest) | Wenig Daten, interpretierbar |
| Schadenshöhe aus Foto vorhersagen | Bilder, 100.000 Fotos | DL (CNN) | Viele Daten, räumliche Struktur |
| Kundensegmentierung (Risikoprofile) | Tabelle, 50.000 Kunden | ML (K-Means) | Explorativ, keine Labels |

<LiteraturSource :sources="[
  { title: 'Pérez-Zarate, S. Á. et al. (2024). Automated Car Damage Assessment Using Computer Vision: Insurance Company Use Case. Applied Sciences, 14(20), 9560', url: 'https://doi.org/10.3390/app14209560', year: '2024' },
]" />

---
layout: default
---

## Deep Learning auf verschiedenen Datentypen

Neuronale Netze sind kein Spezialwerkzeug nur für Bilder — dieselbe Grundlogik funktioniert auf jedem Datentyp:

| **Datentyp** | **Architektur** | **Anwendungsbeispiel** |
|:---|:---|:---|
| **Bilder** | Convolutional Neural Networks (CNN) | Kfz-Schadensfotos (Kapitel 7) |
| **Text / Sequenzen** | Transformer (Multi-Head Attention) | Schadenstexte, Sentiment-Analyse (Kapitel 8) |
| **Zeitreihen** | LSTM / Recurrent Neural Networks | Transaktionsmuster, Betrugserkennung in Echtzeit |

<LiteraturSource :sources="[
  { title: 'Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet Classification with Deep Convolutional Neural Networks. Advances in Neural Information Processing Systems (NIPS)', url: 'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks', year: '2012' },
  { title: 'Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention Is All You Need. Advances in Neural Information Processing Systems (NeurIPS)', url: 'https://arxiv.org/abs/1706.03762', year: '2017' },
  { title: 'Hochreiter, S., & Schmidhuber, J. (1997). Long Short-Term Memory. Neural Computation, 9(8), 1735–1780', url: 'https://doi.org/10.1162/neco.1997.9.8.1735', year: '1997' },
]" />

---
layout: header-cols
---

## Das künstliche Neuron — Schritt 1: Gewichtete Summe

Jetzt wissen wir, dass neuronale Netze auf viele Datentypen passen. Aber **wie funktionieren sie eigentlich?** Wir fangen beim Kleinsten an: einem einzelnen Neuron.

::left::

Ein künstliches Neuron bildet zuerst eine gewichtete Summe seiner Eingaben:

$$z = \sum_{i=1}^{m} w_i x_i + b$$

Dabei sind:
- $x_i$ die Eingaben (z.B. Fahreralter, Schadenshistorie, Fahrzeugtyp)
- $w_i$ die **Gewichte** (trainierbare Parameter)
- $b$ der **Bias** (Grundverschiebung)

<LiteraturSource :sources="[
  { title: 'Rosenblatt, F. (1958). The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain. Psychological Review, 65(6), 386–408', url: 'https://doi.org/10.1037/h0042519', year: '1958' },
]" />

::right::

<img :src="'/neuron-aufbau-diagramm.svg'" class="max-h-72 mx-auto" alt="Aufbau eines künstlichen Neurons: gewichtete Summe und Aktivierung" />

---
layout: default
---

## Das künstliche Neuron — Schritt 2: Aktivierung

Die gewichtete Summe $z$ allein reicht nicht — sie wird durch eine **Aktivierungsfunktion** $\sigma$ geschickt (rechte Hälfte des Diagramms von eben):

$$a = \sigma(z)$$

Diese bringt **Nichtlinearität** rein — ohne sie wäre jedes Netz, egal wie viele Schichten es hat, am Ende nur eine große lineare Gleichung.

Was genau diese Aktivierungsfunktion $\sigma$ macht, schauen wir uns als Nächstes an.

---
layout: header-cols
---

## Neuronen in Schichten organisieren — Input & Hidden

Ein einzelnes Neuron reicht nicht — neuronale Netze stapeln Neuronen in **Schichten**:

::left::

**Input-Schicht**
- Nimmt Rohdaten auf (z.B. 3 Features: Alter, Schadenshistorie, Fahrzeugtyp)
- Keine Berechnung, nur "Eingang"

**Hidden-Schicht(en)**
- Mehrere Neuronen kombinieren Input-Werte
- Jedes Neuron hat eigene Gewichte und Bias
- Gibt Zwischenrepräsentationen aus

::right::

<img :src="'/netzwerk-schichten-diagramm.svg'" class="max-h-72 mx-auto" alt="Neuronales Netz aus Input- und Hidden-Schicht" />

---
layout: header-cols
---

## Neuronen in Schichten organisieren — Output-Schicht

::left::

**Output-Schicht**
- Finale Vorhersage (z.B. 1 Wert: Betrugswahr­scheinlichkeit)
- Auch nur Neuronen mit Gewichten

Jeder Pfeil zwischen Schichten ist ein **Gewicht** — ein trainierbarer Parameter.

::right::

<img :src="'/netzwerk-schichten-diagramm.svg'" class="max-h-72 mx-auto" alt="Neuronales Netz mit hervorgehobener Output-Schicht" />

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Chapter 6: Deep Feedforward Networks', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

---
layout: header-cols
---

## Der Forward Pass — Datenfluss durch die Schichten

**Forward Pass** bedeutet: Die Eingaben fließen von der Input-Schicht zur Output-Schicht durch. Bei jeder Schicht passiert das Gleiche:

::left::

1. Gewichtete Summe aller Eingaben berechnen: $z = Wx + b$
2. Aktivierungsfunktion anwenden: $a = \sigma(z)$
3. Diese Ausgabe $a$ wird zur Eingabe der nächsten Schicht

**Konkret:** Input [25, 3, 1] (Fahreralter, Schadenshistorie, Fahrzeugtyp) fließt durch die Hidden-Schicht und ergibt am Output $\sigma(0.68) = 0.66$ — eine Betrugswahrscheinlichkeit von 66%.

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Chapter 6: Deep Feedforward Networks', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

::right::

<img :src="'/forward-pass-diagramm.svg'" class="max-h-80 mx-auto" alt="Forward Pass: Datenfluss vom Input zur Vorhersage" />

---
layout: default
---

## Aktivierungsfunktionen — Nichtlinearität für komplexe Muster

**Das zentrale Problem:** Wenn jedes Neuron nur $z = Wx + b$ rechnet und diese Ergebnisse direkt weitergibt, dann ist jede Folge von Schichten mathematisch wieder nur **eine einzige große lineare Funktion**. Das ist viel zu schwach für reale Daten.

**Die Lösung:** **Aktivierungsfunktionen** bringen Nichtlinearität rein — sie "knicken" oder "quetschen" die gewichtete Summe, damit das Netz komplexe Muster lernen kann.

**Analog zu einem Lichtschalter:** Die gewichtete Summe $z$ kommt rein, die Aktivierungsfunktion ist der "Schalter", der entscheidet wie stark das Neuron "feuert". Je größer $z$, desto stärker die Aktivierung $\sigma(z)$.

Ohne diese Nichtlinearität könnten neuronale Netze auch bei Hunderten von Schichten keine besseren Vorhersagen treffen als ein einziger linearer Klassifikator.

<LiteraturSource :sources="[
  { title: 'Cybenko, G. (1989). Approximation by Superpositions of a Sigmoidal Function. Mathematics of Control, Signals, and Systems, 2(4), 303–314', url: 'https://doi.org/10.1007/BF02551274', year: '1989' },
]" />

---
layout: header-cols
---

## Sigmoid — historischer Standard für Wahrscheinlichkeiten

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

::left::

**Eigenschaften:**
- Bereich (0, 1) — direkt als Wahrscheinlichkeit lesbar
- Ideal für **binäre Klassifikation** (Betrug: Ja/Nein)

**Nachteil:** Bei extremen Werten ≈ 0 — der Gradient verschwindet in tiefen Netzen (**Vanishing Gradient**).

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Chapter 6: Deep Feedforward Networks', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

::right::

<img :src="'/sigmoid-kurve-diagramm.svg'" alt="Sigmoid-Kurve mit flachen Sättigungszonen" class="w-full max-h-[300px] object-contain" />

---
layout: header-cols
---

## ReLU — moderner Standard für Hidden Layers

$$\text{ReLU}(z) = \max(0, z)$$

::left::

**Eigenschaften:**
- Stupide einfach: "Ist die gewichtete Summe positiv? Gib sie durch. Sonst gib 0."
- **Standard in Hidden Layers** — fast alle modernen Netze verwenden ReLU

**Kleine Schwäche — "Dead Neurons":** Für z < 0 ist die Ableitung 0 — so ein Neuron lernt nie wieder. Leaky ReLU lässt einen winzigen negativen Durchsatz zu.

<LiteraturSource :sources="[
  { title: 'Nair, V., & Hinton, G. E. (2010). Rectified Linear Units Improve Restricted Boltzmann Machines. In ICML', year: '2010' },
]" />

::right::

<img :src="'/relu-kurve-diagramm.svg'" alt="ReLU-Kurve mit Dead-Neuron-Zone für negative z" class="w-full max-h-[300px] object-contain" />

---
layout: header-cols
---

## Tanh — zentrierte Alternative zu Sigmoid

$$\tanh(z) = \frac{e^{z} - e^{-z}}{e^{z} + e^{-z}}$$

::left::

**Eigenschaften:**
- Wie Sigmoid, aber Ausgaben sind in (-1, 1) zentriert statt (0, 1)
- Kann negative Werte darstellen, ebenfalls anfällig für Vanishing Gradients

**Wo genutzt:** Seltener als ReLU — manchmal noch in Rekurrenten Netzen (LSTM, GRU).

::right::

<img :src="'/tanh-kurve-diagramm.svg'" alt="Tanh-Kurve im Vergleich zur Sigmoid-Kurve" class="w-full max-h-[300px] object-contain" />

---
layout: header-cols
---

## Softmax — Wahrscheinlichkeitsverteilung für Multiklassen

Sigmoid war für 2 Klassen. Für **Klassifikation mit mehr als 2 Klassen** nutzt man **Softmax**:

$$\text{softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}$$

::left::

Softmax nimmt die Raw-Ausgaben des Netzes und wandelt sie in eine **Wahrscheinlichkeitsverteilung** um — alle Werte zwischen 0 und 1, summieren sich zu 1. Genutzt in der Output-Schicht bei **Mehrklassen-Klassifikation** (z.B. MNIST: 10 Klassen für die Ziffern 0–9).

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Chapter 6: Deep Feedforward Networks', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

::right::

<img :src="'/softmax-balken-diagramm.svg'" alt="Raw Output vs. Softmax-Wahrscheinlichkeiten für 10 MNIST-Klassen" class="w-full max-h-[340px] object-contain" />

---
layout: default
---

## Zusammenfassung: Aktivierungsfunktionen

| Funktion | Typischer Einsatz | Vorteil | Nachteil |
|:---|:---|:---|:---|
| **Sigmoid** | Output (binär) | Wahrscheinlichkeitsinterpretation | Vanishing Gradients |
| **ReLU** | Hidden Layers (STANDARD) | Effizient, löst Vanishing Gradients | Dead Neurons möglich |
| **Tanh** | Spezielle Netze (RNN) | Zentriert um 0 | Vanishing Gradients |
| **Softmax** | Output (Multiklassen) | Echte Wahrscheinlichkeitsverteilung | Nur für Output |

**Das Wichtigste:** Nichtlinearität + viele Schichten = **Universal Approximation** — das Netz *kann* beliebig komplexe Muster darstellen (nicht: lernt automatisch die richtigen). Aber wie trainiert es die Gewichte dorthin?

<LiteraturSource :sources="[
  { title: 'Cybenko, G. (1989). Approximation by Superpositions of a Sigmoidal Function. Mathematics of Control, Signals, and Systems, 2(4), 303–314', url: 'https://doi.org/10.1007/BF02551274', year: '1989' },
]" />

---
layout: header-cols
---

## Wie lernt das Netz? — Die Trainingsmechanik

Wir wissen jetzt, **wie** ein Netz rechnet (Forward Pass durch Schichten, Aktivierungsfunktionen für Nichtlinearität). Aber **wie passt sich das Netz während des Trainings an?**

::left::

Das Netz macht Vorhersagen, vergleicht sie mit der Realität, und justiert dann seine Gewichte nach. Dieser Prozess braucht:
1. Ein **Fehlermaß** (Loss-Funktion)
2. Eine **Anleitung zur Gewichtsanpassung** (Gradient Descent + Backpropagation)

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Chapter 8: Optimization for Training Deep Models', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

::right::

<img :src="'/loss-kurve-diagramm.svg'" alt="Loss-Kurve: Der Fehler startet hoch bei zufälligen Gewichten und sinkt im Training exponentiell gegen null" style="max-height: 300px; margin: 0 auto; display: block;" />

---
layout: default
---

## Loss-Funktion — Mean Squared Error (MSE)

Eine **Loss-Funktion** $L(y, \hat{y})$ misst, wie falsch die Vorhersage $\hat{y}$ des Netzes ist. Je kleiner der Loss, desto besser.

**Mean Squared Error (MSE) — für Regression:**
$$L_{\text{MSE}} = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$$

Beispiel: Das Netz sagt "Schaden 50.000 €", Realität ist "45.000 €" → $(45.000 - 50.000)^2 = 25.000.000$ (große Fehler werden bestraft).

---
layout: default
---

## Loss-Funktion — Cross-Entropy für Klassifikation

**Cross-Entropy — für Klassifikation:**
$$L_{\text{CE}} = -\sum_{i=1}^{K} y_i \log(\hat{y}_i)$$

Beispiel: Das Netz sagt "70% Betrug", ist aber wirklich "Betrug" (y=1). Loss = $-1 \cdot \log(0.7) \approx 0.36$ (niedrig). Sagt es aber "5% Betrug", Loss = $-1 \cdot \log(0.05) \approx 3.0$ (sehr hoch).

**Das Wichtigste:** Loss-Funktionen müssen **differenzierbar** sein — dann können wir ihre Ableitung für Gradient Descent nutzen.

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Chapter 8: Optimization for Training Deep Models', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

---
layout: header-cols
---

## Gradient Descent — Der Wanderer im Nebel

**Gradient Descent** ist ein iterativer Optimierungsalgorithmus, der die Gewichte Schritt für Schritt in Richtung des **minimalen Loss** justiert.

::left::

**Metapher:** Du bist ein Wanderer im nebligen Gebirge. Du spürst das **Gefälle** unter Deinen Füßen und machst Schritte **bergab** (rechts im Diagramm zu sehen) — bis Du ein Tal erreichst (Minimum).

**Mathematisch:** $w := w - \alpha \cdot \frac{\partial L}{\partial w}$

- $\frac{\partial L}{\partial w}$ ist der Gradient (wie steil geht's bergab?)
- $\alpha$ ist die **Lernrate** (zu groß → überschießen; zu klein → sehr langsam)

<LiteraturSource :sources="[
  { title: 'Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning Representations by Back-propagating Errors. Nature, 323(6088), 533–536', url: 'https://doi.org/10.1038/323533a0', year: '1986' },
]" />

::right::

<img :src="'/gradient-descent-diagramm.svg'" alt="Gradient Descent: schrittweiser Abstieg auf einer schüsselförmigen Loss-Kurve bis zum minimalen Loss, mit Tangente als Gradient" style="max-height: 300px; margin: 0 auto; display: block;" />

---
layout: default
---

## Die Lernrate — Wie groß sollten die Schritte sein?

<img :src="'/lernrate-vergleich-diagramm.svg'" alt="Drei Lernraten-Szenarien: zu klein (sehr langsame Konvergenz), passend (stabile Konvergenz), zu groß (überschießt, kann divergieren)" style="max-height: 280px; margin: 0 auto; display: block;" />

**Wie ermittelt man sie?** Die Lernrate ist ein **Hyperparameter** — Du legst sie vor dem Training fest und probierst typische Startwerte (z.B. 0,01 oder 0,001). In der Praxis übernehmen moderne Optimizer wie **Adam** einen Großteil dieser Arbeit: Sie passen die effektive Schrittweite während des Trainings automatisch pro Gewicht an.

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Chapter 8: Optimization for Training Deep Models', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

---
layout: default
---

## Backpropagation — Fehler rückwärts

**Backpropagation** ist die effiziente Methode, die Gradienten für **alle** Gewichte im Netz zu berechnen — "Wie viel trägt jedes Gewicht zum Loss bei?" Der Loss ist dabei der **Wendepunkt**: Bis dahin fließt die Vorhersage vorwärts, ab dort fließt der Fehler rückwärts.

<img :src="'/backprop-fluss-diagramm.svg'" alt="Backpropagation: Forward Pass von Input über Hidden-Schicht zum Output und Loss, Backward Pass mit Gradienten zurück durch die Schichten" style="max-height: 260px; margin: 0.5rem auto 0; display: block;" />

<LiteraturSource :sources="[
  { title: 'Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning Representations by Back-propagating Errors. Nature, 323(6088), 533–536', url: 'https://doi.org/10.1038/323533a0', year: '1986' },
]" />

---
layout: default
---

## Backpropagation — Der Ablauf

Ein Trainingsschritt läuft in drei Etappen ab:

1. **Forward Pass:** Vorhersage berechnen
2. **Loss & Backward Pass:** Fehler berechnen, Gradienten rückwärts propagieren
3. **Gradient Descent:** Alle Gewichte anpassen

**Aber wie genau** berechnet Backprop den Gradienten für ein Gewicht, das mitten im Netz liegt und den Loss nur indirekt beeinflusst? Das ist der Job der **Kettenregel**.

---
layout: default
---

## Was wird eigentlich berechnet?

Für **jedes einzelne Gewicht** $w$ im Netz braucht Gradient Descent dieselbe Zahl: $\frac{\partial L}{\partial w}$ — "Wie stark ändert sich der Loss, wenn ich $w$ ein kleines bisschen ändere?"

**Das Problem:** Ein Gewicht in einer frühen Schicht berührt den Loss nicht direkt. Seine Wirkung läuft über eine ganze Kette: Das Gewicht verändert die gewichtete Summe $z$, die verändert die Aktivierung $a$, die verändert (über weitere Schichten) die Vorhersage $\hat{y}$, die verändert den Loss $L$.

**Die Frage dahinter:** Wie rechnet man den Gesamteffekt einer Änderung ganz am Anfang der Kette auf das Ergebnis ganz am Ende aus? Genau das leistet die Kettenregel.

<LiteraturSource :sources="[
  { title: 'Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning Representations by Back-propagating Errors. Nature, 323(6088), 533–536', url: 'https://doi.org/10.1038/323533a0', year: '1986' },
]" />

---
layout: default
---

## Die Kettenregel — Effekte multiplizieren

Die **Kettenregel** (Chain Rule) besagt: Der Gesamteffekt einer Kette von Abhängigkeiten ist das **Produkt** der Einzeleffekte jedes Schritts.

<img :src="'/kettenregel-diagramm.svg'" alt="Kettenregel: der Gesamteffekt von Gewicht w auf den Loss ist das Produkt der lokalen Ableitungen entlang der Kette w → z → a → L" style="max-height: 210px; margin: 0.5rem auto 0; display: block;" />

**Rechenbeispiel (angenommene Werte, nur zur Veranschaulichung der Multiplikation):** Angenommen, die drei lokalen Effekte wären $\frac{\partial L}{\partial a} = 0.4$, $\frac{\partial a}{\partial z} = 0.2$, $\frac{\partial z}{\partial w} = 3$ — dann multiplizierst Du sie einfach: $\frac{\partial L}{\partial w} = 0.4 \cdot 0.2 \cdot 3 = 0.24$. Kein Schritt der Kette muss dabei wissen, was in den anderen Schritten passiert — jeder liefert nur seinen eigenen lokalen Faktor.

---
layout: default
---

## Woher kommt das erste Glied der Kette?

Im Rechenbeispiel eben war $\frac{\partial L}{\partial a} = 0.4$ einfach gegeben. Aber woher kommt diese Zahl in Wirklichkeit?

$\frac{\partial L}{\partial a}$ ist genau die **Ableitung der Loss-Funktion** — dieselbe MSE- oder Cross-Entropy-Funktion, die schon differenzierbar sein musste, damit wir überhaupt mit ihr rechnen können. Sie ist der Startpunkt jeder Kettenregel-Rechnung: Ohne eine differenzierbare Loss-Funktion gäbe es kein erstes Glied — und die ganze Kette könnte gar nicht erst losrechnen.

---
layout: header-cols
---

## Welche Gewichte werden angepasst? Wie oft?

::left::

**Welche:** Bisher war immer von *einem* Gewicht $w$ die Rede. In Wirklichkeit läuft dieselbe Kettenregel-Rechnung für **jedes einzelne Gewicht und jeden Bias im Netz** — alle 20 Gewichte + 6 Bias-Werte = 26 Parameter, jeder mit seiner eigenen Zahl $\frac{\partial L}{\partial w_i}$.

**Was herauskommt:** 26 einzelne Gradienten — eine Liste von "wie stark und in welche Richtung", nicht nur ein Wert.

**Wie oft:** Bei **jedem Trainingsschritt neu**, alle 26 in **einem Rückwärtsdurchlauf** (deshalb "effizient"). Nach dem Update ändern sich die Gewichte — beim nächsten Schritt beginnt alles mit neuen Zahlen von vorn.

::right::

<img :src="'/netzwerk-gewichte-update-diagramm.svg'" alt="Netzwerk-Diagramm mit allen 20 Gewichten (Linien) und 6 Bias-Werten (Neuronen) orange hervorgehoben als Update-Ziele" style="max-height: 320px; margin: 0 auto; display: block;" />

---
layout: header-cols
---

## Ein vollständiger Trainingsschritt zusammengefasst

::left::

**Schritt 1 — Forward Pass:** Vorhersage $\hat{y} = \text{netz}(x)$

**Schritt 2 — Loss berechnen:** $L = \text{loss}(\hat{y}, y)$

**Schritt 3 — Backward Pass:** Gradient $\frac{\partial L}{\partial w}$ für jedes Gewicht

**Schritt 4 — Gradient Descent:** $w := w - \alpha \cdot \frac{\partial L}{\partial w}$

**Schritt 5 — Wiederhole:** Zurück zu Schritt 1 mit den neuen Gewichten. Nach vielen Iterationen sinkt der Loss.

<LiteraturSource :sources="[
  { title: 'LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep Learning. Nature, 521(7553), 436–444', url: 'https://doi.org/10.1038/nature14539', year: '2015' },
]" />

::right::

<img :src="'/backprop-zyklus-diagramm.svg'" class="max-h-96 mx-auto" alt="Trainingszyklus: Forward Pass, Loss, Backward Pass, Gewichtsupdate" />

---
layout: default
---

## Eine Epoch: Ein vollständiger Durchlauf

Du kennst jetzt den kompletten Lernschritt (Forward Pass → Loss → Backward Pass → Gewichtsupdate). Aber ein einzelner Schritt bringt wenig — das Netz muss die Trainingsdaten oft sehen.

**Definition:** Eine **Epoch** ist ein vollständiger Durchlauf durch den GESAMTEN Trainingsdatensatz — alle 100.000 Fotos werden einmal durchprozessiert, mit vielen Lernschritten dazwischen.

**Mehrere Epochs:** Nach der ersten Epoch sind die Gewichte schon anders — die zweite Epoch trainiert auf höherem Niveau, nicht von vorn. Aber **Vorsicht:** Zu viele Epochs führen zum Overfitting (Kapitel 4). Du erkennst das an der **Validation-Performance**: der Genauigkeit auf neuen, nie trainierten Fotos. Stagniert sie, während die Trainings-Genauigkeit weiter steigt, ist das dein Stopp-Signal.

**Nächste Frage:** Wie verarbeitest Du 100.000 Fotos praktisch in einer Epoch, wenn Dein GPU-Speicher das nicht auf einmal zulässt?

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press, Chapter 8: Optimization for Training Deep Models', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

---
layout: default
---

## Ein Batch: Die kleine Portion

Statt alle 100.000 Fotos einer Epoch auf einmal zu laden, teilst Du sie in kleine Gruppen auf — typischerweise 32, 64 oder 128 Bilder pro Gruppe. So eine Gruppe heißt ein **Batch**.

**Warum Batches?**
- Dein GPU-Speicher ist begrenzt — vielleicht 8–16 GB. Ein Batch à 64 Bildern passt problemlos rein.
- Nach jedem Batch werden die Netzgewichte angepasst (mit den Gradienten aus diesem Batch berechnet).
- Die Gradienten mehrerer Bilder werden gemittelt, bevor sie die Gewichte ändern — das führt zu stabileren Lernschritten.

**Beispiel:** Bei 100.000 Trainingsfotos und Batch-Größe 64 braucht eine Epoch $\frac{100.000}{64} \approx 1.563$ Batches, um einmal komplett durchzulaufen.

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press, Chapter 8: Optimization for Training Deep Models', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

---
layout: default
---

## Training in Code: Das Muster

In PyTorch sieht die Training-Schleife so aus. Du erkennst einige Konzepte von eben wieder:

- **DataLoader:** liefert automatisch einen Batch nach dem anderen
- **Forward Pass:** Netz macht eine Vorhersage für den Batch
- **Loss berechnen:** Fehler zwischen Vorhersage und echtem Label
- **Backward Pass:** Backpropagation berechnet Gradienten für alle Gewichte
- **optimizer.step():** Gradient Descent passt die Gewichte an

```python
for epoch in range(num_epochs):              # Äußere Schleife: Epochs
    for batch_images, batch_labels in DataLoader:  # Innere Schleife: Batches
        output = model(batch_images)         # Forward Pass
        loss = criterion(output, batch_labels)     # Loss berechnen
        optimizer.zero_grad()                # Gradienten zurücksetzen
        loss.backward()                      # Backward Pass (Gradienten berechnen)
        optimizer.step()                     # Gewichte anpassen
```

<LiteraturSource :sources="[
  { title: 'PyTorch Official Documentation: torch.utils.data.DataLoader', url: 'https://pytorch.org/docs/stable/data.html', year: '2024' },
]" />

---
layout: default
---

## Zusammenfassung: Batch & Epoch

| Konzept | Bedeutung | Beispiel |
|---|---|---|
| **Epoch** | Ein kompletter Durchlauf durch alle Batches (alle 100.000 Fotos) | Alle 1.563 Batches hintereinander |
| **Batch** | Eine kleine Teilmenge von Trainingsfotos (z.B. 64 Bilder) | Fotos 0–63, dann 64–127, dann 128–191, ... |
| **Steps pro Epoch** | Anzahl der Batch-Updates pro Epoch | 100.000 ÷ 64 ≈ 1.563 Steps |

**Das Wichtigste:** Batches sind die praktische Lösung für Speicherbeschränkungen. Sie ermöglichen es uns, Gradient Descent auf Millionen von Fotos anzuwenden. Der Trainingsloop schleift dabei: Batch laden → Forward Pass → Loss berechnen → Backward Pass (Gradienten) → Gewichte anpassen → nächster Batch. Nach genug Epochs sollte das Netz bessere Vorhersagen treffen.

<LiteraturSource :sources="[
  { title: 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press, Chapter 8: Optimization for Training Deep Models', url: 'https://www.deeplearningbook.org', year: '2016' },
]" />

---
layout: header-cols
---

## <img :src="'/logos/pytorch.svg'" class="inline-block h-9 align-middle mr-2" /> PyTorch — Das Werkzeug für neuronale Netze

::left::

**Was ist PyTorch?**

PyTorch ist eine Open-Source-Bibliothek für Machine Learning und Deep Learning — sie ermöglicht, neuronale Netze als Python-Code zu definieren und zu trainieren.

**Warum PyTorch?**

1. **Imperativ & intuitiv:** Code sieht aus wie normales Python
2. **GPU-ready:** Automatische Nutzung von Grafikkarten für schnelleres Training
3. **Standard:** Meistgenutzte Bibliothek in der Deep-Learning-Forschung

::right::

> ℹ️ **Herkunft:** 2016 von Meta (Facebook AI Research) entwickelt. Seit 2022 liegt die Weiterentwicklung bei der unabhängigen **PyTorch Foundation** (Linux Foundation) — nicht mehr bei Meta allein.

**Was kommt jetzt?**

1. **Heute:** MLP für Versicherer-Tabellendaten (3 Features → Schadenshöhe/Betrug)
2. **Nächstes Kapitel:** CNN für Kfz-Schadensfotos (Bilderkennung)
3. **Später:** Transformer für Schadenstexte (Textverarbeitung)

<LiteraturSource :sources="[
  { title: 'Paszke, A., et al. (2019). PyTorch: An Imperative Style, High-Performance Deep Learning Library. NeurIPS 2019', url: 'https://arxiv.org/abs/1912.01703', year: '2019' },
]" />

---
layout: default
---

## Das Rezept: 3 Bausteine für ein neuronales Netz

Um ein neuronales Netz in PyTorch zu trainieren, brauchst du genau drei Komponenten — hier die Übersicht, die wir gleich im Detail durchgehen:

1. **Modell definieren:** Eine Klasse mit Layern in `__init__` und den Verbindungen in `forward()`
2. **Loss + Optimizer:** Eine Fehlermetrik (MSE oder CrossEntropyLoss) und eine Update-Strategie (Adam oder SGD)
3. **Trainieren:** Der Loop aus den Batches — Forward Pass → Loss → Backward Pass → Gewichte anpassen

Der Rest ist die gleiche Struktur, die du schon kennst. Schauen wir, wie das konkret aussieht.

---
layout: header-cols
---

## nn.Module — Die Klasse für neuronale Netze

Ein neuronales Netz ist in PyTorch eine **Klasse** — sie erbt von `nn.Module` (`nn` = **n**eural **n**etwork) und definiert zwei Dinge: welche Layer es hat (`__init__`) und wie die Daten durchfließen (`forward`).

::left::

```python
import torch.nn as nn

class MLP(nn.Module):
    def __init__(self, n_in, n_hidden, n_out):
        super(MLP, self).__init__()
        self.fc1 = nn.Linear(n_in, n_hidden)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(n_hidden, n_out)
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x
```

<LiteraturSource :sources="[
  { title: 'PyTorch Documentation: torch.nn.Module', url: 'https://pytorch.org/docs/stable/generated/torch.nn.Module.html', year: '2024' },
  { title: 'PyTorch Documentation: torch.nn.Linear', url: 'https://pytorch.org/docs/stable/generated/torch.nn.Linear.html', year: '2024' },
]" />

::right::

**Kurz zu Python:**
- `class MLP(nn.Module):` — erbt von `nn.Module`
- `super().__init__()` — PyTorchs eigene Initialisierung zuerst
- `self.fc1 = ...` — `self` ist dieses eine Netz-Objekt

**Wichtig:** `__init__` = Architektur, `forward()` = Berechnung.

---
layout: header-cols
---

## Konkret: Unser Versicherer-MLP

::left::

```python
class VersichererMLP(nn.Module):
    def __init__(self):
        super(VersichererMLP, self).__init__()
        self.fc1 = nn.Linear(3, 5)   # 3→5
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(5, 1)   # 5→1
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

model = VersichererMLP()
```

::right::

**Die drei Layer:**

1. **Input → Hidden:** 3 Merkmale → 5 Neuronen
2. **Aktivierung:** ReLU zwischen den Schichten
3. **Hidden → Output:** 5 Neuronen → 1 Vorhersage

`nn.Linear` speichert intern genau die Gewichte $w$ und den Bias $b$ aus der Neuron-Formel von eben — PyTorch initialisiert sie automatisch.

---
layout: default
---

## Loss-Funktion wählen

Um ein Netz zu trainieren, brauchst du eine **Loss-Funktion** — sie misst, wie weit die Vorhersage vom echten Wert entfernt ist.

```python
# Regression (Schadenshöhe vorhersagen):
criterion = nn.MSELoss()

# Klassifikation (Betrug: Ja/Nein):
criterion = nn.CrossEntropyLoss()
```

**MSE (Mean Squared Error):** Für kontinuierliche Ziele (z.B. Schadenshöhe in EUR). Vergleicht Differenzen zwischen Vorhersage und echtem Wert.

**CrossEntropyLoss:** Für Klassifikation (Ja/Nein, Ziffern 0–9). Vergleicht zwei Wahrscheinlichkeitsverteilungen.

<LiteraturSource :sources="[
  { title: 'PyTorch Documentation: torch.nn.MSELoss', url: 'https://pytorch.org/docs/stable/generated/torch.nn.MSELoss.html', year: '2024' },
  { title: 'PyTorch Documentation: torch.nn.CrossEntropyLoss', url: 'https://pytorch.org/docs/stable/generated/torch.nn.CrossEntropyLoss.html', year: '2024' },
]" />

---
layout: default
---

## Optimizer wählen

Der **Optimizer** passt die Gewichte an, basierend auf den Gradienten aus der Backpropagation. `model.parameters()` sind dabei genau die Gewichte und Bias-Werte des Netzes — dieselben, für die `optimizer.step()` das Update $w := w - \alpha \cdot \partial L/\partial w$ von eben ausführt. Zwei Optionen:

```python
# Adam: moderne Wahl (adaptive Lernrate)
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# SGD: klassischer Gradient Descent
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
```

**Praktische Regel:** Adam ist oft die sicherere Wahl — du musst die Lernrate weniger genau tunen. Für unser Versicherer-Beispiel: **Adam mit lr=0.001**.

<LiteraturSource :sources="[
  { title: 'PyTorch Documentation: torch.optim.Adam', url: 'https://pytorch.org/docs/stable/generated/torch.optim.Adam.html', year: '2024' },
]" />

---
layout: default
---

## End-to-End (1/2): Modell & Setup

Hier siehst Du Modell-Definition, Instanziierung, Loss und Optimizer an einem Stück — alle Bausteine von eben zusammengesetzt:

```python
import torch.nn as nn
import torch.optim as optim

class VersichererMLP(nn.Module):
    def __init__(self):
        super(VersichererMLP, self).__init__()
        self.fc1 = nn.Linear(3, 5)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(5, 1)
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        return self.fc2(x)

model = VersichererMLP()
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)
```

---
layout: default
---

## End-to-End (2/2): Der Trainingsloop

Jetzt fehlt nur noch der Trainingsloop — genau das Muster, das Du von eben schon kennst:

```python
for epoch in range(num_epochs):
    for batch_x, batch_y in DataLoader:
        output = model(batch_x)
        loss = criterion(output, batch_y)
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
```

**Mehr gibt es nicht.** Netz definieren, instanziieren, Loss/Optimizer wählen, trainieren. Das ist das ganze Rezept — und Du kennst jeden Baustein schon.

---
layout: default
---

## Was du jetzt kannst

Nach diesem Kapitel kannst du:

**Verstehen & Erklären:**
- Wie neuronale Netze funktionieren (Neuronen, Gewichte, Forward Pass, Aktivierungsfunktionen)
- Wie sie trainiert werden (Loss, Gradient Descent, Backpropagation)

**Praktisch Umsetzen:**
- Ein neuronales Netz in PyTorch spezifizieren (nn.Module, `__init__`, `forward`)
- Loss-Funktion und Optimizer wählen (MSELoss, CrossEntropyLoss, Adam)
- Die Netz-Architektur auf einen eigenen Datensatz anpassen (z.B. von Kaggle) — Anzahl der Input-Features und Loss-Funktion ändern, der Rest bleibt gleich

*(Datenaufbereitung — Laden, Normalisieren, Train/Test-Split — ist ein eigenes Handwerk und nicht Teil dieses Kapitels.)*

---
layout: default
---

## Key Takeaways – Deep Learning 🔑

- **Deep Learning vs. Machine Learning:** bei unstrukturierten Daten (Bilder, Text) übernehmen tiefe Netze das Feature-Engineering selbst — mit entsprechend höherem Daten- und Rechenbedarf
- **Das Neuron & Schichten:** gewichtete Summe + Bias + Aktivierungsfunktion, organisiert in Input-, Hidden- und Output-Schichten
- **Aktivierungsfunktionen:** ReLU, Sigmoid, Tanh und Softmax bringen die Nichtlinearität, ohne die komplexe Muster nicht lernbar wären
- **Training — Loss & Backpropagation:** der Loss misst den Fehler, die Kettenregel propagiert ihn rückwärts zu Gradienten für jedes Gewicht
- **Batch & Epoch:** Daten werden in Batches verarbeitet, ein vollständiger Durchlauf durch alle Batches ist eine Epoche
- **PyTorch:** `nn.Module`, `__init__` und `forward()` übersetzen die Mathematik in trainierbaren Python-Code

---
layout: default
---

# Literaturverzeichnis (1/3)

<Literaturverzeichnis :part="1" :parts="3" />

<!--
Automatisch aggregiert aus allen <LiteraturSource>-Komponenten des Decks (dedupliziert, alphabetisch),
auf 3 Folien aufgeteilt (Komponente unterstützt :part/:parts) — erhöht bei Bedarf einfach `parts`,
wenn weitere Kapitel weitere Quellen hinzufügen und 3 Folien nicht mehr reichen.
-->

---
layout: default
---

# Literaturverzeichnis (2/3)

<Literaturverzeichnis :part="2" :parts="3" />

<!--
Automatisch aggregiert aus allen <LiteraturSource>-Komponenten des Decks (dedupliziert, alphabetisch),
auf 3 Folien aufgeteilt (Komponente unterstützt :part/:parts).
-->

---
layout: default
---

# Literaturverzeichnis (3/3)

<Literaturverzeichnis :part="3" :parts="3" />

<!--
Automatisch aggregiert aus allen <LiteraturSource>-Komponenten des Decks (dedupliziert, alphabetisch).
-->

