const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  speed: 600,

  breakpoints: {
    980: {
      slidesPerView: 3,
    },
    560: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
