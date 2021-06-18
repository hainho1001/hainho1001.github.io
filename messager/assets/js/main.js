$(window).scroll(function(){
  if ($(this).scrollTop() > 40) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});