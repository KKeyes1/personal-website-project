// landing page design for personal portfolio website


// grabs the canvas element from html
var canvas = document.querySelector("canvas");

// sets the canvis width and height to the current size of the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// grabs 2d context for the canvas and sets it to a generic variable c
var c = canvas.getContext("2d");

// sets up the empty arrays for the different objects to be animated
var starArray = [];
var lineArray = [];
var verticalLines = [];
var shadowArray = [];

// sets up the number of elements for each object
var numberOfStars = 2000;
var numberOfLines = 7;
var numberOfVerticalLines = 15;
var numberOfShadowLines = 3;

// variables that can be set

// the width of the vanishing point of the animated grid as a percentage of the width of the screen
var vanishingPointWidth = innerWidth * 0.01;

// starting x-position of the vanishing point
var startPointOfVanishingPointWidth = (innerWidth - vanishingPointWidth) / 2;

// sets the y-position of the horizon line as a percentage of the height of the screen
var horizon = .75 * innerHeight;

// important values for setting up new lines, initial x-position, initial y-position, and ending x-position  for a line
var startingWidthX = startPointOfVanishingPointWidth;
var startingWidthY = horizon;
var endingWidthX = startPointOfVanishingPointWidth + vanishingPointWidth;

// sets the distance between x-position values depending on the number of vertical lines to be displayed on the grid withing the screen width
var frontGridSpacing = innerWidth / numberOfVerticalLines;

// sets up the distance between the x-position on the number of vertical lines to be displayed within the vanishingPointWidth
var backGridSpacing = vanishingPointWidth / numberOfVerticalLines;

// for loops that generate an array of elements with the appropriate variables to build the objects

// for loop that runs through the number of stars and generates an array of stars with variable radii, x and y positions, and x and y positional rate-of-change
for(i = 0; i < numberOfStars; i++) {
	var radius = Math.random() * 1;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * horizon;
	var dx = (Math.random() - 0.5) / 10;
	var dy = (Math.random() - 0.5) / 10;
	starArray.push(new Star(x, y, dx, dy, radius));

}

// for loop that runs through the number of horizontal lines and populates an array with the starting size and position of the lines
for (i = 0; i < numberOfLines; i++) {

	var xLine = startingWidthX;
	var yLine = startingWidthY;
	var x1Line = endingWidthX;
	var dyLine = -i;
	lineArray.push(new Line(xLine, yLine, x1Line, dyLine));
}

//loop that creates the array of vertical lines evenly spaced along the base of the screen across the whole width and at the horizon line for the width of the vanishing point
for (i = 0; i < numberOfVerticalLines + 1; i++) {

	var xStaticLine = (frontGridSpacing * i );
	var yStaticLine = innerHeight;
	var x1StaticLine = (backGridSpacing * i) + startPointOfVanishingPointWidth;
	var y1StaticLine = horizon;
	verticalLines.push(new StaticLines(xStaticLine, yStaticLine, x1StaticLine, y1StaticLine));

}

// loop that creates an array of shadow lines that will mirror the lines but be offset by one for each line
for (i = 0; i < numberOfLines; i++) {

	for (j = 0; j < numberOfShadowLines; j++) {

		var xLineShadow = startingWidthX;
		var x1LineShadow = endingWidthX;
		var yLineTop = startingWidthY + j;
		var yLineBottom = startingWidthY - j;
		var dyLineShadow = -i;
		shadowArray.push(new shadowLine(xLineShadow, x1LineShadow, yLineTop, yLineBottom, dyLineShadow));

	}

}

// Star Object with draw and update methods
function Star(x, y, dx, dy, radius) {

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	// draw method for Star takes the starting position of x and y coordinates, the delta values for x and y and a radius to draw one star
	this.draw = function() {

		c.fillStyle = "#38B2E7";
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "#2238B2E7";
		c.stroke();
		c.fill();

	}

	// update method that checks for certain conditions and updates object state variables, this contains all the stars inside a specific box, reversing the relevant delta variable to turn the star around if it reaches the boundary
	// then calls the draw method to draw the new star
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

// line object with draw and update methods
function Line(xLine, yLine, x1Line, dyLine) {

	this.xLine = xLine;
	this.yLine = yLine;
	this.x1Line = x1Line;
	this.dyLine = dyLine;
	this.gravity = .1;

	// drawLine method that takes a start and end x-values, a single y-value (horizontal line) and a delta y value for moving it down the screen
	// current version uses one single array element to draw three lines next to each other to create a glow - in future may need to create a shadow object
	this.drawLine = function () {

		c.beginPath();
		c.moveTo(this.xLine, this.yLine);
		c.lineTo(this.x1Line, this.yLine);
		c.strokeStyle = "#38B2E7";
		c.stroke();

	}

	// line update method, checks if line is currently above the horizon, updates its position, but does not draw the line, if the line reaches the bottom of the screen, update the yLine back to the horizon, and resets the delta y, otherwise the yline value is used to calculate the rate of growth for the line, the x-values are changed accordingly and the delta is accelerated by the value of gravity
	// then it calls the draw method to draw the new line
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

// shadow line object
function shadowLine(xLineShadow, x1LineShadow, yLineTop, yLineBottom, dyLineShadow) {

	this.xLineShadow = xLineShadow;
	this.x1LineShadow = x1LineShadow;
	this.yLineTop = yLineTop;
	this.yLineBottom = yLineBottom;
	this.dyLineShadow = dyLineShadow;
	this.gravity = .1;

	this.drawShadow = function() {

		c.beginPath();
		c.moveTo(this.xLineShadow, this.yLineTop);
		c.lineTo(this.x1LineShadow, this.yLineTop);
		c.strokeStyle = "#38B2E7";
		c.stroke();

		c.beginPath();
		c.moveTo(this.xLineShadow, this.yLineBottom);
		c.lineTo(this.x1LineShadow, this.yLineBottom);
		c.strokeStyle = "#38B2E7";
		c.stroke();

	}

	this.updateShadow = function() {

		if (this.dyLineShadow < 0) {

			this.dyLineShadow += this.gravity;

			return;

		} else if (this.yLineTop > innerHeight || this.yLineBottom > innerHeight) {

			this.xLineShadow = startingWidthX;
			this.yLineTop = startingWidthY + 1;
			this.yLineBottom = startingWidthY - 1;
			this.x1LineShadow = endingWidthX;
			this.dyLineShadow = 0;

		}

		var growTo = ((this.yLineTop - horizon)/(innerHeight - horizon)) * (innerWidth - vanishingPointWidth);

		var currentLineSize = this.x1LineShadow - this.xLineShadow;

		var change = growTo - currentLineSize;

		var rate = change / 2;

		this.xLineShadow -= rate;

		this.x1LineShadow += rate;

		this.dyLineShadow += this.gravity;

		this.yLineTop += this.dyLineShadow;

		this.yLineBottom += this.dyLineShadow;

		this.drawShadow();

	}

}

// Static Line Object with draw method
function StaticLines(xStaticLine, yStaticLine, x1StaticLine, y1StaticLine) {

	this.xStaticLine = xStaticLine;
	this.yStaticLine = yStaticLine;
	this.x1StaticLine = x1StaticLine;
	this.y1StaticLine = y1StaticLine;

	// takes x and y coordinates for the beginning and end of a line and draws the lines
	this.draw = function () {

		c.beginPath();
		c.moveTo(this.xStaticLine, this.yStaticLine);
		c.lineTo(this.x1StaticLine, this.y1StaticLine);
		c.strokeStyle = "#38B2E7";
		c.stroke();

		// c.beginPath();
		// c.moveTo((this.xStaticLine + 1), this.yStaticLine);
		// c.lineTo((this.x1StaticLine + 1), this.y1StaticLine);
		// c.strokeStyle = "#2238B2E7";
		// c.stroke();
		//
		// c.beginPath();
		// c.moveTo((this.xStaticLine - 1), this.yStaticLine);
		// c.lineTo((this.x1StaticLine - 1), this.y1StaticLine);
		// c.strokeStyle = "#2238B2E7";
		// c.stroke();

	}

}


// animate functions for objects on the screen

// primary animate function
// recursively calls itself, clears the canvas, draws a horizon line, writes text, and loops through the star array and calls the .update method for each object
function animate() {

	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.fillStyle = "#E2148B";
	c.font = "bold 16px Arial";
	c.fillText("WHO IS KEN", (innerWidth / 2) - 45, (horizon) - 10);
	c.fillStyle = "#6D84C0";
	c.font = "bold 100px Arial";
	c.fillText("COMING SOON", (innerWidth / 2) - 350, (innerHeight / 2));

	c.beginPath();
	c.moveTo(0, horizon);
	c.lineTo(innerWidth, horizon);
	c.strokeStyle = "#38B2E7";
	c.stroke();

	c.beginPath();
	c.moveTo(0, (horizon + 1));
	c.lineTo(innerWidth, (horizon + 1));
	c.strokeStyle = "#2238B2E7";
	c.stroke();

	c.beginPath();
	c.moveTo(0, (horizon - 1));
	c.lineTo(innerWidth, (horizon - 1));
	c.strokeStyle = "#2238B2E7";
	c.stroke();

	for (i = 0; i < starArray.length; i++) {

		starArray[i].update();
	}

}


// animate function that recursively calls itself and iterates through the line array while calling the updateLine method on each object
function animateLine() {

	requestAnimationFrame(animateLine);

	for (i = 0; i < lineArray.length; i++) {

		lineArray[i].updateLine();
	}

}

// animate function that recursively calls itself and iterates through the vertical Lines array calling the draw method for each object
function drawVerticalLines() {

	requestAnimationFrame(drawVerticalLines);

	for (i = 0; i < verticalLines.length; i++) {

		verticalLines[i].draw();

	}

}

// animate function that recursively calls itself and iterates through the shadow line array and calls the draw method for each object
function animateShadowLine() {

	requestAnimationFrame(animateShadowLine);

	for (i = 0; i < shadowArray.length; i++) {

		shadowArray[i].updateShadow();

	}

}

// calls to the animate function
animate();
animateLine();
drawVerticalLines();
animateShadowLine();