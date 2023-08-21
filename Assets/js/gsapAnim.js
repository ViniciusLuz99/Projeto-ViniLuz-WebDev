document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('[data-scroll]');

  animatedElements.forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: element,
        start: 'top 100%', // Ajuste o valor conforme necessário
      }
    });
  });
});
