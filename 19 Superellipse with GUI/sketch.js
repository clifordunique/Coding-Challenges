var gui;
var shapeSize = 100;
var fillColor = [255, 255, 255];

var n = 0.2;

function setup() {
	createCanvas(600, 400);
	gui = createGui("Super ellipse");

	gui.addGlobals("fillColor");
	sliderRange(50, 200, 10);
	gui.addGlobals("shapeSize");

	sliderRange(0.1, 10, 0.1);
	gui.addGlobals("n");
}

function draw() {
	background(0, 25);
	translate(width / 2, height / 2);
	if(n >= 4) {
		n = 0.01;
	} else {
		n += 0.01;
	}

	beginShape();
		for(let angle = 0; angle < TWO_PI; angle += 0.1) {
			var x = pow(abs(cos(angle)), 2 / n) * shapeSize * sgn(cos(angle));
			var y = pow(abs(sin(angle)), 2 / n) * shapeSize * sgn(sin(angle));
			noFill();
			stroke(fillColor);
			vertex(x, y);
		}
	endShape(CLOSE);
	

}


function sgn(value) {
	if(value < 0) {
		return -1;
	} else if(value > 0) {
		return 1;
	} else {
		return 0;
	}
}
