
  var conteox = -1;
  var conteoy = 0;
  var bombitas = [];
  var totalNumberOfBombs = 0;
  var xx;
  var yy;

  function stopGame(){
	window.clearTimeout(xx);
	window.clearTimeout(yy);

  }

  function startGame(){
	  xx = setInterval(changeAll, 1);
	  yy = setInterval(createBomb,3000);
	}

  function changeAll(){

	var canvasAnimacion = document.getElementById("animacion");
	var ctx = canvasAnimacion.getContext("2d");

	ctx.fillStyle = "#020DF0";
	ctx.fillRect(0, 0, canvasAnimacion.height, canvasAnimacion.width);

	ctx.fillStyle = "#FF0000";


	for(var i = 0 ; i< bombitas.length ; i++){
	  ctx.fillRect(bombitas[i].initialPosX,bombitas[i].initialPosY,15,20);
	}  
	updateBombs();
  }

  function bombs(initialPosX, initialPosY){
		this.initialPosX = initialPosX;
		this.initialPosY = initialPosY;
  }


  function updateBombs(){
	  for(var i = 0 ; i<bombitas.length; i++){
		
		  var x = bombitas[i].initialPosX; 
		  var y = bombitas[i].initialPosY; 
		  x ++;
		  if(x == 381){
			x = 0;
			y += 20;
		  }
		  if(y == 400){
			bombitas[i].initialPosX = 0;
			bombitas[i].initialPosY = 0;
		  }else{
			bombitas[i].initialPosX = x;
			bombitas[i].initialPosY = y;
		  }
		}
  }

  function createBomb(){
	if(totalNumberOfBombs<10){
	  totalNumberOfBombs++;
	  bombitas.push(new bombs(0,0));
	}
  }

  function deleteLastBomb(){
	  bombitas.pop();
  }
