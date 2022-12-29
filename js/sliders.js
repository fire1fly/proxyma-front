let articleListSlider1 = new Swiper(".al1-slider", {
  slidesPerView: 3,
  spaceBetween: 65,
  pagination: {
    el: ".al1-slider-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 65,
    },
  },
})