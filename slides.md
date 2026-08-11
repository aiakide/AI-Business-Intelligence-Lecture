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

Die Lösung: Division durch $s_X \cdot s_Y$ hebt die Einheiten auf — das ergibt den einheitenlosen Pearson-Korrelationskoeffizienten $r$ (zwischen $-1$ und $+1$).

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
layout: default
---

## [z-Transformation]{style="color:var(--slidev-theme-primary)"}: Idee & Motivation

„233 EUR·Jahre klingt bedeutungslos" — das Skalenproblem der Kovarianz kennen wir bereits. Jetzt tritt es erneut auf: Fahrzeugalter misst in Jahren (1–4), Reparaturkosten in EUR (200–600). Wie vergleichen wir diese auf einer gemeinsamen Skala?

**Lösung:** Jede Beobachtung wird in Standardabweichungen vom Mittelwert ausgedrückt — unabhängig von der ursprünglichen Einheit.

Für unser Zwei-Variablen-Beispiel ist das eine nette Nebenrechnung. Der eigentliche Gewinn zeigt sich, sobald ein Modell **mehrere Features gleichzeitig** verarbeitet: Ohne Standardisierung dominiert das Feature mit den größten Zahlen automatisch die Berechnung — unabhängig davon, ob es inhaltlich wichtig ist. Die z-Transformation ist deshalb Standardpraxis in **Machine-Learning-Pipelines** (Session 2) und ein Werkzeug, das Dich bis zu neuronalen Netzen begleitet.

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

<LiteraturSource :sources="[
  { title: 'Wasserstein & Lazar: The ASA Statement on p-Values: Context, Process, and Purpose', url: 'https://doi.org/10.1080/00031305.2016.1154108', year: '2016' },
  { title: 'Amrhein, Greenland & McShane: Scientists rise up against statistical significance', url: 'https://doi.org/10.1038/d41586-019-00857-9', year: '2019' },
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

