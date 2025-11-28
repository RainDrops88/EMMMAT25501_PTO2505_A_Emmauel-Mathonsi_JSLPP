import { initialTasks } from "./api.js"

// Helper to check if localStorage is available and usable
function isLocalStorageAvailable() {
  try {
    const testKey = '__test_localStorage_availability__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    console.warn("localStorage is not available or not writable:", e);
    return false;
  }
}

/**
 * Loads tasks from localStorage or initializes with initialTasks.
 * @returns {Array<Object>} The array of tasks.
 */
export function loadTasksFromStorage() {
  if (!isLocalStorageAvailable()) {
    console.warn("Cannot load tasks: localStorage is not available.");
    return initialTasks; // Fallback to initial tasks if localStorage is not available
  }

  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      const parsedTasks = JSON.parse(stored);
      // Optional: Add a check if parsedTasks is an array and contains expected items
      if (Array.isArray(parsedTasks)) {
          return parsedTasks;
      } else {
          console.error("Stored data is not an array. Reinitializing tasks.");
      }
    } catch (err) {
      console.error("Error parsing tasks from localStorage. Data might be corrupted:", err);
      // If parsing fails, the code will proceed to re-initialize with initialTasks below.
    }
  }

  // If no tasks in storage, or parsing failed, or data was malformed, initialize with initialTasks
  // and immediately save them to ensure localStorage is populated correctly.
  console.log("Initializing tasks with default data.");
  saveTasksToStorage(initialTasks); // Ensure initial tasks are saved if not present or corrupted
  return initialTasks;
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  if (!isLocalStorageAvailable()) {
    console.warn("Cannot save tasks: localStorage is not available.");
    return;
  }
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (e) {
    if (e instanceof DOMException && (e.code === 22 || e.code === 1014)) { // QuotaExceededError
      console.error("localStorage quota exceeded. Could not save tasks.", e);
      // Optionally, alert the user or offer to clear some data
    } else {
      console.error("Error saving tasks to localStorage:", e);
    }
  }
}
