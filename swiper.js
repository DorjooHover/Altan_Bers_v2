
const swiper1 = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:{
    delay:4000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickableClass:'swiper-pagination-clickable',
    clickable: true,
  },

});
const swiper2 = new Swiper('.swiper_right_slid', {
  // Default parameters
  direction:'vertical',
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  mousewheel: true,
  loop: true, 
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  autoplay:{
    delay:1000,
  },
})

const swiper3 = new Swiper('.swiper_employee', {
  // Optional parameters
  direction: 'horizontal',
  sliderPerView:2,
  scapeBetween:100,
  loop: true,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickableClass:'swiper-pagination-clickable',
    clickable: true,
  },

});
const swiper4 = new Swiper('.swiper_product', {
  // Optional parameters
  direction: 'horizontal',
  sliderPerView:2,
  scapeBetween:1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },


  
});

const swiper5 = new Swiper('.swiper_right_slide', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  mousewheel: true,
  // And if we need scrollbar
  slidesPerView: 10,
  spaceBetween: 100,
  autoplay:{
    delay:1000,
  },
});



const swiper6 = new Swiper('.swiper-add', {
  direction:'horizontal',
  loop: true,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickableClass:'swiper-pagination-clickable',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



