

$(function() {
  $(".menu li").hover(
    function() {
      $(".sub:not(:animated)", this).slideDown();
    },
    function() {
      $(".sub", this).slideUp();
    }
  );
});


$('.slider').slick({
    autoplay:true,
    autoplaySpeed:6000,
    fade: true,
});

