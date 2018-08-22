let yoff = 0;
var gui;
var dx = 0.1;//more and more complcate
var speed = 2;
var strokeColor = [255, 255, 255];
var wingSize = 125;

function setup() {
	createCanvas(600, 500);
	gui = createGui("BGenterator");

	sliderRange(125, 325, 5);
	gui.addGlobals("wingSize");

	sliderRange(0.05, 1, 0.05);
	gui.addGlobals("dx");

	sliderRange(1, 3, 0.1);
	gui.addGlobals("speed");

	gui.addGlobals("strokeColor");

}

function draw() {
	background(0);
	translate(width / 2, height / 2);
	rotate(PI / 2);
	
	stroke(strokeColor);
	fill(255, 50);
	strokeWeight(1);

	var delta = PI / 100;

	var xoff = 0;
	beginShape();
	for(let angle = - PI / 2; angle < PI / 2; angle += delta) {
		//var r = map(noise(xoff), 0, 1, 50, 225);
		var r = sin(2 * angle) * map(noise(xoff, yoff), 0, 1, 50, wingSize);
		var x = r * cos(angle);
		var y = r * sin(angle) * sin(yoff / speed);
		xoff += dx;
		vertex(x, y);
	}
	//endShape();

	//var xoff = 0;
	//beginShape();
	for(let angle = PI / 2; angle < 3 * PI / 2; angle += delta) {
		//var r = map(noise(xoff), 0, 1, 50, 225);
		var r = sin(2 * angle) * map(noise(xoff, yoff), 0, 1, 50, wingSize);
		var x = r * cos(angle);
		var y = r * sin(angle) * sin(yoff / speed);
		xoff -= dx;
		vertex(x, y);
	}
	endShape();

	yoff += 0.1;

}

