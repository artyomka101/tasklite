const columns = document.querySelectorAll(".column");

let boardData = JSON.parse(localStorage.getItem("kanbanData")) || {
  todo: [],
  "in-progress": [],
  done: [],
};

document.querySelectorAll(".column__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const column = btn.closest(".column");
    const status = column.dataset.status;

    const title = prompt("Введите название задачи") || "";
    if (!title) return;
    const descr = prompt("Введите описание задачи") || "";
    const priorityInput =
      prompt("Приоритет (Высокий/ Средний / Низкий") || "Средний";
    const deadline = prompt("Срок (например: 12.12)") || "";

    const cleanTitle = title.trim();
    const cleanDescr = descr.trim();
    const cleanDeadline = deadline.trim();
    const clearPriority = normalizePriority(priorityInput);

    boardData[status].push({
      title: cleanTitle,
      descr: cleanDescr,
      priority: clearPriority,
      deadline: cleanDeadline,
    });

    renderBoard();
  });
});

function renderBoard() {
  columns.forEach((column) => {
    const status = column.dataset.status;
    const taskList = column.querySelector(".column__tasks");

    taskList.innerHTML = "";

    boardData[status].forEach((task, index) => {
      const el = document.createElement("div");

      el.className = "task-kanban";
      el.dataset.index = index;

      el.innerHTML = `
            <h3 class="task-kanban__title">${escapeHtml(task.title)}</h3>
              ${
                task.descr
                  ? `<p class="task-kanban__descr">
                ${escapeHtml(task.descr)}
              </p>`
                  : ""
              }

              <div class="task-kanban__footer">
                <span class="task-kanban__label ${task.priority}">${priorityLabel(task.priority)}</span>
                <span class="task-kanban__date">${escapeHtml(task.deadline)}</span>
              </div>
            `;

      taskList.appendChild(el);
    });

    updateCount(column);
  });

  localStorage.setItem("kanbanData", JSON.stringify(boardData));
}

function updateCount(column) {
  const countEL = column.querySelector(".column__count");
  const status = column.dataset.status;

  countEL.textContent = boardData[status].length;
}

function normalizePriority(value) {
  const v = String(value || "")
    .trim()
    .toLowerCase();

  if (["выс", "высокий", "в", "h", "high"].includes(v)) return "high";
  if (["ср", "средний", "м", "m", "medium"].includes(v)) return "medium";
  if (["низк", "низкий", "н", "n", "low"].includes(v)) return "low";

  return "medium";
}
function priorityLabel(clearPriority) {
  return clearPriority === "high"
    ? "Высокий приоритет"
    : "low"
      ? "Низкий приоритет"
      : "Средний приоритет";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt")
    .replace(/>/g, "&gt");
}

renderBoard();
