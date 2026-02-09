import {
  loadTasksFromStorage, saveTasksToStorage} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";
import { updateCounts } from "./updateCount.js";

export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);
  updateCounts();
  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}

export function updateTask(updatedTask) {
  const tasks = loadTasksFromStorage();
  const found = tasks.some((t) => t.id === updatedTask.id);
  if (!found) return;
  const updatedTasks = tasks.map((t) => (t.id === updatedTask.id ? { ...t, ...updatedTask } : t));
  saveTasksToStorage(updatedTasks);
  updateCounts();
  clearExistingTasks();
  renderTasks(updatedTasks);
}
