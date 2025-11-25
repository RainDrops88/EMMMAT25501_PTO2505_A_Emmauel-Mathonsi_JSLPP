export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.dataset.taskId = task.id;
  taskDiv.dataset.title = task.title;
  taskDiv.dataset.status = task.status;
  taskDiv.dataset.description = task.description || "";

  // Title
  const titleEl = document.createElement("h4");
  titleEl.innerText = task.title;
  taskDiv.appendChild(titleEl);

  return taskDiv;
}

