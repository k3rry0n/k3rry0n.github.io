var content = $('.tab--header p');
for (var i = 0; i < content.length; i++) {
	content[i].style.display = 'none';
}

var links = $('.tab--header a');
var content = $('.tab--content');
var fields = $('.form--field input');

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function (event) {
		event.preventDefault();
		for(var j = 0; j < links.length; j++) {
			$(links[j]).removeClass('active').addClass('inactive');
		}
		content.html($(this).next().html());
		$(this).addClass('active');
	});
}
links[0].click();

for (var j = 0; j < fields.length; j++) {
	fields[j].addEventListener('mouseenter', function (event) {
		$(this).next().toggleClass('hidden');
	});
	fields[j].addEventListener('mouseout', function (event) {
		$(this).next().toggleClass('hidden');
	})
};

$(document).ready(function() {
    $(".show-help").click(function(){
    	for (var k = 0; k < fields.length; k++) {
    		$(fields[k]).next().toggleClass('hidden');
    	}
    }); 
});