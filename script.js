let burger = document.querySelector('.header_burger')
let menu = document.querySelector('.header_menu');

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('.header_burger').onclick = function(){
        menu.classList.toggle('active')
        burger.classList.toggle('active');
        document.querySelector('body').classList.toggle('lock')
    }
})

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: {
        sensitivity: 40,
        eventsTarget: '.swiper'
    }
  });

const swiper_1 = new Swiper('.swiper_1',{
    direction: 'horizontal',
    loop: true,
    skidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination_1',
        clickable: true,
        dynamicBullets: true,
      },

})