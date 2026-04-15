# IHK Prüfungsquiz — GAP Teil 2

Quiz-App zur Vorbereitung auf die IHK-Abschlussprüfung Teil 2 (Fachinformatiker Systemintegration, Sommerprüfung 2026).

## Inhalt

**377 Fragen** in 3 Prüfungsbereichen und **31** `category`-Themen (Unterkategorien in der App; einzelne Legacy-Schlüssel wie `switching-vlan`/`netzwerkprotokolle` sind inhaltlich den Hauptkategorien zugeordnet):

| Bereich | Fragen | Themen (Auszug) |
|---|---|---|
| Konzeption & Administration | 111 | Server/Virtualisierung, RAID/Backup, Active Directory, Cloud, Scripting, IT-Sicherheit, SQL/Code |
| Netzwerke | 128 | OSI/TCP-IP, Subnetting, Routing, Switching/VLANs, Firewall/VPN, Diagnose/Monitoring, Netzdienste |
| WiSo | 138 | Arbeitsrecht & Ausbildung (BBiG), Betriebsrat/Tarif, Sozialversicherungen, Wirtschaft & Rechtsformen, Konjunktur/Markt, Umwelt/Kreislauf, Arbeitssicherheit/Brandschutz, DSGVO/KLR u. a. (u. a. nach IHK-PuG-Skript) |

## Fragetypen

- **Single-Choice** — 1 richtige Antwort anklicken
- **Multi-Select** — alle richtigen Antworten auswählen, dann „Prüfen“
- **Zuordnen (Pairs)** — Begriffe per Klick zuordnen (z. B. Rechtsformen)
- **Freitext** — Antwort eintippen (Ports, Subnetting, RAID-Berechnung, chmod)
- **Tabellen-Fragen** — Routingtabellen, Firewall-Regeln, SQL-Daten, Nutzwertanalysen
- **Code-Fragen** — ipconfig-Ausgaben, SQL-Queries, C#-Code, Crontab

## Features

- Kategorie- und Unterkategorie-Auswahl oder „Alle Themen“
- Fragenanzahl wählbar: 5, 10, 15, 20 oder Alle
- Sofortiges Feedback (grün/rot) nach jeder Antwort
- Ergebnis-Screen mit Score-Ring und Bestanden/Nicht bestanden (50%-Schwelle)
- Review-Screen mit richtiger Antwort und Erklärung zu jeder Frage
- Dark Theme, responsiv

## Starten

Doppelklick auf `index.html` — fertig. Kein Server, keine Installation nötig.

## Fragen erweitern

Neue Fragen in `questions.js` zum Array `QUESTIONS_DATA` hinzufügen. Beispiele:

**Single-Choice:**
```js
{ "question": "...", "options": ["A","B","C","D","E","F","G","H"], "correct": 2, "explanation": "...", "category": "...", "section": "..." }
```

**Multi-Select:**
```js
{ "question": "...", "options": ["A","B","C","D"], "correct": [0,2], "explanation": "...", "category": "...", "section": "..." }
```

**Zuordnen:**
```js
{ "question": "Ordne … zu.", "pairs": [{ "left": "…", "right": "…" }], "explanation": "...", "category": "...", "section": "..." }
```

**Freitext:**
```js
{ "question": "...", "accepts": ["22", "Port 22"], "inputHint": "Gib die Portnummer ein.", "explanation": "...", "category": "...", "section": "..." }
```

**Optional: Tabelle oder Code-Block zur Frage:**
```js
{ "table": { "headers": ["Spalte1","Spalte2"], "rows": [["Wert1","Wert2"]] }, ... }
{ "code": "C:\\> ipconfig /all\nIPv4: 169.254.23.45", ... }
```

Sections: `01-Konzeption-Administration`, `02-Netzwerke`, `03-WiSo`

Neue `category`-Schlüssel sollten in `app.js` unter `CATEGORY_LABELS` mit lesbarem Namen ergänzt werden (sonst erscheint der Roh-Schlüssel in der UI).

## Techstack

Vanilla HTML/CSS/JS — keine Dependencies, kein Build-Step, kein Server.
