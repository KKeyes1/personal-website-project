var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext("2d");



// Static Line Object that takes two sets of x and y coordinates and draws perspective lines and draws them on the screen

function StaticLines(xStaticLine, yStaticLine, x1StaticLine, y1StaticLine) {

	this.xStaticLine = xStaticLine;
	this.yStaticLine = yStaticLine;
	this.x1StaticLine = x1StaticLine;
	this.y1StaticLine = y1StaticLine;

	this.draw = function () {

		c.beginPath();
		c.moveTo(this.xStaticLine, this.yStaticLine);
		c.lineTo(this.x1StaticLine, this.y1StaticLine);
		c.strokeStyle = "#38B2E7";
		c.stroke();

	}

}

// where I build my array of lines to draw on the screen
// an empty array to populate
var verticalLines = [];
// number of vertical lines
var numberOfVerticalLines = 15;
// percentage of the screen that the "horizon" will take up
var depth = 0.01;


//loop that creates the array of lines with varying x and y coordinates
for (i = 0; i < numberOfVerticalLines + 1; i++) {

	var xStaticLine = ((innerWidth / numberOfVerticalLines) * i ) + 0;
	var yStaticLine = innerHeight;
	var x1StaticLine = (((innerWidth * depth) / numberOfVerticalLines) * i) + (innerWidth - (innerWidth * depth)) / 2;
	var y1StaticLine = innerHeight / 2;
	verticalLines.push(new StaticLines(xStaticLine, yStaticLine, x1StaticLine, y1StaticLine));

}


// Star Object that takes  positional coordinates x, y and directional sppeds dx, dy and a size radius, in order to draw the stars on the screen, and/or to update their direction when they collide with the edges of the window



function Star(x, y, dx, dy, radius) {

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {

		c.fillStyle = "#38B2E7";
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "#38B2E7";
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
	var dx = (Math.random() - 0.5) / 10;
	var dy = (Math.random() - 0.5) / 10;
	starArray.push(new Star(x, y, dx, dy, radius));

}



// Line Object that accepts two x coordinates and one y that is updated to move the lone down the screen, and a value to control that speed dyLine



function Line(xLine, yLine, x1Line, dyLine) {

	this.xLine = xLine;
	this.yLine = yLine;
	this.x1Line = x1Line;
	this.dyLine = dyLine;
	this.gravity = .1;

	this.drawLine = function () {

		c.beginPath();
		c.moveTo(this.xLine, this.yLine);
		c.lineTo(this.x1Line, this.yLine);
		c.strokeStyle = "#38B2E7";
		c.stroke();

	}

	this.updateLine = function() {

		if (this.dyLine < 0) {

			this.dyLine += this.gravity;

			return;

			} else if (this.yLine > innerHeight) {

			this.yLine = innerHeight / 2;
			this.dyLine = 0;

		}

		this.dyLine += this.gravity;

		this.yLine += this.dyLine;

		this.drawLine();

	}

}


var lineArray = [];
var numberOfLines = 10;

for (i = 0; i < numberOfLines; i++) {

	var xLine = 0;
	var yLine = (innerHeight / 2);
	var x1Line = innerWidth;
	var dyLine = -i;
	lineArray.push(new Line(xLine, yLine, x1Line, dyLine));
}


// animate functions for objects on the screen

function animate() {

	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.beginPath();
	c.moveTo(0, (innerHeight / 2));
	c.lineTo(innerWidth, (innerHeight / 2));
	c.strokeStyle = "#38B2E7";
	c.stroke();

	for (i = 0; i < starArray.length; i++) {

		starArray[i].update();
	}

}


function animateLine() {

	requestAnimationFrame(animateLine);

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


// calling all three animate functions starts it off
animate();
animateLine();
drawVerticalLines();