$(function () {

  $('.select-style').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text('$' + data.from.toFixed(2));
      $('.filter-price__to').text('$' + data.to.toFixed(2));
    },
    onChange: function (data) {
      $('.filter-price__from').text('$' + data.from.toFixed(2));
      $('.filter-price__to').text('$' + data.to.toFixed(2))
    },
  });

  $(".star").rateYo({
    readOnly: true,
    starWidth: '10px',
    spacing: '5px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00'
  });

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