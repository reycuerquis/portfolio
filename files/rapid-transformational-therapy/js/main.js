jQuery(document).ready(function($) {
	$('.main-menu-toggler, .main-menu-toggle-close').click(function(e) {
		e.preventDefault();

		var mainMenu = $('#main-menu');

		if (mainMenu.hasClass('show-menu')) {
			mainMenu.removeClass('show-menu').addClass('hide-menu');	
		} else if (mainMenu.hasClass('hide-menu')) {
			mainMenu.removeClass('hide-menu').addClass('show-menu');
		} else {
			mainMenu.addClass('show-menu');
		}
	});
});