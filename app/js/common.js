$(function() {
	
	/*$('#my-menu').mmenu(
	{
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="img/logo_burger.svg" alt="Логотип">'
		},
		offCanvas: {
			"position": "right"
		}
	});*/
	
	
	$('.projects__carousel').owlCarousel({
    	items: 3,
		loop: true,
		center: false,
		rewind: false,
		nav: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 30,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 2,
				nav: true
			},
			768: {
				items: 3,
				nav: true,
				loop: false
			},
			992: {
				items: 4,
				nav: true,
				loop: true	
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab',
		autoHeight: false,
		lazyLoad: false,
		navElement: 'span',
		navText: ''
	});
	
	
	$(function() {
		$('.projects__item').matchHeight({
			 byRow: true,
			 property: 'height',
			 target: null,
			 remove: false
		});
	});

	/*$('.popup').magnificPopup();*/
	
	/*$("#my-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });*/
	
	
	/*$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.popup2').click();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});*/
		
});
