//  swiper js //
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
      // 基本的な設定
      loop: true, // ループさせる
      pagination: {
        el: '.swiper-pagination', // ページネーションの要素
        clickable: true, // クリック可能にする
      },
      navigation: {
        nextEl: '.swiper-button-next', // 次へボタン
        prevEl: '.swiper-button-prev', // 前へボタン
      },
      
    });
  });