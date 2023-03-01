const sidebarSelector = "mobile-sidebar";
const sidebarTriggerSelector = "mobile-sidebar-trigger";
const sidebarCloseSelector = "mobile-sidebar-close";

const sidebarEl = document.querySelector(`.${sidebarSelector}`);
const sidebarBtnEl = document.querySelector(`.${sidebarTriggerSelector}`);
const sidebarCloseElsList = sidebarEl.querySelectorAll(`.${sidebarCloseSelector}`)

const breakpoint = sidebarEl.dataset.breakpoint || 991

const sidebarMediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`) || window.matchMedia("(max-width: 991px)");

function toggleSidebar() {
  sidebarBtnEl.classList.toggle("active");
  sidebarEl.classList.toggle("active");
}

function handleOutsideClick(e) {
  const sidebar = e.target.closest(`.${sidebarSelector}`);
  const trigger = e.target.closest(`.${sidebarTriggerSelector}`);

  if (!(sidebar || trigger)) {
    sidebarBtnEl.classList.remove("active");
    sidebarEl.classList.remove("active");
  }
}

function initMenu() {
  sidebarBtnEl.addEventListener("click", toggleSidebar);
  document.addEventListener("click", handleOutsideClick);
  sidebarCloseElsList.forEach(elem => elem.addEventListener("click", toggleSidebar))
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