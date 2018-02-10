var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

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

for(i = 0; i < 2000; i++) {
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

		if (this.yLine > innerHeight + (((innerHeight / 2) / numberOfLines) * i ) + (innerHeight / 2)) {

			lineArray.push(new Line(0, innerHeight / 2, innerWidth, this.dyLine));

		}

		else if (this.yLine > innerHeight) {

			lineArray.shift();

			lineArray.push(new Line(0, innerHeight / 2, innerWidth, this.dyLine));

			}

		this.yLine += this.dyLine;

		this.drawLine();


	}

}


var lineArray = [];
var numberOfLines = 2;

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

animate();
animateLine();