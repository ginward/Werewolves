jQuery(document).ready(function(){
	jQuery('body').on('click', '#intro_button', function () {
		data.role_count.god = jQuery("#num_god").val();
		data.role_count.witch = jQuery("#witch").val();
		data.role_count.people = jQuery("#num_people").val();
		nextPage();
	});
	jQuery('body').on('click','#game_start', function(){
		launchGame();
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
	//prepare the set of cards and launch the game
	remove_card(".card_setup");
	if ('cupid' in data.active_roles.god){
		//insert the cupid card at first
		jQuery.get("cards/cupid.html", function(data){
			var arr = [data];
			gameCards(arr);
		});	
	} else {
		gameCards();
	}
}

function gameCards(params){
	//load the charactercards
	jQuery.get("cards/game.html", function(data){
		if(params != null && params.length>0){
			for(var i=0;i<params.length;i++){
				data += params[i];
			}
		}
		//load the fixed charactoers 
		jQuery.get("cards/wolf.html", function(wolf){
			data+=wolf;
			jQuery.get("cards/witch.html", function(witch){
				data+=witch;
				jQuery.get("cards/prophets.html", function(prophet){
					data+=prophet;
					load_card_html(data, "cards/game.js");
				});
			});
		});
	});
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