//  swiper js //
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
   loop: true,
   centeredSliders: true,
   speed: 3000,
   autoplay: {
    delay: 3000,   
    disableOnInteraction: false, // デフォルト: true
    pauseOnMouseEnter: false,    // デフォルト: true
    waitForTransition: true,     // デフォルト: true
    stopOnLastSlide: false,      // デフォルト: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: '.bullet',
 },

  //(3)ナビゲーションボタンを表示する時追加
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //(4)スクロールバーを表示する時追加
  scrollbar: {
    el: '.swiper-scrollbar',
  }
    });
  });