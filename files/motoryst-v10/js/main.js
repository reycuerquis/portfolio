jQuery(document).ready(function($){
    
    $('.slider-content.cars-1-col .bxslider').bxSlider({
        slideWidth: 1200,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1, 
        pager: false,
        auto: true
    });

    $('.slider-content.cars-2-col .bxslider').bxSlider({
        slideWidth: 600,
        moveSlides: 2,
        minSlides: 1,
        maxSlides: 2, 
        pager: false,
        auto: true
    });

    $('.slider-content.cars-3-col .bxslider').bxSlider({
        slideWidth: 400,
        moveSlides: 2,
        minSlides: 1,
        maxSlides: 3, 
        pager: false,
        auto: true
    });
  
    $('#header-section .top-header .settings-link').click(function(e) {
    	e.preventDefault();

    	if ($('#options-container').hasClass('menu-show')) {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#options-container').removeClass('menu-show').addClass('menu-hide');
    	} else if ($('#options-container').hasClass('menu-hide')) {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#options-container').removeClass('menu-hide').addClass('menu-show');
    	} else {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#options-container').removeClass('menu-hide').addClass('menu-show');
    	}
    });

    $('#header-section .top-header .notif-link').click(function(e) {
    	e.preventDefault();

    	if ($('#notif-container').hasClass('menu-show')) {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#notif-container').removeClass('menu-show').addClass('menu-hide');
    	} else if ($('#notif-container').hasClass('menu-hide')) {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#notif-container').removeClass('menu-hide').addClass('menu-show');
    	} else {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#notif-container').removeClass('menu-hide').addClass('menu-show');
    	}
    });

    $('#header-section .top-header .menu-toggler-link').click(function(e) {
    	e.preventDefault();

    	if ($('#menu-container').hasClass('menu-show')) {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#menu-container').removeClass('menu-show').addClass('menu-hide');
    	} else if ($('#menu-container').hasClass('menu-hide')) {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#menu-container').removeClass('menu-hide').addClass('menu-show');
    	} else {
    		$('.menu-options-container').removeClass('menu-show').addClass('menu-hide');
    		$('#menu-container').removeClass('menu-hide').addClass('menu-show');
    	}
    });

    $('.menu-options-container .close-link').click(function(e) {
    	e.preventDefault();

    	var linkParent = $(this).parent().parent();

    	linkParent.removeClass('menu-show').addClass('menu-hide');
    });

    $('#quotation-1-tab .nav-item .nav-link').click(function(e) {
        e.preventDefault();
        
        var itemParent = $(this).parent().parent().parent();

        $('#quotation-1-tab .nav-item .nav-link').removeClass('active').removeClass('show');
        $(this).addClass('active').addClass('show');

        $('#quotation-1-tab .nav-item').removeClass('active');
        $(itemParent).addClass('active');

        var tabDisplay = $(this).attr('href');

        $('#quotation-1-tab-content .tab-pane').removeClass('active').removeClass('show');
        $('#quotation-1-tab-content ' + tabDisplay).addClass('active').addClass('show');
    });

    $('.payment-content .radio-content .cardholder-address').change(function() {
        if (($(this).hasClass('cardholder-address-new')) && ($(this).is(':checked'))) {
            $('.payment-content .other-address').removeClass('hide').addClass('show');
        } else {
            $('.payment-content .other-address').removeClass('show').addClass('hide');
        }
    });

    $('#dashboard-job-request .content .menu-background .profile-menu-toggler .toggle-link').click(function(e) {
        e.preventDefault();

        var menuContainer = $(this).parent().parent();

        if (menuContainer.hasClass('show')) {
            menuContainer.removeClass('show').addClass('hide');
        } else if (menuContainer.hasClass('hide')) {
            menuContainer.removeClass('hide').addClass('show')
        } else {
            menuContainer.addClass('show')
        }
    });
});