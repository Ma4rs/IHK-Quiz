(function () {
  "use strict";

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
  let questionsPerRound = 10;
  let answered = false;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function isMulti(q) {
    return Array.isArray(q.correct);
  }

  function isFreetext(q) {
    return Array.isArray(q.accepts);
  }

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
    bindKeyboard();
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

    $$(".size-btn").forEach((btn) => {
      btn.addEventListener("click", () => onSizeClick(btn));
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

  // ───── KEYBOARD SHORTCUTS ─────

  function bindKeyboard() {
    document.addEventListener("keydown", (e) => {
      if (!$("#screen-quiz").classList.contains("active")) return;
      if (e.target.tagName === "INPUT") {
        if (e.key === "Enter") {
          e.preventDefault();
          if (!answered) {
            const checkBtn = $(".btn-check");
            if (checkBtn) checkBtn.click();
          } else {
            nextQuestion();
          }
        }
        return;
      }

      const q = currentRound[currentIndex];

      if (!answered && !isFreetext(q)) {
        const optBtns = [...$$(".option-btn")];
        const keyNum = parseInt(e.key);
        if (keyNum >= 1 && keyNum <= optBtns.length) {
          e.preventDefault();
          optBtns[keyNum - 1].click();
          return;
        }
      }

      if (e.key === "Enter") {
        e.preventDefault();
        if (!answered) {
          const checkBtn = $(".btn-check");
          if (checkBtn) checkBtn.click();
        } else {
          nextQuestion();
        }
      }
    });
  }

  function onSizeClick(btn) {
    $$(".size-btn").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    const val = btn.dataset.size;
    questionsPerRound = val === "all" ? Infinity : parseInt(val);
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

  // ───── TABLE / CODE RENDERING ─────

  function buildTableHTML(tbl) {
    let html = '<table class="q-table"><thead><tr>';
    tbl.headers.forEach((h) => (html += `<th>${h}</th>`));
    html += "</tr></thead><tbody>";
    tbl.rows.forEach((row) => {
      html += "<tr>";
      row.forEach((cell) => (html += `<td>${cell}</td>`));
      html += "</tr>";
    });
    html += "</tbody></table>";
    return html;
  }

  function buildCodeHTML(code) {
    return `<pre class="q-code">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`;
  }

  // ───── QUIZ LOGIC ─────

  function startQuiz() {
    const pool = [...filteredQuestions];
    shuffle(pool);
    const count = Math.min(questionsPerRound, pool.length);
    currentRound = pool.slice(0, count);
    currentIndex = 0;
    answers = [];
    answered = false;

    const label = selectedCategory
      ? CATEGORY_LABELS[selectedCategory]
      : selectedSection === "all"
        ? "Alle Themen"
        : SECTION_LABELS[selectedSection];
    $("#quiz-category-label").textContent = label;

    showScreen("quiz");
    renderQuestion();
  }

  function startRetryWrong() {
    const wrongQuestions = [];
    answers.forEach((a) => {
      if (!a.isCorrect && a._sourceQuestion) {
        wrongQuestions.push(a._sourceQuestion);
      }
    });
    if (wrongQuestions.length === 0) return;

    shuffle(wrongQuestions);
    currentRound = wrongQuestions;
    currentIndex = 0;
    answers = [];
    answered = false;

    $("#quiz-category-label").textContent = "Falsche wiederholen";
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentRound[currentIndex];
    const num = currentIndex + 1;
    const total = currentRound.length;
    answered = false;

    $("#quiz-progress").textContent = `${num} / ${total}`;
    $("#progress-fill").style.width = `${(num / total) * 100}%`;
    $("#question-text").innerHTML = q.question;

    const container = $("#options-container");
    container.innerHTML = "";

    if (q.table) {
      container.insertAdjacentHTML("beforeend", buildTableHTML(q.table));
    }
    if (q.code) {
      container.insertAdjacentHTML("beforeend", buildCodeHTML(q.code));
    }

    if (isFreetext(q)) {
      renderFreetext(container, q);
    } else {
      renderOptions(container, q);
    }

    $("#btn-next").style.display = "none";
  }

  // ───── INLINE EXPLANATION ─────

  function showInlineExplanation(container, explanation) {
    const expDiv = document.createElement("div");
    expDiv.className = "inline-explanation";
    expDiv.innerHTML = `<strong>Erklärung:</strong> ${explanation}`;
    container.appendChild(expDiv);
  }

  // ───── OPTIONS (unified: works for single AND multi) ─────

  function renderOptions(container, q) {
    const indices = q.options.map((_, i) => i);
    shuffle(indices);

    indices.forEach((origIdx, displayIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.dataset.idx = origIdx;
      btn.dataset.key = displayIdx + 1;
      btn.innerHTML = `<span class="key-hint">${displayIdx + 1}</span> ${q.options[origIdx]}`;
      btn.addEventListener("click", () => onToggleOption(btn));
      container.appendChild(btn);
    });

    const checkBtn = document.createElement("button");
    checkBtn.className = "btn btn-check";
    checkBtn.textContent = "Prüfen";
    checkBtn.id = "btn-check-options";
    checkBtn.addEventListener("click", () => onCheckOptions(q));
    container.appendChild(checkBtn);
  }

  function onToggleOption(btn) {
    if (btn.classList.contains("locked")) return;
    btn.classList.toggle("selected");
  }

  function onCheckOptions(q) {
    const allBtns = $$(".option-btn");
    const alreadyAnswered = [...allBtns].some((b) =>
      b.classList.contains("locked")
    );
    if (alreadyAnswered) return;

    const chosenIndices = [...allBtns]
      .filter((b) => b.classList.contains("selected"))
      .map((b) => parseInt(b.dataset.idx));

    const correctIndices = isMulti(q) ? q.correct : [q.correct];
    const correctSet = new Set(correctIndices);
    const chosenSet = new Set(chosenIndices);

    const isCorrect =
      correctSet.size === chosenSet.size &&
      [...correctSet].every((v) => chosenSet.has(v));

    allBtns.forEach((b) => {
      b.classList.add("locked");
      b.classList.remove("selected");
      const idx = parseInt(b.dataset.idx);
      if (correctSet.has(idx)) {
        b.classList.add("correct");
      } else if (chosenSet.has(idx)) {
        b.classList.add("wrong");
      }
    });

    const checkBtn = $("#btn-check-options");
    if (checkBtn) checkBtn.style.display = "none";

    answered = true;

    answers.push({
      question: q.question,
      options: q.options,
      correct: correctIndices,
      chosen: chosenIndices,
      isCorrect,
      explanation: q.explanation,
      type: "options",
      table: q.table || null,
      code: q.code || null,
      _sourceQuestion: q,
    });

    showInlineExplanation($("#options-container"), q.explanation);
    showNextButton();
  }

  // ───── FREETEXT RENDER ─────

  function renderFreetext(container, q) {
    const hint = document.createElement("p");
    hint.className = "multi-hint";
    hint.textContent = q.inputHint || "Gib deine Antwort ein.";
    container.appendChild(hint);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "freetext-input";
    input.id = "freetext-input";
    input.placeholder = "Antwort eingeben…";
    input.autocomplete = "off";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!answered) onCheckFreetext(q);
        else nextQuestion();
      }
    });
    container.appendChild(input);

    const checkBtn = document.createElement("button");
    checkBtn.className = "btn btn-check";
    checkBtn.textContent = "Prüfen";
    checkBtn.addEventListener("click", () => onCheckFreetext(q));
    container.appendChild(checkBtn);

    input.focus();
  }

  function onCheckFreetext(q) {
    const input = $("#freetext-input");
    if (!input || input.disabled) return;

    const userAnswer = input.value.trim();
    if (!userAnswer) return;

    input.disabled = true;

    const normalized = userAnswer.toLowerCase().replace(/\s+/g, " ");
    const isCorrect = q.accepts.some(
      (a) => a.toLowerCase().replace(/\s+/g, " ") === normalized
    );

    const feedback = document.createElement("div");
    feedback.className = "freetext-feedback " + (isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      input.classList.add("freetext-correct");
      feedback.textContent = "Richtig!";
    } else {
      input.classList.add("freetext-wrong");
      feedback.innerHTML =
        `<span class="fb-wrong">Falsch.</span> Richtige Antwort: <strong>${q.accepts[0]}</strong>`;
    }

    input.parentNode.insertBefore(feedback, input.nextSibling);

    const checkBtns = $$(".btn-check");
    checkBtns.forEach((b) => (b.style.display = "none"));

    answered = true;

    answers.push({
      question: q.question,
      correct: q.accepts[0],
      chosen: userAnswer,
      isCorrect,
      explanation: q.explanation,
      type: "freetext",
      table: q.table || null,
      code: q.code || null,
      _sourceQuestion: q,
    });

    showInlineExplanation($("#options-container"), q.explanation);
    showNextButton();
  }

  // ───── NAVIGATION ─────

  function showNextButton() {
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
    $("#btn-retry-wrong").style.display =
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

      if (a.table) html += buildTableHTML(a.table);
      if (a.code) html += buildCodeHTML(a.code);

      if (a.type === "freetext") {
        if (!a.isCorrect) {
          html += `<p class="review-answer your-wrong">Deine Antwort: ${a.chosen}</p>`;
        }
        html += `<p class="review-answer the-correct">Richtige Antwort: ${a.correct}</p>`;
      } else {
        if (!a.isCorrect) {
          const chosenLabels = a.chosen.map((idx) => a.options[idx]);
          html += `<p class="review-answer your-wrong">Deine Auswahl: ${chosenLabels.join(", ") || "(keine)"}</p>`;
        }
        const correctLabels = a.correct.map((idx) => a.options[idx]);
        const label = correctLabels.length === 1 ? "Richtige Antwort" : "Richtige Antworten";
        html += `<p class="review-answer the-correct">${label}: ${correctLabels.join(", ")}</p>`;
      }

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

  window._quizRetryWrong = startRetryWrong;
})();
