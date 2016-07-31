$(document).ready(function(){
	console.log('Hello Ello');
	$('.menu-dropdown').click(function(){
		$('.navbar').toggleClass('nav-hidden');
		$('.navbar').toggleClass('nav-expanded');
	});

	$('.um-main').hover(function(){
		$('.um-overlay').removeClass('hidden');
		$('.um-elem').addClass('hidden');
	}, function(){
		$('.um-overlay').addClass('hidden');
		$('.um-elem').removeClass('hidden');
	});

	$(document).scroll(function(){
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top && $(window).scrollTop() + $(window).height() < $('.tiles').offset().top + 150){
			console.log('Display 1');
		}
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top + 150 && $(window).scrollTop() + $(window).height() < $('.tiles').offset().top + 300){
			console.log('Display 2');
		}
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top + 300 && $(window).scrollTop() + $(window).height() < $('.tiles').offset().top + 450){
			console.log('Display 3');
		}
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top + 450){
			console.log('Display 4');
		}
	});
});