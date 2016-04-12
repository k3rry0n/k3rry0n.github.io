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
	var text = document.querySelector('.textabove');
 	text.innerHTML = document.querySelector('#quote').value;
}