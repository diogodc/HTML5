function draw() {
	var canvas = document.getElementById('myCanvas') ;
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "red";
	ctx.fillRect(200,200,60,40);

	ctx.fillStyle = 'rgb(100,0,0)';
	my_gradient = ctx.createLinearGradient(0,0,170,0);
	my_gradient.addColorStop(0,"black");
	my_gradient.addColorStop(0.5,"red");
	my_gradient.addColorStop(1,"white");
	ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,25,25);
	
	// Trangulo
	ctx.fillStyle = 'blue';
	ctx.moveTo(100,0);
	ctx.lineTo(200,100);
	ctx.lineTo(200,300);
	ctx.lineTo(100,0);
	ctx.fill(); // ou
	ctx.stroke();
	
	// Desenho de linhas
	ctx.fillStyle = "green"; 
	var controlPt1 = {x:110,y:30};
	var controlPt2 = {x:130,y:80};
	var startPt = {x:75,y:140};
	ctx.beginPath();  //prepare path
	ctx.moveTo(startPt.x,startPt.y);
	ctx.bezierCurveTo(
		controlPt1.x,controlPt1.y,
		controlPt2.x,controlPt2.y,
		startPt.x,startPt.y
	);
	ctx.stroke();
	
	//Arco
	ctx.fillStyle = "green"; 
	ctx.beginPath();
	ctx.arc(50, 50, 25, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	//Arco
	ctx.fillStyle = "green"; 
	ctx.beginPath();
	ctx.arc(50, 100, 25, 0, Math.PI, false);
	ctx.closePath();
	ctx.fill();
	
	// Desenhar texto no canvas:
	ctx.fillStyle = "brown"; 
	ctx.font = "20pt Arial";  // ou editando via CSS.
	ctx.fillText('Hello Word', 250, 50);	

	//medindo o texto.
	var str = "TEXTO TESTE";
	ctx.font = "120pt Arial";//CSS
	textObj = ctx.measureText(str);
	width = textObj.width;
	if(width < 600){
		ctx.fillText(str, 10, 50);
	}else{
		ctx.fillText("ERROR", 10, 400);
	}


	
	
}

window.onload = draw;
