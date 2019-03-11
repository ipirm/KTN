
$(document).ready(function () {

$('a[href$=".pdf"]').not('.slick-slide a').addClass('download').attr('target', '_blank');
$('a[href$=".doc"]').not('.slick-slide a').addClass('download').attr('target', '_blank');
$('a[href$=".docx"]').not('.slick-slide a').addClass('download').attr('target', '_blank');	
$('a[href$=".xls"]').not('.slick-slide a').addClass('download').attr('target', '_blank');
$('a[href$=".xlsx"]').not('.slick-slide a').addClass('download').attr('target', '_blank');
});

$(document).ready(function () {

	$('.poll').click(function () {
		$(this).parents('.tabs--poll_item').toggleClass('active--poll');
		$(this).next('.js-poll-item').slideToggle("fast");
		$(this).toggleClass('active-poll');
		if ($('.tabs--poll_item').find('.poll').hasClass('active-poll')) {

		}
	});
});
$(".search-input input ").keyup(function (event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		console.log(10);
	}
});

//
//if($(window).width() > 707) {
//	$('.js___toggle_click2 #js___togle_btn').click(function(e) {
//		 $('.js___toggle_click2').removeClass('active_');
//		    $(this).parents('.js___toggle_click2').addClass("active_");
//		$( "#js_subtabs " ).slideToggle( "fast", function() {
//  });
//		if($('.js___toggle_click2').hasClass('active_')){
//				 $(this).find('.rotate_active2').toggleClass("active-rotate2");
//		}
//	  });
//	
//}
$(function() {
	$('.tabs-structure__pagination .structure-pagination__item').click(function (e) {
		$('.structure-pagination__item').parents('.js___toggle_click').not($(this).parents('.js___toggle_click')).removeClass("active");
		$( this ).parents('.js___toggle_click').toggleClass("active");
		$('.rotate_active').not( this ).removeClass("active-rotate");
		$(this).find('.rotate_active').toggleClass("active-rotate");
		
			});
		$(' .js___toggle_click2 .structure-pagination__items').click(function (e) {
           		$('.structure-pagination__items').parents('.js___toggle_click2').not($(this).parents('.js___toggle_click2')).removeClass("active_");
			$(this).parents('.js___toggle_click2').toggleClass("active_");
			
			$(this).find('.rotate_active').toggleClass("active-rotate");
		});
		$(' .js___toggle_click3 .structure-pagination__items2').click(function (e) {
$('.structure-pagination__items2').parents('.js___toggle_click3').not($(this).parents('.js___toggle_click3')).removeClass("active__");
			$(this).parents('.js___toggle_click3').toggleClass("active__");
			$(this).find('.rotate__active').toggleClass("active-rotate");

		});
		$(' .js___toggle_click4 .structure-pagination__items3').click(function (e) {
          	$('.structure-pagination__items3').parents('.js___toggle_click4').not($(this).parents('.js___toggle_click4')).removeClass("active__");
			$(this).parents('.js___toggle_click4').toggleClass("active___");
			$(this).find('.rotate__active').toggleClass("active-rotate");
		});

});
$(".structure-pagination__item,.structure-pagination__items,.structure-pagination__items2,.structure-pagination__items3,.structure-pagination__items4").click(function () {
	if ($(this).attr('href') != '') {

		$(this).next().addClass("noLink");
	} else {
		console.log('Looks like something go wrong')
	}
	$(".structure-pagination__item,.structure-pagination__items,.structure-pagination__items2,.structure-pagination__items3,.structure-pagination__items4").removeClass("intro");
	$(this).addClass("intro");
});


$(".js-inner li:nth-child(1)").click(function () {
	$(this).parents('.js-inner').find('li:nth-child(1)').addClass('active-resize_content');
	$(this).parents('.js-inner').find('li:nth-child(2) , li:nth-child(3)').removeClass('active-resize_content');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').addClass('active-zoom');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').removeClass('active--zoom');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').removeClass('active---zoom');
});

$(".js-inner li:nth-child(2)").click(function () {
	$(this).parents('.js-inner').find('li:nth-child(2)').addClass('active-resize_content');
	$(this).parents('.js-inner').find('li:nth-child(1) , li:nth-child(3)').removeClass('active-resize_content');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').addClass('active--zoom');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').removeClass('active-zoom');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').removeClass('active---zoom');
});
$(".js-inner li:nth-child(3)").click(function () {
	$(this).parents('.js-inner').find('li:nth-child(3)').addClass('active-resize_content');
	$(this).parents('.js-inner').find('li:nth-child(1) , li:nth-child(2)').removeClass('active-resize_content');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').addClass('active---zoom');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').removeClass('active-zoom');
	$(this).parents('.tabs-structure__content').find('.tabs-form___content , .bg-propery__content').removeClass('active--zoom');
});

(function ($) {
	jQuery.fn.lightTabs = function (options) {

		var createTabs = function () {
			tabs = this;
			i = 0;
			j = 0;

			showPage = function (i) {
				$(tabs).children(".tabs-structure__pagination").find(".js___toggle_click ,.js___toggle_click > .js___toggle_click2").children(".structure-pagination__item , .structure-pagination__items").removeClass("structure-pagination__active");
				$(tabs).children(".tabs-structure__pagination").find(".js___toggle_click ,.js___toggle_click > .js___toggle_click2").children(".structure-pagination__item , .structure-pagination__items").eq(i).addClass("structure-pagination__active");

			}

			showPage(0);
			$('.product__slider-thmb, .product__slider-main').slick("reinit");
			$(tabs).children(".tabs-structure__pagination").find(".js___toggle_click ,.js___toggle_click > .js___toggle_click2").children(".structure-pagination__item , .structure-pagination__items").each(function (index, element) {
				$(element).attr("data-pageid", i);

				i++;
			});
			$(tabs).children(".tabs-structure__content").children(".tabs-structure__form").each(function (index, element2) {
				$(element2).attr("rel", j);
		
				j++;
			});
			$(tabs).children(".tabs-structure__pagination").find(".js___toggle_click ,.js___toggle_click > .js___toggle_click2").children(".structure-pagination__item , .structure-pagination__items").click(function () {
				var x = $(this).attr("data-pageid");
	

			});

		};
		return this.each(createTabs);
	};
})(jQuery);
$(document).ready(function () {
	$(".tabs-structure__wrapper").lightTabs();
});
$('.btn').on('click', function () {
	$('#modal').removeClass('active--modal');
});
$('.button_input').on('click', function () {

	$('#modal').addClass('active--modal');
});

if ($('.show-with-slice').not('structure-pagination__active')) {
	$(".tabs-structure__pagination ").find('.news-structure__item').css({
		"display": "none"
	});
}

$('.header-main__language-item').on('click', function () {
	$('.header-main__language-item').removeClass('active');
	$(this).addClass('active');
});
$('.header-menu__link').click(function (e) {
	e.preventDefault();
	$('.header-menu__item').removeClass('active');
	$(this).closest('.header-menu__item').addClass('active');
	$('.navigation').addClass('active');
	$('.navigation__list').removeClass('active');
	$('.section-slider').addClass('active');
	const activeTabSwitcher = e.currentTarget;
	const nextContentItemId = activeTabSwitcher.getAttribute('href').slice(1);
	var test = $('#' + String(nextContentItemId)).addClass('active');
});

$(".js-zoom li:nth-child(1)").click(function () {
	$(this).parents('.js-zoom').find('li:nth-child(1)').addClass('active');
	$(this).parents('.js-zoom').find('li:nth-child(2) , li:nth-child(3)').removeClass('active');
	$(this).parents('.text-zoom-js').find('p').addClass('active-zoom');
	$(this).parents('.text-zoom-js').find('p').removeClass('active--zoom');
	$(this).parents('.text-zoom-js').find('p').removeClass('active---zoom');
});

$(".js-zoom li:nth-child(2)").click(function () {
	$(this).parents('.js-zoom').find('li:nth-child(2)').addClass('active');
	$(this).parents('.js-zoom').find('li:nth-child(1) , li:nth-child(3)').removeClass('active');
	$(this).parents('.text-zoom-js').find('p').addClass('active--zoom');
	$(this).parents('.text-zoom-js').find('p').removeClass('active-zoom');
	$(this).parents('.text-zoom-js').find('p').removeClass('active---zoom');
});
$(".js-zoom li:nth-child(3)").click(function () {
	$(this).parents('.js-zoom').find('li:nth-child(3)').addClass('active');
	$(this).parents('.js-zoom').find('li:nth-child(1) , li:nth-child(2)').removeClass('active');
	$(this).parents('.text-zoom-js').find('p').addClass('active---zoom');
	$(this).parents('.text-zoom-js').find('p').removeClass('active-zoom');
	$(this).parents('.text-zoom-js').find('p').removeClass('active--zoom');
});

$('.header-slider').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1000,
	dots: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
});

// $('.main-slider').slick ({
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     speed: 1000,
//     arrows: false,
//     fade: true,
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// });

$('.main-slider__title').slick({
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: true,
	arrows: false,
	asNavFor: '.slider-img',
});


$('.slider-img').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.main-slider__title',
	centerMode: true,
	arrows: false,
	fade: true,
	focusOnSelect: true
});


var sliderEvent = $('.events-slider').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 1000,
	fade: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: ('.events-slider__arrows-next'),
	prevArrow: ('.events-slider__arrows-prev'),

	responsive: [{
		breakpoint: 768,
		settings: {
			dots: false,
			arrows: true,
			prevArrow: ('<button type="button" class="slick-prev">Previous</button>'),
			nextArrow: ('<button type="button" class="slick-next">Previous</button>'),
		}
	}, ]
});

$('.search-mobile__button').on('click', function () {
	$(this).hide();
	$(this).next('input').addClass('active');
	$(this).closest('.search-mobile').find('.search-cross').show();
});

$('.search-mobile .search-cross').on('click', function () {
	$(this).hide();
	$(this).closest('.search-mobile').find('input').removeClass('active');
	$(this).closest('.search-mobile').find('.search-mobile__button').show();
});


$('.weather-slider').slick({
	infinite: true,
	autoplay: false,
	autoplaySpeed: 2000,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
});


$('.events-slider__arrows-prev ').on('click', function () {
	sliderEvent.slick('slickPrev');
	$(".events-slider__arrows-prev").addClass("active");
	$(".events-slider__arrows-next").removeClass("active");
})

$('.events-slider__arrows-next ').on('click', function () {
	sliderEvent.slick('slickNext');
	$(".events-slider__arrows-next").addClass("active");
	$(".events-slider__arrows-prev").removeClass("active");
});


$('.card-content__wrap').slick({
	infinite: true,
	autoplay: false,
	autoplaySpeed: 2000,
	speed: 1000,
	slidesToShow: 4,
	dots: true,
	variableWidth: true,
	slidesToScroll: 4,
	arrows: false,
	responsive: [

		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				variableWidth: false,
			}
		},
		{
			breakpoint: 740,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				variableWidth: false,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				variableWidth: false,
				arrows: true
			}
		},
	]
});

$('.card-tabs__link').on('click', function (e) {
	e.preventDefault();
	console.log($(this).closest('.card-tabs__item').length)
	$('.card-tabs__item').removeClass('active');
	$(this).closest('.card-tabs__item').addClass('active');
	$('.card-content__inner').removeClass('active');
	const activeTabSwitcher = e.currentTarget;
	const nextContentItemId = activeTabSwitcher.getAttribute('href').slice(1);
	$('#' + String(nextContentItemId)).addClass('active');
});

$('.partners-slider').slick({
	infinite: true,
	autoplay: false,
	autoplaySpeed: 2000,
	speed: 1000,
	dots: true,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 4,

	responsive: [{
			breakpoint: 1260,
			settings: {
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},

		{
			breakpoint: 768,
			settings: {
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 500,
			settings: {
				infinite: true,
				dots: false,
				vertical: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				variableWidth: false,
				verticalSwiping: true
			}
		},
	]
});

$('.header-main--right .search').on('click', function () {
	$(this).hide('slow');
	$(this).closest('.header-main--right').find('.search-input').show('slow');
});

$('.footer--right .search').on('click', function () {
	$(this).hide('slow');
	$(this).closest('.footer--right').find('.search-input').show('slow');
});

$('.search-cross ').on('click', function () {
	$(this).closest('.header-main--right').find('.search-input').hide('slow');
	$(this).closest('.header-main--right').find('.search').show('slow');
});

$('.footer--right .search-cross').on('click', function () {
	$(this).closest('.footer--right').find('.search').show('slow');
	$(this).closest('.footer--right').find('.search-input').hide('slow');
});

$('#menu-toggle').click(function () {
	$(this).toggleClass('open');
});

$('.menu-mobile__link').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	console.log($(this).next('.menu-mobile__sub').css('display'))
	$(this).next('.menu-mobile__sub').css('display') == 'none' ? $(this).next('.menu-mobile__sub').slideDown('slow') : $(this).next('.menu-mobile__sub').slideUp('slow');
});

$('.checkbox1').on('click', function (e) {
	$('.menu-mobile').css('display') == 'none' ? $('.menu-mobile').slideDown('slow') : $('.menu-mobile').slideUp('slow');
	$('.menu-mobile__head').toggleClass('active');
});

$('.news-mobile__slider').slick({
	infinite: true,
	autoplay: false,
	autoplaySpeed: 2000,
	speed: 1000,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1,
});

//new SimpleBar(document.getElementsByClassName('js-news-1'), { autoHide: false });
if ($('.product__slider-main').length) {
	var $slider = $('.product__slider-main')
		.on('init', function (slick) {
			$('.product__slider-main').fadeIn(1000);
		})
		.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			infinite: true,
			lazyLoad: 'ondemand',
			autoplaySpeed: 3000,
			asNavFor: '.product__slider-thmb'
		});

	var $slider2 = $('.product__slider-thmb')
		.on('init', function (slick) {
			$('.product__slider-thmb').fadeIn(1000);
		})

		.slick({
			slidesToShow: 5,

			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			asNavFor: '.product__slider-main',
			dots: false,
			arrows: false,
			centerMode: false,
			focusOnSelect: true

		});


	$('.product__slider-thmb .slick-slide').removeClass('slick-active');


	$('.product__slider-thmb .slick-slide').eq(0).addClass('slick-active');


	$('.product__slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var mySlideNumber = nextSlide;
		$('.product__slider-thmb .slick-slide').removeClass('slick-active');
		$('.product__slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
	});


}


//    $(".tab").click(function(){
//      $(this).parents('.tabs').find('.tab').removeClass('active---tab');
//                  $(this).parents('.tabs').find('.tab').addClass('active---tab');
//   });

$('document').ready(function () {
	$('.button_input').on('click', function () {
		$('.form_center .error').each(function () {
			if ($(this).val() != '') {
				console.log(32);
				// Если поле не пустое удаляем класс-указание
				$(this).removeClass('empty_field');
			} else {
				console.log(33);
				// Если поле пустое добавляем класс-указание
				$(this).addClass('empty_field');
			}
		});
	});
});

function changeMe(sel) {
	sel.style.color = "#000";
}
//$(".fancybox").fancybox({
//  width: 600,
//  height: 300,
//  type: 'iframe'
//});