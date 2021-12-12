gsap.to(".home-badge", { x: 0, opacity: 1, duration: 1 });
gsap.to(".home-text", { x: 0, opacity: 1, duration: 1 });
gsap.to(".home-img", { x: 0, opacity: 1, duration: 1, delay: 0.3 });

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
  