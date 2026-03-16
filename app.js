(function () {
  "use strict";

  const QUESTIONS_PER_ROUND = 10;
  const PASS_THRESHOLD = 0.5;

  const SECTION_LABELS = {
    "01-Konzeption-Administration": "Konzeption & Administration",
    "02-Netzwerke": "Netzwerke",
    "03-WiSo": "Wirtschaft & Soziales",
  };

  const CATEGORY_LABELS = {
    "server-virtualisierung": "Server & Virtualisierung",
    "raid-backup": "RAID, Backup & Speicher",
    "active-directory": "Active Directory",
    "cloud-konzepte": "Cloud-Konzepte",
    "automatisierung-scripting": "Automatisierung & Scripting",
    "it-sicherheit": "IT-Sicherheit & Kryptographie",
    "sql-code": "SQL & Code-Analyse",
    "netzwerkprotokolle-osi": "Protokolle, OSI & TCP/IP",
    subnetting: "Subnetting IPv4 & IPv6",
    routing: "Routing",
    "switching-vlans": "Switching & VLANs",
    "netzwerksicherheit-vpn": "Firewall, VPN & Sicherheit",
    netzwerkdiagnose: "Diagnose & Monitoring",
    arbeitsrecht: "Arbeitsrecht & Ausbildung",
    "betriebliche-mitbestimmung": "Betriebliche Mitbestimmung",
    sozialversicherungen: "Sozialversicherungen",
    "wirtschaftliche-grundlagen": "Wirtschaftliche Grundlagen",
  };

  let allQuestions = [];
  let filteredQuestions = [];
  let currentRound = [];
  let currentIndex = 0;
  let answers = [];
  let selectedSection = null;
  let selectedCategory = null;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ───── SCREENS ─────

  function showScreen(id) {
    $$(".screen").forEach((s) => s.classList.remove("active"));
    $(`#screen-${id}`).classList.add("active");
    window.scrollTo(0, 0);
  }

  // ───── INIT ─────

  function init() {
    if (typeof QUESTIONS_DATA === "undefined" || !Array.isArray(QUESTIONS_DATA)) {
      document.body.innerHTML =
        '<p style="color:#f87171;padding:2rem;text-align:center;">Fehler: questions.js konnte nicht geladen werden. Stelle sicher, dass die Datei im gleichen Ordner liegt.</p>';
      return;
    }
    allQuestions = QUESTIONS_DATA;

    updateCounts();
    bindEvents();
    showScreen("start");
  }

  function updateCounts() {
    const totalEl = $('[data-count="all"]');
    if (totalEl) totalEl.textContent = `${allQuestions.length} Fragen`;

    Object.keys(SECTION_LABELS).forEach((sec) => {
      const el = $(`[data-count="${sec}"]`);
      if (el) {
        const cnt = allQuestions.filter((q) => q.section === sec).length;
        el.textContent = `${cnt} Fragen`;
      }
    });
  }

  // ───── EVENTS ─────

  function bindEvents() {
    $$(".cat-card").forEach((card) => {
      card.addEventListener("click", () => onCategoryCardClick(card));
    });

    $("#btn-start").addEventListener("click", startQuiz);
    $("#btn-next").addEventListener("click", nextQuestion);
    $("#btn-review").addEventListener("click", () => showScreen("review"));
    $("#btn-restart").addEventListener("click", resetToStart);
    $("#btn-back-result").addEventListener("click", () =>
      showScreen("result")
    );
    $("#btn-restart-review").addEventListener("click", resetToStart);
  }

  function onCategoryCardClick(card) {
    const section = card.dataset.section;

    $$(".cat-card").forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");

    selectedSection = section;
    selectedCategory = null;

    if (section === "all") {
      $("#subcategory-section").style.display = "none";
      filteredQuestions = [...allQuestions];
    } else {
      filteredQuestions = allQuestions.filter((q) => q.section === section);
      showSubcategories(section);
    }

    $("#btn-start").disabled = false;
  }

  function showSubcategories(section) {
    const cats = [
      ...new Set(
        allQuestions.filter((q) => q.section === section).map((q) => q.category)
      ),
    ];

    const grid = $("#subcategory-grid");
    grid.innerHTML = "";

    const allChip = document.createElement("button");
    allChip.className = "subcat-chip selected";
    allChip.textContent = "Alle";
    allChip.dataset.cat = "__all__";
    allChip.addEventListener("click", () => onSubcatClick(allChip, section));
    grid.appendChild(allChip);

    cats.forEach((cat) => {
      const chip = document.createElement("button");
      chip.className = "subcat-chip";
      chip.textContent = CATEGORY_LABELS[cat] || cat;
      chip.dataset.cat = cat;
      chip.addEventListener("click", () => onSubcatClick(chip, section));
      grid.appendChild(chip);
    });

    $("#subcategory-title").textContent =
      SECTION_LABELS[section] + " — Thema wählen";
    $("#subcategory-section").style.display = "block";
  }

  function onSubcatClick(chip, section) {
    $$(".subcat-chip").forEach((c) => c.classList.remove("selected"));
    chip.classList.add("selected");

    const cat = chip.dataset.cat;
    if (cat === "__all__") {
      selectedCategory = null;
      filteredQuestions = allQuestions.filter((q) => q.section === section);
    } else {
      selectedCategory = cat;
      filteredQuestions = allQuestions.filter((q) => q.category === cat);
    }
  }

  // ───── QUIZ LOGIC ─────

  function startQuiz() {
    const pool = [...filteredQuestions];
    shuffle(pool);
    currentRound = pool.slice(0, QUESTIONS_PER_ROUND);
    currentIndex = 0;
    answers = [];

    const label = selectedCategory
      ? CATEGORY_LABELS[selectedCategory]
      : selectedSection === "all"
        ? "Alle Themen"
        : SECTION_LABELS[selectedSection];
    $("#quiz-category-label").textContent = label;

    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentRound[currentIndex];
    const num = currentIndex + 1;
    const total = currentRound.length;

    $("#quiz-progress").textContent = `${num} / ${total}`;
    $("#progress-fill").style.width = `${(num / total) * 100}%`;
    $("#question-text").textContent = q.question;

    const container = $("#options-container");
    container.innerHTML = "";

    const indices = [0, 1, 2, 3];
    shuffle(indices);

    indices.forEach((origIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = q.options[origIdx];
      btn.dataset.idx = origIdx;
      btn.addEventListener("click", () => onAnswer(btn, origIdx, q));
      container.appendChild(btn);
    });

    $("#btn-next").style.display = "none";
  }

  function onAnswer(btn, chosenIdx, q) {
    const allBtns = $$(".option-btn");
    const alreadyAnswered = [...allBtns].some((b) =>
      b.classList.contains("locked")
    );
    if (alreadyAnswered) return;

    allBtns.forEach((b) => b.classList.add("locked"));

    const isCorrect = chosenIdx === q.correct;
    if (isCorrect) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
      allBtns.forEach((b) => {
        if (parseInt(b.dataset.idx) === q.correct) b.classList.add("correct");
      });
    }

    answers.push({
      question: q.question,
      options: q.options,
      correct: q.correct,
      chosen: chosenIdx,
      isCorrect,
      explanation: q.explanation,
    });

    if (currentIndex < currentRound.length - 1) {
      $("#btn-next").style.display = "inline-block";
      $("#btn-next").textContent = "Nächste Frage";
    } else {
      $("#btn-next").style.display = "inline-block";
      $("#btn-next").textContent = "Ergebnis anzeigen";
    }
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentRound.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  // ───── RESULT ─────

  function showResult() {
    const correct = answers.filter((a) => a.isCorrect).length;
    const total = answers.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= PASS_THRESHOLD * 100;

    $("#result-correct").textContent = correct;
    $("#result-total").textContent = total;
    $("#result-percent").textContent = `${pct}%`;

    const verdict = $("#result-verdict");
    verdict.textContent = passed ? "Bestanden" : "Nicht bestanden";
    verdict.className = "result-verdict " + (passed ? "passed" : "failed");

    const ring = $("#score-ring");
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (correct / total) * circumference;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    ring.setAttribute("class", "ring-fg " + (passed ? "passed" : "failed"));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ring.style.strokeDashoffset = offset;
      });
    });

    const wrongAnswers = answers.filter((a) => !a.isCorrect);
    $("#btn-review").style.display =
      wrongAnswers.length > 0 ? "inline-block" : "none";

    buildReview();
    showScreen("result");
  }

  function buildReview() {
    const list = $("#review-list");
    list.innerHTML = "";

    answers.forEach((a, i) => {
      const item = document.createElement("div");
      item.className = `review-item ${a.isCorrect ? "was-correct" : "was-wrong"}`;

      let html = `<p class="review-q">${i + 1}. ${a.question}</p>`;

      if (!a.isCorrect) {
        html += `<p class="review-answer your-wrong">Deine Antwort: ${a.options[a.chosen]}</p>`;
      }
      html += `<p class="review-answer the-correct">Richtige Antwort: ${a.options[a.correct]}</p>`;
      html += `<div class="review-explanation">${a.explanation}</div>`;

      item.innerHTML = html;
      list.appendChild(item);
    });
  }

  // ───── HELPERS ─────

  function resetToStart() {
    selectedSection = null;
    selectedCategory = null;
    filteredQuestions = [];
    $$(".cat-card").forEach((c) => c.classList.remove("selected"));
    $("#subcategory-section").style.display = "none";
    $("#btn-start").disabled = true;
    showScreen("start");
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ───── BOOT ─────

  document.addEventListener("DOMContentLoaded", init);
})();
