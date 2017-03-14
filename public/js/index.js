var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
});

document.addEventListener("touchstart", function() {},false); // add this junk to make iOS observe the :active state for touch

jQuery(document).ready(function(){
	load_card("cards/setup.html", "cards/setup.js");
});

function load_card(url_to_html, url_to_js){
	jQuery.get(url_to_html, function(data){
		jQuery("#swipe-wrap").append(data);
		var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		});
		if (url_to_js!=""){
			jQuery.getScript(url_to_js);
		}
	});	
}

function remove_card(card_css){
	jQuery(card_css).remove();
}