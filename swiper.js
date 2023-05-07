const swiper = new Swiper(".swiper-all .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  direction: "horizontal",
  /*  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },  */

  spaceBetween: 100,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
