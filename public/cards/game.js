//the javascript for the game logic
jQuery(document).ready(function(){
	jQuery('body').on('click', '#darkness', function () {
		nextPage();
	});
});

function nextPage(){
	swiper.slideNext();
	if(jQuery(".wolf")!=null){
		//we are at the wolf page
		//create the number of options based on the number of players
	}
}