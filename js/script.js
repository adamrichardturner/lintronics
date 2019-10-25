$('.lintronics-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: null,
  nextArrow: null,
});

$(document).ready(function() {
  $('#lintronics-about').waypoint(function() {
    $('.services-card').addClass('animated fadeIn');
    $('.services-card').addClass('displayNow');
  }, {
    offset: '50%'
  });
});