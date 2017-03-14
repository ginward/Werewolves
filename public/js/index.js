var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
});

$('#wolf-select').multiSelect()

$('#number_of_players').selectivity({
    allowClear: true,
    items: ['9', '10', '11', '12'],
    placeholder: '请选择'
});

document.addEventListener("touchstart", function() {},false); // add this junk to make iOS observe the :active state for touch

jQuery(document).ready(function(){
	load_card("cards/setup.html");
});

function load_card(url){
	jQuery.get(url, function(data){
		jQuery("#swipe-wrap").append(data);
		var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		});
	});	
}

function remove_card(card_css){
	jQuery(card_css).remove();
}