var swiper = new Swiper('.product-slider', {
  spaceBetween: 30,
  effect: 'fade',
  // initialSlide: 2,
  loop: false,
  navigation: {
      nextEl: '.next',
      prevEl: '.prev'
  },
  // mousewheel: {
  //     // invert: false
  // },
  on: {
      init: function(){
          var index = this.activeIndex;

          var target = $('.product-slider-item').eq(index).data('target');

          console.log(target);

          $('.product-img-item').removeClass('active');
          $('.product-img-item#'+ target).addClass('active');
      }
  }
});

swiper.on('slideChange', function () {
  var index = this.activeIndex;

  var target = $('.product-slider-item').eq(index).data('target');

  console.log(target);

  $('.product-img-item').removeClass('active');
  $('.product-img-item#'+ target).addClass('active');

  if(swiper.isEnd) {
      $('.prev').removeClass('disabled');
      $('.next').addClass('disabled');
  } else {
      $('.next').removeClass('disabled');
  }

  if(swiper.isBeginning) {
      $('.prev').addClass('disabled');
  } else {
      $('.prev').removeClass('disabled');
  }
});

$(".js-fav").on("click", function() {
  $(this).find('.heart').toggleClass("is-active");
});