jQuery(document).ready(function(){
	jQuery('body').on('click', '#intro_button', function () {
		
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