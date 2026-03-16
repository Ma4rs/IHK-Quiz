var EXAMS_DATA = [
  {
    id: "beispiel-2024",
    title: "Beispielprüfung (Demo)",
    section: "Konzeption und Administration von IT-Systemen",
    duration: 5,
    tasks: [
      {
        title: "Handlungsschritt 1: Serverkonsolidierung",
        points: 15,
        questions: [
          {
            question: "Ein Unternehmen plant die Konsolidierung von fünf physischen Servern auf eine Virtualisierungsplattform. Nennen Sie zwei Vorteile dieser Maßnahme.",
            type: "open",
            points: 4,
            modelAnswer: "1. Bessere Hardware-Auslastung durch Konsolidierung mehrerer Server auf einer Hardware. 2. Geringere Kosten für Hardware, Strom und Kühlung. (Weitere: einfachere Backup-/Snapshot-Erstellung, schnelleres Bereitstellen neuer Server)",
            explanation: "Virtualisierung ermöglicht es, mehrere virtuelle Maschinen auf einem physischen Server zu betreiben, was die Ressourcenauslastung erhöht und Betriebskosten senkt.",
            category: "server-virtualisierung",
            section: "01-Konzeption-Administration"
          },
          {
            question: "Welcher Hypervisor-Typ ist für eine produktive Serverumgebung geeignet?",
            options: ["Typ-2 (Hosted), z.B. VirtualBox", "Typ-1 (Bare Metal), z.B. VMware ESXi", "Typ-3 (Container-basiert)", "Typ-2 (Hosted), z.B. VMware Workstation"],
            correct: 1,
            points: 2,
            explanation: "Typ-1-Hypervisoren laufen direkt auf der Hardware ohne darunterliegendes Betriebssystem und bieten daher die beste Performance für produktive Umgebungen.",
            category: "server-virtualisierung",
            section: "01-Konzeption-Administration"
          },
          {
            question: "Das Unternehmen benötigt eine USV für das Rechenzentrum. Welcher USV-Typ hat eine Umschaltzeit von 0 ms?",
            accepts: ["VFI", "Online", "VFI (Online)", "Voltage and Frequency Independent"],
            inputHint: "Gib den USV-Typ ein.",
            points: 2,
            explanation: "VFI (Voltage and Frequency Independent) bzw. Online-USV versorgt die Last permanent über Akku und Wechselrichter, daher 0 ms Umschaltzeit.",
            category: "server-virtualisierung",
            section: "01-Konzeption-Administration"
          },
          {
            question: "Ordnen Sie die Speicherarchitekturen dem passenden Einsatzzweck zu.",
            pairs: [
              { "left": "DAS", "right": "Einzelserver, direkt angeschlossen" },
              { "left": "NAS", "right": "Dateifreigaben im Netzwerk" },
              { "left": "SAN", "right": "Rechenzentrum, Datenbanken, VMs" }
            ],
            points: 3,
            explanation: "DAS (Direct Attached Storage) ist direkt am Server angeschlossen, NAS (Network Attached Storage) bietet Dateifreigaben über das Netzwerk, SAN (Storage Area Network) bietet Blocklevel-Zugriff für High-Performance-Anwendungen.",
            category: "raid-backup",
            section: "01-Konzeption-Administration"
          },
          {
            question: "Berechnen Sie die Nettokapazität: 8 Festplatten à 4 TiB, davon 1 Hot-Spare, im RAID 5.",
            accepts: ["24 TiB", "24", "24TiB"],
            inputHint: "Gib die Nettokapazität in TiB ein.",
            points: 4,
            explanation: "Aktive Platten: 8 - 1 (Hot-Spare) = 7. RAID 5: (7-1) × 4 TiB = 24 TiB. Hot-Spare zählt nicht zur Nettokapazität!",
            category: "raid-backup",
            section: "01-Konzeption-Administration"
          }
        ]
      },
      {
        title: "Handlungsschritt 2: Netzwerkplanung",
        points: 10,
        questions: [
          {
            question: "Gegeben ist folgende Routingtabelle. An welchen Next Hop wird ein Paket mit Ziel-IP 10.0.5.100 weitergeleitet?",
            table: {
              headers: ["Zielnetz", "Next Hop", "Interface"],
              rows: [
                ["10.0.0.0/16", "192.168.1.1", "eth0"],
                ["10.0.5.0/24", "192.168.1.2", "eth1"],
                ["0.0.0.0/0", "192.168.1.254", "eth0"]
              ]
            },
            accepts: ["192.168.1.2"],
            inputHint: "Gib die IP-Adresse des Next Hop ein.",
            points: 3,
            explanation: "Longest Prefix Match: 10.0.5.100 passt auf 10.0.0.0/16 und 10.0.5.0/24. Die spezifischere Route /24 gewinnt → Next Hop 192.168.1.2.",
            category: "routing",
            section: "02-Netzwerke"
          },
          {
            question: "Erläutern Sie, warum in einer Netzwerkumgebung mit mehreren VLANs ein DHCP-Relay-Agent benötigt wird.",
            type: "open",
            points: 4,
            modelAnswer: "DHCP-Discover ist ein Broadcast. Router und Layer-3-Switches leiten Broadcasts nicht zwischen VLANs/Subnetzen weiter. Ein DHCP-Relay-Agent auf dem Router wandelt den Broadcast in einen Unicast an den DHCP-Server um, sodass Clients in anderen VLANs eine IP-Adresse erhalten können.",
            explanation: "Ohne DHCP-Relay erreichen DHCP-Broadcasts den Server in einem anderen VLAN nicht.",
            category: "netzwerkprotokolle-osi",
            section: "02-Netzwerke"
          },
          {
            question: "Welcher Standard definiert das VLAN-Tagging in Ethernet-Frames?",
            options: ["IEEE 802.3", "IEEE 802.1Q", "IEEE 802.11", "IEEE 802.1D"],
            correct: 1,
            points: 1,
            explanation: "IEEE 802.1Q definiert das VLAN-Tagging. 802.3 ist Ethernet, 802.11 ist WLAN, 802.1D ist Spanning Tree.",
            category: "switching-vlans",
            section: "02-Netzwerke"
          },
          {
            question: "Ein Benutzer hat die IP-Adresse 169.254.45.12. Welches Problem liegt vor und wie wird es behoben?",
            type: "open",
            points: 2,
            modelAnswer: "169.254.x.x ist eine APIPA-Adresse. Der Client konnte keinen DHCP-Server erreichen. Lösungsschritte: 1) Netzwerkkabel prüfen, 2) ipconfig /release und /renew, 3) DHCP-Server-Dienst prüfen, 4) DHCP-Relay konfiguriert?",
            explanation: "APIPA-Adressen (169.254.0.0/16) werden automatisch vergeben, wenn kein DHCP-Server erreichbar ist.",
            category: "netzwerkdiagnose",
            section: "02-Netzwerke"
          }
        ]
      }
    ]
  }
];
