const menuClass = "h-nav";
const menuTriggerClass = "h-menubtn";

const headerMediaQuery = window.matchMedia("(max-width: 1365px)");

const menuEl = document.querySelector(`.${menuClass}`);
const menuBtnEl = document.querySelector(`.${menuTriggerClass}`);

function toggleMenu() {
  menuBtnEl.classList.toggle("active");
  menuEl.classList.toggle("active");
}

function handleOutsideClick(e) {
  const menu = e.target.closest(`.${menuClass}`);
  const btn = e.target.closest(`.${menuTriggerClass}`);

  if (!(menu || btn)) {
    menuBtnEl.classList.remove("active");
    menuEl.classList.remove("active");
  }
}

function initMenu() {
  menuBtnEl.addEventListener("click", toggleMenu);
  document.addEventListener("click", handleOutsideClick);
}

function resetMenu() {
  menuBtnEl.removeEventListener("click", toggleMenu);
}

function handleMenu(e) {
  if (e.matches) {
    initMenu();
  } else {
    resetMenu();
  }
}

headerMediaQuery.addListener(handleMenu);
handleMenu(headerMediaQuery);