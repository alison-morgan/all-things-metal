// import bulmaCarousel from '../node_modules/bulma-carousel/dist/js/bulma-carousel'

// // Initialize all elements with carousel class.
// const carousels = bulmaCarousel.attach('.carousel', options);

// // To access to bulmaCarousel instance of an element
// const element = document.querySelector('#carousel-demo');
// if (element && element.bulmaCarousel) {
// 	// bulmaCarousel instance is available as element.bulmaCarousel
// }

$(document).on('ready', function () {
		$(".carousel").slick({
				dots: true,
				infinite: true,
				// slidesToShow: 1,
				// slidesToScroll: 3,
				autoplay: true,
		});
});
