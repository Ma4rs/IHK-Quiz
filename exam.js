(function () {
  "use strict";

  const PASS_THRESHOLD = 0.5;

  let exam = null;
  let allExamQuestions = [];
  let examAnswers = {};
  let examCurrentIdx = 0;
  let flagged = new Set();
  let timerInterval = null;
  let remainingSeconds = 0;
  let startTime = 0;
  let selfEvalPending = {};
  let examScreenOriginalHTML = "";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function showScreen(id) {
    $$(".screen").forEach((s) => s.classList.remove("active"));
    $(`#screen-${id}`).classList.add("active");
    window.scrollTo(0, 0);
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

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

  // ───── INIT ─────

  function initExams() {
    if (typeof EXAMS_DATA === "undefined" || !Array.isArray(EXAMS_DATA) || EXAMS_DATA.length === 0) {
      const section = $("#exam-select-section");
      if (section) section.style.display = "none";
      return;
    }

    const grid = $("#exam-select-grid");
    if (!grid) return;
    grid.innerHTML = "";

    EXAMS_DATA.forEach((term) => {
      const card = document.createElement("button");
      card.className = "cat-card exam-card";
      const partCount = term.parts ? term.parts.length : 0;
      card.innerHTML = `
        <span class="cat-icon">📝</span>
        <span class="cat-name">${term.title}</span>
        <span class="cat-count">${partCount} Teilprüfungen</span>
      `;
      card.addEventListener("click", () => showExamParts(term));
      grid.appendChild(card);
    });

    $("#exam-select-section").style.display = "block";

    if (!window._examEventsbound) {
      window._examEventsbound = true;
      examScreenOriginalHTML = $("#screen-exam").innerHTML;
      $("#btn-submit-exam").addEventListener("click", confirmSubmit);
      $("#btn-exam-prev").addEventListener("click", () => navigateExam(-1));
      $("#btn-exam-next").addEventListener("click", () => navigateExam(1));
      $("#btn-flag").addEventListener("click", toggleFlag);
      $("#btn-exam-review").addEventListener("click", () => showScreen("exam-review"));
      $("#btn-exam-restart").addEventListener("click", endExam);
      $("#btn-exam-back-result").addEventListener("click", () => showScreen("exam-result"));
      $("#btn-exam-restart2").addEventListener("click", endExam);
    }
  }

  function showExamParts(term) {
    const grid = $("#exam-select-grid");
    grid.innerHTML = "";

    const backBtn = document.createElement("button");
    backBtn.className = "btn btn-secondary exam-back-btn";
    backBtn.textContent = "← Zurück";
    backBtn.addEventListener("click", () => initExams());
    grid.parentNode.insertBefore(backBtn, grid);

    $(".exam-select-label").textContent = term.title;

    term.parts.forEach((part) => {
      const totalQ = part.tasks.reduce((s, t) => s + t.questions.length, 0);
      const card = document.createElement("button");
      card.className = "cat-card exam-card";
      card.innerHTML = `
        <span class="cat-icon">📄</span>
        <span class="cat-name">${part.title}</span>
        <span class="cat-count">${part.duration} Min · ${totalQ} Aufgaben</span>
      `;
      card.addEventListener("click", () => {
        const oldBack = $(".exam-back-btn");
        if (oldBack) oldBack.remove();
        startExam(part);
      });
      grid.appendChild(card);
    });
  }

  // ───── START EXAM ─────

  function startExam(ex) {
    exam = ex;
    allExamQuestions = [];
    examAnswers = {};
    flagged = new Set();
    selfEvalPending = {};
    examCurrentIdx = 0;

    ex.tasks.forEach((task) => {
      task.questions.forEach((q) => {
        allExamQuestions.push({ ...q, _taskTitle: task.title, _taskPoints: task.points });
      });
    });

    remainingSeconds = ex.duration * 60;
    startTime = Date.now();

    $("#exam-title").textContent = ex.title;
    buildExamNav();
    renderExamQuestion();
    startTimer();
    showScreen("exam");
  }

  // ───── TIMER ─────

  function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay();
      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;
    const str = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    const el = $("#exam-timer");
    el.textContent = str;

    el.classList.remove("timer-warning", "timer-critical");
    if (remainingSeconds <= 300) {
      el.classList.add("timer-critical");
    } else if (remainingSeconds <= 900) {
      el.classList.add("timer-warning");
    }
  }

  // ───── NAV ─────

  function buildExamNav() {
    const nav = $("#exam-nav");
    nav.innerHTML = "";

    let currentTask = "";
    allExamQuestions.forEach((q, i) => {
      if (q._taskTitle !== currentTask) {
        currentTask = q._taskTitle;
        const label = document.createElement("div");
        label.className = "exam-nav-task";
        label.textContent = currentTask;
        nav.appendChild(label);
      }

      const btn = document.createElement("button");
      btn.className = "exam-nav-btn";
      btn.dataset.idx = i;
      btn.textContent = i + 1;
      btn.addEventListener("click", () => goToExamQuestion(i));
      nav.appendChild(btn);
    });

    updateNavStates();
  }

  function updateNavStates() {
    $$(".exam-nav-btn").forEach((btn) => {
      const idx = parseInt(btn.dataset.idx);
      btn.classList.toggle("active", idx === examCurrentIdx);
      btn.classList.toggle("answered", examAnswers[idx] !== undefined);
      btn.classList.toggle("flagged", flagged.has(idx));
    });

    const flagBtn = $("#btn-flag");
    if (flagBtn) {
      flagBtn.textContent = flagged.has(examCurrentIdx) ? "Markierung entfernen" : "Markieren";
    }
  }

  function goToExamQuestion(idx) {
    saveCurrentAnswer();
    examCurrentIdx = idx;
    renderExamQuestion();
  }

  function navigateExam(dir) {
    saveCurrentAnswer();
    const newIdx = examCurrentIdx + dir;
    if (newIdx < 0 || newIdx >= allExamQuestions.length) return;
    examCurrentIdx = newIdx;
    renderExamQuestion();
  }

  function toggleFlag() {
    if (flagged.has(examCurrentIdx)) {
      flagged.delete(examCurrentIdx);
    } else {
      flagged.add(examCurrentIdx);
    }
    updateNavStates();
  }

  // ───── SAVE ANSWER (from DOM) ─────

  function saveCurrentAnswer() {
    const q = allExamQuestions[examCurrentIdx];
    if (!q) return;

    if (isOpen(q)) {
      const ta = $("#exam-textarea");
      if (ta) examAnswers[examCurrentIdx] = { type: "open", text: ta.value };
    } else if (isFreetext(q)) {
      const inp = $("#exam-freetext-input");
      if (inp) examAnswers[examCurrentIdx] = { type: "freetext", text: inp.value.trim() };
    } else if (isMatch(q)) {
      const dropzones = $$(".match-dropzone");
      const pairs = [];
      dropzones.forEach((dz) => {
        pairs.push({ left: dz.dataset.left, chosen: dz.dataset.filled ? dz.textContent : "" });
      });
      examAnswers[examCurrentIdx] = { type: "match", pairs };
    } else {
      const selected = [...$$(".option-btn.selected")].map((b) => parseInt(b.dataset.idx));
      if (selected.length > 0) {
        examAnswers[examCurrentIdx] = { type: "options", chosen: selected };
      }
    }
  }

  // ───── QUESTION TYPE CHECKS ─────

  function isMulti(q) { return Array.isArray(q.correct); }
  function isFreetext(q) { return Array.isArray(q.accepts); }
  function isMatch(q) { return Array.isArray(q.pairs); }
  function isOpen(q) { return q.type === "open"; }

  // ───── RENDER ─────

  function renderExamQuestion() {
    const q = allExamQuestions[examCurrentIdx];
    const container = $("#exam-options-container");
    container.innerHTML = "";

    $("#exam-task-header").textContent = q._taskTitle || "";
    $("#exam-question-text").innerHTML = q.question;

    if (q.image) {
      container.insertAdjacentHTML("beforeend",
        `<img class="q-image" src="${q.image}" alt="Abbildung zur Aufgabe">`);
    }
    if (q.table) {
      container.insertAdjacentHTML("beforeend", buildTableHTML(q.table));
    }
    if (q.code) {
      container.insertAdjacentHTML("beforeend", buildCodeHTML(q.code));
    }

    if (isOpen(q)) {
      renderExamOpen(container, q);
    } else if (isMatch(q)) {
      renderExamMatch(container, q);
    } else if (isFreetext(q)) {
      renderExamFreetext(container, q);
    } else {
      renderExamOptions(container, q);
    }

    updateNavStates();

    $("#btn-exam-prev").disabled = examCurrentIdx === 0;

    const nextBtn = $("#btn-exam-next");
    const isLast = examCurrentIdx === allExamQuestions.length - 1;
    nextBtn.disabled = false;
    if (isLast) {
      nextBtn.textContent = "Abgeben";
      nextBtn.className = "btn btn-submit-exam";
      nextBtn.onclick = (e) => { e.preventDefault(); confirmSubmit(); };
    } else {
      nextBtn.textContent = "Weiter";
      nextBtn.className = "btn btn-primary";
      nextBtn.onclick = null;
    }
  }

  function renderExamOptions(container, q) {
    const indices = q.options.map((_, i) => i);
    const saved = examAnswers[examCurrentIdx];

    indices.forEach((origIdx, displayIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.dataset.idx = origIdx;
      btn.innerHTML = `<span class="key-hint">${displayIdx + 1}</span> ${q.options[origIdx]}`;
      if (saved && saved.chosen && saved.chosen.includes(origIdx)) {
        btn.classList.add("selected");
      }
      btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
      });
      container.appendChild(btn);
    });
  }

  function renderExamFreetext(container, q) {
    const hint = document.createElement("p");
    hint.className = "multi-hint";
    hint.textContent = q.inputHint || "Gib deine Antwort ein.";
    container.appendChild(hint);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "freetext-input";
    input.id = "exam-freetext-input";
    input.placeholder = "Antwort eingeben…";
    input.autocomplete = "off";
    const saved = examAnswers[examCurrentIdx];
    if (saved && saved.text) input.value = saved.text;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        saveCurrentAnswer();
        if (examCurrentIdx < allExamQuestions.length - 1) {
          navigateExam(1);
        } else {
          confirmSubmit();
        }
      }
    });
    container.appendChild(input);
    input.focus();
  }

  function renderExamOpen(container, q) {
    const hint = document.createElement("p");
    hint.className = "multi-hint";
    hint.textContent = q.inputHint || "Formuliere deine Antwort.";
    container.appendChild(hint);

    if (q.points) {
      const pts = document.createElement("span");
      pts.className = "exam-points-badge";
      pts.textContent = `${q.points} Punkte`;
      container.appendChild(pts);
    }

    const textarea = document.createElement("textarea");
    textarea.className = "exam-textarea";
    textarea.id = "exam-textarea";
    textarea.placeholder = "Deine Antwort…";
    textarea.rows = 5;
    const saved = examAnswers[examCurrentIdx];
    if (saved && saved.text) textarea.value = saved.text;
    container.appendChild(textarea);
    textarea.focus();
  }

  function renderExamMatch(container, q) {
    const hint = document.createElement("p");
    hint.className = "multi-hint";
    hint.textContent = "Ziehe die Begriffe auf die passende Zuordnung.";
    container.appendChild(hint);

    const matchArea = document.createElement("div");
    matchArea.className = "match-area";

    const leftItems = q.pairs.map((p) => p.left);
    const rightItems = q.pairs.map((p) => p.right);
    const saved = examAnswers[examCurrentIdx];

    const shuffledRight = [...rightItems];
    if (!saved) shuffle(shuffledRight);

    const slots = document.createElement("div");
    slots.className = "match-slots";

    leftItems.forEach((left) => {
      const row = document.createElement("div");
      row.className = "match-row";
      row.innerHTML = `<div class="match-left">${left}</div>`;

      const dropzone = document.createElement("div");
      dropzone.className = "match-dropzone";
      dropzone.dataset.left = left;

      if (saved) {
        const pair = saved.pairs.find((p) => p.left === left);
        if (pair && pair.chosen) {
          dropzone.textContent = pair.chosen;
          dropzone.dataset.filled = "true";
          dropzone.classList.add("filled");
        } else {
          dropzone.textContent = "Hierher ziehen";
        }
      } else {
        dropzone.textContent = "Hierher ziehen";
      }

      dropzone.addEventListener("dragover", (e) => { e.preventDefault(); dropzone.classList.add("drag-over"); });
      dropzone.addEventListener("dragleave", () => { dropzone.classList.remove("drag-over"); });
      dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("drag-over");
        const text = e.dataTransfer.getData("text/plain");
        const sourceId = e.dataTransfer.getData("source-id");

        if (dropzone.dataset.filled) {
          const oldText = dropzone.textContent;
          const pool = $(".match-pool");
          const chip = document.createElement("div");
          chip.className = "match-chip";
          chip.draggable = true;
          chip.textContent = oldText;
          chip.id = "chip-" + Math.random().toString(36).slice(2);
          bindChipDrag(chip);
          pool.appendChild(chip);
        }

        dropzone.textContent = text;
        dropzone.dataset.filled = "true";
        dropzone.classList.add("filled");

        const srcEl = document.getElementById(sourceId);
        if (srcEl) srcEl.remove();
      });

      row.appendChild(dropzone);
      slots.appendChild(row);
    });

    matchArea.appendChild(slots);

    const usedRight = saved ? saved.pairs.filter((p) => p.chosen).map((p) => p.chosen) : [];
    const poolItems = saved
      ? shuffledRight.filter((r) => !usedRight.includes(r))
      : shuffledRight;

    const pool = document.createElement("div");
    pool.className = "match-pool";

    poolItems.forEach((right, i) => {
      const chip = document.createElement("div");
      chip.className = "match-chip";
      chip.draggable = true;
      chip.textContent = right;
      chip.id = "exam-chip-" + i;
      bindChipDrag(chip);
      pool.appendChild(chip);
    });

    matchArea.appendChild(pool);
    container.appendChild(matchArea);
  }

  function bindChipDrag(chip) {
    chip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", chip.textContent);
      e.dataTransfer.setData("source-id", chip.id);
      e.dataTransfer.effectAllowed = "move";
      chip.classList.add("dragging");
    });
    chip.addEventListener("dragend", () => chip.classList.remove("dragging"));
  }

  // ───── SUBMIT EXAM ─────

  function confirmSubmit() {
    saveCurrentAnswer();

    const unanswered = allExamQuestions.filter((_, i) => !examAnswers[i]).length;
    const flaggedCount = flagged.size;
    let msg = "Prüfung jetzt abgeben?";
    if (unanswered > 0) msg += `\n\n${unanswered} Frage(n) noch nicht beantwortet.`;
    if (flaggedCount > 0) msg += `\n${flaggedCount} Frage(n) markiert.`;

    if (confirm(msg)) submitExam();
  }

  function submitExam() {
    clearInterval(timerInterval);
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    evaluateExam(elapsed);
  }

  function evaluateExam(elapsedSeconds) {
    const results = [];
    let totalPoints = 0;
    let earnedPoints = 0;

    allExamQuestions.forEach((q, i) => {
      const answer = examAnswers[i];
      const qPoints = q.points || 1;
      totalPoints += qPoints;

      const result = {
        question: q.question,
        taskTitle: q._taskTitle,
        explanation: q.explanation || q.modelAnswer || "",
        type: "unanswered",
        points: 0,
        maxPoints: qPoints,
        image: q.image || null,
        table: q.table || null,
        code: q.code || null,
      };

      if (!answer) {
        result.type = "unanswered";
        result.points = 0;
      } else if (isOpen(q)) {
        result.type = "open";
        result.userText = answer.text;
        result.modelAnswer = q.modelAnswer || "";
        const selfEval = selfEvalPending[i];
        if (selfEval !== undefined) {
          result.points = selfEval;
        } else {
          result.needsSelfEval = true;
          result.qIdx = i;
          result.points = 0;
        }
      } else if (isFreetext(q)) {
        result.type = "freetext";
        result.userText = answer.text;
        result.correctAnswer = q.accepts[0];
        const normalized = answer.text.toLowerCase().replace(/\s+/g, " ");
        const correct = q.accepts.some((a) => a.toLowerCase().replace(/\s+/g, " ") === normalized);
        result.isCorrect = correct;
        result.points = correct ? qPoints : 0;
      } else if (isMatch(q)) {
        result.type = "match";
        const correctMap = {};
        q.pairs.forEach((p) => (correctMap[p.left] = p.right));
        let matchCorrect = true;
        result.userPairs = (answer.pairs || []).map((p) => {
          const expected = correctMap[p.left];
          const ok = p.chosen === expected;
          if (!ok) matchCorrect = false;
          return { left: p.left, chosen: p.chosen, expected, correct: ok };
        });
        result.isCorrect = matchCorrect;
        result.pairs = q.pairs;
        result.points = matchCorrect ? qPoints : 0;
      } else {
        result.type = "options";
        result.options = q.options;
        result.chosen = answer.chosen || [];
        const correctIndices = isMulti(q) ? q.correct : [q.correct];
        result.correct = correctIndices;
        const correctSet = new Set(correctIndices);
        const chosenSet = new Set(result.chosen);
        const isCorrect = correctSet.size === chosenSet.size &&
          [...correctSet].every((v) => chosenSet.has(v));
        result.isCorrect = isCorrect;
        result.points = isCorrect ? qPoints : 0;
      }

      earnedPoints += result.points;
      results.push(result);
    });

    const needsSelfEval = results.filter((r) => r.needsSelfEval);

    if (needsSelfEval.length > 0) {
      showSelfEvaluation(results, needsSelfEval, totalPoints, elapsedSeconds);
    } else {
      showExamResult(results, totalPoints, earnedPoints, elapsedSeconds);
    }
  }

  // ───── SELF EVALUATION ─────

  function showSelfEvaluation(results, pending, totalPoints, elapsedSeconds) {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `<h2 class="review-title">Selbstbewertung — offene Fragen</h2>
      <p class="multi-hint">Vergleiche deine Antwort mit der Musterlösung und bewerte dich selbst.</p>`;

    const list = document.createElement("div");
    list.className = "review-list";

    let evaluated = 0;

    pending.forEach((r, idx) => {
      const item = document.createElement("div");
      item.className = "review-item self-eval-item";
      item.innerHTML = `
        <p class="review-q">${r.question}</p>
        ${r.image ? `<img class="q-image" src="${r.image}" alt="">` : ""}
        ${r.table ? buildTableHTML(r.table) : ""}
        ${r.code ? buildCodeHTML(r.code) : ""}
        <div class="self-eval-section">
          <div class="self-eval-yours">
            <strong>Deine Antwort:</strong>
            <p class="self-eval-text">${r.userText || "(leer)"}</p>
          </div>
          <div class="self-eval-model">
            <strong>Musterlösung:</strong>
            <p class="self-eval-text">${r.modelAnswer}</p>
          </div>
          <div class="self-eval-buttons" id="self-eval-${idx}">
            <span class="self-eval-label">Punkte vergeben (0–${r.maxPoints}):</span>
            <div class="self-eval-points-row">
              ${Array.from({ length: r.maxPoints + 1 }, (_, p) =>
                `<button class="btn btn-self-pt${p === 0 ? " zero" : p === r.maxPoints ? " full" : ""}" data-pts="${p}">${p}</button>`
              ).join("")}
            </div>
          </div>
        </div>
      `;
      list.appendChild(item);

      setTimeout(() => {
        const btns = item.querySelectorAll(".btn-self-pt");
        btns.forEach((b) => {
          b.addEventListener("click", () => {
            btns.forEach((x) => x.classList.remove("chosen"));
            b.classList.add("chosen");
            const prev = selfEvalPending[r.qIdx];
            selfEvalPending[r.qIdx] = parseInt(b.dataset.pts);
            if (prev === undefined) evaluated++;

            if (evaluated === pending.length) {
              const finishBtn = $("#btn-finish-selfeval");
              if (finishBtn) finishBtn.disabled = false;
            }
          });
        });
      }, 0);
    });

    container.appendChild(list);

    const finishBtn = document.createElement("button");
    finishBtn.className = "btn btn-primary";
    finishBtn.id = "btn-finish-selfeval";
    finishBtn.textContent = "Auswertung abschließen";
    finishBtn.disabled = true;
    finishBtn.style.display = "block";
    finishBtn.style.margin = "1rem auto 2rem";
    finishBtn.addEventListener("click", () => {
      let earned = 0;
      results.forEach((r) => {
        if (r.needsSelfEval) {
          r.points = selfEvalPending[r.qIdx] || 0;
          delete r.needsSelfEval;
        }
        earned += r.points;
      });
      showExamResult(results, totalPoints, earned, elapsedSeconds);
    });
    container.appendChild(finishBtn);

    const screenExam = $("#screen-exam");
    screenExam.innerHTML = "";
    screenExam.appendChild(container);
    screenExam.classList.add("active");
    window.scrollTo(0, 0);
  }

  // ───── EXAM RESULT ─────

  function showExamResult(results, totalPoints, earnedPoints, elapsedSeconds) {
    const pct = Math.round((earnedPoints / totalPoints) * 100);
    const passed = pct >= PASS_THRESHOLD * 100;

    $("#exam-result-points").textContent = earnedPoints;
    $("#exam-result-total").textContent = totalPoints;
    $("#exam-result-percent").textContent = `${pct}%`;

    const verdict = $("#exam-result-verdict");
    verdict.textContent = passed ? "Bestanden" : "Nicht bestanden";
    verdict.className = "result-verdict " + (passed ? "passed" : "failed");

    const m = Math.floor(elapsedSeconds / 60);
    const s = elapsedSeconds % 60;
    $("#exam-time-taken").textContent = `Benötigte Zeit: ${m} Min ${s} Sek`;

    const ring = $("#exam-score-ring");
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (earnedPoints / totalPoints) * circumference;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    ring.setAttribute("class", "ring-fg " + (passed ? "passed" : "failed"));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ring.style.strokeDashoffset = offset;
      });
    });

    buildExamReview(results);
    showScreen("exam-result");
  }

  function buildExamReview(results) {
    const list = $("#exam-review-list");
    list.innerHTML = "";

    let currentTask = "";

    results.forEach((r, i) => {
      if (r.taskTitle && r.taskTitle !== currentTask) {
        currentTask = r.taskTitle;
        const header = document.createElement("h3");
        header.className = "exam-review-task-header";
        header.textContent = currentTask;
        list.appendChild(header);
      }

      const isCorrect = r.type === "open" ? r.points === r.maxPoints :
        r.type === "unanswered" ? false : r.isCorrect;

      const item = document.createElement("div");
      item.className = `review-item ${isCorrect ? "was-correct" : "was-wrong"}`;

      let html = `<p class="review-q">${i + 1}. ${r.question}</p>`;
      if (r.image) html += `<img class="q-image" src="${r.image}" alt="">`;
      if (r.table) html += buildTableHTML(r.table);
      if (r.code) html += buildCodeHTML(r.code);

      html += `<p class="exam-review-points">${r.points} / ${r.maxPoints} Punkte</p>`;

      if (r.type === "unanswered") {
        html += `<p class="review-answer your-wrong">Nicht beantwortet</p>`;
      } else if (r.type === "open") {
        html += `<p class="review-answer">${r.userText || "(leer)"}</p>`;
        if (r.modelAnswer) {
          html += `<p class="review-answer the-correct">Musterlösung: ${r.modelAnswer}</p>`;
        }
      } else if (r.type === "freetext") {
        if (!r.isCorrect) html += `<p class="review-answer your-wrong">Deine Antwort: ${r.userText}</p>`;
        html += `<p class="review-answer the-correct">Richtige Antwort: ${r.correctAnswer}</p>`;
      } else if (r.type === "match") {
        if (!r.isCorrect) {
          r.userPairs.filter((p) => !p.correct).forEach((p) => {
            html += `<p class="review-answer your-wrong">${p.left} → ${p.chosen || "(leer)"}</p>`;
          });
        }
        r.pairs.forEach((p) => {
          html += `<p class="review-answer the-correct">${p.left} → ${p.right}</p>`;
        });
      } else if (r.type === "options") {
        if (!r.isCorrect) {
          const chosen = r.chosen.map((idx) => r.options[idx]);
          html += `<p class="review-answer your-wrong">Deine Auswahl: ${chosen.join(", ") || "(keine)"}</p>`;
        }
        const correct = r.correct.map((idx) => r.options[idx]);
        const label = correct.length === 1 ? "Richtige Antwort" : "Richtige Antworten";
        html += `<p class="review-answer the-correct">${label}: ${correct.join(", ")}</p>`;
      }

      if (r.explanation) {
        html += `<div class="review-explanation">${r.explanation}</div>`;
      }

      item.innerHTML = html;
      list.appendChild(item);
    });
  }

  // ───── CLEANUP ─────

  function endExam() {
    clearInterval(timerInterval);
    exam = null;
    allExamQuestions = [];
    examAnswers = {};
    flagged = new Set();
    selfEvalPending = {};

    if (examScreenOriginalHTML) {
      $("#screen-exam").innerHTML = examScreenOriginalHTML;
      window._examEventsbound = false;
    }

    const oldBack = $(".exam-back-btn");
    if (oldBack) oldBack.remove();
    $(".exam-select-label").textContent = "Prüfungssimulation";
    initExams();
    showScreen("start");
  }

  // ───── BOOT ─────

  document.addEventListener("DOMContentLoaded", initExams);
})();
