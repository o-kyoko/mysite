//  swiper js //
document.addEventListener('DOMContentLoaded', () => {
 const myswiper = new Swiper('.swiper', {
   loop: true,
   centeredSlides : true,
   speed: 1300,
   autoplay: { 
   delay: 3000,
   disableOnInteraction: false,
 },
 pagination: { 
   el: '.swiper-pagination',
   clickable: true,
   type: 'bullets',
 }, 
 navigation: {
   nextEl:'.swiper-button-next',
   prevEl:'.swiper-button-prev',
 },

  //(4)スクロールバーを表示する時追加
  scrollbar: {
    el: '.swiper-scrollbar',
  }
    });
  });