//  swiper js //
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
loop: true,
  speed:2000,//スライドが切り替わるのにかかる時間msec
  autoplay:{
  delay: 2000//次のスライドに切り替わるまでの時間msec
  },
  pagination: {
    el: '.swiper-pagination',
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