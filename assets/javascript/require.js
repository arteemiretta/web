function who() {
    Swal.fire({
        icon: 'Info',
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