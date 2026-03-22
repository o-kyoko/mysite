
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

const items = document.querySelectorAll('.fusion-inner-box');

window.addEventListener('scroll', function(){
  items.forEach(function(item){
    const rect = item.getBoundingClientRect();

    if(rect.top < window.innerHeight - 50){
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
});
