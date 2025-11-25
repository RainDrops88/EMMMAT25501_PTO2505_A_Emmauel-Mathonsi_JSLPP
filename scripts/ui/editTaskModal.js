import { updateTask } from "../tasks/taskManager.js";

export function openEditModal(task) {
    // Open the dialog for editing without calling openTaskModal (which expects a task object)
    const modal = document.getElementById("task-modal");
    modal.showModal();
    // Title: prefer an <h4> inside the task, fallback to dataset or textContent
    const titleElement = task.querySelector("h4");
    document.getElementById("task-title").value = (titleElement && titleElement.innerText) || task.dataset.title || task.textContent || "";
    // Description: prefer a <p> inside the task, fallback to dataset
    const descElement = task.querySelector("p");
    document.getElementById("task-desc").value = (descElement && descElement.innerText) || task.dataset.description || "";
    let col = task.closest(".column-div").getAttribute("data-status");
    document.getElementById("task-status").value = col;
}