
window.addEventListener('DOMContentLoaded', function() {
    var $header = $('#top-head');
    // Nav Fixed
   window.addEventListener('scroll',function() {
     if ($(window).scrollTop() > 350) {
        $header.addClass('fixed');
      } else {
        $header.removeClass('fixed');
      }
    });
    // Nav Toggle Button
    $('#nav-toggle').click(function(){
       $header.toggleClass('open');
    });
  });
const myswiper = new Swiper('.swiper', {
 loop: true,
 centeredSlides : true,
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
 }    
});


window.addEventListener('scroll', function(){
    const item = document.querySelectorAll('.fusion-inner-box');
  
    //querySelectorAll('.item')は配列になるので、for構文で取得
    //配列は0から始まるのでi = 0
    //i < item.lengthで配列の要素よりも数が小さい時　i++(インクリメント)1つずつ増加
    for(let i = 0; i < item.length; i++){
  
      //.itemのオフセットの高さを取得
      var targetTop = item[i].offsetTop;
  
      //画面のスクロール量 + 300px > .itemのオフセットの高さを取得
      if(window.scrollY + 300 > targetTop){
      
        //itemにクラスshowを追加
        item[i].classList.add('show');
      }
    }
  });
