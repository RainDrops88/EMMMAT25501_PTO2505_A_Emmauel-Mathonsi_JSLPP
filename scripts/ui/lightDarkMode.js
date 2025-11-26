export function setupDarkModeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const modeSwitch = document.getElementById("mode-switch");
  const rootElement = document.documentElement;
  
    toggleBtn.addEventListener("click", () => {
        modeSwitch.style.justifyContent = modeSwitch.style.justifyContent === "flex-end" ?
        "flex-start" : "flex-end";
        let dataTheme = rootElement.getAttribute("data-theme");
        if (dataTheme === "light") {
            rootElement.setAttribute("data-theme", "dark");
        } else {
            rootElement.setAttribute("data-theme", "light");
        }
        localStorage.setItem("theme", body.getAttribute("data-theme"));
    });
}