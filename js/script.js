const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
    loop: true,
  speed: 3000,
  spaceBetween: 100,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    },
  
    autoplay: {
        delay: 5000,
    },

    
  //   mousewheel: {
  //   invert: false,
  // },
});
