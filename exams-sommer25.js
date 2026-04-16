/* global EXAMS_DATA */
(function () {
  "use strict";
  if (typeof EXAMS_DATA === "undefined" || !Array.isArray(EXAMS_DATA)) return;
  function imgPath(num) {
    return "Prüfungen/Sommer25/IMG_" + num + ".jpg";
  }
  function scanQuestion(num, label) {
    return {
      question:
        "<strong>" +
        label +
        "</strong> Bearbeite die Aufgabe. <strong>Abbildungen</strong> (Diagramme, Skizzen) optional als kleine Screenshots unter <code>Prüfungen/Sommer25/abb/IMG_" +
        num +
        ".jpg</code> ablegen und in dieser Datei als <code>figureImage</code> verknüpfen (siehe README). Den <strong>vollständigen Prüfungsbogen</strong> blendest du nur bei Bedarf ein („Prüfungsbogen anzeigen“).",
      type: "open",
      points: 2,
      image: imgPath(num),
      embedScanCollapsed: true,
      modelAnswer: "Vergleiche mit deiner Musterloesung zum gleichen Blatt.",
      explanation: "Offene Pruefungsaufgabe."
    };
  }
  var nums1 = []; for (var n = 8207; n <= 8220; n++) nums1.push(n);
  var nums2 = []; for (var n = 8221; n <= 8236; n++) nums2.push(n);
  var nums3 = []; for (var n = 8237; n <= 8246; n++) nums3.push(n);
  EXAMS_DATA.push({
    id: "sommer-2025-scans",
    title: "GAP Teil 2 — Sommer 2025 (Scans)",
    parts: [
      { id: "sommer-2025-ka", title: "Konzeption und Administration", duration: 90, tasks: [{ title: "Handlungsschritte (Scans)", points: 28, questions: nums1.map(function (num, i) { return scanQuestion(num, "Konzeption — Blatt " + (i + 1) + "/" + nums1.length); }) }] },
      { id: "sommer-2025-nw", title: "Analyse und Entwicklung von Netzwerken", duration: 90, tasks: [{ title: "Handlungsschritte (Scans)", points: 32, questions: nums2.map(function (num, i) { return scanQuestion(num, "Netzwerk — Blatt " + (i + 1) + "/" + nums2.length); }) }] },
      { id: "sommer-2025-wiso", title: "Wirtschafts- und Sozialkunde", duration: 60, tasks: [{ title: "Aufgaben (Scans)", points: 20, questions: nums3.map(function (num, i) { return scanQuestion(num, "WiSo — Blatt " + (i + 1) + "/" + nums3.length); }) }] }
    ]
  });
})();
