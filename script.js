new Swiper(".mySwiper", {
  slidesPerView: 2.2,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 2.2,
    },
  },
});
