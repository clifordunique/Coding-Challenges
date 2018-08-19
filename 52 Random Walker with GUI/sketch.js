let x;
let y;
let r;

var gui;
var speed = 2;

function setup() {
	createCanvas(600, 400);
	colorMode(HSB);
	
	x = width / 2;
	y = height / 2;
	background(0);

	gui = createGui("Random Walker");
	sliderRange(1, 3, 1);
	gui.addGlobals("speed");
}

function draw() {

	r = floor(random(4));

	switch (r) {
		case 0: 
			x += speed;
			break;
		case 1: 
			x -= speed;
			break;
		case 2: 
			y += speed;
			break;
		case 3: 
			y -= speed;
			break;
	}
	
	stroke(frameCount % 255, 255, 255);
	strokeWeight(2);
	point(x, y);
	

}







