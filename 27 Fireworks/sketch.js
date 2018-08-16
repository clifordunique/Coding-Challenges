let fireworks = [];
let gravity;

function setup() {
	createCanvas(windowWidth, windowHeight);//canvas size depends on window size
	stroke(255);
	strokeWeight(5);
	gravity = createVector(0, 0.1);

	//particle = new Particle()//only once
}

function draw() {
	colorMode(RGB);
	background(0, 25);
	
	if(random(1) < 0.1) {
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
 

