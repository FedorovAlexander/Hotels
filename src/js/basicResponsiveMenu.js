$.fn.basicResponsiveMenu = function(options) {

  var defaults = {
    browserWidth:     768,
    animate:          true,
		slideDir:					'right',
		slideSpeed:				250
  };

	var options = $.extend({}, defaults, options);

	//var browserWidth = options.browserWidth;
	//var slideDir = options.slideDir;

  if(options.slideDir === 'left'){
  	$('.response--main-navigation').addClass('slideLeft').removeClass('slideRight');
  }else {
  	$('.response--main-navigation').addClass('slideRight').removeClass('slideLeft');
  }

	// get width of browser window
  function getWidth() {
		if (self.innerWidth) {
			return self.innerWidth;
		}
		if (document.documentElement && document.documentElement.clientWidth) {
			return document.documentElement.clientWidth;
		}
		if (document.body) {
			return document.body.clientWidth;
		}
	}

	// creates mobile navigation
	function mobileNav(){
		$('.response--main-navigation').addClass('mobile-nav');

    if(options.animate === true){
		    $('.response--main-navigation .response--site-menu').css({'transition':options.slideSpeed+'ms'});
    }

		// if buttons with a class of show-nav and hide-nav don't exist, add them
		var showNav = $('.response--main-navigation').children('button.show-nav');
		if(showNav.length === 0){
			$('.response--main-navigation').append('<button class="show-nav"><svg width="28" height="28" class="menu__show-icon" id="show-icon"><use xlink:href="#menu"></use></svg></button>');
		}
		var hideNav = $('.response--site-menu').children('button.hide-nav');
		if(hideNav.length === 0){
			$('.response--site-menu').prepend('<button class="hide-nav"><svg width="28" height="28" class="menu__close-icon" id="return-icon"><use xlink:href="#cross"></use></svg></button>');
		}
	}

	// if browser window is smaller than 960px and no resize event has fired,
	// meaning that the browser loads in a small window
	if(getWidth() <= options.browserWidth){
		mobileNav();

		$('button.show-nav').on('click', function(){
			$('.response--main-navigation').addClass('expanded');
			$('body').css({'height':'100vh', 'overflow-y':'hidden'});
		});
		$('button.hide-nav').on('click', function(){
			$('.response--main-navigation').removeClass('expanded');
			$('body').css({'height':'auto', 'overflow-y':'visible'});
		})
		;
		$('.nav__list-link').on('click', function(){
			$('.response--main-navigation').removeClass('expanded');
			$('body').css({'height':'auto', 'overflow-y':'visible'});
		});
	}

	// test if window has been resized
	$(window).resize(function() {

		// if browser window is smaller than 960px
		if(getWidth() <= options.browserWidth){
			mobileNav();

			$('button.show-nav').on('click', function(){
				$('.response--main-navigation').addClass('expanded');
				$('body').css({'height':'100vh', 'overflow-y':'hidden'});
			});
			$('button.hide-nav').on('click', function(){
				$('.response--main-navigation').removeClass('expanded');
				$('body').css({'height':'auto', 'overflow-y':'visible'});
			});

		}
		// if browser window is larger than 960px
		else {
			$('.response--main-navigation').removeClass('mobile-nav');
			$('.response--main-navigation').removeClass('expanded');
			$('button.show-nav').remove();
			$('button.hide-nav').remove();
		}

	}); // end of resize function

}
