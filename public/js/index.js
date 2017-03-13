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