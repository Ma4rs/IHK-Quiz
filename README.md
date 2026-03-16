# IHK Prüfungsquiz — GAP Teil 2

Multiple-Choice Quiz-App zur Vorbereitung auf die IHK-Abschlussprüfung Teil 2 (Fachinformatiker Systemintegration, Sommerprüfung 2026).

## Inhalt

**200 Fragen** in 3 Prüfungsbereichen und 17 Unterkategorien:

| Bereich | Fragen | Themen |
|---|---|---|
| Konzeption & Administration | 70 | Server/Virtualisierung, RAID/Backup, Active Directory, Cloud, Scripting, IT-Sicherheit, SQL/Code |
| Netzwerke | 80 | OSI/TCP-IP, Subnetting, Routing, Switching/VLANs, Firewall/VPN, Diagnose/Monitoring |
| WiSo | 50 | Arbeitsrecht, Betriebliche Mitbestimmung, Sozialversicherungen, Wirtschaftliche Grundlagen |

## Features

- Kategorie- und Unterkategorie-Auswahl oder "Alle Themen"
- 10 zufällige Fragen pro Runde, Antworten werden gemischt
- Sofortiges Feedback (grün/rot) nach Klick
- Ergebnis-Screen mit Score-Ring und Bestanden/Nicht bestanden (50%-Schwelle)
- Review-Screen mit richtiger Antwort und Erklärung zu jeder Frage
- Dark Theme, responsiv

## Starten

Doppelklick auf `index.html` — fertig. Kein Server, keine Installation nötig.

## Fragen erweitern

Neue Fragen in `questions.js` zum Array hinzufügen:

```js
{
  "question": "Deine Frage?",
  "options": ["A", "B", "C", "D"],
  "correct": 2,
  "explanation": "Erklärung warum C richtig ist.",
  "category": "unterkategorie-slug",
  "section": "01-Konzeption-Administration"
}
```

Sections: `01-Konzeption-Administration`, `02-Netzwerke`, `03-WiSo`

## Techstack

Vanilla HTML/CSS/JS — keine Dependencies, kein Build-Step, kein Server.
