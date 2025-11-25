export function updateCounts() {
      document.querySelectorAll(".column-div").forEach(column => {
        const count = column.querySelectorAll(".task-div").length;
        column.querySelector(".count").innerText = count;
      });
    }