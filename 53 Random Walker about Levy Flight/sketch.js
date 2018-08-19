var pos;
var prev;

function setup() {
	createCanvas(600, 400);
	colorMode(HSB);
	pos = createVector(300, 200);
	prev = pos.copy();
	background(0);
}

function draw() {

	stroke(frameCount % 255, 255, 255);
	strokeWeight(2);
	line(pos.x, pos.y, prev.x, prev.y);
	prev.set(pos);
	//prev = pos.copy();

	var step = p5.Vector.random2D();
	if(random(100) < 1) {
		step.mult(50);
	}
	pos.add(step);

}







