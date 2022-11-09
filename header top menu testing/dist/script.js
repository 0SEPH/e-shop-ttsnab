/* Please ❤ this if you like it! */


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('top-menu.top-menu-div').removeClass('top-menu-div');
	});

	//Menu On Hover
		
	$('top-menu').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("top-menu").hasClass("dark")) {
			$("top-menu").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("top-menu").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery);