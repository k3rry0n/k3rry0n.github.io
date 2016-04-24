
var control = document.querySelector('.myBtn'),
		clock = document.querySelector('.clock'),
		button = document.querySelector('.myBtn'),
		clear = document.querySelector('.myBtn--reset');

var timer = new Timer();
timer.init();

button.innerHTML = 'START';
control.addEventListener('click', function(){

	if(document.querySelector('.myBtn--start') !== null){
		
		button.classList.remove('myBtn--start');
		button.innerHTML = 'PAUSE'
		button.classList.add('myBtn--stop');

		clear.addEventListener('click', function(){
			button.classList.remove('myBtn--stop');
			button.innerHTML = 'START'
			button.classList.add('myBtn--start');
			clearInterval(countstart);
			clock.innerHTML = "00:00:00.000"
			timer.time = 0;
		})


		countstart = setInterval(function() {

			var res = timer.getDelta();
			clock.innerHTML = res;
		}, 5);

	} else { 
		button.innerHTML = 'START'
		button.classList.remove('myBtn--stop');
		button.classList.add('myBtn--start');
		clearInterval(countstart);
	}
});

function Timer(){

	this.time = 0;

	this.init = function setInitialTime() {
		this.initialTime = new Date();
	};

	this.getDelta = function(){
		this.time = this.time + 5;
 		
		return dateFormat(new Date(this.time));
	};

	this.makePause = function(){
    clearInterval(countstart);
	};
};

function dateFormat(date){
	console.log(date.getUTCSeconds());
	date = date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds() + '.' + date.getUTCMilliseconds();
	return date;
}