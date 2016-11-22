$(document).ready(function() {
	$('ul#menu a').click(function() {
		$(this).css('outline','none');
		$('ul#menu .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'すべて') {
			$('ul#shops li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#shops li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		return false;
	});
});