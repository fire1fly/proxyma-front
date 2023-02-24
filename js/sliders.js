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
});

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
    navigation: {
      nextEl: ".pc-slider-button-next",
      prevEl: ".pc-slider-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      521: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
}

let proxyCardsSlider = new Swiper(".prc-slider", {
  pagination: {
    el: ".prc-slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".prc-slider-button-next",
    prevEl: ".prc-slider-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1130: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

let articleListSlider3 = new Swiper(".al3-slider", {
  pagination: {
    el: ".al3-slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".al3-slider-button-next",
    prevEl: ".al3-slider-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

let reviewsSlider = new Swiper(".rv-slider", {
  slidesPerView: 3,
  spaceBetween: 65,
  pagination: {
    el: ".rv-slider-pagination",
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
    520: {
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
});