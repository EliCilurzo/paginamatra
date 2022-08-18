const Toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".navmenu");

  Toggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    Toggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    Toggle.setAttribute("aria-label", "Abrir menú");
  }
});