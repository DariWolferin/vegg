$(document).ready(function(){
			$('.first-slider__cards').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2500,
		slidesToScroll: 1,
		draggable:true,
		pauseOnHover:true,
		//adaptiveHeight: true,
     /* responsive:[
			{
				breakpoint: 1225,
				settings: {
					slidesToShow:2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow:1,
				}
			},
			]	*/	
	});
				$('.second-slider__cards').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2500,
		slidesToScroll: 1,
		draggable:true,
		pauseOnHover:true,
		//adaptiveHeight: true,
     /* responsive:[
			{
				breakpoint: 1225,
				settings: {
					slidesToShow:2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow:1,
				}
			},
			]	*/	
	});
});
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50 && window.innerWidth > 950) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

(() => {
      window.onload = () => {
        let header__burger = document.querySelector('.header__burger');
        let header__menu = document.querySelector('.menu__body');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e)=> {
          header__burger.classList.toggle('active');
          header__menu.classList.toggle('active');
          body.classList.toggle('lock');
        })
      }
    })();

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
