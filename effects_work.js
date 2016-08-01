$(document).ready(function(){
	console.log('Hello Ello2');
	$('.menu-dropdown-non-home').click(function(){
		$('.navbar-non-home').toggleClass('nav-hidden');
		$('.navbar-non-home').toggleClass('nav-expanded-non-home');
	});
});