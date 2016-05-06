$(document).ready(function() {
	var $headerDark = $('.header--dark'),
			$headerLight = $('.header--light'),
			$darkClone = $headerDark.before($headerDark.clone().addClass('clone'));
			$darkClone = $headerLight.before($headerLight.clone().addClass('clone2'));

	$(window).on('scroll', function() {
			var distance = $(window).scrollTop();
			$('body').toggleClass("show", (distance > 200 && distance <= 400));
			$('body').toggleClass("show-next", (distance > 400));
	});
});