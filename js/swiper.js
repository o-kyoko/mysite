//  swiper js //
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      speed: 2000,
      autoplay: {
      delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
     },
      pagination: {
        el: '.swiper-pagination', // ページネーションの要素
        clickable: true, // クリック可能にする
      },
      navigation: {
        nextEl: '.swiper-button-next', // 次へボタン
        prevEl: '.swiper-button-prev', // 前へボタン
      }
      
    });
  });