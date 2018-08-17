let k;
var n = 3;
var d = 2;
let radius;
let rotateAngle = 0;

var gui;
var roseSize = 100;
var strokeSize = 1;
var fillColor = [255, 255, 255];
var backgroundColor = [0, 0, 0];

var blank = true;
var increment = 0.01;
var rotating = false;

function setup() {
	createCanvas(800, 600);

	gui = createGui("Rose Pattern");
	gui.addGlobals("backgroundColor", "fillColor");
	gui.addGlobals("blank");

	sliderRange(50, 200, 10);
	gui.addGlobals("roseSize");

	sliderRange(1, 20, 1);
	gui.addGlobals("n");
	sliderRange(1, 20, 1);
	gui.addGlobals("d");

	sliderRange(0.5, 2, 0.1);
	gui.addGlobals("strokeSize");

	sliderRange(0.01, 0.5, 0.01);
	gui.addGlobals("increment", "rotating");


}

function draw() {
	background(backgroundColor);
	translate(width / 2, height / 2);

	if(blank) {
		noFill();
	} else {
		fill(fillColor)
	}
	stroke(fillColor);
	strokeWeight(strokeSize);
	k = n / d;

	rotate(rotateAngle);
	beginShape();
	for(let angle = 0; angle < TWO_PI * 20; angle += increment) {
		radius = cos(k * angle) * roseSize;
		let x = radius * cos(angle);
		let y = radius * sin(angle);
		vertex(x, y);
	}
	endShape();
	
	if(rotating) {
		rotateAngle += PI / 200;
	}

}




