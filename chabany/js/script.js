var input_field = document.getElementById('quote');
var text = document.querySelector('.textabove');

input_field.addEventListener('keyup', function(){
			
			if(text.innerHTML.length > 67 && text.innerHTML.length < 96) {
				text.setAttribute('style', 'top: 30%');
			};
			if(text.innerHTML.length > 96){
				text.setAttribute('style', 'top: 20%');
			};
			if (text.innerHTML.length > 118){
				text.setAttribute('style', 'top: 20%; font-size: 36px;');
			}		
		});

function generateImage(){ 
	  
  html2canvas(document.querySelector(".preview"), {
  
    onrendered: function(canvas) {
      var res = document.querySelector('.result');
      res.innerHTML = "";
      res.appendChild(canvas);
    }

  });
  
}

function changeString() {
		text.innerHTML = document.querySelector('#quote').value;
}
