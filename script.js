const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const count = document.getElementById("task-count");

function updateCount() {
  const total = list.children.length;
  count.textContent =
    `${total} ${total === 1 ? "task" : "tasks"} remaining`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  const item = document.createElement("li");
  const text = document.createElement("span");
  const button = document.createElement("button");

  text.textContent = task;
  button.textContent = "Done";
  button.type = "button";

  button.addEventListener("click", function () {
    item.remove();
    updateCount();
  });

  item.append(text, button);
  list.appendChild(item);

  input.value = "";
  input.focus();
  updateCount();
});