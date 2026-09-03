# Project Instructions — AI Business Intelligence Lecture

## Git workflow

**Vor jedem neuen Inhalt muss ein Branch angelegt werden.** Committe niemals
neue inhaltliche Änderungen (neue Kapitel, Folien, Diagramme, Übungen o.ä.)
direkt auf `main`. Stattdessen:

1. Vor Beginn der Arbeit an einem neuen Kapitel/Cluster/Feature einen Branch
   von `main` erstellen (z.B. `feat/kapitel-8-nlp`).
2. Alle Commits für diese Arbeit auf diesem Branch sammeln.
3. Am Ende einen Pull Request gegen `main` öffnen, statt direkt zu pushen.

Reine Doku-/Metadaten-Korrekturen an bereits gemergtem Content (z.B. ein
Tippfehler-Fix, ein Link-Update im Literaturverzeichnis) können nach
Rücksprache mit dem Nutzer weiterhin direkt auf `main` erfolgen — aber jede
neue inhaltliche Erweiterung (neues Kapitel, neue Folien, neue Diagramme,
neue Übungen) beginnt auf einem eigenen Branch.
