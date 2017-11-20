function init(){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img,0,0);
		var imageData = ctx.getImageData(0, 0, img.width, img.height);
		// vetor de [R|G|B|A|R|G|B|A|.....R|G|B|A|]
		var dataArray = imageData.data;
		
		for(var i=0; i < dataArray.length; i+=4){
			var red   = dataArray[i];
			var green = dataArray[i+1];
			var blue  = dataArray[i+2];
			var alpha = dataArray[i+3];
			var bw = (red+green+blue)/3;
			dataArray[i] = bw;
			dataArray[i+1] = bw;
			dataArray[i+2] = bw;
			dataArray[i+3] = 1*alpha;
		} //for
	ctx.putImageData(imageData,0,0);
	} //function
	img.src="cat.png";
} //init
window.onload = init;