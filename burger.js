document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navbar = document.getElementById("navbar");
  const toggleDarkModeButton = document.getElementById("toggleDarkMode");

  burgerMenu.addEventListener("mouseover", function () {
    navbar.classList.add("show-navbar");
  });

  burgerMenu.addEventListener("mouseout", function () {
    navbar.classList.remove("show-navbar");
  });

  toggleDarkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

  const currentPath = window.location.pathname;

  const links = navbar.querySelectorAll("a");
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
const themeButton = document.getElementById("theme");

function OnClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", OnClick);



