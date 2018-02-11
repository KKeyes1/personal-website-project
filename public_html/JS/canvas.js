var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext("2d");


var starArray = [];
var lineArray = [];
var verticalLines = [];

var numberOfStars = 2000;
var numberOfLines = 7;
var numberOfVerticalLines = 15;

// percentage of the screen that the "horizon" will take up
var vanishingPointWidth = innerWidth * 0.01;
var startPointOfVanishingPointWidth = (innerWidth - vanishingPointWidth) / 2;
var horizon = .75 * innerHeight;
var startingWidthX = startPointOfVanishingPointWidth;
var startingWidthY = horizon;
var endingWidthX = startPointOfVanishingPointWidth + vanishingPointWidth;
var frontGridSpacing = innerWidth / numberOfVerticalLines;
var backGridSpacing = vanishingPointWidth / numberOfVerticalLines;
// var rateOfGrowth = ( (()/(innerHeight - horizon)) * (innerWidth - vanishingPointWidth)) / 2;

for(i = 0; i < numberOfStars; i++) {
	var radius = Math.random() * 1;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * horizon;
	var dx = (Math.random() - 0.5) / 10;
	var dy = (Math.random() - 0.5) / 10;
	starArray.push(new Star(x, y, dx, dy, radius));

}

for (i = 0; i < numberOfLines; i++) {

	var xLine = startingWidthX;
	var yLine = startingWidthY;
	var x1Line = endingWidthX;
	var dyLine = -i;
	lineArray.push(new Line(xLine, yLine, x1Line, dyLine));
}


//loop that creates the array of lines with varying x and y coordinates
for (i = 0; i < numberOfVerticalLines + 1; i++) {

	var xStaticLine = (frontGridSpacing * i );
	var yStaticLine = innerHeight;
	var x1StaticLine = (backGridSpacing * i) + startPointOfVanishingPointWidth;
	var y1StaticLine = horizon;
	verticalLines.push(new StaticLines(xStaticLine, yStaticLine, x1StaticLine, y1StaticLine));

}


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
		if (this.y + this.radius > horizon || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();

	}

}


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

			this.xLine = startingWidthX;
			this.yLine = startingWidthY;
			this.x1Line = endingWidthX;
			this.dyLine = 0;

		}

		var growTo = ((this.yLine - horizon)/(innerHeight - horizon)) * (innerWidth - vanishingPointWidth);

		var currentLineSize = this.x1Line - this.xLine;

		var change = growTo - currentLineSize;

		var rate = change / 2;

		this.xLine -= rate;

		this.x1Line += rate;

		this.dyLine += this.gravity;

		this.yLine += this.dyLine;

		this.drawLine();

	}

}

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
// animate functions for objects on the screen

function animate() {

	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.beginPath();
	c.moveTo(0, horizon);
	c.lineTo(innerWidth, horizon);
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