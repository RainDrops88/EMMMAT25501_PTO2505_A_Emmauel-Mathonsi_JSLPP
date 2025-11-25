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

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupSidebarOpenHandler();
  setupSidebarCloseHandler();
  setupMobileLogoSidebarHandler();
  setupMobileSidebarCloseHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
