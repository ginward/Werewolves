jQuery(document).ready(function(){
	jQuery('body').on('click', '#intro_button', function () {
		
	});
	$('#number_of_players').selectivity({
	    allowClear: true,
	    items: ['9', '10', '11', '12'],
	    placeholder: '请选择'
	});
});