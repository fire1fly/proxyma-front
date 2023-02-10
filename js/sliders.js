let articleListSlider1 = new Swiper(".al1-slider", {
  slidesPerView: 3,
  spaceBetween: 65,
  pagination: {
    el: ".al1-slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
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
    1601: {
      slidesPerView: 3,
      spaceBetween: 65,
    },
  },
})

let wideCardsListSlider = new Swiper(".wc-slider", {
  pagination: {
    el: ".wc-slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 30,
    },
    1441: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 60,
    },
  },
});

if (document.documentElement.clientWidth <= 1440) {
  const productCardsSlider = new Swiper(".pc-slider", {
    pagination: {
      el: ".pc-slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      521: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });
}