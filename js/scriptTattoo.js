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
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());
