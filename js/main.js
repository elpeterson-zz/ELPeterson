$(document).ready(function() {

	$('#mainNav li').hover(function(){
		$(this).toggleClass('animated pulse');
	});

	$('#mainNav li').click(function(){
		var navLink = $(this).attr('name');
		$('html, body').animate({
			scrollTop: $('#' + navLink).offset().top
		}, 1000);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass('sticky');
		}
		else{
			$('header').removeClass('sticky');
		}
	});
});