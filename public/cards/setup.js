jQuery(document).ready(function(){
	jQuery('body').on('click', '#intro_button', function () {
		data.role_count.god = jQuery("#num_god").val();
		data.role_count.witch = jQuery("#witch").val();
		data.role_count.people = jQuery("#num_people").val();
		nextPageSetup();
	});
	jQuery('body').on('click','#game_start', function(){
		launchGame();
	});
	jQuery('#num_god').selectivity({
	    allowClear: true,
	    items: ['9', '10', '11', '12'],
	    placeholder: '请选择'
	});
	jQuery('#num_wolf').selectivity({
	    allowClear: true,
	    items: ['9', '10', '11', '12'],
	    placeholder: '请选择'
	});
	jQuery('#num_people').selectivity({
	    allowClear: true,
	    items: ['9', '10', '11', '12'],
	    placeholder: '请选择'
	});
});

function nextPageSetup(){
	swiper.slideNext();
}

//initialize the roles in database and set the roles to null
function init_roles(){
	data.players = []; // re-empty the array
	var num_god = jQuery("#num_god").val();
	var num_people = jQuery("#num_people").val();
	var num_wolf = jQuery("#num_wolf").val();
	var total_num = int(num_god) + int(num_people) + int(num_wolf);
	for (var i=0;i<total_num;i++){
		var player = new Player("");
		data.players.push(player);
	}
}

function launchGame(){
	var num_god = jQuery("#num_god").val();
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
	jQuery.get("cards/darkness.html", function(data){
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
					jQuery.get("cards/morning.html",function(morning){
						data+=morning;
						load_card_html(data, "cards/game.js");
					})
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