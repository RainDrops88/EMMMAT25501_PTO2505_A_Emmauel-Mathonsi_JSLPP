import { fetchData } from "./utils/api.js";
import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";
import { 
  setupSidebarOpenHandler,
  setupSidebarCloseHandler,
  setupMobileLogoSidebarHandler,
  setupMobileSidebarCloseHandler
} from "./ui/sidebarHandler.js";
import { setupDarkModeToggle } from "./ui/lightDarkMode.js";
import { setupEditTaskModalHandler } from "./ui/editTaskModal.js"
import { setupDeleteTaskHandler } from "./ui/deleteTaskHandler.js";

function initTaskBoard() {
  fetchData(); // Ensure initial data is fetched and stored
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupSidebarOpenHandler();
  setupSidebarCloseHandler();
  setupMobileLogoSidebarHandler();
  setupMobileSidebarCloseHandler();
  setupDarkModeToggle();
  setupEditTaskModalHandler();
  setupDeleteTaskHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
