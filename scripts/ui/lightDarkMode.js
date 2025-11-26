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
        localStorage.setItem("theme", rootElement.getAttribute("data-theme"));
    });
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        rootElement.setAttribute("data-theme", savedTheme);
        if (modeSwitch) modeSwitch.style.justifyContent = savedTheme === "dark" ? "flex-end" : "flex-start";
    } else {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = prefersDark ? "dark" : "light";
        rootElement.setAttribute("data-theme", initial);
        if (modeSwitch) modeSwitch.style.justifyContent = initial === "dark" ? "flex-end" : "flex-start";
    }
}