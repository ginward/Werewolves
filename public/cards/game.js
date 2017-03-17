//the javascript for the game logic
jQuery(document).ready(function(){
	jQuery('body').on('click', '#darkness', function () {
		nextPage();
	});
});

function nextPage(){
	swiper.slideNext();
}