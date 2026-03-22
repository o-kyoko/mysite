
 $(function() {
    var $header = $('#top-head');
    // Nav Fixed
    $(window).scroll(function() {
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
  console.log("www");
$(function() {
    var $header = $('.header');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        
 });

$('.toggle').click(function(){
    (this).toggleClass('open');
 });

window.addEventListener('scroll', function(){

    //すべての.itemを取得
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
  
