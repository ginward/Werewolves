//the javascript for the game logic
jQuery(document).ready(function(){

	swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    onTransitionEnd: function(){
			proceedGame();
		}
	});

	//add the game status button
	jQuery.get("cards/status.html", function(data){
		jQuery('body').append(data);
		console.log(data);
	});

	//load the status html popup
	//add the game status button
	jQuery.get("cards/status_display.html", function(data){
		jQuery('body').append(data);
		console.log(data);
	});

	jQuery('body').on('click', '.game_butt', function () {
		nextPage();
	});

	jQuery('body').on('click', '#wolf_butt', function(){

		var arr =  jQuery('#wolf_identity').val();
		//set the identity of the wolf 
		for (var i =0 ; i < arr.length; i++){
			data.players[arr[i]-1].role = "werewolf";
			data.role_count["werewolf"]+=1;
		}
		//set the target to kill
		var to_kill = jQuery("#wolf_kill").val();
		data.players[to_kill].die(arr);
		for (var i=0; i<data.players.length;i++){
			if (i!=to_kill){
				data.players[i].reset();
			}
		}
	});

	jQuery('body').on('click', '#prophet_butt', function(){
			var play_id = jQuery("#prophet_check").val();
			if (data.players[play_id-1].role =="werewolf"){
				alert("这玩家是坏人");
			}else{
				alert("这玩家是好人");
			}
	});
	
	jQuery('body').on('click', "#morning_next_round", function(){
		nextRound();
	});
});

function activeCardName(){
	return jQuery('.swiper-slide-active')[0].className;
}

function nextPage(){
	swiper.slideNext();
}

function proceedGame(){
	num_wolf = data.role_count.werewolf;
	num_god = data.role_count.god; 
	num_people = data.role_count.people;
	num_total = parseInt(num_wolf)+ parseInt(num_god) + parseInt(num_people);
	if(activeCardName().includes("wolf")){
		//we are at the wolf page
		//count the numeber of wolves and populate the option box
		document.getElementById('wolf_identity').innerHTML = "<optgroup disabled hidden></optgroup>";
		document.getElementById('wolf_kill').innerHTML = "";
		for (var i=0;i<num_total;i++){
		    var opt = document.createElement('option');
		    opt.value = i+1;
		    opt.innerHTML = (i+1).toString() + " 号";
		 	document.getElementById('wolf_identity').appendChild(opt);
		}
		for (var i=0;i<num_total;i++){
		    var opt = document.createElement('option');
		    opt.value = i+1;
		    opt.innerHTML = (i+1).toString() + " 号";
		 	document.getElementById('wolf_kill').appendChild(opt);
		}
	} else if (activeCardName().includes("witch")){
		//we are at the witch page
		document.getElementById('witch_identity').innerHTML = "";
		document.getElementById('witch_save').innerHTML = "";
		document.getElementById('witch_kill').innerHTML = "";
		for (var i=0;i<num_total;i++){
		    var opt = document.createElement('option');
		    opt.value = i+1;
		    opt.innerHTML = (i+1).toString() + " 号";
		 	document.getElementById('witch_identity').appendChild(opt);
		}		
		for (var i=0;i<num_total;i++){
		    var opt = document.createElement('option');
		    opt.value = i+1;
		    opt.innerHTML = (i+1).toString() + " 号";
		 	document.getElementById('witch_save').appendChild(opt);
		}
		for (var i=0;i<num_total;i++){
		    var opt = document.createElement('option');
		    opt.value = i+1;
		    opt.innerHTML = (i+1).toString() + " 号";
		 	document.getElementById('witch_kill').appendChild(opt);
		}		
	} else if (activeCardName().includes("prophet")) {
		document.getElementById('prophet_identity').innerHTML = "";		
		document.getElementById('prophet_check').innerHTML = "";	
		for (var i=0;i<num_total;i++){
		    var opt = document.createElement('option');
		    opt.value = i+1;
		    opt.innerHTML = (i+1).toString() + " 号";
		 	document.getElementById('prophet_identity').appendChild(opt);
		}
		for (var i=0;i<num_total;i++){
		    var opt = document.createElement('option');
		    opt.value = i+1;
		    opt.innerHTML = (i+1).toString() + " 号";
		 	document.getElementById('prophet_check').appendChild(opt);
		}
	}
}

/*
 * The function to move the game to next round and check if the game is over
 */
function nextRound(){
	if(ifGameOver()){
		alert("游戏结束!");
	} else {
		swiper.slideTo("0");
	}
}

/*
 * The function to check if the game is over
 */
function ifGameOver(){
	return false;
}
