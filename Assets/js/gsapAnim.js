//fade up animation
document.addEventListener("DOMContentLoaded", function () {
  const fadeUpElements = document.querySelectorAll('[data-scroll="fade-up"]');

  fadeUpElements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50, // Initial position slightly below (off the screen)
      duration: 1.2,
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Adjust the value as needed
      },
    });
  });
});
//right fade animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElementsFromRight = document.querySelectorAll(
    '[data-scroll="right"]'
  );

  animatedElementsFromRight.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      x: 100, // Initial position off the right side
      duration: 1.5,
      scrollTrigger: {
        trigger: element,
        start: "top 100%", // Adjust the value as needed
      },
    });
  });
});
//left fade animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElementsFromLeft = document.querySelectorAll(
    '[data-scroll="left"]'
  );

  animatedElementsFromLeft.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      x: -100, // Initial position off the left side
      duration: 1.5,
      scrollTrigger: {
        trigger: element,
        start: "top 100%", // Adjust the value as needed
      },
    });
  });
});
