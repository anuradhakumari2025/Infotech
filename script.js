const menu = document.querySelector(".menu");
const mobileNavbar = document.querySelector(".mobile-navbar-overlay");
menu.addEventListener("click", () => {
  mobileNavbar.style.display = "block";
});
const closeBtn = document.querySelector(".navbar-close");
closeBtn.addEventListener("click", () => {
  mobileNavbar.style.display = "none";
});
