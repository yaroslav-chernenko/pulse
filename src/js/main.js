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


   $('ul.catalog-tabs').on('click', 'li:not(.catalog-tab_active)', function () {
      $(this)
         .addClass('catalog-tab_active').siblings().removeClass('catalog-tab_active')
         .closest('div.container').find('div.catalog-content').removeClass('catalog-content_active').eq($(this).index()).addClass('catalog-content_active');
   });

   function tabs(x) {
      $(x).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__more').eq(i).toggleClass('catalog-item__more_active');
         })
      });
   }

   tabs('.catalog-item__link');
   tabs('.catalog-item__link-back');
});

