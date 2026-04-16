/* global EXAMS_DATA */
(function () {
  "use strict";
  if (typeof EXAMS_DATA === "undefined" || !Array.isArray(EXAMS_DATA)) return;

  /** Prüfungen/Sommer25/<Ordner>/<Datei> — & und Leerzeichen in Pfaden encodiert */
  function P(folder, file) {
    return "Prüfungen/Sommer25/" + encodeURIComponent(folder) + "/" + encodeURIComponent(file);
  }

  function scanOpen(folder, file, label, pts) {
    return {
      question:
        "<strong>" +
        label +
        "</strong> Bearbeite die Aufgaben auf diesem Prüfungsbogen. Der vollständige Scan ist eingeklappt.",
      type: "open",
      points: pts || 2,
      image: P(folder, file),
      embedScanCollapsed: true,
      modelAnswer: "Mit Musterlösung (LSG) oder Prüfungskorrektur abgleichen.",
      explanation: "Offene Prüfungsaufgabe (Scan)."
    };
  }

  var kaIntro =
    "<p><strong>Ausgangssituation (Aufgaben 1 bis 4)</strong></p>" +
    "<p>Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:</p>" +
    "<p>Sie sind als Fachinformatiker für Systemintegration bei der <strong>Retailer GmbH</strong> tätig, " +
    "einem mittelständischen Logistikunternehmen. Die IT-Systeme werden ständig weiterentwickelt.</p>" +
    "<p><strong>Zu bearbeitende Aufgaben:</strong></p><ol>" +
    "<li>Planen und Konfigurieren von IT-Systemen</li>" +
    "<li>Gewährleisten der Verfügbarkeit von Diensten</li>" +
    "<li>Verwalten mobiler Endgeräte</li>" +
    "<li>Entwickeln von Systemsoftware</li></ol>";
  var kaMdmFig = P("crops", "ka-mdm-tabelle.jpg");
  var kaArrayFig = P("crops", "ka-array-schema-code.jpg");

  var kaAufgabe1 = [
    {
      question:
        kaIntro +
        "<p><strong>1. Aufgabe (26 Punkte)</strong> — Kontext: Die Retailer GmbH benötigt aus Kapazitätsgründen eine leistungsstärkere Plattform für den E-Mail-Dienst.</p>" +
        "<p><strong>a)</strong> Der E-Mail-Dienst lief bislang auf einem physischen Server.</p>" +
        "<p><strong>aa) (6 Punkte)</strong> Sie sollen prüfen, inwieweit es für die Retailer GmbH vorteilhaft ist, den E-Mail-Dienst in einer virtuellen Maschine zu betreiben. " +
        "Erläutern Sie je <strong>drei Vorteile</strong> und <strong>drei Nachteile</strong> einer Virtualisierung von Servern.</p>" +
        "<p><em>Vorteile einer Virtualisierung:</em></p><p><em>Nachteile einer Virtualisierung:</em></p>",
      type: "open",
      points: 6,
      modelAnswer:
        "Typische Vorteile: bessere Auslastung, schnellere Bereitstellung, Snapshots, weniger Hardware. " +
        "Nachteile: Single Point of Failure, Lizenz-/Performance-Overhead, Komplexität.",
      explanation: "Offene Ausarbeitung; in der Prüfung vollständig ausformulieren."
    },
    {
      question:
        "<p><strong>ab) (8 Punkte)</strong> Zur weiteren Entscheidungsfindung über eine eventuelle Virtualisierung des E-Mail-Dienstes sollen Sie über den Typ-1-Hypervisor und den Typ-2-Hypervisor informieren. " +
        "Ergänzen Sie dazu die Tabelle.</p>",
      type: "open",
      points: 8,
      tableAnswer: true,
      table: {
        headers: ["", "Typ-1-Hypervisor (native oder bare-metal)", "Typ-2-Hypervisor (gehostet)"],
        rows: [
          ["Erläutern Sie kurz den jeweiligen Hypervisor-Typ.", "", ""],
          ["Geben Sie je ein sinnvolles Einsatzbeispiel an.", "", ""],
          ["Geben Sie je ein marktgängiges Produkt an.", "", ""]
        ]
      },
      modelAnswer:
        "Typ-1: läuft direkt auf Hardware (z. B. ESXi, Hyper-V Server). Typ-2: läuft auf Host-OS (z. B. VirtualBox, VMware Workstation).",
      explanation: "Hypervisor-Eigenschaften und Beispiele nennen."
    },
    {
      question:
        "<p><strong>b)</strong> Für die Datenspeicherung wird zurzeit ein RAID-6-Verbund mit einer Nettospeicherkapazität von 80 TiB verwendet. " +
        "Die Nettospeicherkapazität des RAID-6-Verbunds soll verdoppelt werden. Im RAID-6-Verbund sind Festplatten mit einer Kapazität von je 8 TiB verbaut.</p>" +
        "<p><strong>ba) (2 Punkte)</strong> Berechnen Sie nachvollziehbar, wie viele Festplatten mit einer Kapazität von je 8 TiB für die Erweiterung des RAID-6-Verbunds auf 160 TiB benötigt werden.</p>",
      type: "open",
      points: 2,
      modelAnswer:
        "Rechenweg dokumentieren: von 80 TiB auf 160 TiB fehlen 80 TiB netto; bei RAID 6 mit 8-TiB-Platten die benötigte Zusatzplattenzahl ableiten (typisch 10 weitere Platten, je nach aktueller Plattenzahl).",
      explanation: "Rechenweg zur Prüfung ausformulieren."
    },
    {
      question:
        "<p><strong>bb) (3 Punkte)</strong> Im Zuge der Erweiterung wird die Sicherheit der Daten gegen Verlust bei einem Festplattenausfall in einem RAID-10-Verbund und in einem RAID-6-Verbund verglichen. " +
        "Erläutern Sie den Sachverhalt am Beispiel eines <strong>gleichzeitigen Ausfalls von zwei Festplatten</strong>.</p>",
      type: "open",
      points: 3,
      modelAnswer:
        "RAID 6: zwei Paritätsplatten → Verlust von zwei Platten oft noch rekonstruierbar. RAID 10: je nach Spiegel-Layout können zwei Ausfälle in derselben Spiegelgruppe zum Datenverlust führen.",
      explanation: "Unterschiedliche Toleranz gegenüber zwei gleichzeitigen Ausfällen erläutern."
    },
    {
      question:
        "<p><strong>bc) (2 Punkte)</strong> Als weiteres Entscheidungskriterium soll die jeweils verfügbare Nettospeicherkapazität betrachtet werden. " +
        "Berechnen Sie nachvollziehbar die Nettospeicherkapazität für einen RAID-10-Verbund mit der Anzahl Festplatten des <strong>erweiterten</strong> RAID-6-Verbunds aus ba).</p>" +
        "<p><em>Hinweis:</em> Sollten Sie ba) nicht bearbeitet haben, gehen Sie von zwölf Festplatten für die Erweiterung des RAID 6 aus.</p>",
      type: "open",
      points: 2,
      modelAnswer: "RAID 10: effektiv ca. 50 % der Rohkapazität (je nach Layout); mit n Platten Netto n/2 × Plattengröße (Rechenweg angeben).",
      explanation: "Nettokapazität RAID 10 herleiten."
    },
    {
      question:
        "<p><strong>c) (5 Punkte)</strong> Die Server haben zusammen eine maximale Leistungsaufnahme von 600 VA und sind an eine USV mit 2.400 VA angeschlossen. Bei voll geladenen Akkus kann die USV die Server rechnerisch 60 Minuten versorgen. " +
        "Bei Stromausfall soll die USV die Server versorgen, bis die Akkuladung auf 30 % gesunken ist; dann übernimmt ein Notstromaggregat (Start bis Betriebsbereitschaft: 3 Minuten).</p>" +
        "<p>Berechnen Sie nachvollziehbar, bei welchem <strong>prozentualen Ladungsstand</strong> der Start des Notstromaggregats eingeleitet werden muss.</p>",
      type: "open",
      points: 5,
      modelAnswer:
        "Linearer Ansatz: 70 %-Punkte Ladekapazität entsprechen 60 min Last → 3 min entsprechen einem bestimmten Ladungsanteil; Start bei Restladung knapp über 30 % (Rechenweg sauber dokumentieren).",
      explanation: "Zeit- und Kapazitätsanteil ableiten."
    }
  ];

  var kaAufgabe2 = [
    {
      question:
        "<p><strong>2. Aufgabe (27 Punkte)</strong></p>" +
        "<p>Bei der Retailer GmbH ist es Angreifern gelungen, firmenkritische Daten – einschließlich Kundeninformationen – im SAN zu verschlüsseln. " +
        "Sie wirken an der Untersuchung des Vorfalls und der Datenwiederherstellung mit. Anschließend sollen Sie Maßnahmen zur Verbesserung der IT-Sicherheit vorschlagen.</p>" +
        "<p><strong>a) (3 Punkte)</strong> Erste Analysen deuten darauf hin, dass es sich gemäß DSGVO um einen erheblichen IT-Sicherheitsvorfall handelt. " +
        "Nennen Sie <strong>drei datenschutzrelevante Kriterien</strong>, die darüber entscheiden, ob eine Information der betroffenen Kunden erfolgen muss.</p>",
      type: "open",
      points: 3,
      modelAnswer: "z. B. Risiko für Rechte/Freiheiten, Kategorien personenbezogener Daten, Umfang, Wahrscheinlichkeit/Schwere des Risikos (Art. 34 DSGVO).",
      explanation: "DSGVO-Kriterien zur Meldung an Betroffene nennen."
    },
    {
      question:
        "<p><strong>b) (6 Punkte)</strong> Originale der kompromittierten Daten liegen in einem kürzlich erstellten Voll-Backup auf LTO; die Wiederherstellung dauert mehr als acht Stunden. " +
        "Daten seit dem letzten Backup gehen verloren. Um Derartiges zukünftig auszuschließen, sollen Sie <strong>einen Vorschlag zur Verkürzung der Wiederherstellungszeit</strong> und " +
        "<strong>einen Vorschlag zur Vermeidung des Verlusts noch nicht gesicherter Daten</strong> ausarbeiten und erläutern.</p>",
      type: "open",
      points: 6,
      modelAnswer:
        "z. B. inkrementelle/differenzielle Backups, schnellere Medien, RPO/RTO definieren; für laufende Daten: Transaktionslogs, Replikation, häufigere Sicherungen.",
      explanation: "Zwei getrennte sachliche Vorschläge mit Begründung."
    },
    {
      question:
        "<p><strong>c) (4 Punkte)</strong> Bei der Weiterentwicklung des Datensicherungskonzepts soll die <strong>3-2-1-Regel</strong> berücksichtigt werden. " +
        "Entwickeln Sie einen dieser Regel entsprechenden Vorschlag für die Datenhaltung bei der Retailer GmbH und erläutern Sie diesen.</p>",
      type: "open",
      points: 4,
      modelAnswer: "3 Kopien, 2 Medien/Typen, 1 Offsite; konkrete Ausgestaltung (Band + Disk, Cloud-Standort) erläutern.",
      explanation: "3-2-1-Regel anwenden."
    },
    {
      question:
        "<p><strong>d) (4 Punkte)</strong> Aufgrund des Vorfalls soll die IT-Sicherheit durch „System-Härtung“ verbessert werden. Dazu zählen Maßnahmen wie die Sicherstellung der Aktualität installierter Software. " +
        "Erläutern Sie <strong>zwei weitere</strong> Maßnahmen der System-Härtung.</p>",
      type: "open",
      points: 4,
      modelAnswer: "z. B. Deaktivieren unnötiger Dienste, sichere Konfiguration, Firewall, minimale Rechte, Logging, sichere Protokolle.",
      explanation: "Härtungsmaßnahmen nennen und kurz begründen."
    },
    {
      question:
        "<p><strong>e) (6 Punkte)</strong> Sicherheitsexperten empfehlen das <strong>Least-Privilege-Prinzip</strong> und das <strong>Zero-Trust-Prinzip</strong>. Beide sollen implementiert werden. " +
        "Erläutern Sie zu jedem Prinzip <strong>eine typische Maßnahme</strong>.</p>",
      type: "open",
      points: 6,
      modelAnswer: "Least Privilege: minimal notwendige Rechte/Rollen. Zero Trust: keine implizite Vertrauensannahme im LAN, MFA, Mikrosegmentierung.",
      explanation: "Je ein konkretes Beispiel pro Prinzip."
    },
    {
      question:
        "<p><strong>(4 Punkte)</strong> Die Wirksamkeit der Maßnahmen soll getestet werden. Folgende Tests werden angeboten: Patch-Stand, Passwort-/Benutzersicherheit, Fehlkonfigurationen in IT-Systemen und im Active Directory. " +
        "Beschreiben Sie <strong>zwei zusätzliche</strong> sicherheitsrelevante Tests, die eingefordert werden sollten.</p>",
      type: "open",
      points: 4,
      modelAnswer: "z. B. Penetrationstest, Social-Engineering-Test, Schwachstellen-Scan, Red Team, Incident-Response-Übung.",
      explanation: "Weitere sinnvolle Tests nennen."
    }
  ];

  var kaAufgabe3 = [
    {
      question:
        "<p><strong>3. Aufgabe (22 Punkte)</strong> — Die Retailer GmbH will ein „Mobile Device Management System“ (MDMS) zur effizienten Administration mobiler Endgeräte einführen.</p>" +
        "<p><strong>a)</strong> Es liegt eine tabellarische Übersicht der Leistungsmerkmale von drei MDM-Systemen vor (siehe <strong>Abbildung</strong>).</p>" +
        "<p><strong>aa) (4 Punkte)</strong> Wählen Sie den Anbieter aus, dessen MDMS bei Verlust oder Diebstahl eines mobilen Gerätes den besten Schutz gegen missbräuchliche Nutzung bietet, und begründen Sie Ihre Entscheidung.</p>",
      type: "open",
      points: 4,
      figureImage: kaMdmFig,
      modelAnswer: "Anbieter mit vollständigem Fernlöschen/Wipe und Lockdown; Begründung anhand der Tabelle (z. B. Wipe/Lockdown-Features).",
      explanation: "Entscheidung anhand der Merkmalstabelle begründen."
    },
    {
      question:
        "<p><strong>ab) (2 Punkte)</strong> Die Retailer GmbH erlaubt private Endgeräte für dienstliche Zwecke (BYOD), sofern sie im MDMS eingebunden sind. " +
        "Beschreiben Sie, wie der Schutz <strong>privater Daten</strong> auf dem Endgerät gegenüber dem MDMS sichergestellt wird.</p>",
      type: "open",
      points: 2,
      modelAnswer: "z. B. Container/Profiles, Trennung dienstlich/privat, eingeschränkte Einsicht, Verschlüsselung, klare Policies.",
      explanation: "BYOD-Datenschutz technisch/organisatorisch beschreiben."
    },
    {
      question:
        "<p><strong>ac) (5 Punkte)</strong> Betriebsvereinbarung zur Nutzung mobiler Endgeräte mit dem Betriebsrat. Zwei Sachverhalte sind schon vorgeschlagen: Verschlüsselung von Daten bzw. Datenträgern; private Nutzung der Geräte. " +
        "Nennen Sie <strong>fünf weitere</strong> technische und/oder organisatorische Sachverhalte.</p>",
      type: "open",
      points: 5,
      modelAnswer: "z. B. Support/Reparatur, Haftung, Monitoring-Umfang, App-Whitelist, Gerätewechsel, Kündigung/Offboarding, Kosten.",
      explanation: "Fünf weitere sachliche Punkte."
    },
    {
      question:
        "<p><strong>b) (6 Punkte)</strong> Für den Zugriff auf den MDMS-Server sind Client-Zugriffs-Lizenzen (CAL) nötig. Es gibt <strong>User CAL</strong> (pro Benutzer, sinnvoll bei mehreren Geräten pro Person) und " +
        "<strong>Device CAL</strong> (pro Gerät, sinnvoll bei geteilten Geräten). Erläutern Sie für jeden Lizenztyp den <strong>kostengünstigeren Einsatzfall</strong>.</p>",
      type: "open",
      points: 6,
      modelAnswer: "User CAL günstiger, wenn weniger Benutzer als Geräte / Mehrgerätenutzung. Device CAL günstiger bei geteilten Terminals und vielen Benutzern pro Gerät.",
      explanation: "Kostenlogik erläutern."
    },
    {
      question:
        "<p><strong>c) (5 Punkte)</strong> MDMS-Updates und -Upgrades. Erläutern Sie den Unterschied zwischen „Update“ und „Upgrade“ mit Blick auf <strong>Kosten</strong> und <strong>Funktion</strong>.</p>",
      type: "open",
      points: 5,
      modelAnswer: "Update: meist Bugfixes/Kleine Verbesserungen, oft günstiger/in Wartung enthalten. Upgrade: neue Hauptversion/Funktionen, oft kostenpflichtig/Lizenzsprung.",
      explanation: "Begriffe sauber trennen."
    }
  ];

  var ramCode =
    "Folgender Programmentwurf liegt vor:\n" +
    "int[] RAM1 = new int[9] { 40, 42, 47, 52, 50, 60, 64, 66, 71 };\n" +
    "int[] RAM2 = new int[18];\n" +
    "for (int i = 0; i < 9; i++)\n" +
    "{\n" +
    "    RAM2[i * 2 + 1] = i;\n" +
    "    RAM2[i * 2] = RAM1[i];\n" +
    "}";

  var kaAufgabe4 = [
    {
      question:
        "<p><strong>4. Aufgabe (25 Punkte)</strong> — Sie wirken an Programmen zur Systemverwaltung mit (prüfungstechnisch vereinfachte Aufgabe).</p>" +
        "<p><strong>a)</strong> Ein Array „RAM1“ hat neun Felder; die Kapazität soll verdoppelt werden. Es wird ein neues Array „RAM2“ mit 18 Feldern angelegt. " +
        "Der Inhalt von RAM1 soll nach RAM2 gemäß Schema kopiert werden; die weiteren Felder von RAM2 werden mit 1, 2, 3, … gefüllt.</p>" +
        "<p><strong>aa) (9 Punkte)</strong> Analysieren Sie den Programmentwurf. Stellen Sie fest, welche Werte in den <strong>ersten neun Feldern</strong> von RAM2 gespeichert werden (Index 0–8).</p>",
      type: "open",
      points: 9,
      figureImage: kaArrayFig,
      table: {
        headers: ["RAM1", "40", "42", "47", "52", "50", "60", "64", "66", "71", "", "", "", "", "", "", "", "", ""],
        rows: [
          ["RAM2", "1", "40", "2", "42", "3", "47", "4", "52", "5", "50", "6", "60", "7", "64", "8", "66", "9", "71"],
          ["Index", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]
        ]
      },
      code: ramCode,
      modelAnswer: "Werte durch Schritt-für-Schritt-Simulation ermitteln; im Bogenfehler: u. a. falsche Zuweisung bei RAM2[i*2+1].",
      explanation: "Programmablauf manuell nachvollziehen."
    },
    {
      question:
        "<p><strong>ab) (10 Punkte)</strong> Das Programm liefert offensichtlich falsche Werte; <strong>zwei Fehler</strong> im Code sind verantwortlich. Lokalisieren Sie beide und geben Sie zu jedem Fehler den <strong>korrekten Code</strong> an.</p>",
      type: "open",
      points: 10,
      figureImage: kaArrayFig,
      code: ramCode,
      modelAnswer: "Typische Fehler: Zuweisung RAM2[i*2+1]=i sollte Fortlauf (1,2,3…) statt Schleifenindex sein; Array-Initialisierung/Syntax je nach Sprache.",
      explanation: "Beide Fehler benennen und Korrektur angeben."
    },
    {
      question:
        "<p><strong>b) (6 Punkte)</strong> Fehler beim Programmieren: <strong>Syntaxfehler</strong> und <strong>Semantikfehler</strong>. Beschreiben Sie beide Fehlerarten und geben Sie je ein Beispiel.</p>",
      type: "open",
      points: 6,
      modelAnswer: "Syntax: Verletzung der Grammatik, Compiler meldet (z. B. fehlendes Semikolon). Semantik: Programm läuft, Verhalten falsch (z. B. falscher Operator).",
      explanation: "Begriffe und Beispiele."
    }
  ];

  var aeIntro =
    "<p><strong>Ausgangssituation (Aufgaben 1 bis 4)</strong></p>" +
    "<p>Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:</p>" +
    "<p>Sie arbeiten als Fachinformatiker (Systemintegration) bei der <strong>1234-IT-Systemhaus GmbH</strong> und betreuen die <strong>IHK-Wear GmbH</strong> (Modebranche). " +
    "Der Kunde hat eine Firmenzentrale und Filialen; geplant sind Änderungen an der IT der Zentrale sowie eine neue Filiale.</p>" +
    "<ol><li>Aufgabe: Bestehendes Netzwerk analysieren</li><li>Anbindung ans Internet realisieren</li><li>Internetanbindung absichern</li><li>Geräte drahtlos einbinden</li></ol>";

  var aeNetzFig = P("crops", "ae-netzplan.jpg");

  var aeAufgabe1 = [
    {
      question:
        aeIntro +
        "<p><strong>1. Aufgabe (22 Punkte)</strong></p>" +
        "<p><strong>a)</strong> Das Netzwerk der IHK-Wear GmbH besteht aus Zentrale und Filialen. Die Zentrale ist in VLANs und Subnetze aufgeteilt (<strong>Netzwerkplan siehe Abbildung</strong>). " +
        "Für alle Filialen gilt der Netzbereich 172.16.200.0/22; nach Modernisierung sollen Filialen per VPN auf Zentrale-Server zugreifen.</p>" +
        "<p><strong>aa) (4 Punkte)</strong> Tragen Sie die zugehörigen <strong>dezimalen Subnetzmasken</strong> sowie die <strong>Anzahl der maximal nutzbaren IP-Adressen</strong> ein.</p>",
      type: "open",
      points: 4,
      figureImage: aeNetzFig,
      tableAnswer: true,
      table: {
        headers: ["VLAN ID", "Name", "Subnetz", "Maske (dezimal)", "Max. nutzbare IP-Adressen"],
        rows: [
          ["1", "default", "192.168.1.0/24", "255.255.255.0", "254"],
          ["11", "Technik", "192.168.11.0/26", "", ""],
          ["12", "Vertrieb", "192.168.12.128/25", "", ""],
          ["66", "Management", "192.168.66.8/29", "", ""],
          ["", "Filial-Netze", "172.16.200.0/22", "", ""]
        ]
      },
      modelAnswer: "/26 → 255.255.255.192, 62 Hosts; /25 → 255.255.255.128, 126 Hosts; /29 → 255.255.255.248, 6 Hosts; /22 → 255.255.252.0, 1022 Hosts.",
      explanation: "Subnetzrechnung."
    },
    {
      question:
        "<p><strong>ab) (4 Punkte)</strong> Die Schnittstellen auf <strong>R1</strong> sind Gateway der Subnetze; jeweils die <strong>letzte</strong> nutzbare Adresse des Subnetzes soll verwendet werden. Tragen Sie die Gateway-IP-Adressen ein.</p>",
      type: "open",
      points: 4,
      figureImage: aeNetzFig,
      tableAnswer: true,
      table: {
        headers: ["VLAN ID", "Name", "Subnetz", "IP-Adresse des Gateways"],
        rows: [
          ["1", "default", "192.168.1.0/24", ""],
          ["11", "Technik", "192.168.11.0/26", ""],
          ["12", "Vertrieb", "192.168.12.128/25", ""],
          ["66", "Management", "192.168.66.8/29", ""]
        ]
      },
      modelAnswer: "Letzte Host-Adresse je Subnetz (z. B. .254, .62, …) — selbst berechnen.",
      explanation: "Gateway = letzte nutzbare Adresse."
    },
    {
      question:
        "<p><strong>ac) (4 Punkte)</strong> Gateway-Adressen sollen den VLANs auf R1 zugeordnet werden. In der Übersicht ist je ein <strong>Subinterface</strong> (eth1.11, eth1.12, …) angegeben.</p>" +
        "<p>Erläutern Sie, <strong>weshalb</strong> dort ein Subinterface verwendet wird und <strong>was</strong> man darunter versteht.</p>",
      type: "open",
      points: 4,
      figureImage: aeNetzFig,
      table: {
        headers: ["VLAN ID", "Name", "Subnetz", "Schnittstelle auf R1"],
        rows: [
          ["11", "Technik", "192.168.11.0/26", "eth1.11 (Subinterface)"],
          ["12", "Vertrieb", "192.168.12.128/25", "eth1.12 (Subinterface)"],
          ["66", "Management", "192.168.66.8/29", "eth1.66 (Subinterface)"]
        ]
      },
      modelAnswer: "Router-on-a-Stick: ein physisches Interface, logisch per 802.1Q in VLANs getrennt; Subinterface = virtuelle Schnittstelle pro VLAN.",
      explanation: "Subinterfaces / VLAN-Tagging erläutern."
    },
    {
      question:
        "<p><strong>ba) (4 Punkte)</strong> Erläutern Sie den Begriff <strong>Link Aggregation</strong> und nennen Sie <strong>zwei Vorteile</strong> gegenüber einer einzelnen Switch-Verbindung.</p>",
      type: "open",
      points: 4,
      modelAnswer: "Bündelung mehrerer physikalischer Links (LACP/Port-Channel); höhere Bandbreite, Redundanz/Ausfallsicherheit.",
      explanation: "Begriff und Nutzen."
    },
    {
      question:
        "<p><strong>bb) (4 Punkte)</strong> Erläutern Sie, warum auf MLS1 der Port zur Verbindung mit MLS2 <strong>geblockt</strong> ist (Symbol im Netzwerkplan), obwohl er grundsätzlich funktionsfähig wäre.</p>",
      type: "open",
      points: 4,
      figureImage: aeNetzFig,
      modelAnswer: "Spanning Tree / Schleifenvermeidung: in redundanten Topologien wird ein Link in den Blocking-Zustand versetzt.",
      explanation: "STP/RSTP-Logik."
    },
    {
      question:
        "<p><strong>c) (2 Punkte)</strong> Nach Einrichtung von R1 sind keine Verbindungen ins Internet möglich. Ergänzen Sie den <strong>fehlenden Eintrag</strong> in der Routingtabelle (Default Route / Internet).</p>",
      type: "open",
      points: 2,
      tableAnswer: true,
      table: {
        headers: ["Netzwerk", "Schnittstelle", "Next hop"],
        rows: [
          ["203.0.113.0/30", "eth0", "–"],
          ["192.168.11.0/26", "eth1.11", "–"],
          ["192.168.12.128/25", "eth1.12", "–"],
          ["192.168.66.8/29", "eth1.66", "–"],
          ["(Internet / Rest)", "", ""]
        ]
      },
      modelAnswer: "0.0.0.0/0 → passende Schnittstelle/next-hop Richtung Provider (z. B. über eth0).",
      explanation: "Standardroute setzen."
    }
  ];

  var aeAufgabe2 = [
    {
      question:
        "<p><strong>2. Aufgabe (Auszug)</strong> — Neuer Flagship-Store; Sie planen Filial-Anbindung und IT.</p>" +
        "<p><strong>aa) (3 Punkte)</strong> Angebot „Geschäftskunden-DSL 250/40“. Nennen Sie <strong>drei Aspekte</strong>, die Geschäfts- von Privat-DSL unterscheiden können.</p>",
      type: "open",
      points: 3,
      modelAnswer: "z. B. SLA, feste IP, Support-Priorität, symmetrische Optionen, höhere Verfügbarkeit.",
      explanation: "Geschäftskundenmerkmale."
    },
    {
      question:
        "<p><strong>ab) (3 Punkte)</strong> Alternative: Glasfaser <strong>GPON</strong> als „shared medium“. Erläutern Sie den Begriff und warum das für die Filiale <strong>ungünstig</strong> sein kann.</p>",
      type: "open",
      points: 3,
      modelAnswer: "Geteiltes Medium: Bandbreite/Konkurrenz mit Nachbarn; weniger planbare Last für Business.",
      explanation: "GPON-Charakteristik."
    },
    {
      question:
        "<p><strong>ac) (4 Punkte)</strong> Bis zur Leitungseröffnung: <strong>LTE-Router 50/10</strong> als Überbrückung. Erläutern Sie <strong>zwei Aspekte</strong>, warum das keine dauerhafte Lösung ist.</p>",
      type: "open",
      points: 4,
      modelAnswer: "Datenvolumen/Latenz, Stabilität, Sicherheit, keine feste Business-Anbindung, geringere SLA.",
      explanation: "LTE als Übergang."
    },
    {
      question:
        "<p><strong>ba) (4 Punkte)</strong> Sie erhalten eine öffentliche <strong>feste IPv4-Adresse</strong> für die Filiale. Erläutern Sie, wie dennoch viele Geräte mit <strong>einer</strong> öffentlichen IP ins Internet kommen.</p>",
      type: "open",
      points: 4,
      modelAnswer: "NAT/PAT: private Adressen im LAN werden auf eine öffentliche IP und Ports abgebildet.",
      explanation: "NAT erläutern."
    },
    {
      question:
        "<p><strong>bb) (5 Punkte)</strong> Öffentliches IPv6-Präfix <code>2001:db8:9876::/56</code>, aufgeteilt in Subnetze <strong>/64</strong>. Ermitteln Sie: Anzahl Subnetze sowie 1., 2., vorletztes und letztes Subnetz.</p>",
      type: "open",
      points: 5,
      modelAnswer: "56→64: 8 Bit für Subnetze → 256 Subnetze; erste 2001:db8:9876:0::/64, zweite …:1::/64, letzte …:ff::/64 (Präfix genau angeben).",
      explanation: "IPv6-Subnetting."
    },
    {
      question:
        "<p><strong>bc) (2 Punkte)</strong> DMZ für Server: Nennen Sie <strong>zwei Eigenschaften</strong> einer DMZ.</p>",
      type: "open",
      points: 2,
      modelAnswer: "Separates Segment, kontrollierter Zugriff von außen/innen, gehärtete Systeme, begrenzte Angriffsfläche.",
      explanation: "DMZ-Charakteristik."
    },
    {
      question:
        "<p><strong>bd) (2 Punkte)</strong> Wie viele IP-Adressen stehen in einem <strong>/64</strong>-Subnetz für Hosts in der DMZ typischerweise zur Verfügung?</p>",
      type: "open",
      points: 2,
      modelAnswer: "Theoretisch 2^64 Adressen; praktisch SLAAC nach RFC mit 64-Bit-Interface-ID — in Prüfungen oft „sehr viele“ bzw. 2^64 minus reservierte.",
      explanation: "/64-Hostanteil."
    },
    {
      question:
        "<p><strong>ca) (1 Punkt)</strong> Client löst <code>www.ihk.de</code> <strong>rekursiv</strong> auf. Beschreiben Sie kurz den Ablauf.</p>",
      type: "open",
      points: 1,
      modelAnswer: "Client fragt Resolver (z. B. Router/ISP); Resolver liefert fertige Antwort zurück.",
      explanation: "Rekursive Auflösung."
    },
    {
      question:
        "<p><strong>cb) (3 Punkte)</strong> Der Router löst <strong>iterativ</strong> auf. Erläutern Sie die Schritte.</p>",
      type: "open",
      points: 3,
      modelAnswer: "Root → TLD → authoritative; iterativ: jede Antwort ist nächster Referral bis finale AA.",
      explanation: "Iterative Resolver-Kette."
    }
  ];

  var wisoKonjunkturTable = {
    headers: ["Indikatoren", "Vorjahr (%)", "Aktuelles Jahr (%)", "Prognose Folgejahr (%)"],
    rows: [
      ["Bruttoinlandsprodukt", "-0,5", "-1,0", "-2,0"],
      ["Inflationsrate", "2,2", "2,2", "2,0"],
      ["Arbeitslosenquote", "6,0", "6,5", "7,5"]
    ]
  };

  var wisoBlock2 = [
    {
      question:
        "<p><strong>Ausgangssituation</strong></p><p>Die <strong>EcoTech GmbH</strong> ist ein IT-Dienstleistungsunternehmen mit Sitz in Erfurt. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.</p>" +
        "<p><strong>1. Aufgabe (2 Punkte)</strong> Welches Unternehmen gehört zum <strong>sekundären Wirtschaftssektor</strong>?</p>",
      options: [
        "Spediteur Fahrschnell OHG",
        "Lagerlogistik Peter Müller e. K.",
        "Import Keller OHG",
        "Akku- und Ladegerätebau GmbH",
        "Handelsvertretung Show & More GmbH"
      ],
      correct: 3,
      points: 2,
      explanation: "Sekundärer Sektor: produzierendes Gewerbe / Verarbeitung — hier Akku- und Ladegerätebau."
    },
    {
      question:
        "<p><strong>2. Aufgabe (2 Punkte)</strong> Ein Mitbewerber hatte erstmalig eine Steuer-App im Angebot. Die EcoTech will eine ähnliche App entwickeln und rechnet mit vielen Käufern. " +
        "Welche <strong>Marktform</strong> liegt vor, wenn es <strong>keine weiteren Anbieter</strong> gibt?</p>",
      options: [
        "Angebotsmonopol",
        "Nachfragepolypol",
        "Angebotsoligopol",
        "Angebotspolypol",
        "Nachfrageoligopol"
      ],
      correct: 0,
      points: 2,
      explanation: "Ein Anbieter, viele Nachfrager: Angebotsmonopol."
    },
    {
      question:
        "<p><strong>3. Aufgabe (2 Punkte)</strong> In welchem Fall handelt die EcoTech nach dem <strong>ökonomischen Maximalprinzip</strong>?</p>",
      options: [
        "Zentrallager: gleiche Umschlagmenge, Beschäftigte 7→5",
        "Verwaltung: Kosten um 15 % gesenkt",
        "Umsatz bei gleichem Personaleinsatz um 20 % gesteigert",
        "Werbeetat +10 %, rückläufige Absätze gestoppt",
        "Vertriebswege B2B umgestaltet, Kosten −5 %"
      ],
      correct: 2,
      points: 2,
      explanation: "Maximalprinzip: maximaler Ertrag bei gleichem Einsatz (hier Umsatz +20 % bei gleichem Personal)."
    },
    {
      question:
        "<p>Die EcoTech beobachtet die EU-Konjunktur (Tabelle unten).</p>" +
        "<p><strong>4. Aufgabe (2 Punkte)</strong> Phase anhand der Spalte <strong>Aktuelles Jahr</strong>?</p>",
      table: wisoKonjunkturTable,
      options: [
        "Stillstand/Stagnation",
        "Aufschwung/Expansion",
        "Höchststand/Boom",
        "Abschwung/Rezession",
        "Tiefstand/Depression"
      ],
      correct: 3,
      points: 2,
      explanation: "BIP negativ, Arbeitslosigkeit steigt → Abschwung."
    },
    {
      question:
        "<p><strong>5. Aufgabe (2 Punkte)</strong> Welches Merkmal ist typisch für eine <strong>konjunkturelle Rezession</strong>?</p>",
      options: [
        "Zunahme der Investitionen",
        "Zunahme des Bruttoinlandsprodukts",
        "Zunahme der gesamtwirtschaftlichen Lohnsumme",
        "Zunahme der Kapazitätsauslastung",
        "Zunahme der Lagerbestände"
      ],
      correct: 4,
      points: 2,
      explanation: "Rezession: oft zunehmende Lagerbestände (Absatz stockt)."
    },
    {
      question:
        "<p><strong>6. Aufgabe (2 Punkte)</strong> Welche Maßnahme <strong>belebt</strong> die Konjunktur und kann die Auftragslage verbessern?</p>",
      options: [
        "Erhöhung der staatlichen Investitionen",
        "Erhöhung der Steuern",
        "Erhöhung der Leitzinsen",
        "Kürzung des Kindergeldes",
        "Kürzung des Arbeitslosengeldes"
      ],
      correct: 0,
      points: 2,
      explanation: "Staatliche Investitionen wirken konjunkturbelebend (keynesianisch)."
    },
    {
      question:
        "<p><strong>7. Aufgabe — Ziele zuordnen</strong> Tragen Sie pro Zeile <strong>1</strong> (ökonomisch), <strong>2</strong> (ökologisch) oder <strong>3</strong> (weder noch) ein.</p>" +
        "<p><strong>a)</strong> Chancengleichheit von Frauen und Männern</p>",
      accepts: ["3"],
      inputHint: "Ziffer (1, 2 oder 3)",
      points: 1,
      explanation: "Soziales/chancengleich — weder ökonomisch noch ökologisch im Sinne der Aufgabenstellung."
    },
    {
      question: "<p><strong>7. b)</strong> Gewinnbeteiligung zur Motivation</p>",
      accepts: ["1"],
      inputHint: "1, 2 oder 3",
      points: 1,
      explanation: "Ökonomisches Ziel."
    },
    {
      question: "<p><strong>7. c)</strong> Ausreichend Gewinne für Investitionen ohne nur Fremdkapital</p>",
      accepts: ["1"],
      inputHint: "1, 2 oder 3",
      points: 1,
      explanation: "Ökonomisches Ziel."
    },
    {
      question: "<p><strong>7. d)</strong> CO₂-Emission durch Photovoltaik senken</p>",
      accepts: ["2"],
      inputHint: "1, 2 oder 3",
      points: 1,
      explanation: "Ökologisches Ziel."
    },
    {
      question: "<p><strong>7. e)</strong> Moderne Lagerlogistik/Transport, natürliche Lebensgrundlage schonen</p>",
      accepts: ["2"],
      inputHint: "1, 2 oder 3",
      points: 1,
      explanation: "Ökologisches Ziel."
    },
    {
      question:
        "<p><strong>8. Aufgabe (2 Punkte)</strong> Ausbildungsbeginn 1.2.; welchen <strong>Vertragsinhalt</strong> muss Herr Kerman korrigieren?</p>",
      options: [
        "Ausbildungsvergütungen für alle Jahre eingetragen",
        "Angaben der Eltern fehlen",
        "Kündigungsvoraussetzungen aufgeführt",
        "Probezeit sechs Monate",
        "Ausbildungsdauer 36 Monate"
      ],
      correct: 3,
      points: 2,
      explanation: "Probezeit im BBiG max. vier Monate — sechs Monate ist falsch."
    },
    {
      question:
        "<p><strong>9. Aufgabe (2 Punkte)</strong> Welche <strong>zwei</strong> Situationen entsprechen dem BBiG? (Zwei Antworten anklicken.)</p>",
      options: [
        "Probezeit: Kündigung nur mit vier Wochen Frist",
        "Kündigung durch Azubi nach Probezeit möglich, wenn anderer Ausbildungsberuf",
        "Weiterbeschäftigung nach Ausbildung im Vertrag festlegbar",
        "Ausbildungsverhältnis endet immer erst mit Ablauf der Zeit trotz bestandener Prüfung",
        "Qualifiziertes Zeugnis auf Wunsch",
        "Unbefristeter Vertrag am Tag nach bestandener Prüfung Pflicht"
      ],
      correct: [1, 4],
      points: 2,
      explanation: "Zwei zutreffende Aussagen gemäß typischer BBiG-Prüfungslogik (Kündigung Azubi anderer Beruf; qualifiziertes Zeugnis auf Wunsch)."
    },
    {
      question:
        "<p><strong>10. Aufgabe (2 Punkte)</strong> Welche Unterlage ist <strong>Bestandteil des Berufsausbildungsvertrags</strong>?</p>",
      options: [
        "Stoffplan Berufsschule",
        "Gemeinsamer Ausbildungsplan Berufsschule/Betrieb",
        "Rahmenlehrplan Berufsschule",
        "Ausbildungsplan des Ausbildungsbetriebes",
        "Einsatz- und Pausenplan"
      ],
      correct: 3,
      points: 2,
      explanation: "Betrieblicher Ausbildungsplan gehört zum Vertragsinhalt (§4 BBiG)."
    },
    {
      question:
        "<p><strong>11. Aufgabe (2 Punkte)</strong> Regelungen zu Aufgaben der <strong>JAV</strong> — in welchem Gesetz?</p>",
      options: ["BGB", "Arbeitsschutzgesetz", "Berufsbildungsgesetz", "Jugendarbeitsschutzgesetz", "Betriebsverfassungsgesetz"],
      correct: 4,
      points: 2,
      explanation: "JAV-Mitwirkung im Betrieb: BetrVG."
    },
    {
      question:
        "<p><strong>12. Aufgabe (2 Punkte)</strong> Als JAV-Mitglied … welche Aussage trifft zu?</p>",
      options: [
        "nur zweimal jährlich an Betriebsratssitzungen",
        "Maßnahmen zugunsten Auszubildender beim Betriebsrat beantragen",
        "alle Jugendinteressen direkt bei GF",
        "vor jeder BR-Entscheidung Anhörung",
        "bei allen Belangen Mitspracherecht"
      ],
      correct: 1,
      points: 2,
      explanation: "JAV kann beim Betriebsrat Anträge stellen (BetrVG)."
    },
    {
      question:
        "<p><strong>13. Aufgabe (2 Punkte)</strong> Voraussetzungen für Wahl in den <strong>Betriebsrat</strong>?</p>",
      options: [
        "18 und abgeschlossene Ausbildung zwingend",
        "ab 16 aufstellbar",
        "volljährig und mindestens 6 Monate im Betrieb",
        "strafrechtliche Vorgeschichte irrelevant",
        "18 und max. 6 Monate im Betrieb"
      ],
      correct: 2,
      points: 2,
      explanation: "§7 BetrVG: wählbar ab 18, 6 Monate Betriebszugehörigkeit."
    },
    {
      question:
        "<p><strong>14. Aufgabe (2 Punkte)</strong> Welche Regelung steht im <strong>Jugendarbeitsschutzgesetz</strong>?</p>",
      options: [
        "max. drei Stunden ohne Ruhepause",
        "8 Stunden Ruhe zwischen Schichten",
        "Jugendliche vor Gefährdung der Gesundheit/Entwicklung bewahren",
        "grundsätzlich nicht vor 8 Uhr",
        "zwei freie Tage vor Abschlussprüfung"
      ],
      correct: 2,
      points: 2,
      explanation: "§1 JArbSchG: Schutz der Gesundheit und Entwicklung."
    },
    {
      question:
        "<p><strong>15. Aufgabe (2 Punkte)</strong> Wer darf an der <strong>Betriebsversammlung</strong> teilnehmen?</p>",
      options: [
        "Alle Arbeitnehmenden",
        "nur BR und Gewerkschaftsvertreter",
        "nur gewerkschaftlich Organisierte",
        "nur Vollzeit und Führungskräfte",
        "nur Vollzeit und Auszubildende"
      ],
      correct: 0,
      points: 2,
      explanation: "§43 Abs. 2 BetrVG: alle Arbeitnehmer."
    }
  ];

  var wisoScans = [
    scanOpen("Wiso", "Wiso (8).jpg", "WiSo — Fortsetzung (Blatt)", 2),
    scanOpen("Wiso", "Wiso (9).jpg", "WiSo — Fortsetzung (Blatt)", 2)
  ];

  var wisoQuestions = wisoBlock2.concat(wisoScans);

  var aeFortsetzung = [
    scanOpen("A&E", "A&E (6).jpg", "A&E — Aufgaben Fortsetzung", 2),
    scanOpen("A&E", "A&E (7).jpg", "A&E — Aufgaben Fortsetzung", 2),
    scanOpen("A&E", "A&E (8).jpg", "A&E — Aufgaben Fortsetzung", 2),
    scanOpen("A&E", "A&E (9).jpg", "A&E — Aufgaben Fortsetzung", 2),
    scanOpen("A&E", "A&E (10).jpg", "A&E — Aufgaben Fortsetzung", 2)
  ];

  EXAMS_DATA.push({
    id: "sommer-2025",
    title: "GAP Teil 2 — Sommer 2025",
    parts: [
      {
        id: "sommer-2025-ka",
        title: "Konzeption und Administration (K&A)",
        duration: 90,
        tasks: [
          { title: "1. Aufgabe — Virtualisierung, RAID, USV", points: 26, questions: kaAufgabe1 },
          { title: "2. Aufgabe — IT-Sicherheit & Backup", points: 27, questions: kaAufgabe2 },
          { title: "3. Aufgabe — Mobile Device Management", points: 22, questions: kaAufgabe3 },
          { title: "4. Aufgabe — Systemsoftware / Arrays", points: 25, questions: kaAufgabe4 }
        ]
      },
      {
        id: "sommer-2025-ae",
        title: "Analyse und Entwicklung von Netzwerken (A&E)",
        duration: 90,
        tasks: [
          { title: "1. Aufgabe — Netzanalyse", points: 22, questions: aeAufgabe1 },
          { title: "2. Aufgabe — Filialanbindung & DNS", points: 26, questions: aeAufgabe2 },
          { title: "3. und 4. Aufgabe (Prüfungsbögen)", points: 10, questions: aeFortsetzung }
        ]
      },
      {
        id: "sommer-2025-wiso",
        title: "Wirtschafts- und Sozialkunde",
        duration: 60,
        tasks: [{ title: "Aufgaben 1–15 (Text) + Bögen", points: 35, questions: wisoQuestions }]
      }
    ]
  });
})();
