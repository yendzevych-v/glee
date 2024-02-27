$(function () {

  $('.hero__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });


  Fancybox.bind('[data-fancybox]', {

  });

  var mixer = mixitup('section.product', {
    controls: {
        scope: 'local'
    }
});
  var mixer1 = mixitup('section.design', {
    controls: {
        scope: 'local'
    }
});
});