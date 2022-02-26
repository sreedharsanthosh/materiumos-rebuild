gsap.to(".home-badge", { x: 0, opacity: 1, duration: 1 });
gsap.to(".home-text", { x: 0, opacity: 1, duration: 1 });
gsap.to(".home-img", { x: 0, opacity: 1, duration: 1, delay: 0.3 });
gsap.to(".slider", { y: -1000, opacity: 0, duration: 2, delay: 2.5 });
const hamburger = document.querySelector(".hamburger");
const list = document.querySelectorAll(".overlay-nav li");
const navLinks = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-overlay");
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
});

list.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("hamburger-active");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  //coverflow effect
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },
});
