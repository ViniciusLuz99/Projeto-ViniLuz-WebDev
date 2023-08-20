const mobileMenu = document.getElementById("mobile-menu");
const openBtn = document.querySelector(".openbtn");
const navToggler = () => {
  mobileMenu.classList.toggle("active-menu");
  openBtn.classList.toggle("active-menu");
};

// function navToggler() {
//   var mobileMenu = document.getElementById("mobile-menu");
//   var openBtn = document.querySelector(".openbtn");
//   mobileMenu.classList.toggle("active");
//   openBtn.classList.toggle("active");
// }
