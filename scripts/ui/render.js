import { createTaskElement } from "./taskElement.js";
import { updateCounts } from "../tasks/updateCount.js";
import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";


/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks to their appropriate columns.
 */
export function renderTasks() {
  clearExistingTasks(); // Clear existing tasks first
  const tasks = loadTasksFromStorage(); // Load tasks from localStorage
  if (!Array.isArray(tasks)) return; // Safety check
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
  updateCounts(); // Called once after all tasks are rendered
}

