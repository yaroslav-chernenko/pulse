$(document).ready(function () {
   $(document).ready(function () {
      $('.slider-block').slick({
         speed: 600,
         adaptiveHeight: true,
         prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev.png"></button>',
         nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next.png"></button>',
         responsive: [
            {
               breakpoint: 1024,
               settings: {
                  // arrows: false,
                  // dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 768,
               settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 480,
               settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            }
         ]
      });
   });
});

