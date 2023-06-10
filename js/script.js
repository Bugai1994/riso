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


const elemment = document.querySelectorAll('.menu__btn')
const bascet = document.querySelector('.bascet__descr')
const carusel = document.querySelector('.swiper')
const menu = document.querySelector('.menu-left__item')


menu.addEventListener('click', () => {
  carusel.classList.add('delete')
})

elemment.forEach(item => {
  item.addEventListener('click', function () {
    bascet.classList.add('descr-not')
  })
  
})
