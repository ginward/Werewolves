//the javascript for the game logic
jQuery(document).ready(function(){
	jQuery('body').on('click', '.game_butt', function () {
		nextPage();
	});
	jQuery('body').on('click', '#wolf_butt', function(){
		var arr = jQuery('#wolf_kill').selectivity('data');
		for (var i=0; i<players.length; i++){
			for (var j=0; j< arr.length; j++){
				var role = players[i].role;
				if(players[i].role=="witch" || players[i].role=="hunter" ||  players[i].role=="cupid" ||  players[i].role=="prophet") {
					role = "god";
				}
				if (i==arr[j].id){
					data.role_count[role] -= 1; 
					players[i].die();
				} else {
					if(players[i].live_status==false){
						data.role_count[role] +=1; 
					}
					players[i].reset();
				}
			}
		}

	});
});

function activeCardName(){
	return jQuery('.swiper-slide-active')[0].className;
}

function nextPage(){
	swiper.slideNext();
	num_wolf = data.role_count.werewolf;
	num_god = data.role_count.god; 
	num_people = data.role_count.people;
	num_total = parseInt(num_wolf)+ parseInt(num_god) + parseInt(num_people);
	if(activeCardName().includes("wolf")){
		//we are at the wolf page
		//count the numeber of wolves and populate the option box
		document.getElementById('wolf_identity').innerHTML = "";
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
		jQuery('#wolf_identity').selectivity({
		    multiple:true,
		    placeholder: '请选择'
		});
		jQuery('#wolf_kill').selectivity({
		    placeholder: '请选择'
		});
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
		jQuery('#witch_identity').selectivity({
		    placeholder: '请选择'
		});
		jQuery('#witch_kill').selectivity({
		    placeholder: '请选择'
		});	
		jQuery('#witch_save').selectivity({
		    placeholder: '请选择'
		});			
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
		jQuery('#prophet_identity').selectivity({
		    placeholder: '请选择'
		});	
		jQuery('#prophet_check').selectivity({
		    placeholder: '请选择'
		});				
	}
}