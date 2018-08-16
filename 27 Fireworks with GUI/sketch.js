let fireworks = [];
let gravity;
var gui;
var Seeds = 0.1;
var Density = 50;
var Duration = 5;


function setup() {
	createCanvas(windowWidth, windowHeight);//canvas size depends on window size
	stroke(255);
	strokeWeight(5);
	gravity = createVector(0, 0.1);

	gui = createGui("P5 GUI");

	sliderRange(0, 1, 0.05);
	gui.addGlobals("Seeds");

	sliderRange(10, 100, 5);
	gui.addGlobals("Density");

	sliderRange(1, 10, 0.5);
	gui.addGlobals("Duration")
}

function draw() {
	colorMode(RGB);
	background(0, 25);
	
	if(random(1) < Seeds) {
		fireworks.push(new Firework(random(width), height));
	}

	for(let i = 0; i < fireworks.length; i++) {
		fireworks[i].update();
		fireworks[i].show();

		if(fireworks[i].done()) {
			fireworks.splice(i, 1);//delete the single process of the fireworks
		}
    }
}
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
