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

# Session 1: [Statistik]{style="color:var(--slidev-theme-primary)"} als Fundament

::right::

<Illustration src="/illustrations/business-analytics-bro.svg" alt="Business Intelligence & Data Science" width="90%" />

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

*Jede Session fügt eine Werkzeugschicht hinzu — weil die vorherige an ihre Grenzen stößt.*

Welche Methode löst welche Frage — und in welcher Session? Die Übersicht zeigt Dir den Plan auf einen Blick.

<LiteraturSource :sources="[
  { title: 'Chan, Hogaboam & Cao: Applied Artificial Intelligence in Business. Springer.', url: 'https://doi.org/10.1007/978-3-031-05740-3', year: '2022' },
  { title: 'Vo et al.: Next Generation Business Intelligence and Analytics: A Survey. arXiv.', url: 'https://doi.org/10.48550/arXiv.1704.03402', year: '2017' },
]" />

---
layout: default
---

## Was Dich in diesem Kurs erwartet

*Jede Frage erfordert eine neue Methode — und jede Methode baut auf der vorherigen auf.*

| Geschäftsfrage | Methode | Session |
|---|---|---|
| Schadenhöhe schätzen | Regression (Statistik) | S1 |
| Betrug erkennen? | Klassifikation (ML) | S2 |
| Kundengruppen finden | Clustering | S3 |
| Schadenfoto auswerten | Deep Learning / CV | S4 |
| Meldungstext lesen | NLP | S5 |
| Prognose & Strategie | Vertiefung / Kombination | S6–8 |

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

## Die deskriptive Werkzeugkiste ist komplett

**Drei Fragen — drei Werkzeuge:**

- 📍 **Lagemaße** *(Modus, Median, Mittelwert)* — Was ist der typische Wert?
- 📏 **Streuungsmaße** *(Varianz $s^2$, Standardabweichung $s$)* — Wie verlässlich ist diese Typik?
- 🔗 **Korrelation** *(Pearson $r$)* — Hängen zwei Größen zusammen?

**→ Zusammen ermöglichen diese drei Werkzeuge einen ersten explorativen Datenbericht.**

**Brücke nach vorn — Korrelation ist die Vorstufe der Regression:**

> Ein starkes $r$ zwischen Fahreralter und Schadenhäufigkeit deutet auf eine Beziehung hin — aber $r$ sagt nur *"da ist etwas"*. Die **lineare Regression** quantifiziert diesen Zusammenhang: Wie viel ändert sich die Schadenhäufigkeit je Lebensjahr? Das ist unser nächstes Werkzeug.

<LiteraturSource :sources="[
  { title: 'Völkl & Korb: Deskriptive Statistik, Kap. 4 – Bivariate Analysen', url: 'https://doi.org/10.1007/978-3-658-10675-1_4', year: '2017' },
]" />

---
layout: header-cols
---

## Left column

::left::

- Point one
- Point two
- Point three

::right::

<Illustration src="/illustrations/teaching-bro.svg" alt="Teaching" width="90%" />

---
layout: header-cols
---

# Heading spanning the top

::left::

## Left

- Point one
- Point two

::right::

## Right

- Point three
- Point four

---
layout: section
---

# Section divider

---
layout: fact
---

# 42

The answer to everything

---
layout: statement
---

# A bold statement goes here

---
layout: center
class: text-center
---

# Thank You

Questions?

---
layout: default
---

# Literaturverzeichnis

<Literaturverzeichnis />

<!--
Automatisch aggregiert aus allen <LiteraturSource>-Komponenten des Decks (dedupliziert, alphabetisch).
-->

