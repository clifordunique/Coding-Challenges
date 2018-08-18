var x = 0;
var y = 0;
var spacing = 10;
var finished = false;

var gui;

var fillColor = [255, 255, 255];

function setup() {
	createCanvas(800, 500);
	background(0);
	gui = createGui("10 Print Maze");

	gui.addGlobals("fillColor");

	sliderRange(5, 20, 5);
	gui.addGlobals("spacing");

}

function draw() {
	
		stroke(fillColor);
		strokeWeight(2);
		if(!finished) {
			if(random(1) < 0.5) {
				line(x, y, x + spacing, y + spacing);
			} else {
				line(x, y + spacing, x + spacing, y);
			}
	
			x += spacing;
	
			if(x >= width) {
				x = 0;
				y += spacing;
			}
		}

		if(y > height && !finished) {
			finished = true;
			console.log("finished");
		}
	
}

