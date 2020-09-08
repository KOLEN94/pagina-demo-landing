$(function () {
    'use strict'
  
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
    })
    
  })

  $(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $('.navscroll').addClass("azul");
       } else {
        $(".navscroll").removeClass("azul");
       }
    });
});
$(function (){
  $(window).scroll(function(){
     if ($(this).scrollTop() > 100) {
      $('.navbar-nav').addClass("lista-link2");
     } else {
      $(".navbar-nav").removeClass("lista-link");
     }
  });
});

ScrollReveal().reveal('.titulo05',{ delay: 500 });
ScrollReveal().reveal('.fotomiembro',{ delay: 700 });
ScrollReveal().reveal('.titulo-contacto',{ delay: 500 });
ScrollReveal().reveal('.formulario01',{ delay: 700 });