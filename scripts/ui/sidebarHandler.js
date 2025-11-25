export function setupSidebarOpenHandler () {
  const sidebar = document.getElementById("side-bar-div");
  const openSidebarBtn = document.getElementById("open-sidebar-btn");
    openSidebarBtn.addEventListener("click", () => {
        sidebar.style.display = "flex";
        openSidebarBtn.style.display = "none";
    });
}

export function setupSidebarCloseHandler () {
  const sidebar = document.getElementById("side-bar-div");
  const openSidebarBtn = document.getElementById("open-sidebar-btn");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");
    closeSidebarBtn.addEventListener("click", () => {
        sidebar.style.display = "none";
        openSidebarBtn.style.display = "flex";

    });
}

export function setupMobileLogoSidebarHandler () {
  const sidebar = document.getElementById("side-bar-div");
  const openSidebarBtn = document.getElementById("open-sidebar-btn");
  const mobileLogoBtn = document.getElementById("mobile-logo-btn");
    mobileLogoBtn.addEventListener("click", () => {
        sidebar.style.display = "flex";
        openSidebarBtn.style.display = "none";
    });
}

export function setupMobileSidebarCloseHandler () {
  const sidebar = document.getElementById("side-bar-div");
  const closeMobileSidebarBtn = document.getElementById("close-mobile-sidebar-btn");
    closeMobileSidebarBtn.addEventListener("click", () => {
        sidebar.style.display = "none";
    });
}