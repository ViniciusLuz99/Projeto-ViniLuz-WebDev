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

const backToTopButton = document.getElementById("BackToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});



/*Animação do details*/
const detailsElements = document.querySelectorAll('details');

detailsElements.forEach(detailsElement => {
  detailsElement.addEventListener('toggle', () => {
    const answerElement = detailsElement.querySelector('.faq-answer');
    if (detailsElement.open) {
      answerElement.classList.add('fade-up-animation');
    } else {
      answerElement.classList.remove('fade-up-animation');
    }
  });
});