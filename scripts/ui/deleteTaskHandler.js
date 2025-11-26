import { updateCounts } from "../tasks/updateCount.js";
import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./render.js";

/**
 * Adds a click handler for the delete button inside the task modal.
 * Reads the task id from the modal dataset (set by `openEditModal`).
 */
export function setupDeleteTaskHandler() {
  const modal = document.getElementById("task-modal");
  const deleteTaskBtn = document.getElementById("delete-task-btn");
  if (!deleteTaskBtn || !modal) return;

  deleteTaskBtn.addEventListener("click", () => {
    const idStr = modal.dataset.currentTaskId || modal.dataset.taskId;
    const id = parseInt(idStr, 10);
    if (Number.isNaN(id)) return;

    const shouldDelete = confirm("Are you sure you want to delete this task?");
    if (!shouldDelete) return;

    // Update the data storage
    const tasks = loadTasksFromStorage();
    const updated = tasks.filter((t) => Number(t.id) !== id);
    saveTasksToStorage(updated);

    // Update UI
    clearExistingTasks();
    renderTasks(updated);
    updateCounts();

    // Close the modal
    modal.close();
  });
}

export default { setupDeleteTaskHandler };