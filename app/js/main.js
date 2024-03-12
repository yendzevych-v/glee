$(function () {

  $('.product-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list');
  });
  $('.button-grid').on('click', function() {
    $('.product-item').removeClass('product-item--list');
  });

  $('.select-style, .product-details__num').styler();

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
  $(".product-item__star, .comments__content-star").rateYo({
    readOnly: true,
    starWidth: '17px',
    spacing: '10px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00'
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    arrows: false,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    arrows: false,
    draggable: false,
  });

  $('.hero__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.related__slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: ('<button type="button" class="slick-prev"><img src="images/icons/arrow-left.png" alt="arrow left"></button>'),
    nextArrow: ('<button type="button" class="slick-next"><img src="images/icons/arrow-right.png" alt="arrow right"></button>')
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