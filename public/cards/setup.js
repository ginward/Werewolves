jQuery(document).ready(function(){
	jQuery('body').on('click', '#intro_button', function () {
		data.role_count.god = jQuery("#num_god").val();
		data.role_count.witch = jQuery("#witch").val();
		data.role_count.people = jQuery("#num_people").val();
		nextPage();
	});
	jQuery('body').on('click','#game_start', function(){
		remove_card(".card_setup");
		
	});
	$('#num_god').selectivity({
	    allowClear: true,
	    items: ['9', '10', '11', '12'],
	    placeholder: '请选择'
	});
	$('#num_wolf').selectivity({
	    allowClear: true,
	    items: ['9', '10', '11', '12'],
	    placeholder: '请选择'
	});
	$('#num_people').selectivity({
	    allowClear: true,
	    items: ['9', '10', '11', '12'],
	    placeholder: '请选择'
	});
});

function nextPage(){
	swiper.slideNext();
}

function launchGame(){

}

function role_select(ele){
	if (ele.style.backgroundColor=="cornflowerblue"){
		ele.style.backgroundColor="white";
		delete data.active_roles.god.cupid;
	} else {
		ele.style.backgroundColor="cornflowerblue";
		data.active_roles.god.cupid = [];
	}
}