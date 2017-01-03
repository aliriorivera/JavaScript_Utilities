
	document.getElementById("start").onclick = function(){startClock()};
	document.getElementById("stop").onclick =  function(){stopClock()};
	var realTimeHour = 0;
	var hour = 0;
	var minutes = 0;
	var seconds = 0;

	var clockAnimation = document.getElementById("clock");
	var ctxClock = clockAnimation.getContext("2d");

	var clockCenter = clockAnimation.width/2;

	var clockInterval = 0;
	
	function startClock(){
		clockInterval = setInterval(drawClockLines,1000);
	}
	function stopClock(){
		clearTimeout(clockInterval);
	}

	function drawClockLines(){

		realTimeHour = new Date();
		hour = realTimeHour.getHours();
		minutes = realTimeHour.getMinutes();
		seconds = realTimeHour.getSeconds();

		clearCanvas();
		buildStructure();    
		drawNumbers();
		drawHourLine();
		drawMinutesLine();
		drawSecondsLine();
		
	}

	function buildStructure(){
		ctxClock.beginPath();
		ctxClock.arc(clockCenter,clockCenter,clockCenter,0,2*Math.PI);
		ctxClock.stroke();
		ctxClock.beginPath();
		ctxClock.arc(clockCenter,clockCenter,clockCenter-80,0,2*Math.PI);
		ctxClock.stroke();
	}

	function drawNumbers(){
		var j = 3;
		for(var i = 360 ; i > 0 ; i--){
			var angle = (90 - i) * (Math.PI / 180);
			var z = (clockCenter - 30) * Math.sin(angle);
			var y = (clockCenter - 30) * Math.cos(angle);
			ctxClock.font = "30px Arial";
			ctxClock.font = '30pt Calibri';
			ctxClock.fillStyle = 'blue';
			ctxClock.fillText(j,clockCenter + z, clockCenter - y);
			(j == 12)?j=1:j++;
			i -= 29;
		}
	}
	function drawHourLine(){
		ctxClock.beginPath();
		ctxClock.lineWidth=10;
		var angleHour = (((30 * hour) + (0.5 * minutes)) * (Math.PI / 180));
		createLinesTime(angleHour);
		ctxClock.strokeStyle = '#ff0000';
		ctxClock.stroke();
	}

	function drawMinutesLine(){
		ctxClock.beginPath();
		ctxClock.lineWidth=5;
		var angleMinutes = ((minutes * 6) * (Math.PI / 180));
		createLinesTime(angleMinutes);
		ctxClock.strokeStyle = '#000000';
		ctxClock.stroke();
	}

	function drawSecondsLine(){
		ctxClock.beginPath();
		ctxClock.lineWidth=1;
		var angleSeconds = ((seconds * 6) * (Math.PI / 180));
		createLinesTime(angleSeconds);
		ctxClock.strokeStyle = '#000000';
		ctxClock.stroke(); 
	}

	function clearCanvas(){
		ctxClock.beginPath();
		ctxClock.lineWidth=1;
		ctxClock.clearRect(0, 0, clockAnimation.width, clockAnimation.height);
		ctxClock.strokeStyle = '#000000';
		ctxClock.stroke();
	}

	function createLinesTime(angle){
		var z = (clockCenter - 30) * Math.sin(angle);
		var y = (clockCenter - 30) * Math.cos(angle);
		ctxClock.moveTo(clockCenter, clockCenter);
		ctxClock.lineTo(clockCenter + z, clockCenter - y);
	}