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

Python/Tools → Statistik-Grundlagen → Regression (linear → logistisch) →
Supervised ML (+ Metriken, Train/Val-Split) → Unsupervised/Clustering →
Deep Learning (KNN/Layers, Gradient Descent) → NLP/Transformer → Vertiefungen.

Never introduce a concept before its prerequisites (e.g. no DL-Gewichte vor
Regression, keine Metriken vor Train/Val-Split). Flag violations.

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
| 1 | Statistik & Regression (Versicherer) | ~135–165 min | ⬜ 30–60 min placeholder |
| 2 | Supervised ML + Metriken (Versicherer) | ~135–165 min | ⬜ 30–60 min placeholder |
| 3 | Unsupervised / Clustering (Segmentierung) | ~135–165 min | ⬜ 30–60 min placeholder |
| 4 | Deep Learning (Kfz-Schadensfotos) | ~135–165 min | ⬜ 30–60 min placeholder |
| 5 | NLP / Sentiment (Schadenstexte) | ~135–165 min | ⬜ 30–60 min placeholder |
| 6–8 | Vertiefungen / weitere Algorithmen / Prüfungsvorbereitung | ~135–165 min | ⬜ 30–60 min placeholder |

*(Session→topic mapping is provisional; the planner refines it. The exercise column stays
a placeholder until exercises are designed.)*

---

## 6. Progress log (planner updates this after each accepted cluster)

| # | Cluster / topic | Session | Case used | Status | Loops used |
|---|---|---|---|---|---|
| — | Intro (cover, bio, Lernziele) | 0 | — | ✅ ported | — |
| | *(next clusters appended here)* | | | | |
