$(document).ready(function(){
	console.log('Hello Ello');

	// $('.navbar a').click(function(){
	// 	$('.navbar').toggleClass('nav-hidden');
	// 	$('.navbar').toggleClass('nav-expanded');
	// });
	// $('.menu-dropdown').click(function(){
	// 	$('.navbar').toggleClass('nav-hidden');
	// 	$('.navbar').toggleClass('nav-expanded');
	// });
	$(".menu-collapsed").click(function() {
	  $(this).toggleClass("menu-expanded");
	});

	$('.um-tile').hover(function(){
		$('.um-overlay').removeClass('hidden');
		$('.um-elem').addClass('hidden');
	}, function(){
		$('.um-overlay').addClass('hidden');
		$('.um-elem').removeClass('hidden');
	});

	$('.desai-tile').hover(function(){
		$('.desai-overlay').removeClass('hidden');
		$('.desai-no-hover').addClass('hidden');
	}, function(){
		$('.desai-overlay').addClass('hidden');
		$('.desai-no-hover').removeClass('hidden');
	});

	$('.wcbn-tile').hover(function(){
		$('.wcbn-overlay').removeClass('hidden');
		$('.wcbn-no-hover').addClass('hidden');
	}, function(){
		$('.wcbn-overlay').addClass('hidden');
		$('.wcbn-no-hover').removeClass('hidden');
	});

	$('.travelle-tile').hover(function(){
		$('.travelle-overlay').removeClass('hidden');
		$('.travelle-no-hover').addClass('hidden');
	}, function(){
		$('.travelle-overlay').addClass('hidden');
		$('.travelle-no-hover').removeClass('hidden');
	});

	$('.freelance-tile').hover(function(){
		$('.freelance-overlay').removeClass('hidden');
		$('.freelance-no-hover').addClass('hidden');
	}, function(){
		$('.freelance-overlay').addClass('hidden');
		$('.freelance-no-hover').removeClass('hidden');
	});

	$('.resume-tile').hover(function(){
		$('.resume-overlay').removeClass('hidden');
		$('.resume-no-hover').addClass('hidden');
	}, function(){
		$('.resume-overlay').addClass('hidden');
		$('.resume-no-hover').removeClass('hidden');
	});

	$(document).scroll(function(){
		if($(window).scrollTop() + $(window).height() < $('.tiles').offset().top - 100){
			$('#adventurer').addClass('hidden');
			$('#designer').addClass('hidden');
			$('#builder').addClass('hidden');
			$('#student').addClass('hidden');
		}
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top - 100 && $(window).scrollTop() + $(window).height() < $('.tiles').offset().top + 100){
			$('#adventurer').removeClass('hidden');
			$('#designer').addClass('hidden');
			$('#builder').addClass('hidden');
			$('#student').addClass('hidden');
		}
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top + 100 && $(window).scrollTop() + $(window).height() < $('.tiles').offset().top + 250){
			$('#adventurer').removeClass('hidden');
			$('#designer').removeClass('hidden');
			$('#builder').addClass('hidden');
			$('#student').addClass('hidden');
		}
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top + 250 && $(window).scrollTop() + $(window).height() < $('.tiles').offset().top + 400){
			$('#adventurer').removeClass('hidden');
			$('#designer').removeClass('hidden');
			$('#builder').removeClass('hidden');
			$('#student').addClass('hidden');
		}
		if($(window).scrollTop() + $(window).height() > $('.tiles').offset().top + 400){
			$('#adventurer').removeClass('hidden');
			$('#designer').removeClass('hidden');
			$('#builder').removeClass('hidden');
			$('#student').removeClass('hidden');
		}
	});
});





