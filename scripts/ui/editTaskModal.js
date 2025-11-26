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
    // set the modal dataset so the delete handler can access the current task id
    if (modal) modal.dataset.currentTaskId = task.dataset.taskId;
}

export function saveEditedTask(taskElement, editedTask) {
    // Update the taskElement's display based on editedTask
    const titleElement = taskElement.querySelector("h4");
    if (titleElement) {
        titleElement.innerText = editedTask.title;
    } else {
        const newTitleElement = document.createElement("h4");
        newTitleElement.innerText = editedTask.title;
        taskElement.textContent = "";
        taskElement.appendChild(newTitleElement);
    }
    const descElement = taskElement.querySelector("p");
    if (descElement) {
        if (editedTask.description) {
            descElement.innerText = editedTask.description;
        } else {
            // Remove the <p> if description is cleared
            descElement.remove();
        }
    }
    // Update the element dataset for consistency
    if (taskElement.dataset) {
        taskElement.dataset.title = editedTask.title;
        taskElement.dataset.description = editedTask.description;
        taskElement.dataset.status = editedTask.status;
    }

    // Move task to new column if status changed
    const newContainer = document.querySelector(`.column-div[data-status="${editedTask.status}"] .tasks-container`);
    const currentContainer = taskElement.closest('.tasks-container');
    if (newContainer && currentContainer !== newContainer) {
        newContainer.appendChild(taskElement);
    }
}

// Note: delete handler moved to `scripts/ui/deleteTaskHandler.js` —
// The modal only manages edit/save, while delete is handled by the dedicated module.

export function setupEditTaskModalHandler() {
    const modal = document.getElementById("task-modal");
    const saveButton = document.getElementById("save-task-btn");
    let currentTask = null;
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("task-div") || e.target.closest(".task-div")) {
            currentTask = e.target.classList.contains("task-div") ? e.target : e.target.closest(".task-div");
            openEditModal(currentTask);
        }
    });

    saveButton.addEventListener("click", () => {
        if (!currentTask) return;
        const editedTask = {
            title: document.getElementById("task-title").value.trim(),
            description: document.getElementById("task-desc").value.trim(),
            status: document.getElementById("task-status").value,
        };
        saveEditedTask(currentTask, editedTask);
        // Persist changes to localStorage using the task ID stored in the element's dataset
        const taskId = parseInt(currentTask.dataset.taskId, 10);
        if (!Number.isNaN(taskId)) {
            updateTask({ id: taskId, ...editedTask });
        }
        modal.close();
    });
    // Clean up any stored modal dataset when the modal hides
    if (modal) {
        modal.addEventListener("close", () => {
            delete modal.dataset.currentTaskId;
        });
    }
}