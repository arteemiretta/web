function who() {
    Swal.fire({
        icon: 'info',
        title: '¿Quienes somos?',
        text: 'Arte Emiretta es una panadería...   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illo? Reprehenderit iste, consequatur cumque officia nesciunt sed, minus aliquam sint obcaecati labore dolore animi minima nisi nihil illum similique nemo.',
        footer: '<p>Gracias por preferirnos</p>'
      })
}

$(document).ready(function(){
 
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.ir-arriba').slideDown(300);
      } else {
        $('.ir-arriba').slideUp(300);
      }
    });
   
   });



AOS.init();







$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});
