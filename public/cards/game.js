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
		//count the numeber of wolves and populate the option box
		num_wolf = data.role_count.werewolf;
		num_god = data.role_count.god; 
		num_people = data.role_count.people;
		num_total = parseInt(num_wolf)+ parseInt(num_god) + parseInt(num_people);
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
		    multiple:true,
		    placeholder: '请选择'
		});
	}
}