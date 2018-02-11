var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


function staticLines(xStaticLine, yStaticLine, x1StaticLine, y1StaticLine) {

	this.xStaticLine = xStaticLine;
	this.yStaticLine = yStaticLine;
	this.x1StaticLine = x1StaticLine;
	this.y1StaticLine = y1StaticLine;
	this.draw = function () {

		c.beginPath();
		c.moveTo(this.xStaticLine, this.yStaticLine);
		c.lineTo(this.x1StaticLine, this.y1StaticLine);
		c.strokeStyle = "#333";
		c.stroke();

	}

}


var verticalLines = [];
var numberOfVerticalLines = 15;
var depth = 0.3;

for (i = 0; i < numberOfVerticalLines + 1; i++) {

	var xStaticLine = ((innerWidth / numberOfVerticalLines) * i ) + 0;
	var yStaticLine = innerHeight;
	var x1StaticLine = (((innerWidth * depth) / numberOfVerticalLines) * i) + (innerWidth - (innerWidth * depth)) / 2;
	var y1StaticLine = innerHeight / 2;
	verticalLines.push(new staticLines(xStaticLine, yStaticLine, x1StaticLine, y1StaticLine));

}



function Star(x, y, dx, dy, radius) {

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {

		c.fillStyle = "#c82124";
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "blue";
		c.stroke();
		c.fill();

	}

	this.update = function() {

		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > (innerHeight / 2) || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();

	}

}

var starArray = [];
var numberOfStars = 2000;

for(i = 0; i < numberOfStars; i++) {
	var radius = Math.random() * 1;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * innerHeight / 2;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	starArray.push(new Star(x, y, dx, dy, radius));

}

function Line(xLine, yLine, x1Line, dyLine) {

	this.xLine = xLine;
	this.yLine = yLine;
	this.x1Line = x1Line;
	this.dyLine = dyLine;

	this.drawLine = function () {


		c.beginPath();
		c.moveTo(this.xLine, this.yLine);
		c.lineTo(this.x1Line, this.yLine);
		c.strokeStyle = "#333";
		c.stroke();

	}

	this.updateLine = function() {

		if (this.yLine > innerHeight) {

			lineArray.push(new Line(0, innerHeight / 2, innerWidth, this.dyLine));

			lineArray.shift();

			}

		this.yLine += this.dyLine;

		this.drawLine();


	}

}


var lineArray = [];
var numberOfLines = 1;

for (i = 0; i < numberOfLines; i++) {

	var xLine =  0;
	var yLine = (((innerHeight / 2) / numberOfLines) * i ) + (innerHeight / 2);
	var x1Line = innerWidth;
	var dyLine = 4;
	lineArray.push(new Line(xLine, yLine, x1Line, dyLine));

}

function animate() {

	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (i = 0; i < starArray.length; i++) {

		starArray[i].update();
	}

}


function animateLine() {

	requestAnimationFrame(animateLine);
	// c.clearRect(0, 0, innerWidth, innerHeight);

	for (i = 0; i < lineArray.length; i++) {

		lineArray[i].updateLine();
	}

}


function drawVerticalLines() {

	requestAnimationFrame(drawVerticalLines);

	for (i = 0; i < verticalLines.length; i++) {

		verticalLines[i].draw();

	}

}

animate();
animateLine();
drawVerticalLines();