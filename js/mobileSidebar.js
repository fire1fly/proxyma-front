const sidebarClass = "mobile-sidebar";
const sidebarTriggerClass = "mobile-sidebar-trigger";

const sidebarMediaQuery = window.matchMedia("(max-width: 991px)");

const sidebarEl = document.querySelector(`.${sidebarClass}`);
const sidebarBtnEl = document.querySelector(`.${sidebarTriggerClass}`);

function toggleSidebar() {
  sidebarBtnEl.classList.toggle("active");
  sidebarEl.classList.toggle("active");
}

function handleOutsideClick(e) {
  const sidebar = e.target.closest(`.${sidebarClass}`);
  const trigger = e.target.closest(`.${sidebarTriggerClass}`);

  if (!(sidebar || trigger)) {
    sidebarBtnEl.classList.remove("active");
    sidebarEl.classList.remove("active");
  }
}

function initMenu() {
  sidebarBtnEl.addEventListener("click", toggleSidebar);
  document.addEventListener("click", handleOutsideClick);
}

function resetMenu() {
  sidebarBtnEl.removeEventListener("click", toggleSidebar);
}

function handleMenu(e) {
  if (e.matches) {
    initMenu();
  } else {
    resetMenu();
  }
}

sidebarMediaQuery.addListener(handleMenu);
handleMenu(sidebarMediaQuery);