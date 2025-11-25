export function setupDarkModeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const modeSwitch = document.getElementById("mode-switch");
  const closeSidebarBtnSwitch = document.getElementById("close-sidebar-btn");
  const sidebarModeSwitch = document.getElementById("side-bar-div");
  const headerModeSwitch = document.getElementById("header");
  const taskContainers = document.querySelectorAll(".task-div");
  const taskModalSwitch = document.getElementById("task-modal");
  const newTaskModalSwitch = document.getElementById("new-task-modal-window");
    const body = document.body;
    toggleBtn.addEventListener("click", () => {
        toggleBtn.style.backgroundColor = toggleBtn.style.backgroundColor === 
        "rgb(99, 95, 199)" ? "rgba(244, 247, 253, 1)" : "rgb(99, 95, 199)";

        body.style.backgroundColor = body.style.backgroundColor === "rgb(32, 32, 32)" ?
        "rgb(244, 247, 253)" : "rgb(32, 32, 32)";
        body.style.color = body.style.color === "rgb(244, 247, 253)" ? "rgb(32, 32, 32)" 
        : "rgb(244, 247, 253)";
        taskContainers.forEach(container => {
            container.style.backgroundColor = container.style.backgroundColor === 
            "rgb(50, 50, 50)" ? "rgb(255, 255, 255)" : "rgb(50, 50, 50)";
            container.style.color = container.style.color === 
            "rgb(244, 247, 253)" ? "rgb(32, 32, 32)" : "rgb(244, 247, 253)";
        });
        modeSwitch.style.justifyContent = modeSwitch.style.justifyContent === "flex-end" ?
        "flex-start" : "flex-end";
        modeSwitch.style.backgroundColor = modeSwitch.style.backgroundColor === 
        "rgb(32, 32, 32)" ? "rgb(99, 95, 199)" : "rgb(32, 32, 32)";
        sidebarModeSwitch.style.backgroundColor = sidebarModeSwitch.style.backgroundColor === 
        "rgb(50, 50, 50)" ? "rgb(255, 255, 255)" : "rgb(50, 50, 50)";
        closeSidebarBtnSwitch.style.backgroundColor = closeSidebarBtnSwitch.style.backgroundColor === 
        "rgb(99, 95, 199)" ? "rgba(244, 247, 253, 1)" : "rgb(99, 95, 199)";
        closeSidebarBtnSwitch.style.color = closeSidebarBtnSwitch.style.color === 
        "rgba(244, 247, 253, 1)" ? "rgb(99, 95, 199)" : "rgba(244, 247, 253, 1)";
        headerModeSwitch.style.backgroundColor = headerModeSwitch.style.backgroundColor === 
        "rgb(50, 50, 50)" ? "rgb(255, 255, 255)" : "rgb(50, 50, 50)";
        headerModeSwitch.style.color = headerModeSwitch.style.color === 
        "rgba(255, 255, 255, 1)" ? "rgb(32, 32, 32)" : "rgba(255, 255, 255, 1)";
        taskModalSwitch.style.backgroundColor = taskModalSwitch.style.backgroundColor === 
        "rgb(50, 50, 50)" ? "rgb(255, 255, 255)" : "rgb(50, 50, 50)";
        taskModalSwitch.style.color = taskModalSwitch.style.color === 
        "rgba(255, 255, 255, 1)" ? "rgb(32, 32, 32)" : "rgba(255, 255, 255, 1)";
        newTaskModalSwitch.style.backgroundColor = newTaskModalSwitch.style.backgroundColor === 
        "rgb(50, 50, 50)" ? "rgb(255, 255, 255)" : "rgb(50, 50, 50)";
        newTaskModalSwitch.style.color = newTaskModalSwitch.style.color === 
        "rgba(255, 255, 255, 1)" ? "rgb(32, 32, 32)" : "rgba(255, 255, 255, 1)";
        localStorage.setItem("darkMode",toggleBtn);
    });
}