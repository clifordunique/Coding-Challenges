var radius;
let yOff = 0;

var gui;
var blobbySize = 100;
var frequency = 0.1;
var range = 50;

function setup() {
	createCanvas(600, 400);
	gui = createGui("Blobby");

	sliderRange(80, 200, 10);
	gui.addGlobals("blobbySize");

	sliderRange(0.05, 1, 0.05);
	gui.addGlobals("frequency");

	sliderRange(30, 80, 5);
	gui.addGlobals("range");
}

function draw() {
	background(0);
	colorMode(HSB);
	fill(frameCount % 255 ,255, 255);
	strokeWeight(2);
	translate(width / 2, height / 2);

	//push();
		beginShape();
		var xOff = 0;
		for(let angle = 0; angle < TWO_PI; angle += 0.05) {
			let offset = map(noise(xOff, yOff), 0, 1, -range, range)
			radius = blobbySize + offset; 
			let x = radius * cos(angle);
			let y = radius * sin(angle);
			vertex(x, y);
			xOff += frequency;
		}
		endShape(CLOSE);

		yOff += 0.1;
	//pop();
}


