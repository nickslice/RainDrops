// Анимация меню-бургер + запрет скролла, когда меню открыто
const burger = document.querySelector('.nav__burger');
const menuLinks = document.querySelector('nav');
const body = document.querySelector('body');
const menuLink = document.querySelector('.menu__link');

burger.addEventListener("click", () => {
	menuLinks.classList.toggle("active");
	burger.classList.toggle("active");
	body.classList.toggle("lock");	
});
// menuLink.addEventListener("click", () => {
// 	menuLinks.classList.remove("active");
// 	burger.classList.remove("active");
// 	body.classList.remove("lock");	
// });

$('.menu__link').on('click', function(){
    $('nav').removeClass('active');
    $('.nav__burger').removeClass('active');
    $('body').removeClass('lock');

});
//=======================================================================//
// Анимация при скролле
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart; 
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if(!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active')
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}

//=======================================================================//
// Подключение слайдера и управление ним
$(document).ready(function(){
	$('.screenshots__body').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1080,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	
	});
});
//=======================================================================//
// Индивидуальная анимация для слайдера slick
$(window).scroll(function() {
   var hT = $('.screenshots').offset().top,
       hH = $('.screenshots').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT + hH/2 - wH)){
   	$('.screenshots__body').addClass('active');
   }
});
//=======================================================================//