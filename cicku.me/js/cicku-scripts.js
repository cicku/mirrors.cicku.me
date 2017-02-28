/**
*   CICKU (HTML)
*   Copyright © 2016 by Christopher Meng. All Rights Reserved.
**/

$(function () {
	'use strict';
	
	/* Set full height in blocks */
	var width = $(window).width();
	var height = $(window).height();
	$('.section.started').css({'height': height-60});
	
	/* Typed preload text */
	$('.typed-load').typed({
		stringsElement: $('.typing-load'),
		loop: true
	});
	
	/* Preloader */
	$(window).load(function() {
		$(".preloader .pre-inner").fadeOut(800, function(){
			/* Preload hide */
			$('.preloader').fadeOut();
			$('body').removeClass('load');
			
			/* Typed subtitle */
			$('.typed-subtitle').typed({
				stringsElement: $('.typing-subtitle'),
				loop: true
			});
			
			/* Typed breadcrumbs */
			$('.typed-bread').typed({
				stringsElement: $('.typing-bread'),
				showCursor: false
			});
		});
	});
	
	/*Fade-out animation between load pages*/
	$('header, .typed-bread').on('click', 'a', function(){
		var link = $(this).attr('href');
		
		$('body').addClass('load');
		setTimeout(function() {
			location.href = "" + link;
		}, 500);
		
		return false;
	});
	
	/*Menu mobile*/
	$('header').on('click', '.menu-btn', function(){
		if($('header').hasClass('active')){
			$('header').removeClass('active');
			$('body').removeClass('load');
		} else {
			$('header').addClass('active');
			$('body').addClass('load');
		}
		
		return false;
	});
	
	/* Hide mouse button on scroll */
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 1 /*$('#blue_bor').offset().top*/) {
			$('.mouse_btn').fadeOut();
		}
		else {
			$('.mouse_btn').fadeIn();
		}
	});
	
	/* On click mouse button, page scroll down */
	$('.section').on('click', '.mouse_btn', function(){
		$('body,html').animate({
			scrollTop: height - 150
		}, 800);
	});
	
	/* Adding Glitch animation at Active */
	$('.top-menu ul li.active a.lnk').addClass('glitch-effect');
	$('.top-menu ul li.active a.btn').addClass('glitch-effect-white');
	
	/* Adding Glitch animation at Hover */
	$('.top-menu').on({
		mouseenter: function () {
			$(this).addClass('glitch-effect');
		},
		mouseleave: function () {
			$(this).removeClass('glitch-effect');
			$('.top-menu ul li.active a.lnk').addClass('glitch-effect');
		}
	}, 'a.lnk');
	
	$('body').on({
		mouseenter: function () {
			$(this).addClass('glitch-effect-white');
		},
		mouseleave: function () {
			$(this).removeClass('glitch-effect-white');
			$('.top-menu ul li.active a.btn').addClass('glitch-effect-white');
		}
	}, 'a.btn, .btn');
	
	/* Validate contact form */
	$("#cform").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			$('#cform').fadeOut();
			$('.alert-success').delay(1000).fadeIn();
		}
	});
	
	/* Validate commect form */
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
	});
	
	/* Initialize masonry items */
	var $container = $('.box-items');
	
	$container.imagesLoaded(function(){
		$container.multipleFilterMasonry({
			itemSelector: '.box-item',
			filtersGroupSelector: '.filters',
			percentPosition: true,
			gutter: 0
		});
	});
	
	/* Initialize masonry filter */
	$('.filters label').on('change', 'input[type="checkbox"]', function() {
		if ($(this).is(':checked')) {
			$(this).parent().addClass('glitch-effect');
		}
		else {
			$(this).parent().removeClass('glitch-effect');
		}
		/* Refresh Portfolio magnific popup */
		$('.has-popup').magnificPopup({
			type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'mfp-fade'
		});
	});
	
	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'mfp-fade'
	});
	
	/* Resize function */
	$(window).resize(function() {
		var width = $(window).width();
		var height = $(window).height();
		
		$('.section.started').css({'height': height-60});
	});
	
	if(width < 840) {
		$('.section.started').css({'height': height-30});
	}
	
	/* Google Maps */
    var googleMapSelector = $('#contactgoogleMap'),
        myCenter = new google.maps.LatLng(39.932777, 116.363761);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 15,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#333"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
            },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#eee"
            },
                        {
                            "visibility": "on"
                        }
                    ]
                }]
        };
        var map = new google.maps.Map(document.getElementById("contactgoogleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'images/location-pin.png'
        });
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }
});