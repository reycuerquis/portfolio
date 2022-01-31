jQuery(document).ready(function($) {
	$('.collapse-menu-button a').click(function(e) {
		e.preventDefault();

		if ($('.side-menu-background').hasClass('side-menu-hidden')) {
			$('.side-menu-background').removeClass('side-menu-hidden').addClass('side-menu-shown');
		} else if ($('.side-menu-background').hasClass('side-menu-shown')) {
			$('.side-menu-background').removeClass('side-menu-shown').addClass('side-menu-hidden');
		} else {
			$('.side-menu-background').addClass('side-menu-hidden');
		}
	});

	$('.burger-button .mobile-menu-toggler').click(function(e) {
		e.preventDefault();

		if ($('.mobile-menu').hasClass('mobile-menu-hidden')) {
			$('.mobile-menu').removeClass('mobile-menu-hidden').addClass('mobile-menu-shown');
		} else if ($('.mobile-menu').hasClass('mobile-menu-shown')) {
			$('.mobile-menu').removeClass('mobile-menu-shown').addClass('mobile-menu-hidden');
		} else {
			$('.mobile-menu').addClass('mobile-menu-shown');
		}
	});

	$('.create-link .btn').click(function() {
		$('#new-order').fadeIn().addClass('show');
	});

	$('#new-order .modal-header button.close').click(function() {
		$('#new-order').fadeOut().removeClass('show');
	})
});