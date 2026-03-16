const QUESTIONS_DATA = [
  {
    "question": "Welcher der folgenden Hypervisoren ist ein Typ-1-Hypervisor (Bare Metal)?",
    "options": [
      "VMware ESXi",
      "Oracle VirtualBox",
      "VMware Workstation",
      "QEMU (ohne KVM)"
    ],
    "correct": 0,
    "explanation": "VMware ESXi ist ein Typ-1-Hypervisor, der direkt auf der Hardware läuft, ohne ein darunterliegendes Betriebssystem zu benötigen. VMware Workstation und VirtualBox sind Typ-2-Hypervisoren, die auf einem bestehenden OS installiert werden.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist ein wesentlicher Unterschied zwischen Containern und virtuellen Maschinen?",
    "options": [
      "Container haben einen eigenen Kernel, VMs teilen den Host-Kernel",
      "Container teilen den Host-Kernel, VMs haben jeweils einen eigenen Kernel",
      "Container benötigen mehr Ressourcen als VMs",
      "Container bieten stärkere Isolation als VMs"
    ],
    "correct": 1,
    "explanation": "Container teilen sich den Kernel des Host-Betriebssystems und isolieren nur auf Prozessebene. Virtuelle Maschinen haben einen eigenen Kernel, was eine stärkere Isolation, aber höheren Ressourcenverbrauch bedeutet.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Funktion hat ein Docker-Volume?",
    "options": [
      "Es definiert die Netzwerkkonfiguration eines Containers",
      "Es speichert die Logdateien des Docker-Daemons",
      "Es stellt persistenten Speicher bereit, der den Container-Lebenszyklus überlebt",
      "Es beschreibt die Anweisungen zum Erstellen eines Images"
    ],
    "correct": 2,
    "explanation": "Ein Docker-Volume ist ein persistenter Speicherbereich außerhalb des Container-Dateisystems. Da Container standardmäßig flüchtig (ephemeral) sind, werden Volumes benötigt, um Daten wie Datenbankinhalte über den Lebenszyklus eines Containers hinaus zu erhalten.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Wie funktioniert ein Active-Active-Cluster?",
    "options": [
      "Ein Knoten arbeitet, der zweite übernimmt bei Ausfall",
      "Nur bei Wartungsarbeiten werden beide Knoten aktiv",
      "Alle Knoten befinden sich im Standby-Modus",
      "Beide Knoten arbeiten gleichzeitig und teilen sich die Last"
    ],
    "correct": 3,
    "explanation": "Bei einem Active-Active-Cluster bearbeiten beide Knoten gleichzeitig Anfragen, die Last wird über einen Load Balancer verteilt. Bei Active-Passive arbeitet nur ein Knoten, der zweite übernimmt nur bei Ausfall (Failover).",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was versteht man unter vertikaler Skalierung (Scale-Up)?",
    "options": [
      "Hinzufügen weiterer Server zur Lastverteilung",
      "Hinzufügen von RAM und CPU zu einem bestehenden Server",
      "Auslagerung von Diensten in die Cloud",
      "Entfernen nicht benötigter Software zur Performance-Steigerung"
    ],
    "correct": 1,
    "explanation": "Vertikale Skalierung (Scale-Up) bedeutet, einem bestehenden Server mehr Ressourcen (RAM, stärkere CPU) hinzuzufügen. Sie ist begrenzt durch das Hardware-Maximum des Servers. Horizontale Skalierung (Scale-Out) fügt weitere Server hinzu.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welcher USV-Typ hat eine Umschaltzeit von 0 ms und eignet sich für Rechenzentren?",
    "options": [
      "VFD (Offline/Standby)",
      "VI (Line-Interactive)",
      "VFI (Online/Dauerbetrieb)",
      "AVR (Automatic Voltage Regulator)"
    ],
    "correct": 2,
    "explanation": "Eine VFI-USV (Voltage and Frequency Independent) führt den Strom permanent über Akku und Wechselrichter, wodurch die Umschaltzeit 0 ms beträgt. VFD hat 5–12 ms, VI hat 2–4 ms Umschaltzeit.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Wie viel maximale Ausfallzeit pro Jahr erlaubt eine Verfügbarkeit von 99,99 % (Four Nines)?",
    "options": [
      "8,76 Stunden",
      "3,65 Tage",
      "5,26 Minuten",
      "52,6 Minuten"
    ],
    "correct": 3,
    "explanation": "Bei 99,99 % Verfügbarkeit (Four Nines) beträgt die maximal zulässige Ausfallzeit ca. 52,6 Minuten pro Jahr. 99,9 % erlaubt 8,76 Stunden, 99,999 % nur 5,26 Minuten.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Warum wird in Servern ECC-RAM eingesetzt?",
    "options": [
      "ECC-RAM kann Speicherfehler erkennen und korrigieren",
      "ECC-RAM ist schneller als normales RAM",
      "ECC-RAM benötigt weniger Strom als normales RAM",
      "ECC-RAM hat eine höhere Speicherdichte"
    ],
    "correct": 0,
    "explanation": "ECC-RAM (Error Correcting Code) erkennt und korrigiert einzelne Bit-Fehler im Arbeitsspeicher automatisch. In Servern ist dies wichtig, da bereits ein einzelner Bit-Fehler zu Datenkorruption oder Systemabstürzen führen kann.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist der Unterschied zwischen einem Docker-Image und einem Docker-Container?",
    "options": [
      "Ein Image ist die laufende Instanz, ein Container die Vorlage",
      "Ein Container kann mehrere Images gleichzeitig ausführen",
      "Images und Container sind identisch",
      "Ein Image ist eine unveränderliche Vorlage, ein Container ist eine laufende Instanz davon"
    ],
    "correct": 3,
    "explanation": "Ein Docker-Image ist eine unveränderliche Vorlage (Blueprint), aus der Container erstellt werden. Ein Container ist eine laufende Instanz eines Images. Aus einem Image können beliebig viele Container gestartet werden.",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist die Hauptaufgabe eines Load Balancers?",
    "options": [
      "Verschlüsselung des Netzwerkverkehrs",
      "Sicherung der Daten auf externe Medien",
      "Eingehende Anfragen auf mehrere Server verteilen",
      "Überwachung der Servertemperatur"
    ],
    "correct": 2,
    "explanation": "Ein Load Balancer verteilt eingehende Anfragen auf mehrere Server, um die Last gleichmäßig aufzuteilen und Single Points of Failure zu vermeiden. Er kann hardware- oder softwarebasiert sein (z.B. HAProxy, Nginx, F5).",
    "category": "server-virtualisierung",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Ein Server hat 6 Festplatten à 4 TiB, davon eine als Hot-Spare konfiguriert. Wie groß ist die Nettokapazität im RAID 5?",
    "options": [
      "20 TiB",
      "12 TiB",
      "24 TiB",
      "16 TiB"
    ],
    "correct": 3,
    "explanation": "Hot-Spare abziehen: 6 − 1 = 5 aktive Platten. RAID-5-Formel: (n−1) × Plattengröße = (5−1) × 4 TiB = 16 TiB. Die Hot-Spare-Platte zählt nicht zur Nettokapazität.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Aussage über RAID 1 ist korrekt?",
    "options": [
      "Daten werden auf alle Platten verteilt (Striping)",
      "Mindestens 3 Platten sind erforderlich",
      "Daten werden auf eine zweite Platte gespiegelt (Mirroring)",
      "Es werden verteilte Paritätsdaten gespeichert"
    ],
    "correct": 2,
    "explanation": "RAID 1 (Mirroring) erstellt eine identische Kopie aller Daten auf einer zweiten Festplatte. Es werden mindestens 2 Platten benötigt, die Nettokapazität entspricht der Größe einer einzelnen Platte.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Speicherarchitektur arbeitet auf Dateiebene und wird über Ethernet angebunden?",
    "options": [
      "DAS (Direct Attached Storage)",
      "NAS (Network Attached Storage)",
      "SAN (Storage Area Network)",
      "JBOD"
    ],
    "correct": 1,
    "explanation": "NAS arbeitet auf Dateiebene mit Protokollen wie SMB oder NFS und wird über das bestehende Ethernet-Netzwerk angebunden. DAS und SAN arbeiten auf Blocklevel. SAN nutzt ein eigenes Speichernetzwerk (Fibre Channel oder iSCSI).",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "In welcher Reihenfolge muss ein Restore bei inkrementellen Backups durchgeführt werden, wenn Montag ein Vollbackup und Di–Do inkrementelle Backups erstellt wurden?",
    "options": [
      "Vollbackup (Mo) + Inkr. Di + Inkr. Mi + Inkr. Do",
      "Vollbackup (Mo) + letztes inkrementelles Backup (Do)",
      "Nur das Vollbackup von Montag",
      "Nur das letzte inkrementelle Backup (Do)"
    ],
    "correct": 0,
    "explanation": "Bei inkrementellen Backups sichert jedes nur die Änderungen seit dem letzten Backup. Für einen vollständigen Restore müssen das Vollbackup und alle nachfolgenden inkrementellen Backups in der richtigen Reihenfolge eingespielt werden.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Aussage beschreibt ein differenzielles Backup korrekt?",
    "options": [
      "Es sichert alle Änderungen seit dem letzten Backup beliebigen Typs",
      "Es sichert alle Änderungen seit dem letzten Vollbackup",
      "Es erstellt eine vollständige Kopie aller Daten",
      "Es sichert nur Dateien mit bestimmter Endung"
    ],
    "correct": 1,
    "explanation": "Ein differenzielles Backup sichert alle Änderungen seit dem letzten Vollbackup. Es wächst mit jedem Tag an, benötigt beim Restore aber nur das Vollbackup plus das letzte differenzielle Backup. Ein inkrementelles Backup sichert dagegen nur die Änderungen seit dem letzten Backup beliebigen Typs.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Wie viele Festplatten können bei RAID 6 gleichzeitig ausfallen, ohne dass es zu Datenverlust kommt?",
    "options": [
      "Keine",
      "1 Platte",
      "2 Platten",
      "3 Platten"
    ],
    "correct": 2,
    "explanation": "RAID 6 verwendet doppelte Parität und toleriert den gleichzeitigen Ausfall von 2 Festplatten. RAID 5 toleriert nur den Ausfall einer Platte. RAID 6 benötigt mindestens 4 Festplatten, Nettokapazität: (n−2) × Plattengröße.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was bestimmt das Recovery Point Objective (RPO)?",
    "options": [
      "Den maximal akzeptablen Datenverlust",
      "Die maximale Wiederherstellungszeit",
      "Die Anzahl der benötigten Backup-Medien",
      "Die Geschwindigkeit der Netzwerkverbindung"
    ],
    "correct": 0,
    "explanation": "Das RPO definiert, wie viel Datenverlust maximal akzeptabel ist, und bestimmt damit die Backup-Häufigkeit. Ein RPO von 4 Stunden bedeutet: mindestens alle 4 Stunden muss ein Backup erstellt werden. Das RTO (Recovery Time Objective) definiert hingegen die maximale Wiederherstellungszeit.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was passiert mit einer Hot-Spare-Festplatte im RAID-Verbund?",
    "options": [
      "Sie speichert ausschließlich die Paritätsdaten",
      "Sie wird für das Betriebssystem verwendet",
      "Sie verdoppelt die Lesegeschwindigkeit",
      "Sie übernimmt automatisch den Platz einer ausgefallenen Platte"
    ],
    "correct": 3,
    "explanation": "Eine Hot-Spare ist eine Ersatzfestplatte, die im Standby bereit steht und automatisch den Platz einer ausgefallenen Platte übernimmt. Sie zählt nicht zur Nettokapazität des RAID-Verbunds.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Wie groß ist die Nettokapazität bei 6 Festplatten à 8 TiB im RAID 10?",
    "options": [
      "48 TiB",
      "32 TiB",
      "24 TiB",
      "16 TiB"
    ],
    "correct": 2,
    "explanation": "RAID 10 besteht aus gespiegelten Paaren (RAID 1), die gestriped werden (RAID 0). Nettokapazität = (n/2) × Plattengröße = (6/2) × 8 TiB = 24 TiB. Die Hälfte der Kapazität geht durch die Spiegelung verloren.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Warum eignet sich ein SAN besonders für Datenbank- und Virtualisierungsumgebungen?",
    "options": [
      "Es ist günstiger als NAS",
      "Es verwendet das SMB-Protokoll",
      "Es benötigt keine spezielle Hardware",
      "Es arbeitet auf Blocklevel und besitzt ein eigenes Speichernetzwerk"
    ],
    "correct": 3,
    "explanation": "Ein SAN bietet Blocklevel-Zugriff über ein eigenes Speichernetzwerk (Fibre Channel oder iSCSI). Der Server kann das Dateisystem selbst verwalten (z.B. VMFS), was für Datenbanken und VMs performanter ist. Zudem belastet das SAN nicht das reguläre LAN.",
    "category": "raid-backup",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "In welcher Reihenfolge werden Berechtigungen nach dem AGDLP-Prinzip vergeben?",
    "options": [
      "Account → Globale Gruppe → Domänenlokale Gruppe → Permission",
      "Account → Domänenlokale Gruppe → Globale Gruppe → Permission",
      "Permission → Domänenlokale Gruppe → Globale Gruppe → Account",
      "Account → Universelle Gruppe → Lokale Gruppe → Permission"
    ],
    "correct": 0,
    "explanation": "AGDLP steht für Account → Global Group → Domain Local Group → Permission. Benutzerkonten werden globalen Gruppen zugewiesen, diese werden in domänenlokale Gruppen aufgenommen, und die domänenlokalen Gruppen erhalten die Berechtigungen auf Ressourcen.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "In welcher Reihenfolge werden Gruppenrichtlinien (GPOs) verarbeitet?",
    "options": [
      "OU → Domäne → Standort → Lokal",
      "Lokal → Standort → Domäne → OU",
      "Domäne → OU → Standort → Lokal",
      "Standort → Lokal → Domäne → OU"
    ],
    "correct": 1,
    "explanation": "GPOs werden in der Reihenfolge LSDOU verarbeitet: Lokal → Standort (Site) → Domäne → OU. Bei Konflikten überschreiben spätere Richtlinien die früheren. Eine GPO auf OU-Ebene hat also Vorrang vor einer auf Domänenebene.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was passiert, wenn eine GPO auf Domänenebene als 'Erzwungen' (Enforced) markiert ist und eine untergeordnete OU die Vererbung blockiert?",
    "options": [
      "Die OU-Blockierung gewinnt",
      "Der Administrator muss den Konflikt manuell lösen",
      "Beide heben sich gegenseitig auf",
      "Die erzwungene GPO wird trotzdem angewendet"
    ],
    "correct": 3,
    "explanation": "Erzwingen schlägt Blockieren. Eine als 'Enforced' markierte GPO wird auf alle untergeordneten OUs angewendet, auch wenn diese die Vererbung blockieren. Dies ist ein häufig geprüftes Detail bei der IHK.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche FSMO-Rolle existiert nur einmal im gesamten Forest und verwaltet Schema-Änderungen?",
    "options": [
      "PDC-Emulator",
      "RID-Master",
      "Schema-Master",
      "Infrastructure Master"
    ],
    "correct": 2,
    "explanation": "Der Schema-Master ist eine forest-weite FSMO-Rolle (existiert nur 1× pro Forest) und verwaltet Änderungen am AD-Schema. Der Domain Naming Master ist die zweite forest-weite Rolle. PDC-Emulator, RID-Master und Infrastructure Master existieren einmal pro Domäne.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Aussage über globale Gruppen im Active Directory ist korrekt?",
    "options": [
      "Sie können Mitglieder aus dem gesamten Forest enthalten",
      "Sie können nur Mitglieder aus der eigenen Domäne enthalten",
      "Sie können nur für E-Mail-Verteiler verwendet werden",
      "Sie werden nicht im Global Catalog angezeigt"
    ],
    "correct": 1,
    "explanation": "Globale Gruppen können nur Mitglieder aus der eigenen Domäne enthalten, sind aber für Berechtigungszuweisungen im gesamten Forest einsetzbar. Domänenlokale Gruppen hingegen können Mitglieder aus dem gesamten Forest enthalten, Berechtigungen gelten aber nur in der eigenen Domäne.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Funktion hat der PDC-Emulator NICHT?",
    "options": [
      "Verwaltung von Schema-Änderungen",
      "Bevorzugter DC für Kennwortänderungen",
      "Autoritative Zeitquelle der Domäne",
      "Standard-GPO-Bearbeitungsserver"
    ],
    "correct": 0,
    "explanation": "Die Verwaltung von Schema-Änderungen obliegt dem Schema-Master, nicht dem PDC-Emulator. Der PDC-Emulator ist für Zeitsynchronisation, Kennwortänderungen, Kontosperrungen und GPO-Bearbeitung zuständig.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches Protokoll wird im Active Directory standardmäßig zur Authentifizierung verwendet?",
    "options": [
      "NTLM",
      "RADIUS",
      "Kerberos",
      "LDAP"
    ],
    "correct": 2,
    "explanation": "Kerberos ist das Standard-Authentifizierungsprotokoll im Active Directory. Es arbeitet mit Tickets und erfordert eine Zeitdifferenz von weniger als 5 Minuten zwischen Client und DC. LDAP wird für Verzeichnisabfragen verwendet, nicht für die Authentifizierung.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was unterscheidet die Inter-Site-Replikation von der Intra-Site-Replikation im Active Directory?",
    "options": [
      "Inter-Site-Replikation ist schneller",
      "Intra-Site-Replikation erfolgt nur manuell",
      "Inter-Site-Replikation nutzt ausschließlich das SMTP-Protokoll",
      "Inter-Site-Replikation erfolgt nach Zeitplan und ist bandbreitenoptimiert"
    ],
    "correct": 3,
    "explanation": "Inter-Site-Replikation erfolgt zwischen Standorten nach konfigurierbarem Zeitplan über Site-Links und ist bandbreitenoptimiert und komprimiert. Intra-Site-Replikation innerhalb eines Standorts ist automatisch, ereignisgesteuert und sehr schnell (über RPC).",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welchen Unterschied gibt es zwischen einer Sicherheitsgruppe und einer Verteilergruppe im Active Directory?",
    "options": [
      "Sicherheitsgruppen können für Berechtigungsvergabe genutzt werden, Verteilergruppen nur für E-Mail-Verteilerlisten",
      "Verteilergruppen können für Berechtigungsvergabe genutzt werden",
      "Sicherheitsgruppen können nur für E-Mail genutzt werden",
      "Es gibt keinen funktionalen Unterschied"
    ],
    "correct": 0,
    "explanation": "Sicherheitsgruppen können für die Vergabe von Berechtigungen auf Ressourcen (z.B. NTFS-Ordner, Freigaben) verwendet werden. Verteilergruppen dienen ausschließlich als E-Mail-Verteilerlisten und können keine Berechtigungen zuweisen.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist SYSVOL im Active Directory?",
    "options": [
      "Ein Sicherheitsprotokoll für die AD-Replikation",
      "Ein Tool zur Überwachung der Domänencontroller",
      "Die zentrale Datenbank des Active Directory (NTDS.dit)",
      "Ein Ordner auf jedem DC mit GPO-Vorlagen und Anmeldeskripten"
    ],
    "correct": 3,
    "explanation": "SYSVOL (System Volume) ist ein freigegebener Ordner auf jedem Domänencontroller, der GPO-Vorlagen, Anmeldeskripte und Richtliniendateien enthält. Er wird über DFSR zwischen den DCs repliziert, damit Clients vom nächsten DC die aktuellen Richtlinien erhalten.",
    "category": "active-directory",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Ein Unternehmen mietet virtuelle Server bei AWS und installiert darauf ein eigenes Betriebssystem und eigene Software. Welches Cloud-Service-Modell nutzt es?",
    "options": [
      "SaaS",
      "PaaS",
      "IaaS",
      "On-Premises"
    ],
    "correct": 2,
    "explanation": "Bei IaaS (Infrastructure as a Service) stellt der Anbieter die Infrastruktur (virtuelle Server, Netzwerk, Storage) bereit. Der Kunde verwaltet alles ab dem Betriebssystem selbst, einschließlich Middleware und Anwendungen.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Wer ist beim Cloud-Modell IaaS für das Patchen des Betriebssystems verantwortlich?",
    "options": [
      "Der Cloud-Anbieter",
      "Niemand – es gibt automatische Updates",
      "Beide gemeinsam",
      "Der Kunde"
    ],
    "correct": 3,
    "explanation": "Beim Shared Responsibility Model ist bei IaaS der Kunde für alles ab dem Betriebssystem verantwortlich (OS-Updates, Middleware, Anwendungen, Daten). Der Anbieter verantwortet nur die physische Infrastruktur und das Netzwerk.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Aussage zu CapEx und OpEx im Cloud-Kontext ist korrekt?",
    "options": [
      "Cloud-Nutzung ist typischerweise OpEx mit laufenden Betriebskosten",
      "Der Kauf eigener Server ist typischerweise OpEx",
      "Cloud-Nutzung ist typischerweise CapEx",
      "CapEx und OpEx bedeuten dasselbe"
    ],
    "correct": 0,
    "explanation": "Cloud-Gebühren sind OpEx (Operational Expenditure) – laufende Betriebskosten, die monatlich anfallen. Der Kauf eigener Hardware ist CapEx (Capital Expenditure) – einmalige Investitionskosten, die über Jahre abgeschrieben werden.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Ein Unternehmen hat 30 Mitarbeiter, die jeweils einen Desktop-PC und ein Notebook nutzen. Wie viele CALs werden minimal benötigt?",
    "options": [
      "60 Device CALs",
      "30 User CALs",
      "30 Device CALs",
      "90 User CALs"
    ],
    "correct": 1,
    "explanation": "Bei 30 Mitarbeitern mit je 2 Geräten wären 60 Device CALs nötig, aber nur 30 User CALs. Eine User CAL erlaubt einem Benutzer die Nutzung beliebig vieler Geräte, daher sind 30 User CALs die günstigere Variante.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches der folgenden ist KEIN Merkmal einer Cloud-Umgebung nach NIST-Definition?",
    "options": [
      "On-Demand Self-Service",
      "Broad Network Access",
      "Dedizierte Hardware pro Kunde",
      "Rapid Elasticity"
    ],
    "correct": 2,
    "explanation": "Die fünf NIST-Merkmale einer Cloud sind: On-Demand Self-Service, Broad Network Access, Resource Pooling, Rapid Elasticity und Measured Service. Dedizierte Hardware pro Kunde ist das Gegenteil von Resource Pooling, bei dem Ressourcen dynamisch zwischen Mandanten geteilt werden.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches Deployment-Modell bietet maximale Kontrolle über die Daten und eignet sich für strenge Compliance-Anforderungen?",
    "options": [
      "Public Cloud",
      "Private Cloud",
      "Multi-Cloud",
      "Community Cloud"
    ],
    "correct": 1,
    "explanation": "Eine Private Cloud bietet eine dedizierte Infrastruktur für ein einzelnes Unternehmen mit voller Kontrolle über Daten und Konfiguration. Sie eignet sich für Unternehmen mit strengen Datenschutz- und Compliance-Anforderungen, ist aber kostenintensiver als eine Public Cloud.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist ein typisches Einsatzszenario für eine Hybrid Cloud?",
    "options": [
      "Vollständige Migration aller Systeme in die Public Cloud",
      "Betrieb aller Systeme ausschließlich im eigenen Rechenzentrum",
      "Nutzung mehrerer Cloud-Anbieter gleichzeitig",
      "Sensible Daten On-Premises halten und Lastspitzen in die Public Cloud auslagern"
    ],
    "correct": 3,
    "explanation": "Eine Hybrid Cloud kombiniert On-Premises-Infrastruktur mit Public-Cloud-Diensten. Typisch ist, dass sensible Daten lokal bleiben (Compliance) und für Lastspitzen zusätzliche Kapazität aus der Cloud genutzt wird (Cloud Bursting).",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welcher der folgenden Dienste ist ein Beispiel für SaaS (Software as a Service)?",
    "options": [
      "Microsoft 365",
      "Microsoft Azure Virtual Machines",
      "AWS EC2",
      "Google App Engine"
    ],
    "correct": 0,
    "explanation": "Microsoft 365 ist SaaS – eine fertige Anwendung, die nur noch genutzt und konfiguriert wird. AWS EC2 und Azure VMs sind IaaS (Infrastruktur wird bereitgestellt). Google App Engine ist PaaS (Plattform wird bereitgestellt).",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was versteht man unter Vendor Lock-in im Cloud-Kontext?",
    "options": [
      "Die physische Absicherung des Cloud-Rechenzentrums",
      "Die vertragliche Bindung an einen bestimmten Support-Level",
      "Die automatische Sperrung des Kontos nach Vertragslaufzeit",
      "Die starke Abhängigkeit von einem Cloud-Anbieter, die einen Wechsel erschwert"
    ],
    "correct": 3,
    "explanation": "Vendor Lock-in bezeichnet die Abhängigkeit von einem Cloud-Anbieter durch Nutzung proprietärer Dienste und APIs, die einen Wechsel zu einem anderen Anbieter aufwendig und kostspielig machen. Multi-Cloud-Strategien können dieses Risiko reduzieren.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist der Nachteil von Spot Instances in der Cloud?",
    "options": [
      "Sie sind teurer als On-Demand-Instanzen",
      "Sie können vom Anbieter jederzeit entzogen werden",
      "Sie sind nur mit Linux-Betriebssystemen verfügbar",
      "Sie bieten keine Netzwerkverbindung"
    ],
    "correct": 1,
    "explanation": "Spot Instances nutzen überschüssige Kapazität des Cloud-Anbieters zu stark reduziertem Preis, können aber jederzeit entzogen werden, wenn der Anbieter die Kapazität benötigt. Sie eignen sich daher nur für unterbrechbare Workloads wie Batch-Verarbeitung.",
    "category": "cloud-konzepte",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche Berechtigungen setzt der Befehl 'chmod 755 script.sh'?",
    "options": [
      "Owner: rwx, Group: rwx, Others: rwx",
      "Owner: rwx, Group: r-x, Others: r-x",
      "Owner: rw-, Group: r--, Others: r--",
      "Owner: rwx, Group: ---, Others: ---"
    ],
    "correct": 1,
    "explanation": "7 = rwx (4+2+1) für Owner, 5 = r-x (4+0+1) für Group, 5 = r-x (4+0+1) für Others. Der Owner kann lesen, schreiben und ausführen; Group und Others können lesen und ausführen.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Eine Datei hat die Berechtigung '640'. Welche Rechte hat die Gruppe (Group)?",
    "options": [
      "Lesen, Schreiben und Ausführen",
      "Lesen und Schreiben",
      "Nur Lesen",
      "Keine Rechte"
    ],
    "correct": 2,
    "explanation": "Bei chmod 640 steht die 4 für die Gruppe: 4 = r-- (nur Lesen). 6 = rw- (Owner: Lesen und Schreiben), 0 = --- (Others: keine Rechte).",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches PowerShell-Cmdlet wird verwendet, um Active-Directory-Benutzer abzufragen?",
    "options": [
      "Find-ADUser",
      "Query-ADUser",
      "Search-ADUser",
      "Get-ADUser"
    ],
    "correct": 3,
    "explanation": "Get-ADUser folgt dem PowerShell-Namensschema Verb-Noun und wird zum Abfragen von AD-Benutzern verwendet. Mit dem Parameter -Filter können bestimmte Benutzer gefiltert werden, z.B. Get-ADUser -Filter {Enabled -eq $false}.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was bedeutet der Cron-Eintrag '0 3 * * 0 /scripts/backup.sh'?",
    "options": [
      "Das Skript wird jeden Sonntag um 03:00 Uhr ausgeführt",
      "Das Skript wird jeden Tag um 03:00 Uhr ausgeführt",
      "Das Skript wird am 3. jedes Monats um 00:00 Uhr ausgeführt",
      "Das Skript wird alle 3 Stunden ausgeführt"
    ],
    "correct": 0,
    "explanation": "Cron-Syntax: Minute(0) Stunde(3) Tag(*) Monat(*) Wochentag(0=Sonntag). Der Eintrag führt das Backup-Skript jeden Sonntag um 03:00 Uhr aus.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist der Hauptunterschied zwischen Ansible und Terraform?",
    "options": [
      "Ansible ist kostenpflichtig, Terraform ist kostenlos",
      "Ansible konfiguriert bestehende Systeme, Terraform erstellt Infrastruktur-Ressourcen",
      "Terraform ist agentless, Ansible benötigt Agents auf den Zielsystemen",
      "Ansible nutzt JSON-Dateien, Terraform nutzt YAML-Dateien"
    ],
    "correct": 1,
    "explanation": "Ansible ist ein Configuration-Management-Tool, das bestehende Systeme konfiguriert (Software installieren, Einstellungen setzen). Terraform ist ein Infrastructure-Provisioning-Tool, das Cloud-Ressourcen erstellt und verwaltet. Typische Kombination: Terraform erstellt VMs, Ansible konfiguriert sie.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was bedeutet 'Agentless' im Kontext von Ansible?",
    "options": [
      "Ansible benötigt keine Installation auf den Zielsystemen und verbindet sich über SSH",
      "Ansible läuft ohne Netzwerkverbindung",
      "Ansible kann nur auf dem lokalen System ausgeführt werden",
      "Ansible benötigt keinen Kontrollserver"
    ],
    "correct": 0,
    "explanation": "Agentless bedeutet, dass auf den verwalteten Zielsystemen keine zusätzliche Software (Agent) installiert werden muss. Ansible verbindet sich über SSH (Linux) oder WinRM (Windows) mit den Zielsystemen. Dies reduziert den Verwaltungsaufwand erheblich.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Wofür wird WSUS (Windows Server Update Services) eingesetzt?",
    "options": [
      "Zur Verwaltung von Active-Directory-Gruppen",
      "Zur Überwachung von Netzwerkverkehr",
      "Zur zentralen Genehmigung und Verteilung von Microsoft-Updates",
      "Zur Erstellung von Backup-Richtlinien"
    ],
    "correct": 2,
    "explanation": "WSUS ermöglicht die zentrale Verwaltung von Microsoft-Updates. Administratoren können Updates testen, genehmigen und gezielt an Clients und Server verteilen. SCCM/MECM erweitert WSUS um Softwareverteilung und Inventarisierung.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was gibt das folgende Bash-Skript aus?\n\n#!/bin/bash\nsumme=0\nfor i in 1 2 3 4 5; do\n    summe=$((summe + i))\ndone\necho \"Ergebnis: $summe\"",
    "options": [
      "Ergebnis: 10",
      "Ergebnis: 20",
      "Ergebnis: 5",
      "Ergebnis: 15"
    ],
    "correct": 3,
    "explanation": "Die Schleife addiert die Zahlen 1 bis 5: 1+2+3+4+5 = 15. Die Variable summe wird bei jedem Durchlauf um den aktuellen Wert von i erhöht.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was bewirkt der folgende PowerShell-Befehl?\n\nGet-Service | Where-Object {$_.Status -eq \"Stopped\"} | Select-Object Name, DisplayName | Export-Csv -Path \"C:\\report.csv\"",
    "options": [
      "Er exportiert alle gestoppten Dienste mit Name und Anzeigename in eine CSV-Datei",
      "Er startet alle gestoppten Dienste neu",
      "Er löscht alle gestoppten Dienste",
      "Er zeigt alle laufenden Dienste an"
    ],
    "correct": 0,
    "explanation": "Die Pipeline filtert mit Where-Object alle Dienste mit Status 'Stopped', wählt mit Select-Object nur Name und DisplayName aus und exportiert das Ergebnis mit Export-Csv in eine CSV-Datei.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Ein Administrator setzt 'chmod 700 geheim.sh'. Wer kann diese Datei ausführen?",
    "options": [
      "Alle Benutzer des Systems",
      "Nur der Owner und die Gruppe",
      "Niemand",
      "Nur der Owner"
    ],
    "correct": 3,
    "explanation": "chmod 700 setzt: 7 = rwx für Owner, 0 = --- für Group, 0 = --- für Others. Nur der Besitzer der Datei hat Lese-, Schreib- und Ausführungsrechte. Gruppe und alle anderen haben keinerlei Zugriff.",
    "category": "automatisierung-scripting",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches Schutzziel der Informationssicherheit stellt sicher, dass Daten nicht unbemerkt verändert wurden?",
    "options": [
      "Vertraulichkeit",
      "Verfügbarkeit",
      "Integrität",
      "Authentizität"
    ],
    "correct": 2,
    "explanation": "Integrität (Integrity) stellt sicher, dass Daten nicht unbemerkt verändert wurden. Vertraulichkeit schützt vor unbefugtem Lesen, Verfügbarkeit stellt sicher, dass Systeme erreichbar sind. Maßnahmen für Integrität sind z.B. Hashwerte und digitale Signaturen.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welcher Algorithmus ist ein symmetrisches Verschlüsselungsverfahren?",
    "options": [
      "RSA",
      "Diffie-Hellman",
      "ECC",
      "AES"
    ],
    "correct": 3,
    "explanation": "AES (Advanced Encryption Standard) ist ein symmetrisches Verfahren mit einem gemeinsamen Schlüssel für Ver- und Entschlüsselung (128/192/256 Bit). RSA, Diffie-Hellman und ECC sind asymmetrische Verfahren mit Schlüsselpaaren.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Warum wird bei TLS/HTTPS eine hybride Verschlüsselung verwendet?",
    "options": [
      "Weil asymmetrische Verschlüsselung allein unsicher ist",
      "Weil symmetrische Verschlüsselung keinen sicheren Schlüsselaustausch bietet, aber schneller ist als asymmetrische",
      "Weil nur hybride Verschlüsselung gesetzlich zugelassen ist",
      "Weil beide Verfahren zusammen eine doppelte Schlüssellänge ergeben"
    ],
    "correct": 1,
    "explanation": "Asymmetrische Verschlüsselung löst das Schlüsselaustauschproblem sicher, ist aber langsam. Symmetrische Verschlüsselung ist schnell, erfordert aber einen sicheren Schlüsselaustausch. Die hybride Kombination nutzt asymmetrisch für den Schlüsseltausch und symmetrisch für die schnelle Datenübertragung.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welcher Hash-Algorithmus gilt aktuell als sicher und ist der empfohlene Standard?",
    "options": [
      "SHA-256",
      "SHA-1",
      "MD5",
      "DES"
    ],
    "correct": 0,
    "explanation": "SHA-256 erzeugt einen 256-Bit-Hash und gilt als sicher. MD5 (128 Bit) und SHA-1 (160 Bit) sind kryptographisch gebrochen – es wurden praktische Kollisionsangriffe demonstriert. DES ist ein veraltetes Verschlüsselungsverfahren, kein Hash-Algorithmus.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Womit wird bei einer digitalen Signatur der Hash der Nachricht verschlüsselt?",
    "options": [
      "Mit dem Public Key des Empfängers",
      "Mit dem Private Key des Empfängers",
      "Mit dem Public Key des Absenders",
      "Mit dem Private Key des Absenders"
    ],
    "correct": 3,
    "explanation": "Bei einer digitalen Signatur bildet der Absender einen Hash über die Nachricht und verschlüsselt diesen mit seinem Private Key. Der Empfänger verifiziert die Signatur, indem er sie mit dem Public Key des Absenders entschlüsselt und den Hash vergleicht.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist die Aufgabe einer Certificate Authority (CA) in einer PKI?",
    "options": [
      "Verschlüsselung aller Netzwerkverbindungen",
      "Verwaltung von Firewall-Regeln",
      "Ausstellung und Signierung von digitalen Zertifikaten",
      "Erstellung von Hash-Werten für Passwörter"
    ],
    "correct": 2,
    "explanation": "Eine Certificate Authority (CA) stellt digitale Zertifikate aus und signiert sie mit ihrem Private Key. Damit bestätigt sie die Zuordnung eines Public Keys zu einer Identität. Die Registration Authority (RA) prüft zuvor die Identität des Antragstellers.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Zu welcher TOM-Kategorie gehört eine Chipkarte für den Serverraum?",
    "options": [
      "Zutrittskontrolle",
      "Zugriffskontrolle",
      "Zugangskontrolle",
      "Weitergabekontrolle"
    ],
    "correct": 0,
    "explanation": "Eine Chipkarte für den Serverraum ist eine Zutrittskontrolle – sie regelt den physischen Zutritt zu Räumen. Zugangskontrolle betrifft die logische Anmeldung an Systemen (z.B. Passwort), Zugriffskontrolle den Zugriff auf bestimmte Daten (z.B. NTFS-Berechtigungen).",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche E-Mail-Sicherheitstechnologie prüft über einen DNS-TXT-Eintrag, welche Mailserver berechtigt sind, E-Mails für eine Domäne zu versenden?",
    "options": [
      "DKIM",
      "SPF",
      "DMARC",
      "S/MIME"
    ],
    "correct": 1,
    "explanation": "SPF (Sender Policy Framework) definiert in einem DNS-TXT-Eintrag, welche Mailserver autorisiert sind, E-Mails für eine Domäne zu versenden. DKIM prüft die Integrität der Nachricht per Signatur, DMARC kombiniert SPF und DKIM mit einer Policy.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist das Grundprinzip von Zero Trust?",
    "options": [
      "Keinem Gerät oder Benutzer wird automatisch vertraut – jeder Zugriff wird verifiziert",
      "Nur dem Domänencontroller wird vertraut",
      "Allen internen Netzwerkgeräten wird automatisch vertraut",
      "Vertrauen wird nur einmal bei der ersten Anmeldung geprüft"
    ],
    "correct": 0,
    "explanation": "Zero Trust folgt dem Prinzip 'Never trust, always verify'. Jeder Zugriff wird verifiziert, unabhängig davon, ob er aus dem internen oder externen Netzwerk stammt. Im Gegensatz zum traditionellen Perimeter-Modell wird kein automatisches Vertrauen gewährt.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist in einer Zertifikatskette (Chain of Trust) die oberste Instanz?",
    "options": [
      "Das Server-Zertifikat",
      "Die Zwischen-CA (Intermediate CA)",
      "Der Webbrowser des Benutzers",
      "Die Root-CA (selbstsigniert)"
    ],
    "correct": 3,
    "explanation": "Die Root-CA ist die oberste Instanz in der Zertifikatskette. Sie signiert Zwischen-CA-Zertifikate, die wiederum Server-Zertifikate signieren. Root-CA-Zertifikate sind selbstsigniert und im Browser bzw. Betriebssystem als vertrauenswürdig hinterlegt.",
    "category": "it-sicherheit",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist der Unterschied zwischen WHERE und HAVING in SQL?",
    "options": [
      "WHERE und HAVING sind identisch",
      "HAVING kann nur mit SELECT * verwendet werden",
      "WHERE wird nach GROUP BY verwendet, HAVING davor",
      "WHERE filtert Zeilen vor der Gruppierung, HAVING filtert Gruppen nach der Gruppierung"
    ],
    "correct": 3,
    "explanation": "WHERE filtert einzelne Zeilen vor der Gruppierung (GROUP BY), HAVING filtert Gruppen nach der Gruppierung. HAVING wird typischerweise mit Aggregatfunktionen wie COUNT(), AVG() oder SUM() verwendet.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was liefert ein INNER JOIN als Ergebnis?",
    "options": [
      "Nur Zeilen, die in beiden Tabellen eine Übereinstimmung haben",
      "Alle Zeilen beider Tabellen, auch ohne Übereinstimmung",
      "Alle Zeilen der linken Tabelle und passende der rechten",
      "Alle Zeilen der rechten Tabelle und passende der linken"
    ],
    "correct": 0,
    "explanation": "Ein INNER JOIN gibt nur die Zeilen zurück, die in beiden Tabellen eine Übereinstimmung haben. Zeilen ohne Partner in der anderen Tabelle werden nicht angezeigt. Für alle Zeilen einer Tabelle wird ein LEFT oder RIGHT JOIN verwendet.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches SQL-Statement findet alle Mitarbeiter, deren Name mit 'M' beginnt?",
    "options": [
      "SELECT * FROM Mitarbeiter WHERE Name = 'M%'",
      "SELECT * FROM Mitarbeiter WHERE Name LIKE 'M%'",
      "SELECT * FROM Mitarbeiter WHERE Name LIKE '_M'",
      "SELECT * FROM Mitarbeiter WHERE Name LIKE '%M'"
    ],
    "correct": 1,
    "explanation": "Der LIKE-Operator mit dem Wildcard % sucht nach Mustern. 'M%' findet alle Werte, die mit M beginnen. % steht für beliebig viele Zeichen, _ steht für genau ein Zeichen. Ohne LIKE wird = nur für exakte Übereinstimmung verwendet.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was gibt der folgende C#-Code aus?\n\nint[] arr = {4, 7, 2, 9, 1};\nint ergebnis = arr[0];\nfor (int i = 1; i < arr.Length; i++) {\n    if (arr[i] < ergebnis) {\n        ergebnis = arr[i];\n    }\n}\nConsole.WriteLine(ergebnis);",
    "options": [
      "9",
      "4",
      "1",
      "7"
    ],
    "correct": 2,
    "explanation": "Der Code findet das Minimum im Array. ergebnis startet mit 4 (arr[0]). Die Schleife vergleicht jedes Element: 7 > 4 (kein Update), 2 < 4 (ergebnis = 2), 9 > 2 (kein Update), 1 < 2 (ergebnis = 1). Ausgabe: 1.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welchen Fehler enthält der folgende Code?\n\nint[] werte = {10, 20, 30, 40};\nfor (int i = 0; i <= werte.Length; i++) {\n    Console.WriteLine(werte[i]);\n}",
    "options": [
      "Die Bedingung muss 'i < werte.Length' lauten (Off-by-one-Fehler)",
      "Die Schleife gibt keine Ausgabe",
      "Das Array hat zu wenige Elemente",
      "Die Variable i muss bei 1 starten"
    ],
    "correct": 0,
    "explanation": "'i <= werte.Length' führt zu einem Off-by-one-Fehler. Bei i = 4 (= werte.Length) wird auf werte[4] zugegriffen, aber das Array hat nur die Indizes 0 bis 3. Dies verursacht eine IndexOutOfRangeException. Korrekt: 'i < werte.Length'.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was ist der Wert der Variable 'ergebnis' nach der Ausführung?\n\nint ergebnis = 7 / 2;",
    "options": [
      "3.5",
      "0",
      "4",
      "3"
    ],
    "correct": 3,
    "explanation": "Bei der Division zweier int-Werte in C# werden die Nachkommastellen abgeschnitten (Integer-Division). 7 / 2 ergibt 3, nicht 3.5. Für ein Ergebnis mit Nachkommastellen müsste ein Operand zu double gecastet werden: (double)7 / 2 = 3.5.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches SQL-Statement zeigt die Anzahl der Mitarbeiter pro Abteilung, aber nur Abteilungen mit mehr als 5 Mitarbeitern?",
    "options": [
      "SELECT Abteilung, COUNT(*) FROM Mitarbeiter WHERE COUNT(*) > 5 GROUP BY Abteilung",
      "SELECT Abteilung, COUNT(*) FROM Mitarbeiter GROUP BY Abteilung HAVING COUNT(*) > 5",
      "SELECT Abteilung, COUNT(*) FROM Mitarbeiter GROUP BY Abteilung WHERE COUNT(*) > 5",
      "SELECT Abteilung, SUM(*) FROM Mitarbeiter GROUP BY Abteilung HAVING SUM(*) > 5"
    ],
    "correct": 1,
    "explanation": "HAVING filtert Gruppen nach der Gruppierung und ist der korrekte Ort für Bedingungen mit Aggregatfunktionen wie COUNT(*). WHERE kann keine Aggregatfunktionen enthalten und filtert einzelne Zeilen vor der Gruppierung. Die korrekte Reihenfolge ist: FROM → WHERE → GROUP BY → HAVING.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Was bedeutet das Zeichen '-' vor einem Attribut in einem UML-Klassendiagramm?",
    "options": [
      "public (öffentlich)",
      "protected (geschützt)",
      "private (privat)",
      "static (statisch)"
    ],
    "correct": 2,
    "explanation": "In UML-Klassendiagrammen steht '-' für private (nur innerhalb der eigenen Klasse zugreifbar), '+' für public (von überall zugreifbar) und '#' für protected (innerhalb der Klasse und abgeleiteter Klassen zugreifbar).",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "In der Tabelle Mitarbeiter hat Fischer keine AbteilungID (NULL). Was zeigt ein LEFT JOIN von Mitarbeiter auf Abteilung für Fischer an?",
    "options": [
      "Fischer wird nicht im Ergebnis angezeigt",
      "Fischer wird mit NULL als Abteilungsbezeichnung angezeigt",
      "Fischer wird mit einer Standardabteilung angezeigt",
      "Die Abfrage erzeugt einen Fehler"
    ],
    "correct": 1,
    "explanation": "Ein LEFT JOIN gibt alle Zeilen der linken Tabelle zurück, auch wenn keine Übereinstimmung in der rechten Tabelle existiert. Fischer hat keine AbteilungID, daher wird die Abteilungsbezeichnung als NULL angezeigt. Bei einem INNER JOIN würde Fischer nicht im Ergebnis erscheinen.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welche SQL-Aggregatfunktion berechnet den Durchschnittswert einer Spalte?",
    "options": [
      "AVG()",
      "COUNT()",
      "SUM()",
      "MAX()"
    ],
    "correct": 0,
    "explanation": "AVG() berechnet den arithmetischen Mittelwert (Durchschnitt) einer numerischen Spalte. SUM() bildet die Summe, COUNT() zählt die Anzahl der Zeilen, MAX() gibt den größten Wert zurück.",
    "category": "sql-code",
    "section": "01-Konzeption-Administration"
  },
  {
    "question": "Welches Protokoll arbeitet auf der Transportschicht (Schicht 4) des OSI-Modells?",
    "options": [
      "ARP",
      "Ethernet",
      "TCP",
      "HTTP"
    ],
    "correct": 2,
    "explanation": "TCP (Transmission Control Protocol) arbeitet auf der Transportschicht (Schicht 4) des OSI-Modells. HTTP gehört zu Schicht 7, Ethernet zu Schicht 2 und ARP zu Schicht 2/3.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie heißt die PDU (Protocol Data Unit) auf der Vermittlungsschicht (Schicht 3) des OSI-Modells?",
    "options": [
      "Paket",
      "Segment",
      "Frame",
      "Bit"
    ],
    "correct": 0,
    "explanation": "Auf der Vermittlungsschicht (Schicht 3) heißt die PDU 'Paket'. Segmente gehören zu Schicht 4 (Transport), Frames zu Schicht 2 (Sicherung) und Bits zu Schicht 1 (Bitübertragung).",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Port wird standardmäßig von HTTPS verwendet?",
    "options": [
      "80",
      "8080",
      "8443",
      "443"
    ],
    "correct": 3,
    "explanation": "HTTPS verwendet standardmäßig Port 443. Port 80 wird von HTTP verwendet, Ports 8080 und 8443 sind häufig verwendete Alternativports.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "In welcher Reihenfolge läuft der TCP 3-Way-Handshake ab?",
    "options": [
      "ACK → SYN-ACK → SYN",
      "SYN → SYN-ACK → ACK",
      "SYN → ACK → SYN-ACK",
      "SYN-ACK → SYN → ACK"
    ],
    "correct": 1,
    "explanation": "Der TCP 3-Way-Handshake läuft in der Reihenfolge SYN → SYN-ACK → ACK ab. Der Client sendet ein SYN-Paket, der Server antwortet mit SYN-ACK, und der Client bestätigt mit ACK.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher DNS-Record-Typ wird für die Zuordnung eines Domainnamens zu einer IPv6-Adresse verwendet?",
    "options": [
      "AAAA",
      "A",
      "MX",
      "PTR"
    ],
    "correct": 0,
    "explanation": "Der AAAA-Record (Quad-A) ordnet einen Domainnamen einer IPv6-Adresse zu. Der A-Record ist für IPv4, MX für Mailserver und PTR für die Reverse-DNS-Auflösung.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wofür steht die Abkürzung DORA im DHCP-Prozess?",
    "options": [
      "Detect, Open, Reply, Accept",
      "Detect, Offer, Reply, Acknowledge",
      "Discover, Offer, Request, Acknowledge",
      "Discover, Open, Request, Accept"
    ],
    "correct": 2,
    "explanation": "DORA steht für Discover, Offer, Request und Acknowledge – die vier Schritte, die ein DHCP-Client beim Erhalt einer IP-Adresse durchläuft.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Aufgabe hat das ARP-Protokoll?",
    "options": [
      "Auflösung von Domainnamen zu IP-Adressen",
      "Verschlüsselung von Netzwerkpaketen",
      "Zuweisung von IP-Adressen an Clients",
      "Auflösung von IP-Adressen zu MAC-Adressen"
    ],
    "correct": 3,
    "explanation": "ARP (Address Resolution Protocol) löst bekannte IP-Adressen in MAC-Adressen auf. Dies ist notwendig, damit Geräte im lokalen Netzwerk auf Schicht 2 (Ethernet) miteinander kommunizieren können.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches Transportprotokoll ist verbindungslos und bietet keine Garantie für die Zustellung von Paketen?",
    "options": [
      "UDP",
      "TCP",
      "SCTP",
      "ICMP"
    ],
    "correct": 0,
    "explanation": "UDP (User Datagram Protocol) ist verbindungslos und bietet keine Garantie für Zustellung, Reihenfolge oder Fehlerkorrektur. TCP hingegen ist verbindungsorientiert mit garantierter Zustellung.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Schicht des TCP/IP-Modells entsprechen die OSI-Schichten 5, 6 und 7?",
    "options": [
      "Netzzugangsschicht",
      "Internetschicht",
      "Transportschicht",
      "Anwendungsschicht"
    ],
    "correct": 3,
    "explanation": "Im TCP/IP-Modell werden die OSI-Schichten 5 (Sitzung), 6 (Darstellung) und 7 (Anwendung) in einer einzigen Anwendungsschicht zusammengefasst.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Port wird standardmäßig für SSH verwendet?",
    "options": [
      "21",
      "22",
      "23",
      "25"
    ],
    "correct": 1,
    "explanation": "SSH (Secure Shell) verwendet standardmäßig Port 22. Port 21 ist FTP, Port 23 ist Telnet und Port 25 ist SMTP.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher DNS-Record-Typ verweist auf den zuständigen Mailserver einer Domain?",
    "options": [
      "A",
      "NS",
      "MX",
      "CNAME"
    ],
    "correct": 2,
    "explanation": "Der MX-Record (Mail Exchange) verweist auf den zuständigen Mailserver einer Domain. A-Records verweisen auf IPv4-Adressen, NS auf autoritative Nameserver und CNAME auf Aliase.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Werkzeuge verwenden das Protokoll ICMP zur Netzwerkdiagnose?",
    "options": [
      "nslookup und dig",
      "ping und traceroute",
      "netstat und arp",
      "ssh und telnet"
    ],
    "correct": 1,
    "explanation": "Sowohl ping (ICMP Echo Request/Reply) als auch traceroute (ICMP Time Exceeded) verwenden ICMP zur Netzwerkdiagnose.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wozu wird ein DHCP-Relay-Agent eingesetzt?",
    "options": [
      "Zur Weiterleitung von DHCP-Anfragen über Subnetzgrenzen hinweg",
      "Zur Verschlüsselung von DHCP-Nachrichten",
      "Zur Filterung unerlaubter DHCP-Server",
      "Zur Beschleunigung der DHCP-Adressvergabe"
    ],
    "correct": 0,
    "explanation": "Ein DHCP-Relay-Agent leitet DHCP-Broadcasts als Unicast an einen DHCP-Server in einem anderen Subnetz weiter, da Broadcasts nicht über Router hinweg übertragen werden.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Port wird standardmäßig für LDAPS (LDAP über SSL/TLS) verwendet?",
    "options": [
      "389",
      "443",
      "3389",
      "636"
    ],
    "correct": 3,
    "explanation": "LDAPS verwendet standardmäßig Port 636. Port 389 ist für unverschlüsseltes LDAP, 443 für HTTPS und 3389 für RDP.",
    "category": "netzwerkprotokolle-osi",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Subnetzmaske entspricht der CIDR-Notation /24?",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.128",
      "255.255.255.192"
    ],
    "correct": 1,
    "explanation": "Bei /24 sind die ersten 24 Bit der Subnetzmaske gesetzt: 11111111.11111111.11111111.00000000 = 255.255.255.0.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Ein Host hat die IP-Adresse 192.168.10.130/26. Wie lautet die Netzwerkadresse?",
    "options": [
      "192.168.10.0",
      "192.168.10.64",
      "192.168.10.192",
      "192.168.10.128"
    ],
    "correct": 3,
    "explanation": "Bei /26 beträgt die Blockgröße 256 − 192 = 64. Die Netzwerkgrenzen liegen bei .0, .64, .128, .192. Da 130 im Bereich 128–191 liegt, ist die Netzwerkadresse 192.168.10.128.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie viele nutzbare Hostadressen stehen in einem /28-Subnetz zur Verfügung?",
    "options": [
      "14",
      "16",
      "30",
      "32"
    ],
    "correct": 0,
    "explanation": "Bei /28 bleiben 32 − 28 = 4 Hostbits. 2⁴ = 16 Adressen, abzüglich Netzwerk- und Broadcastadresse ergibt 16 − 2 = 14 nutzbare Hostadressen.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher IP-Adressbereich gehört zu den privaten Adressen nach RFC 1918 (Klasse B)?",
    "options": [
      "10.0.0.0 – 10.255.255.255",
      "169.254.0.0 – 169.254.255.255",
      "172.16.0.0 – 172.31.255.255",
      "192.168.0.0 – 192.168.255.255"
    ],
    "correct": 2,
    "explanation": "Der private Klasse-B-Bereich nach RFC 1918 ist 172.16.0.0 – 172.31.255.255 (/12). 10.0.0.0/8 ist Klasse A, 192.168.0.0/16 ist Klasse C und 169.254.0.0/16 ist APIPA (kein RFC-1918-Bereich).",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist APIPA und welchen Adressbereich verwendet es?",
    "options": [
      "Automatische DNS-Konfiguration im Bereich 10.0.0.0/8",
      "Automatische Routenkonfiguration im Bereich 192.168.0.0/16",
      "Automatische VLAN-Zuweisung im Bereich 172.16.0.0/12",
      "Automatische IP-Konfiguration im Bereich 169.254.0.0/16"
    ],
    "correct": 3,
    "explanation": "APIPA (Automatic Private IP Addressing) weist einem Host automatisch eine IP-Adresse aus dem Bereich 169.254.0.0/16 zu, wenn kein DHCP-Server erreichbar ist.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche ist die maximal gekürzte (empfohlene) Form der IPv6-Adresse 2001:0db8:0000:0000:0000:0000:0000:0001?",
    "options": [
      "2001:db8::1",
      "2001:db8:0:0:0:0:0:1",
      "2001:0db8::0001",
      "2001:db8:0::0:0:0:1"
    ],
    "correct": 0,
    "explanation": "Die maximal gekürzte Form entfernt alle führenden Nullen und ersetzt die längste zusammenhängende Folge von Null-Gruppen durch ::. Das Ergebnis ist 2001:db8::1.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher IPv6-Adresstyp verwendet das Präfix fe80::/10?",
    "options": [
      "Global Unicast",
      "Link-Local",
      "Unique Local",
      "Multicast"
    ],
    "correct": 1,
    "explanation": "Link-Local-Adressen beginnen mit dem Präfix fe80::/10 und sind nur im lokalen Netzwerksegment gültig. Global Unicast beginnt mit 2000::/3, Unique Local mit fc00::/7 und Multicast mit ff00::/8.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie wird bei der EUI-64-Methode aus einer MAC-Adresse ein 64-Bit-Interface-Identifier gebildet?",
    "options": [
      "Die MAC-Adresse wird direkt als 48-Bit-Interface-ID verwendet",
      "Die MAC-Adresse wird auf 64 Bit mit Nullen aufgefüllt",
      "FFFE wird in die Mitte der MAC-Adresse eingefügt und das 7. Bit (U/L) invertiert",
      "Die MAC-Adresse wird mit einem zufälligen 16-Bit-Wert XOR-verknüpft"
    ],
    "correct": 2,
    "explanation": "Bei EUI-64 wird die 48-Bit-MAC-Adresse in zwei Hälften geteilt, FFFE in die Mitte eingefügt (ergibt 64 Bit) und anschließend das 7. Bit (Universal/Local-Bit) invertiert.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was beschreibt SLAAC (Stateless Address Autoconfiguration) bei IPv6?",
    "options": [
      "Ein Server weist IPv6-Adressen zentral zu",
      "Ein Verfahren zur automatischen VLAN-Zuweisung",
      "Ein Protokoll zur Namensauflösung in IPv6-Netzen",
      "Ein Host konfiguriert seine IPv6-Adresse selbstständig mithilfe von Router Advertisements"
    ],
    "correct": 3,
    "explanation": "Bei SLAAC konfiguriert ein Host seine IPv6-Adresse eigenständig, indem er das Netzwerk-Präfix aus Router Advertisements empfängt und den Interface Identifier selbst generiert (z.B. per EUI-64 oder Privacy Extensions).",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Subnetzmaske hat ein /20-Netzwerk?",
    "options": [
      "255.255.224.0",
      "255.255.240.0",
      "255.255.248.0",
      "255.255.252.0"
    ],
    "correct": 1,
    "explanation": "Bei /20 sind 20 Bits gesetzt: 11111111.11111111.11110000.00000000 = 255.255.240.0. Die letzten 4 Bit des dritten Oktetts ergeben den Wert 240 (= 128+64+32+16).",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie lautet die Broadcast-Adresse des Netzwerks 10.1.1.0/24?",
    "options": [
      "10.1.1.1",
      "10.1.2.0",
      "10.1.1.255",
      "10.1.1.254"
    ],
    "correct": 2,
    "explanation": "Bei einem /24-Netzwerk sind die letzten 8 Bit der Hostanteil. Die Broadcast-Adresse hat alle Hostbits auf 1 gesetzt: 10.1.1.11111111 = 10.1.1.255.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches ist die kleinste Subnetzmaske (längster Präfix), die mindestens 50 Hosts aufnehmen kann?",
    "options": [
      "/26",
      "/25",
      "/27",
      "/28"
    ],
    "correct": 0,
    "explanation": "/26 ergibt 2⁶ − 2 = 62 nutzbare Hostadressen, was für 50 Hosts ausreicht. /27 hätte nur 2⁵ − 2 = 30 (zu wenig). /25 mit 126 Hosts wäre möglich, aber nicht das kleinste Subnetz.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Subnetzmaske wird typischerweise für Point-to-Point-Verbindungen zwischen zwei Routern verwendet?",
    "options": [
      "/28",
      "/29",
      "/32",
      "/30"
    ],
    "correct": 3,
    "explanation": "Für Point-to-Point-Verbindungen wird typischerweise /30 verwendet. Dieses Subnetz bietet genau 2 nutzbare Hostadressen (2² − 2 = 2) – eine für jedes Ende der Verbindung.",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Ein Netzwerk 172.16.0.0/16 soll in Subnetze mit jeweils mindestens 500 Hosts unterteilt werden. Welche Subnetzmaske ist die effizienteste?",
    "options": [
      "/22",
      "/24",
      "/23",
      "/25"
    ],
    "correct": 2,
    "explanation": "/23 ergibt 2⁹ − 2 = 510 nutzbare Hosts, was knapp für 500 Hosts ausreicht. /24 hätte nur 254 (zu wenig), /22 hätte 1022 (unnötig groß).",
    "category": "subnetting",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was beschreibt die Default Route (0.0.0.0/0) in einer Routing-Tabelle?",
    "options": [
      "Die Route, die für alle nicht spezifisch bekannten Ziele verwendet wird",
      "Die Route mit der höchsten Priorität im Netzwerk",
      "Die Route zum direkt verbundenen Netzwerk",
      "Die Route mit der niedrigsten Metrik"
    ],
    "correct": 0,
    "explanation": "Die Default Route (0.0.0.0/0) wird verwendet, wenn keine spezifischere Route in der Routing-Tabelle für das Zielnetz existiert. Sie ist der Auffangpfad für unbekannte Ziele.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Nach welchem Prinzip wählt ein Router bei mehreren übereinstimmenden Routen die beste aus?",
    "options": [
      "Round Robin",
      "First Match",
      "Longest Prefix Match",
      "Shortest Path First"
    ],
    "correct": 2,
    "explanation": "Beim Longest Prefix Match wählt der Router die Route mit der längsten übereinstimmenden Subnetzmaske (spezifischstes Präfix). Eine /28-Route hat Vorrang vor einer /24-Route.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Administrative Distance hat eine statische Route standardmäßig?",
    "options": [
      "0",
      "1",
      "90",
      "110"
    ],
    "correct": 1,
    "explanation": "Eine statische Route hat standardmäßig eine Administrative Distance von 1. Connected Routes haben 0, OSPF hat 110 und RIP hat 120. Je niedriger der Wert, desto bevorzugter die Route.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist ein wesentlicher Nachteil von statischem Routing?",
    "options": [
      "Es verursacht hohen Netzwerkverkehr durch Routing-Updates",
      "Es kann keine Default Route verwenden",
      "Es ist unsicherer als dynamisches Routing",
      "Es skaliert schlecht, da alle Routen manuell konfiguriert werden müssen"
    ],
    "correct": 3,
    "explanation": "Statisches Routing erfordert manuelle Konfiguration und Pflege aller Routen. In großen Netzwerken ist dies aufwändig und fehleranfällig, weshalb dynamische Routing-Protokolle bevorzugt werden.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie viele Hops kann RIP maximal als Metrik verwenden, bevor ein Netzwerk als unerreichbar gilt?",
    "options": [
      "10",
      "255",
      "15",
      "16"
    ],
    "correct": 2,
    "explanation": "RIP verwendet Hop Count als Metrik mit einem Maximum von 15 Hops. Ein Wert von 16 bedeutet 'infinity' – das Zielnetz gilt als unerreichbar.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Algorithmus wird von OSPF zur Berechnung des kürzesten Pfades verwendet?",
    "options": [
      "Dijkstra",
      "Bellman-Ford",
      "Floyd-Warshall",
      "A*"
    ],
    "correct": 0,
    "explanation": "OSPF (Open Shortest Path First) verwendet den Dijkstra-Algorithmus (Shortest Path First), um den kürzesten Pfad zu jedem Zielnetz basierend auf der Bandbreitenmetrik (Cost) zu berechnen.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Administrative Distance hat OSPF standardmäßig?",
    "options": [
      "1",
      "90",
      "120",
      "110"
    ],
    "correct": 3,
    "explanation": "OSPF hat eine Administrative Distance von 110. Zum Vergleich: Connected = 0, Static = 1, EIGRP = 90, RIP = 120. Bei mehreren Routing-Quellen wird die Route mit der niedrigsten AD bevorzugt.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wozu dient das Default Gateway in einem Netzwerk?",
    "options": [
      "Zur Auflösung von MAC-Adressen",
      "Zur Weiterleitung von Paketen an Ziele außerhalb des lokalen Subnetzes",
      "Zur Filterung von Netzwerkpaketen",
      "Zur Zuweisung von IP-Adressen"
    ],
    "correct": 1,
    "explanation": "Das Default Gateway ist die IP-Adresse des Routers im lokalen Netzwerk, an den Pakete gesendet werden, die für Ziele außerhalb des eigenen Subnetzes bestimmt sind.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Metrik verwendet OSPF zur Berechnung der besten Route?",
    "options": [
      "Bandbreite (Cost)",
      "Hop Count",
      "Delay",
      "MTU"
    ],
    "correct": 0,
    "explanation": "OSPF berechnet die Kosten (Cost) basierend auf der Bandbreite der Schnittstellen. Die Formel lautet: Cost = Referenzbandbreite / Schnittstellenbandbreite. Niedrigere Kosten bedeuten einen bevorzugten Pfad.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie lautet die korrekte Cisco-IOS-Syntax für eine statische Route zum Netzwerk 10.0.0.0/8 über den Next Hop 192.168.1.1?",
    "options": [
      "route add 10.0.0.0 mask 255.0.0.0 192.168.1.1",
      "static route 10.0.0.0/8 via 192.168.1.1",
      "ip route 10.0.0.0 255.0.0.0 192.168.1.1",
      "ip route 10.0.0.0/8 next-hop 192.168.1.1"
    ],
    "correct": 2,
    "explanation": "Die Cisco-IOS-Syntax für eine statische Route lautet: ip route [Zielnetz] [Subnetzmaske] [Next-Hop-Adresse]. Die CIDR-Notation wird in Cisco IOS nicht verwendet.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "In einer Routing-Tabelle stehen die Einträge 10.0.0.0/8, 10.1.0.0/16 und 10.1.1.0/24. Über welche Route wird ein Paket mit Ziel 10.1.1.50 weitergeleitet?",
    "options": [
      "10.0.0.0/8",
      "10.1.0.0/16",
      "Das Paket wird verworfen",
      "10.1.1.0/24"
    ],
    "correct": 3,
    "explanation": "Nach dem Longest-Prefix-Match-Prinzip wird die spezifischste passende Route gewählt. /24 ist spezifischer als /16 und /8, daher wird das Paket über 10.1.1.0/24 weitergeleitet.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches Routing-Protokoll wird hauptsächlich zwischen autonomen Systemen (AS) im Internet eingesetzt?",
    "options": [
      "OSPF",
      "BGP",
      "RIP",
      "EIGRP"
    ],
    "correct": 1,
    "explanation": "BGP (Border Gateway Protocol) ist das zentrale Routing-Protokoll zwischen autonomen Systemen im Internet. OSPF, RIP und EIGRP sind Interior Gateway Protocols (IGPs) für den Einsatz innerhalb eines AS.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was bezeichnet der Begriff 'Area' in OSPF?",
    "options": [
      "Ein physisches Netzwerksegment",
      "Ein VLAN-Bereich",
      "Eine logische Gruppierung von Routern und Netzwerken zur Reduzierung von Routing-Overhead",
      "Ein Sicherheitsbereich für Firewalls"
    ],
    "correct": 2,
    "explanation": "OSPF verwendet Areas zur logischen Segmentierung des Netzwerks. Dies reduziert den Routing-Overhead, da LSA-Updates innerhalb einer Area begrenzt werden. Die Backbone-Area ist immer Area 0.",
    "category": "routing",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie lernt ein Switch die MAC-Adressen der angeschlossenen Geräte?",
    "options": [
      "Durch Auswertung der Quell-MAC-Adresse eingehender Frames",
      "Durch manuelle Konfiguration des Administrators",
      "Durch Broadcast-Anfragen an alle Ports",
      "Durch das DNS-Protokoll"
    ],
    "correct": 0,
    "explanation": "Ein Switch lernt MAC-Adressen, indem er die Quell-MAC-Adresse jedes eingehenden Frames zusammen mit dem Eingangsport in seiner MAC-Adresstabelle (CAM-Tabelle) speichert.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was unterscheidet einen Layer-3-Switch von einem Layer-2-Switch?",
    "options": [
      "Ein Layer-3-Switch hat mehr physische Ports",
      "Ein Layer-3-Switch arbeitet ausschließlich mit MAC-Adressen",
      "Ein Layer-3-Switch unterstützt keine VLANs",
      "Ein Layer-3-Switch kann zusätzlich Routing-Entscheidungen auf IP-Ebene treffen"
    ],
    "correct": 3,
    "explanation": "Ein Layer-3-Switch kann neben dem normalen Switching auch Routing-Entscheidungen auf Basis von IP-Adressen treffen. Er kombiniert die Geschwindigkeit eines Switches mit der Routing-Fähigkeit eines Routers.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welchen Hauptvorteil bieten VLANs in einem Netzwerk?",
    "options": [
      "Verschlüsselung des gesamten Netzwerkverkehrs",
      "Logische Trennung von Netzwerken auf einem physischen Switch zur Verbesserung von Sicherheit und Performance",
      "Automatische IP-Adressvergabe an Endgeräte",
      "Erhöhung der physischen Netzwerkbandbreite"
    ],
    "correct": 1,
    "explanation": "VLANs ermöglichen die logische Segmentierung eines physischen Netzwerks. Dadurch werden Broadcast-Domänen verkleinert, die Sicherheit erhöht und die Netzwerkstruktur flexibler gestaltet.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist der Unterschied zwischen einem Access Port und einem Trunk Port auf einem Switch?",
    "options": [
      "Access Ports sind schneller als Trunk Ports",
      "Access Ports verwenden VLAN-Tagging, Trunk Ports nicht",
      "Access Ports gehören zu genau einem VLAN, Trunk Ports transportieren Datenverkehr mehrerer VLANs",
      "Access Ports sind nur für Server, Trunk Ports nur für Clients"
    ],
    "correct": 2,
    "explanation": "Ein Access Port ist einem einzigen VLAN zugeordnet und verbindet typischerweise Endgeräte. Ein Trunk Port transportiert den Datenverkehr mehrerer VLANs über eine einzige Verbindung, typischerweise zwischen Switches.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches Protokoll wird für VLAN-Tagging auf Trunk-Verbindungen nach IEEE-Standard verwendet?",
    "options": [
      "802.1Q",
      "802.3",
      "802.11",
      "ISL"
    ],
    "correct": 0,
    "explanation": "IEEE 802.1Q ist der Standard für VLAN-Tagging auf Trunk-Verbindungen. Es fügt dem Ethernet-Frame ein 4-Byte-Tag mit der VLAN-ID hinzu. ISL ist ein älteres Cisco-proprietäres Protokoll.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist das Native VLAN bei 802.1Q-Trunks?",
    "options": [
      "Das VLAN mit der höchsten Priorität",
      "Das Standard-Management-VLAN",
      "Das VLAN für Voice-Traffic",
      "Das VLAN, dessen Datenverkehr auf dem Trunk ungetaggt übertragen wird"
    ],
    "correct": 3,
    "explanation": "Das Native VLAN ist das VLAN, dessen Frames auf einer 802.1Q-Trunk-Verbindung ohne Tag übertragen werden. Standardmäßig ist dies VLAN 1. Aus Sicherheitsgründen sollte es geändert werden.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches Verfahren ermöglicht Inter-VLAN-Routing über einen einzelnen physischen Router-Port?",
    "options": [
      "Port Mirroring",
      "NAT",
      "Router-on-a-Stick",
      "Port Forwarding"
    ],
    "correct": 2,
    "explanation": "Bei Router-on-a-Stick wird ein einziger physischer Router-Port als Trunk konfiguriert und in logische Subinterfaces unterteilt – eines pro VLAN. Der Router routet dann zwischen den VLANs.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Aufgabe hat das Spanning Tree Protocol (STP) in einem geswitchten Netzwerk?",
    "options": [
      "Verschlüsselung von VLAN-Daten",
      "Verhinderung von Switching-Schleifen (Loops) in redundanten Topologien",
      "Lastverteilung zwischen Switches",
      "Automatische VLAN-Zuweisung"
    ],
    "correct": 1,
    "explanation": "STP verhindert Switching-Schleifen in redundanten Netzwerktopologien, indem es bestimmte Ports blockiert. Ohne STP würden Broadcast-Stürme entstehen, die das Netzwerk lahmlegen können.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "In welcher Reihenfolge durchläuft ein Switch-Port die STP-Zustände?",
    "options": [
      "Blocking → Listening → Learning → Forwarding",
      "Blocking → Learning → Listening → Forwarding",
      "Listening → Blocking → Learning → Forwarding",
      "Forwarding → Learning → Listening → Blocking"
    ],
    "correct": 0,
    "explanation": "Die STP-Port-Zustände sind: Blocking (keine Frames weitergeleitet), Listening (empfängt BPDUs), Learning (lernt MAC-Adressen) und Forwarding (leitet Frames weiter). Der Übergang dauert standardmäßig ca. 50 Sekunden.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist der Hauptvorteil von RSTP (Rapid Spanning Tree Protocol) gegenüber klassischem STP?",
    "options": [
      "Unterstützung von mehr VLANs",
      "Bessere Verschlüsselung",
      "Höhere Bandbreite",
      "Deutlich schnellere Konvergenzzeit"
    ],
    "correct": 3,
    "explanation": "RSTP (IEEE 802.1w) konvergiert in wenigen Sekunden statt der ca. 50 Sekunden bei klassischem STP. Dies reduziert die Netzwerk-Ausfallzeit bei Topologieänderungen erheblich.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wofür wird LACP (Link Aggregation Control Protocol) eingesetzt?",
    "options": [
      "Zur Verschlüsselung von Netzwerkverbindungen",
      "Zur Priorisierung von Netzwerkverkehr",
      "Zur Bündelung mehrerer physischer Links zu einem logischen Link",
      "Zur automatischen VLAN-Konfiguration"
    ],
    "correct": 2,
    "explanation": "LACP (IEEE 802.3ad) ermöglicht die Bündelung mehrerer physischer Netzwerkverbindungen zu einem logischen Link (Port Channel). Dies erhöht die Bandbreite und bietet Redundanz bei Ausfall einzelner Links.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Bis zu welcher maximalen Übertragungsrate ist ein Cat-6a-Kabel bei 100 Metern spezifiziert?",
    "options": [
      "1 Gbit/s",
      "10 Gbit/s",
      "40 Gbit/s",
      "100 Gbit/s"
    ],
    "correct": 1,
    "explanation": "Cat-6a-Kabel unterstützen Übertragungsraten bis 10 Gbit/s bei einer Frequenz von 500 MHz über eine maximale Länge von 100 Metern. Cat-5e unterstützt bis 1 Gbit/s.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist ein VLAN-Hopping-Angriff?",
    "options": [
      "Das Abhören von Netzwerkverkehr in einem VLAN",
      "Das Überlasten eines VLAN mit Broadcast-Paketen",
      "Das Deaktivieren von VLANs auf einem Switch",
      "Das unautorisierte Wechseln zwischen VLANs durch Manipulation von 802.1Q-Tags"
    ],
    "correct": 3,
    "explanation": "Beim VLAN-Hopping werden doppelt getaggte 802.1Q-Frames oder Switch-Spoofing verwendet, um unauthorisiert auf andere VLANs zuzugreifen. Gegenmaßnahmen sind das Ändern des Native VLAN und das Deaktivieren ungenutzter Ports.",
    "category": "switching-vlans",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Firewall-Typ analysiert den Verbindungszustand und kann zwischen neuen Anfragen und Antwortpaketen bestehender Verbindungen unterscheiden?",
    "options": [
      "Paketfilter-Firewall",
      "Proxy-Firewall",
      "Stateful Packet Inspection (SPI)",
      "Application Layer Firewall"
    ],
    "correct": 2,
    "explanation": "Eine SPI-Firewall (Stateful Packet Inspection) überwacht den Zustand von Netzwerkverbindungen und kann zwischen neuen Verbindungsanfragen und Antwortpaketen bestehender Verbindungen unterscheiden.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie werden Firewall-Regeln standardmäßig abgearbeitet?",
    "options": [
      "Von oben nach unten – erste Übereinstimmung gilt (First Match)",
      "Von unten nach oben – letzte Übereinstimmung gilt",
      "Parallel – alle passenden Regeln werden angewendet",
      "Alphabetisch nach Regelname"
    ],
    "correct": 0,
    "explanation": "Firewall-Regeln werden sequentiell von oben nach unten (Top-Down) abgearbeitet. Die erste Regel, die auf ein Paket zutrifft (First Match), wird angewendet und die weitere Prüfung beendet.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist PAT (Port Address Translation)?",
    "options": [
      "Eine Methode zur Port-Bündelung",
      "Eine Sonderform von NAT, bei der viele interne IPs über eine öffentliche IP mit verschiedenen Portnummern übersetzt werden",
      "Eine Firewall-Technik zur Port-Filterung",
      "Eine Methode zur Priorisierung von Netzwerkports"
    ],
    "correct": 1,
    "explanation": "PAT (auch NAT Overload) ermöglicht es, viele interne IP-Adressen über eine einzige öffentliche IP-Adresse ins Internet zu bringen, indem verschiedene Quell-Ports zur Unterscheidung der Verbindungen verwendet werden.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie ist eine typische DMZ (Demilitarized Zone) aufgebaut?",
    "options": [
      "Ein verschlüsseltes VPN-Netzwerk",
      "Ein einzelnes Netzwerk ohne Firewall",
      "Ein VLAN für den Gastzugriff",
      "Ein Netzwerk zwischen zwei Firewalls, das öffentlich erreichbare Dienste beherbergt"
    ],
    "correct": 3,
    "explanation": "Eine DMZ wird typischerweise zwischen zwei Firewalls platziert. Die äußere Firewall schützt die DMZ vor dem Internet, die innere Firewall schützt das interne LAN vor der DMZ. Öffentlich erreichbare Server stehen in der DMZ.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was unterscheidet ein IDS (Intrusion Detection System) von einem IPS (Intrusion Prevention System)?",
    "options": [
      "IDS ist hardware-basiert, IPS software-basiert",
      "IDS arbeitet auf Layer 2, IPS auf Layer 3",
      "IDS erkennt Angriffe und meldet sie passiv, IPS erkennt und blockiert Angriffe aktiv",
      "IDS ist für interne Netzwerke, IPS für externe"
    ],
    "correct": 2,
    "explanation": "Ein IDS erkennt verdächtige Aktivitäten und alarmiert den Administrator (passiv). Ein IPS kann zusätzlich automatisch Gegenmaßnahmen ergreifen und Angriffe aktiv blockieren (inline).",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist der Unterschied zwischen einem Site-to-Site-VPN und einem End-to-Site-VPN?",
    "options": [
      "Site-to-Site verbindet zwei Standortnetzwerke permanent, End-to-Site verbindet einen einzelnen Client temporär mit einem Netzwerk",
      "Site-to-Site ist verschlüsselt, End-to-Site nicht",
      "Site-to-Site verwendet IPsec, End-to-Site nur SSL",
      "Es gibt keinen funktionalen Unterschied"
    ],
    "correct": 0,
    "explanation": "Ein Site-to-Site-VPN verbindet zwei Standortnetzwerke dauerhaft miteinander (z.B. Hauptsitz und Filiale). Ein End-to-Site-VPN (Remote Access VPN) verbindet einzelne Clients temporär mit dem Unternehmensnetzwerk.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches VPN-Protokoll gilt als besonders performant aufgrund seiner modernen Kryptographie und seines schlanken Codes?",
    "options": [
      "IPsec",
      "PPTP",
      "OpenVPN",
      "WireGuard"
    ],
    "correct": 3,
    "explanation": "WireGuard ist ein modernes VPN-Protokoll mit schlankem Code (ca. 4.000 Zeilen), das State-of-the-Art-Kryptographie verwendet und sich durch hohe Performance und einfache Konfiguration auszeichnet.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was ist der Unterschied zwischen IPsec Tunnel Mode und Transport Mode?",
    "options": [
      "Tunnel Mode ist für IPv4, Transport Mode für IPv6",
      "Tunnel Mode verschlüsselt das gesamte Original-IP-Paket und fügt einen neuen IP-Header hinzu, Transport Mode verschlüsselt nur die Payload",
      "Tunnel Mode verschlüsselt nur die Payload, Transport Mode den gesamten Frame",
      "Es gibt keinen funktionalen Unterschied"
    ],
    "correct": 1,
    "explanation": "Im Tunnel Mode wird das gesamte Original-IP-Paket verschlüsselt und ein neuer IP-Header vorangestellt (typisch für Site-to-Site-VPN). Im Transport Mode wird nur die Payload verschlüsselt, der Original-IP-Header bleibt erhalten (typisch für Host-to-Host).",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche drei Rollen definiert der 802.1X-Standard für die portbasierte Netzwerkzugangskontrolle?",
    "options": [
      "Supplicant, Authenticator, Authentication Server",
      "Client, Server, Gateway",
      "User, Admin, Proxy",
      "Sender, Empfänger, Vermittler"
    ],
    "correct": 0,
    "explanation": "802.1X definiert drei Rollen: Supplicant (Client, der Zugang anfordert), Authenticator (Switch oder Access Point, der den Zugang kontrolliert) und Authentication Server (z.B. RADIUS-Server, der die Authentifizierung durchführt).",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Standard-Firewall-Regel wird als Best Practice am Ende eines Regelwerks empfohlen?",
    "options": [
      "Allow All",
      "Forward All",
      "Log All",
      "Deny All (Implicit Deny)"
    ],
    "correct": 3,
    "explanation": "Als Best Practice wird am Ende jedes Firewall-Regelwerks eine 'Deny All'-Regel (Implicit Deny) empfohlen. Diese blockiert sämtlichen Verkehr, der nicht explizit durch vorhergehende Regeln erlaubt wurde.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was beschreibt DNAT (Destination NAT)?",
    "options": [
      "Die Verschlüsselung von DNS-Anfragen",
      "Die dynamische Zuweisung von NAT-Pools",
      "Die Übersetzung der Ziel-IP-Adresse eingehender Pakete, um sie an interne Server weiterzuleiten",
      "Die Übersetzung der Quell-IP-Adresse ausgehender Pakete"
    ],
    "correct": 2,
    "explanation": "DNAT (Destination NAT) übersetzt die Ziel-IP-Adresse eingehender Pakete. Dies wird häufig für Port Forwarding eingesetzt, um externe Anfragen an interne Server weiterzuleiten.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Eigenschaft kennzeichnet eine Next-Generation Firewall (NGFW)?",
    "options": [
      "Sie arbeitet ausschließlich auf Layer 2",
      "Sie kann Anwendungen erkennen und kontrollieren (Application Awareness) sowie Deep Packet Inspection durchführen",
      "Sie unterstützt nur IPv4",
      "Sie kann keine VPN-Verbindungen terminieren"
    ],
    "correct": 1,
    "explanation": "Eine NGFW kombiniert klassische Firewall-Funktionen mit Deep Packet Inspection, Application Awareness, IPS und oft Malware-Erkennung. Sie analysiert und kontrolliert den Datenverkehr auf Anwendungsebene.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche Schritte umfasst der TLS-Handshake vereinfacht?",
    "options": [
      "SYN → SYN-ACK → ACK → Verschlüsselung",
      "Client Hello → Server Hello (mit Zertifikat) → Schlüsselaustausch → Verschlüsselte Kommunikation",
      "Discover → Offer → Request → Acknowledge",
      "Auth Request → Challenge → Response → Session"
    ],
    "correct": 1,
    "explanation": "Beim TLS-Handshake sendet der Client ein 'Client Hello' mit unterstützten Cipher Suites, der Server antwortet mit 'Server Hello' und Zertifikat, dann erfolgt der Schlüsselaustausch, anschließend beginnt die verschlüsselte Kommunikation.",
    "category": "netzwerksicherheit-vpn",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches Protokoll verwendet der Befehl ping zur Netzwerkdiagnose?",
    "options": [
      "TCP",
      "ARP",
      "UDP",
      "ICMP"
    ],
    "correct": 3,
    "explanation": "Der Befehl ping verwendet ICMP (Internet Control Message Protocol) Echo Request und Echo Reply, um die Erreichbarkeit eines Hosts und die Round-Trip-Time zu prüfen.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie funktioniert der Befehl traceroute (tracert unter Windows)?",
    "options": [
      "Er scannt alle Ports des Zielhosts",
      "Er misst die Bandbreite zu jedem Router",
      "Er sendet Pakete mit ansteigendem TTL-Wert und wertet ICMP Time Exceeded-Nachrichten aus",
      "Er löst DNS-Namen aller Router auf dem Pfad auf"
    ],
    "correct": 2,
    "explanation": "Traceroute sendet Pakete mit schrittweise erhöhtem TTL-Wert (1, 2, 3, …). Jeder Router dekrementiert den TTL um 1 und sendet bei TTL=0 eine ICMP Time Exceeded-Nachricht zurück, wodurch der Netzwerkpfad sichtbar wird.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Befehl unter Windows leert den lokalen DNS-Cache?",
    "options": [
      "ipconfig /flushdns",
      "ipconfig /release",
      "ipconfig /renew",
      "ipconfig /registerdns"
    ],
    "correct": 0,
    "explanation": "Der Befehl ipconfig /flushdns löscht den lokalen DNS-Resolver-Cache unter Windows. Dies ist hilfreich, wenn DNS-Einträge geändert wurden und der Client noch veraltete Einträge zwischengespeichert hat.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was zeigt der Befehl netstat -an an?",
    "options": [
      "Die Routing-Tabelle des Systems",
      "Alle aktiven Netzwerkverbindungen und lauschenden Ports in numerischer Form",
      "Die DNS-Konfiguration des Systems",
      "Die MAC-Adressen aller Netzwerkadapter"
    ],
    "correct": 1,
    "explanation": "netstat -an zeigt alle aktiven Netzwerkverbindungen und lauschenden Ports an. Das Flag -a steht für alle Verbindungen, -n für numerische Darstellung (keine DNS-Namensauflösung).",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was zeigt der Befehl arp -a an?",
    "options": [
      "Den lokalen ARP-Cache mit der Zuordnung von IP-Adressen zu MAC-Adressen",
      "Alle konfigurierten IP-Adressen des Systems",
      "Die DNS-Auflösungstabelle",
      "Die aktiven DHCP-Leases"
    ],
    "correct": 0,
    "explanation": "arp -a zeigt den lokalen ARP-Cache an, der die Zuordnung von IP-Adressen zu MAC-Adressen enthält. Diese Zuordnungen werden durch ARP-Anfragen im lokalen Netzwerk gelernt.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche drei Hauptkomponenten gehören zur SNMP-Architektur?",
    "options": [
      "Client, Server, Proxy",
      "Publisher, Subscriber, Broker",
      "Supplicant, Authenticator, Server",
      "Manager, Agent, MIB"
    ],
    "correct": 3,
    "explanation": "SNMP besteht aus dem Manager (Überwachungsstation, die Anfragen stellt), dem Agent (Software auf dem überwachten Gerät) und der MIB (Management Information Base, Datenstruktur mit den überwachbaren Parametern).",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Syslog-Severity-Level steht für die höchste Dringlichkeitsstufe 'Emergency'?",
    "options": [
      "7",
      "0",
      "1",
      "5"
    ],
    "correct": 1,
    "explanation": "Syslog-Severity-Level 0 steht für Emergency (System ist nicht funktionsfähig). Die Skala reicht von 0 (Emergency, höchste Kritikalität) bis 7 (Debug, niedrigste Kritikalität).",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welcher Syslog-Severity-Level steht für 'Debug'-Meldungen?",
    "options": [
      "0",
      "3",
      "7",
      "5"
    ],
    "correct": 2,
    "explanation": "Syslog-Severity-Level 7 steht für Debug-Meldungen, die niedrigste Kritikalitätsstufe. Level 0 ist Emergency, Level 3 ist Error und Level 5 ist Notice.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welchen Standardport und welches Transportprotokoll verwendet Syslog?",
    "options": [
      "UDP 514",
      "TCP 514",
      "TCP 161",
      "UDP 161"
    ],
    "correct": 0,
    "explanation": "Syslog verwendet standardmäßig UDP-Port 514. Für verschlüsselte Übertragung (Syslog über TLS) wird TCP-Port 6514 verwendet. Port 161 gehört zu SNMP.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Was unterscheidet SNMP v3 von SNMP v2c?",
    "options": [
      "v2c unterstützt mehr MIB-Objekte als v3",
      "v3 ist nur für Linux-Systeme verfügbar",
      "v2c ist schneller als v3",
      "v3 bietet Authentifizierung und Verschlüsselung, v2c verwendet nur unverschlüsselte Community Strings"
    ],
    "correct": 3,
    "explanation": "SNMP v3 bietet echte Sicherheitsfunktionen: Authentifizierung (z.B. SHA) und Verschlüsselung (z.B. AES). SNMP v2c verwendet nur unverschlüsselte Community Strings zur Zugangskontrolle.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Woran erkennt man einen TCP-3-Way-Handshake in einem Wireshark-Mitschnitt?",
    "options": [
      "An drei aufeinanderfolgenden UDP-Paketen",
      "An drei ICMP-Echo-Paketen",
      "An den Flags SYN, SYN/ACK und ACK in drei aufeinanderfolgenden TCP-Segmenten",
      "An drei DNS-Anfragen hintereinander"
    ],
    "correct": 2,
    "explanation": "In Wireshark ist der 3-Way-Handshake an drei aufeinanderfolgenden TCP-Segmenten erkennbar: Das erste mit SYN-Flag, das zweite mit SYN- und ACK-Flag, das dritte mit ACK-Flag.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welche systematische Methode wird häufig zur Fehlersuche in Netzwerken empfohlen?",
    "options": [
      "Top-Down (von Schicht 7 nach Schicht 1)",
      "Bottom-Up (von Schicht 1 nach Schicht 7 des OSI-Modells)",
      "Random-Ansatz (zufällige Schicht prüfen)",
      "Middle-Out (von Schicht 4 ausgehend)"
    ],
    "correct": 1,
    "explanation": "Die Bottom-Up-Methode beginnt bei der physischen Schicht (Schicht 1: Kabel, Stecker, LEDs) und arbeitet sich bis zur Anwendungsschicht (Schicht 7) hoch. Physische Probleme sind häufige Fehlerursachen und werden so zuerst erkannt.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Welches Open-Source-Tool eignet sich zur Netzwerküberwachung mit visuellen Dashboards und unterstützt Prometheus als Datenquelle?",
    "options": [
      "Wireshark",
      "Nmap",
      "Telnet",
      "Grafana"
    ],
    "correct": 3,
    "explanation": "Grafana ist ein Open-Source-Tool für Datenvisualisierung und Monitoring-Dashboards. Es unterstützt verschiedene Datenquellen wie Prometheus, InfluxDB und Elasticsearch zur Darstellung von Netzwerk- und Systemmetriken.",
    "category": "netzwerkdiagnose",
    "section": "02-Netzwerke"
  },
  {
    "question": "Wie lange darf die Probezeit in einem Berufsausbildungsverhältnis gemäß §20 BBiG dauern?",
    "options": [
      "Mindestens 3 Monate, höchstens 6 Monate",
      "Mindestens 1 Monat, höchstens 4 Monate",
      "Mindestens 2 Monate, höchstens 6 Monate",
      "Es gibt keine gesetzliche Vorgabe zur Probezeit"
    ],
    "correct": 1,
    "explanation": "Gemäß §20 BBiG muss die Probezeit im Ausbildungsverhältnis mindestens 1 Monat und darf höchstens 4 Monate betragen. Die Probezeit ist Pflicht und kann nicht weggelassen werden.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Ein Auszubildender befindet sich im 2. Lehrjahr. Unter welchen Voraussetzungen kann der Ausbildungsbetrieb das Ausbildungsverhältnis kündigen?",
    "options": [
      "Ordentlich mit einer Frist von 4 Wochen",
      "Ordentlich mit einer Frist von 2 Wochen",
      "Nur fristlos aus wichtigem Grund",
      "Gar nicht, bis die Ausbildung beendet ist"
    ],
    "correct": 2,
    "explanation": "Nach der Probezeit kann der Ausbildungsbetrieb das Ausbildungsverhältnis nur durch eine außerordentliche (fristlose) Kündigung aus wichtigem Grund beenden (§22 Abs. 2 BBiG). Eine ordentliche Kündigung durch den Betrieb ist nach der Probezeit ausgeschlossen.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Welche der folgenden Angaben ist KEIN Mindestinhalt des Berufsausbildungsvertrags gemäß §11 BBiG?",
    "options": [
      "Art, sachliche und zeitliche Gliederung der Ausbildung",
      "Name des zuständigen Berufsschullehrers",
      "Dauer der Probezeit",
      "Zahlung und Höhe der Vergütung"
    ],
    "correct": 1,
    "explanation": "Der Name des Berufsschullehrers gehört nicht zu den Mindestinhalten nach §11 BBiG. Zu den Pflichtinhalten zählen u.a. Art und Gliederung der Ausbildung, Probezeit, Vergütung, Arbeitszeit, Urlaub und Kündigungsvoraussetzungen.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Wann endet ein Ausbildungsverhältnis bei Bestehen der Abschlussprüfung?",
    "options": [
      "Am letzten Tag des Monats, in dem die Prüfung stattfand",
      "Am Tag der Bekanntgabe des Prüfungsergebnisses",
      "Am vertraglich vereinbarten Ausbildungsende",
      "Erst nach einer Übergangsfrist von 2 Wochen"
    ],
    "correct": 1,
    "explanation": "Das Ausbildungsverhältnis endet am Tag der Bekanntgabe des Prüfungsergebnisses bei Bestehen der Abschlussprüfung – nicht am Monatsende oder am vertraglich vereinbarten Datum.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "In welcher Form muss eine Kündigung ausgesprochen werden, um wirksam zu sein?",
    "options": [
      "Per E-Mail mit Lesebestätigung",
      "Mündlich vor Zeugen",
      "Per WhatsApp-Nachricht",
      "Schriftlich mit eigenhändiger Unterschrift"
    ],
    "correct": 3,
    "explanation": "Eine Kündigung muss stets schriftlich mit eigenhändiger Unterschrift erfolgen (§623 BGB). Eine Kündigung per E-Mail, WhatsApp oder mündlich ist unwirksam.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Welche vier Kriterien müssen bei einer betriebsbedingten Kündigung im Rahmen der Sozialauswahl berücksichtigt werden?",
    "options": [
      "Qualifikation, Arbeitsleistung, Fehlzeiten, Gehaltshöhe",
      "Geschlecht, Nationalität, Religion, Familienstand",
      "Ausbildungsabschluss, Berufserfahrung, Alter, Arbeitszeit",
      "Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten, Schwerbehinderung"
    ],
    "correct": 3,
    "explanation": "Bei der Sozialauswahl müssen vier Kriterien berücksichtigt werden: Dauer der Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten und Schwerbehinderung. Der Arbeitgeber muss dem Arbeitnehmer kündigen, den es sozial am wenigsten hart trifft.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Wie lange darf ein befristeter Arbeitsvertrag ohne Sachgrund gemäß §14 TzBfG maximal dauern?",
    "options": [
      "6 Monate",
      "1 Jahr",
      "3 Jahre",
      "2 Jahre"
    ],
    "correct": 3,
    "explanation": "Ein befristeter Arbeitsvertrag ohne Sachgrund darf nach §14 TzBfG maximal 2 Jahre dauern. Innerhalb dieser 2 Jahre ist eine dreimalige Verlängerung zulässig.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Wie viele Stunden Ruhezeit muss ein erwachsener Arbeitnehmer zwischen zwei Arbeitstagen gemäß Arbeitszeitgesetz mindestens haben?",
    "options": [
      "8 Stunden",
      "11 Stunden",
      "10 Stunden",
      "12 Stunden"
    ],
    "correct": 1,
    "explanation": "Gemäß Arbeitszeitgesetz muss die ununterbrochene Ruhezeit zwischen zwei Arbeitstagen für erwachsene Arbeitnehmer mindestens 11 Stunden betragen. Für Jugendliche gilt eine Ruhezeit von mindestens 12 Stunden.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Eine Auszubildende ist 17 Jahre alt. Welche Aussage trifft gemäß JArbSchG zu?",
    "options": [
      "Sie darf maximal 48 Stunden pro Woche arbeiten",
      "Sie darf zwischen 6:00 und 22:00 Uhr arbeiten",
      "Für sie gelten keine besonderen Arbeitszeitregelungen",
      "Sie darf maximal 40 Stunden pro Woche arbeiten und nicht zwischen 20:00 und 6:00 Uhr"
    ],
    "correct": 3,
    "explanation": "Nach dem JArbSchG dürfen Jugendliche unter 18 Jahren maximal 40 Stunden pro Woche (5-Tage-Woche, max. 8 Std./Tag) arbeiten. Nachtarbeit zwischen 20:00 und 6:00 Uhr ist verboten. Außerdem ist vor Ausbildungsbeginn eine ärztliche Erstuntersuchung Pflicht.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Wie hoch ist der gesetzliche Mindesturlaub nach dem Bundesurlaubsgesetz (BUrlG) bei einer 5-Tage-Woche?",
    "options": [
      "24 Arbeitstage",
      "30 Arbeitstage",
      "25 Arbeitstage",
      "20 Arbeitstage"
    ],
    "correct": 3,
    "explanation": "Das BUrlG sieht einen Mindesturlaub von 24 Werktagen bei einer 6-Tage-Woche vor. Umgerechnet auf eine 5-Tage-Woche ergibt das 20 Arbeitstage. Tarifverträge können höhere Ansprüche vorsehen.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Welche Personengruppe genießt besonderen Kündigungsschutz und benötigt die Zustimmung des Integrationsamtes vor einer Kündigung?",
    "options": [
      "Schwerbehinderte Arbeitnehmer",
      "Auszubildende nach der Probezeit",
      "Arbeitnehmer in Teilzeit",
      "Arbeitnehmer mit mehr als 10 Jahren Betriebszugehörigkeit"
    ],
    "correct": 0,
    "explanation": "Schwerbehinderte Arbeitnehmer genießen besonderen Kündigungsschutz. Vor einer Kündigung muss die Zustimmung des Integrationsamtes eingeholt werden. Auch Schwangere, Betriebsratsmitglieder und Arbeitnehmer in Elternzeit haben besonderen Kündigungsschutz.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Ab welcher täglichen Arbeitszeit muss einem erwachsenen Arbeitnehmer gemäß ArbZG eine Pause von mindestens 30 Minuten gewährt werden?",
    "options": [
      "Ab 4 Stunden",
      "Ab 8 Stunden",
      "Ab 5 Stunden",
      "Ab 6 Stunden"
    ],
    "correct": 3,
    "explanation": "Bei einer Arbeitszeit von mehr als 6 Stunden muss eine Pause von mindestens 30 Minuten gewährt werden. Ab 9 Stunden beträgt die Mindestpause 45 Minuten. Für Jugendliche gelten strengere Regelungen.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Welche Pflicht trifft NICHT den Auszubildenden?",
    "options": [
      "Berichtsheft (Ausbildungsnachweis) führen",
      "Betriebsgeheimnisse wahren",
      "An der Berufsschule teilnehmen",
      "Ausbildungsmittel kostenlos bereitstellen"
    ],
    "correct": 3,
    "explanation": "Die kostenlose Bereitstellung von Ausbildungsmitteln (Werkzeuge, Fachliteratur) ist eine Pflicht des Ausbildungsbetriebs, nicht des Auszubildenden. Zu den Pflichten des Azubis gehören u.a. Lernpflicht, Berichtsheft führen, Schweigepflicht und Teilnahme an der Berufsschule.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Innerhalb welcher Frist muss eine außerordentliche (fristlose) Kündigung nach Kenntnis des Kündigungsgrundes ausgesprochen werden?",
    "options": [
      "1 Woche",
      "4 Wochen",
      "1 Monat",
      "2 Wochen"
    ],
    "correct": 3,
    "explanation": "Eine außerordentliche Kündigung muss innerhalb von 2 Wochen nach Kenntnis des wichtigen Grundes ausgesprochen werden (§626 Abs. 2 BGB). Wird diese Frist versäumt, ist die fristlose Kündigung unwirksam.",
    "category": "arbeitsrecht",
    "section": "03-WiSo"
  },
  {
    "question": "Ab wie vielen ständigen wahlberechtigten Arbeitnehmern kann in einem Betrieb ein Betriebsrat gegründet werden?",
    "options": [
      "Ab 5 Arbeitnehmern",
      "Ab 10 Arbeitnehmern",
      "Ab 20 Arbeitnehmern",
      "Ab 3 Arbeitnehmern"
    ],
    "correct": 0,
    "explanation": "Ein Betriebsrat kann ab 5 ständigen wahlberechtigten Arbeitnehmern gegründet werden, von denen mindestens 3 wählbar sein müssen (mind. 6 Monate im Betrieb). Der Betriebsrat wird nicht automatisch eingerichtet – die Arbeitnehmer müssen die Initiative ergreifen.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Wie lange beträgt die Amtszeit eines Betriebsrats?",
    "options": [
      "2 Jahre",
      "3 Jahre",
      "5 Jahre",
      "4 Jahre"
    ],
    "correct": 3,
    "explanation": "Die Amtszeit eines Betriebsrats beträgt 4 Jahre. Betriebsratsmitglieder genießen während und 1 Jahr nach ihrer Amtszeit besonderen Kündigungsschutz.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Ab welchem Alter dürfen Arbeitnehmer den Betriebsrat wählen (aktives Wahlrecht)?",
    "options": [
      "Ab 16 Jahren",
      "Ab 18 Jahren",
      "Ab 21 Jahren",
      "Ab 14 Jahren"
    ],
    "correct": 0,
    "explanation": "Das aktive Wahlrecht für die Betriebsratswahl besitzen alle Arbeitnehmer ab 16 Jahren. Das passive Wahlrecht (gewählt werden) erfordert ein Mindestalter von 18 Jahren und mindestens 6 Monate Betriebszugehörigkeit.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Der Arbeitgeber möchte eine Überwachungssoftware auf allen Arbeitsplatzrechnern installieren. Welches Beteiligungsrecht hat der Betriebsrat?",
    "options": [
      "Mitbestimmungsrecht – ohne Zustimmung des Betriebsrats darf die Software nicht eingeführt werden",
      "Informationsrecht – der Betriebsrat wird lediglich informiert",
      "Anhörungsrecht – der Betriebsrat wird angehört, der Arbeitgeber entscheidet allein",
      "Der Betriebsrat hat bei technischen Fragen keine Beteiligungsrechte"
    ],
    "correct": 0,
    "explanation": "Bei der Einführung technischer Einrichtungen, die das Verhalten oder die Leistung der Arbeitnehmer überwachen können, hat der Betriebsrat ein Mitbestimmungsrecht nach §87 Abs. 1 Nr. 6 BetrVG. Ohne Zustimmung darf die Software nicht installiert werden.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Was passiert, wenn ein Arbeitgeber eine Kündigung ausspricht, ohne den Betriebsrat gemäß §102 BetrVG vorher anzuhören?",
    "options": [
      "Die Kündigung ist gültig, aber der Betriebsrat kann Einspruch einlegen",
      "Die Kündigung wird erst nach 4 Wochen wirksam",
      "Der Betriebsrat muss nachträglich informiert werden",
      "Die Kündigung ist unwirksam"
    ],
    "correct": 3,
    "explanation": "Gemäß §102 BetrVG muss der Betriebsrat vor jeder Kündigung angehört werden. Eine Kündigung ohne vorherige Anhörung des Betriebsrats ist unwirksam – unabhängig davon, ob der Betriebsrat der Kündigung zugestimmt oder widersprochen hätte.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Welche Voraussetzungen müssen für die Gründung einer Jugend- und Auszubildendenvertretung (JAV) erfüllt sein?",
    "options": [
      "Es muss ein Betriebsrat existieren und mindestens 5 Jugendliche/Azubis unter 25 Jahren beschäftigt sein",
      "Der Betrieb muss mindestens 10 Auszubildende unter 18 Jahren haben",
      "Es reicht ein einzelner Auszubildender, wenn er dies beim Betriebsrat beantragt",
      "Die JAV kann unabhängig vom Betriebsrat gegründet werden, wenn mindestens 3 Azubis vorhanden sind"
    ],
    "correct": 0,
    "explanation": "Für die Gründung einer JAV muss im Betrieb bereits ein Betriebsrat existieren und es müssen mindestens 5 jugendliche Arbeitnehmer oder Auszubildende unter 25 Jahren beschäftigt sein. Die Amtszeit der JAV beträgt 2 Jahre.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Zwischen welchen Parteien wird ein Tarifvertrag geschlossen?",
    "options": [
      "Zwischen der Gewerkschaft und dem Arbeitgeberverband (oder einzelnem Arbeitgeber)",
      "Zwischen dem Betriebsrat und dem Arbeitgeber",
      "Zwischen dem Staat und den Arbeitnehmervertretern",
      "Zwischen dem einzelnen Arbeitnehmer und dem Arbeitgeber"
    ],
    "correct": 0,
    "explanation": "Ein Tarifvertrag wird zwischen einer Gewerkschaft (Arbeitnehmerseite) und einem Arbeitgeberverband oder einem einzelnen Arbeitgeber (Arbeitgeberseite) geschlossen. Der Betriebsrat verhandelt keine Tarifverträge, sondern Betriebsvereinbarungen.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Was regelt ein Manteltarifvertrag im Unterschied zu einem Gehaltstarifvertrag?",
    "options": [
      "Er regelt allgemeine Arbeitsbedingungen wie Arbeitszeit, Urlaub und Kündigungsfristen",
      "Er regelt ausschließlich die Lohnhöhe und Gehaltsgruppen",
      "Er regelt nur Fragen der betrieblichen Altersvorsorge",
      "Er ist ein Einzelvertrag zwischen Arbeitnehmer und Arbeitgeber"
    ],
    "correct": 0,
    "explanation": "Der Manteltarifvertrag regelt allgemeine Arbeitsbedingungen wie Arbeitszeit, Urlaubsdauer, Kündigungsfristen und Zuschläge. Er hat eine längere Laufzeit. Der Gehaltstarifvertrag hingegen regelt die Höhe der Vergütung und wird regelmäßig neu verhandelt.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Was besagt das Günstigkeitsprinzip im Arbeitsrecht?",
    "options": [
      "Individuelle Vereinbarungen dürfen vom Tarifvertrag nur zugunsten des Arbeitnehmers abweichen",
      "Tarifverträge dürfen nur zulasten der Arbeitnehmer abgeändert werden",
      "Der Arbeitgeber darf immer die günstigste Lösung für den Betrieb wählen",
      "Das billigste Angebot muss bei Beschaffungen gewählt werden"
    ],
    "correct": 0,
    "explanation": "Das Günstigkeitsprinzip (§4 Abs. 3 TVG) besagt, dass individuelle Vereinbarungen (z.B. im Arbeitsvertrag) nur dann vom Tarifvertrag abweichen dürfen, wenn sie für den Arbeitnehmer günstiger sind. Beispiel: Stehen im Tarifvertrag 28 Urlaubstage und im Arbeitsvertrag 30, gelten die 30.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Welche Rangfolge der Rechtsquellen im Arbeitsrecht ist korrekt (von höchster zu niedrigster Ebene)?",
    "options": [
      "Arbeitsvertrag > Betriebsvereinbarung > Tarifvertrag > Gesetz",
      "Europarecht/Grundgesetz > Bundesgesetze > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag",
      "Tarifvertrag > Gesetz > Betriebsvereinbarung > Arbeitsvertrag",
      "Betriebsvereinbarung > Tarifvertrag > Gesetz > Europarecht"
    ],
    "correct": 1,
    "explanation": "Die korrekte Rangfolge lautet: Europarecht/Grundgesetz > Bundesgesetze > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag. Höherrangiges Recht hat Vorrang, es sei denn, die niedrigere Ebene ist günstiger für den Arbeitnehmer (Günstigkeitsprinzip).",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Wann ist ein Streik rechtmäßig?",
    "options": [
      "Nur wenn er von einer Gewerkschaft organisiert wird, um einen Tarifvertrag durchzusetzen, und die Friedenspflicht abgelaufen ist",
      "Jederzeit, wenn sich Arbeitnehmer ungerecht behandelt fühlen",
      "Wenn die Mehrheit der Arbeitnehmer im Betrieb dafür stimmt",
      "Wenn der Betriebsrat den Streik genehmigt"
    ],
    "correct": 0,
    "explanation": "Ein Streik ist nur rechtmäßig, wenn er von einer Gewerkschaft geführt wird, das Ziel ein Tarifvertrag ist und die Friedenspflicht (aus einem laufenden Tarifvertrag) abgelaufen ist. Zudem muss eine Urabstimmung stattgefunden haben. Ein 'wilder Streik' ohne Gewerkschaft ist rechtswidrig.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Welches Kampfmittel steht der Arbeitgeberseite im Arbeitskampf zur Verfügung?",
    "options": [
      "Aussperrung",
      "Boykott",
      "Streik",
      "Urabstimmung"
    ],
    "correct": 0,
    "explanation": "Die Aussperrung ist das Kampfmittel der Arbeitgeberseite: Der Arbeitgeber schließt die Arbeitnehmer vorübergehend von der Arbeit aus und zahlt kein Entgelt. Das Gegenstück auf Arbeitnehmerseite ist der Streik, der von Gewerkschaften organisiert wird.",
    "category": "betriebliche-mitbestimmung",
    "section": "03-WiSo"
  },
  {
    "question": "Welche der folgenden Sozialversicherungen wird ausschließlich vom Arbeitgeber finanziert?",
    "options": [
      "Unfallversicherung",
      "Rentenversicherung",
      "Krankenversicherung",
      "Arbeitslosenversicherung"
    ],
    "correct": 0,
    "explanation": "Die Unfallversicherung ist die einzige der fünf Sozialversicherungen, deren Beiträge ausschließlich vom Arbeitgeber getragen werden. Träger sind die Berufsgenossenschaften. Alle anderen vier Versicherungen werden paritätisch (50/50) finanziert.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Wie viele Säulen hat das deutsche Sozialversicherungssystem?",
    "options": [
      "3 Säulen",
      "4 Säulen",
      "6 Säulen",
      "5 Säulen"
    ],
    "correct": 3,
    "explanation": "Das deutsche Sozialversicherungssystem basiert auf 5 Säulen: Krankenversicherung (KV), Rentenversicherung (RV), Arbeitslosenversicherung (AV), Pflegeversicherung (PV) und Unfallversicherung (UV).",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Ein Arbeitnehmer verunglückt auf dem Weg zur Arbeit. Welche Versicherung ist zuständig?",
    "options": [
      "Die Krankenversicherung, da es kein Arbeitsunfall ist",
      "Die Unfallversicherung, da Wegeunfälle versichert sind",
      "Die Pflegeversicherung, falls eine Pflegebedürftigkeit entsteht",
      "Keine Versicherung, der Arbeitnehmer muss selbst zahlen"
    ],
    "correct": 1,
    "explanation": "Wegeunfälle (der Weg zur und von der Arbeit) sind durch die gesetzliche Unfallversicherung (Berufsgenossenschaft) abgedeckt (§8 SGB VII). Diese übernimmt Heilbehandlung, Rehabilitation und ggf. Verletztengeld.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Was beschreibt das Solidaritätsprinzip in der Sozialversicherung?",
    "options": [
      "Beiträge richten sich nach dem Einkommen, Leistungen nach dem Bedarf",
      "Die Leistung richtet sich nach der Höhe der eingezahlten Beiträge",
      "Jeder zahlt den gleichen Festbetrag unabhängig vom Einkommen",
      "Jeder Versicherte erhält die gleiche Beitragshöhe zurückerstattet"
    ],
    "correct": 0,
    "explanation": "Beim Solidaritätsprinzip richten sich die Beiträge nach dem Einkommen (Starke tragen Schwache), während die Leistungen nach dem Bedarf gewährt werden. Ein Gutverdiener zahlt höhere Beiträge, erhält aber dieselben Leistungen. Typisch für die Krankenversicherung.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Was bedeutet das Umlageverfahren (Generationenvertrag) in der Rentenversicherung?",
    "options": [
      "Jeder Arbeitnehmer spart auf einem individuellen Konto für seine eigene Rente",
      "Der Staat finanziert die Renten vollständig aus Steuereinnahmen",
      "Die Beiträge der aktuell Erwerbstätigen finanzieren direkt die Renten der heutigen Rentner",
      "Arbeitgeber zahlen die kompletten Rentenbeiträge allein"
    ],
    "correct": 2,
    "explanation": "Beim Umlageverfahren werden die aktuell eingezahlten Beiträge direkt zur Finanzierung der laufenden Renten verwendet – es wird kein individuelles Kapital angespart. Die arbeitende Generation finanziert die Renten der aktuellen Rentner (Generationenvertrag).",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Wie lange zahlt der Arbeitgeber bei Krankheit das Entgelt weiter, bevor die Krankenversicherung Krankengeld zahlt?",
    "options": [
      "2 Wochen",
      "4 Wochen",
      "6 Wochen",
      "8 Wochen"
    ],
    "correct": 2,
    "explanation": "Nach dem Entgeltfortzahlungsgesetz (EFZG) zahlt der Arbeitgeber in den ersten 6 Wochen einer Krankheit das volle Entgelt weiter. Ab der 7. Woche übernimmt die Krankenversicherung und zahlt Krankengeld in Höhe von 70% des Bruttoentgelts.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Wie hoch ist das Arbeitslosengeld I (ALG I) für einen Arbeitnehmer ohne Kinder?",
    "options": [
      "80% des letzten Nettoentgelts",
      "60% des letzten Nettoentgelts",
      "50% des letzten Nettoentgelts",
      "70% des letzten Bruttoentgelts"
    ],
    "correct": 1,
    "explanation": "ALG I beträgt 60% des letzten Nettoentgelts (pauschaliert). Für Arbeitnehmer mit mindestens einem Kind erhöht sich der Satz auf 67%. Voraussetzung ist eine Beschäftigung von mindestens 12 Monaten in den letzten 30 Monaten.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Was ist die Beitragsbemessungsgrenze (BBG) in der Sozialversicherung?",
    "options": [
      "Der Mindestbetrag, den jeder Arbeitnehmer in die Sozialversicherung einzahlen muss",
      "Die Einkommensgrenze, ab der man sich privat versichern kann",
      "Die Einkommensgrenze, bis zu der Sozialversicherungsbeiträge berechnet werden",
      "Der maximale Betrag, den die Sozialversicherung als Leistung auszahlt"
    ],
    "correct": 2,
    "explanation": "Die Beitragsbemessungsgrenze (BBG) ist die Einkommensgrenze, bis zu der Beiträge zur Sozialversicherung berechnet werden. Einkommen oberhalb der BBG wird nicht für die Beitragsberechnung herangezogen. Nicht zu verwechseln mit der Versicherungspflichtgrenze (JAEG).",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Wer ist Träger der gesetzlichen Unfallversicherung?",
    "options": [
      "Die Deutsche Rentenversicherung",
      "Die Bundesagentur für Arbeit",
      "Die Berufsgenossenschaften",
      "Die gesetzlichen Krankenkassen"
    ],
    "correct": 2,
    "explanation": "Träger der gesetzlichen Unfallversicherung sind die Berufsgenossenschaften (BG). Sie sind nach Branchen organisiert und finanzieren sich ausschließlich durch Beiträge der Arbeitgeber. Sie leisten bei Arbeitsunfällen, Wegeunfällen und Berufskrankheiten.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "In welcher Reihenfolge werden bei einer Lohnabrechnung Abzüge vom Bruttogehalt vorgenommen?",
    "options": [
      "Nettogehalt wird festgelegt, danach werden Steuern und Sozialabgaben aufgeschlagen",
      "Zuerst werden Lohnsteuer und Kirchensteuer abgezogen, dann die Sozialversicherungsbeiträge (AN-Anteil)",
      "Sozialversicherungsbeiträge werden allein vom Arbeitgeber getragen und nicht vom Brutto abgezogen",
      "Es werden nur Sozialversicherungsbeiträge abgezogen, Steuern zahlt der Arbeitgeber"
    ],
    "correct": 1,
    "explanation": "Bei der Lohnabrechnung werden vom Bruttogehalt Steuern (Lohnsteuer, ggf. Kirchensteuer, ggf. Solidaritätszuschlag) und die Arbeitnehmeranteile der Sozialversicherung (KV, RV, AV, PV) abgezogen. Das Ergebnis ist das Nettogehalt. Der Arbeitgeber zahlt zusätzlich seinen Anteil.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Was unterscheidet das Äquivalenzprinzip vom Solidaritätsprinzip?",
    "options": [
      "Beim Äquivalenzprinzip richtet sich die Leistung nach dem Bedarf",
      "Beim Äquivalenzprinzip richtet sich die Leistung nach der Höhe der eingezahlten Beiträge",
      "Das Äquivalenzprinzip gilt nur in der Unfallversicherung",
      "Das Äquivalenzprinzip bedeutet, dass alle den gleichen Beitrag zahlen"
    ],
    "correct": 1,
    "explanation": "Beim Äquivalenzprinzip richtet sich die Leistung nach der Höhe der eingezahlten Beiträge – wer mehr einzahlt, erhält mehr. Dies gilt vor allem in der Rentenversicherung. Beim Solidaritätsprinzip hingegen richten sich die Beiträge nach dem Einkommen und die Leistungen nach dem Bedarf.",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Wie viele Pflegegrade gibt es in der gesetzlichen Pflegeversicherung?",
    "options": [
      "3 Pflegegrade",
      "5 Pflegegrade",
      "4 Pflegegrade",
      "6 Pflegegrade"
    ],
    "correct": 1,
    "explanation": "Die Pflegeversicherung unterscheidet 5 Pflegegrade: Pflegegrad 1 (geringe Beeinträchtigung) bis Pflegegrad 5 (schwerste Beeinträchtigung mit besonderen Anforderungen an die pflegerische Versorgung).",
    "category": "sozialversicherungen",
    "section": "03-WiSo"
  },
  {
    "question": "Wie kommt ein Kaufvertrag nach deutschem Recht zustande?",
    "options": [
      "Durch einseitige Willenserklärung des Käufers",
      "Erst durch schriftliche Unterzeichnung beider Parteien",
      "Durch zwei übereinstimmende Willenserklärungen: Antrag (Angebot) und Annahme",
      "Durch Bezahlung der Ware"
    ],
    "correct": 2,
    "explanation": "Ein Kaufvertrag kommt durch zwei übereinstimmende Willenserklärungen zustande: den Antrag (Angebot) und die Annahme (§§ 145 ff. BGB). Ein Kaufvertrag ist grundsätzlich formfrei – er kann also auch mündlich geschlossen werden.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Was versteht man unter 'invitatio ad offerendum'?",
    "options": [
      "Ein verbindliches Kaufangebot mit Preis und Menge",
      "Eine Aufforderung zur Abgabe eines Angebots, z.B. Waren im Schaufenster oder Online-Shop",
      "Die Annahme eines Kaufvertrags durch den Verkäufer",
      "Ein Angebot, das nur innerhalb von 24 Stunden gültig ist"
    ],
    "correct": 1,
    "explanation": "Invitatio ad offerendum bedeutet 'Einladung zur Abgabe eines Angebots'. Waren in Katalogen, Schaufenstern oder Online-Shops sind keine verbindlichen Angebote, sondern fordern den Kunden auf, selbst ein Angebot abzugeben (z.B. durch Bestellung).",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Ab welchem Alter ist eine Person nach deutschem Recht voll geschäftsfähig?",
    "options": [
      "Ab 16 Jahren",
      "Ab 14 Jahren",
      "Ab 21 Jahren",
      "Ab 18 Jahren"
    ],
    "correct": 3,
    "explanation": "Die volle Geschäftsfähigkeit beginnt mit Vollendung des 18. Lebensjahres. Kinder unter 7 Jahren sind geschäftsunfähig (Rechtsgeschäfte sind nichtig). Personen zwischen 7 und 17 Jahren sind beschränkt geschäftsfähig und benötigen die Zustimmung ihrer gesetzlichen Vertreter.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Ein 15-jähriger Auszubildender kauft sich von seinem Taschengeld eine Computermaus für 25 €. Ist der Kaufvertrag wirksam?",
    "options": [
      "Nein, da Minderjährige generell keine Kaufverträge schließen dürfen",
      "Ja, gemäß Taschengeldparagraph (§110 BGB), da er mit eigenen Mitteln vollständig bezahlt hat",
      "Nein, erst ab einem Alter von 16 Jahren sind solche Geschäfte erlaubt",
      "Nur wenn der Arbeitgeber dem Kauf zustimmt"
    ],
    "correct": 1,
    "explanation": "Nach dem Taschengeldparagraph (§110 BGB) ist ein Rechtsgeschäft eines beschränkt Geschäftsfähigen (7-17 Jahre) wirksam, wenn er es mit Mitteln bewirkt, die ihm zur freien Verfügung überlassen wurden (Taschengeld). Die vollständige Bezahlung mit eigenen Mitteln macht den Vertrag wirksam.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Welche Formvorschrift gilt für einen Immobilienkaufvertrag?",
    "options": [
      "Formfrei (mündlich möglich)",
      "Schriftform",
      "Notarielle Beurkundung",
      "Öffentliche Beglaubigung"
    ],
    "correct": 2,
    "explanation": "Ein Immobilienkaufvertrag bedarf der notariellen Beurkundung. Auch die GmbH-Gründung erfordert diese Form. Kaufverträge über bewegliche Sachen sind grundsätzlich formfrei. Kündigungen und Bürgschaften erfordern Schriftform.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Ein Unternehmen bestellt 20 Server, aber 3 davon werden mit defekten Netzteilen geliefert. Welches Recht muss der Käufer zuerst geltend machen?",
    "options": [
      "Sofortiger Rücktritt vom gesamten Kaufvertrag",
      "Minderung des Kaufpreises",
      "Nacherfüllung (Nachbesserung oder Ersatzlieferung)",
      "Schadensersatz und Vertragsstrafe"
    ],
    "correct": 2,
    "explanation": "Bei einem Sachmangel muss der Käufer zunächst Nacherfüllung verlangen (Nachbesserung oder Ersatzlieferung, §439 BGB). Erst wenn die Nacherfüllung fehlschlägt (nach 2 Versuchen oder bei Unzumutbarkeit), kann er Rücktritt, Minderung oder Schadensersatz geltend machen.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Wie lange beträgt die gesetzliche Gewährleistungsfrist bei Neuwaren?",
    "options": [
      "6 Monate",
      "1 Jahr",
      "2 Jahre",
      "5 Jahre"
    ],
    "correct": 2,
    "explanation": "Die gesetzliche Gewährleistungsfrist beträgt bei Neuwaren 2 Jahre ab Lieferung (§438 BGB). Innerhalb der ersten 12 Monate gilt die Beweislastumkehr: Es wird vermutet, dass der Mangel bereits bei Lieferung vorlag.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Was unterscheidet die gesetzliche Gewährleistung von einer Garantie?",
    "options": [
      "Gewährleistung ist freiwillig, Garantie ist gesetzlich vorgeschrieben",
      "Gewährleistung gilt nur für Gebrauchtwaren, Garantie nur für Neuwaren",
      "Gewährleistung ist ein gesetzlicher Anspruch gegenüber dem Verkäufer, Garantie ist eine freiwillige Zusage des Herstellers oder Händlers",
      "Es gibt keinen Unterschied, beides meint dasselbe"
    ],
    "correct": 2,
    "explanation": "Die Gewährleistung ist ein gesetzlicher Anspruch (§§ 434 ff. BGB) des Käufers gegenüber dem Verkäufer bei Mängeln – sie kann nicht ausgeschlossen werden. Die Garantie ist eine freiwillige Zusage des Herstellers oder Händlers, die über die Gewährleistung hinausgehen kann.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Ein Unternehmen investiert 40.000 € in ein neues Ticketsystem. Dadurch werden monatlich 5.000 € eingespart. Nach wie vielen Monaten hat sich die Investition amortisiert?",
    "options": [
      "6 Monate",
      "10 Monate",
      "8 Monate",
      "12 Monate"
    ],
    "correct": 2,
    "explanation": "Amortisationszeit = Investitionssumme / monatliche Einsparung = 40.000 € / 5.000 € = 8 Monate. Nach 8 Monaten hat sich die Investition durch die Einsparungen vollständig bezahlt gemacht.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Ein Unternehmen investiert 20.000 € in ein Automatisierungstool und erzielt dadurch einen Gewinn von 26.000 €. Wie hoch ist der ROI?",
    "options": [
      "30%",
      "20%",
      "130%",
      "26%"
    ],
    "correct": 0,
    "explanation": "ROI = (Gewinn - Investition) / Investition × 100 = (26.000 € - 20.000 €) / 20.000 € × 100 = 6.000 / 20.000 × 100 = 30%. Der Return on Investment beträgt 30%.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Welcher DSGVO-Grundsatz besagt, dass personenbezogene Daten nur für den bei der Erhebung festgelegten Zweck verwendet werden dürfen?",
    "options": [
      "Datenminimierung",
      "Zweckbindung",
      "Speicherbegrenzung",
      "Vertraulichkeit"
    ],
    "correct": 1,
    "explanation": "Der Grundsatz der Zweckbindung besagt, dass personenbezogene Daten nur für den bei der Erhebung festgelegten Zweck verarbeitet werden dürfen. Beispiel: Kundendaten für eine Bestellung dürfen nicht ohne Einwilligung für Werbezwecke genutzt werden.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  },
  {
    "question": "Wie hoch ist das Mindestkapital zur Gründung einer GmbH?",
    "options": [
      "1 €",
      "50.000 €",
      "25.000 €",
      "10.000 €"
    ],
    "correct": 2,
    "explanation": "Das Mindeststammkapital einer GmbH beträgt 25.000 €. Zum Vergleich: Eine UG (haftungsbeschränkt) kann bereits ab 1 € gegründet werden (muss aber Rücklagen bilden), und eine AG benötigt ein Grundkapital von mindestens 50.000 €.",
    "category": "wirtschaftliche-grundlagen",
    "section": "03-WiSo"
  }
];
