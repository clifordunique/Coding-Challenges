var attractor;
let particles = [];

function setup() {
	createCanvas(400, 400);
	background(0);
	attractor = createVector(200, 200);//draw center attractor point

	for(let i = 0; i < 100; i++) {
		particles.push(new Particle(200, 100));
	}
}

function draw() {
	//background(0);

	stroke(120, 244, 53);
	strokeWeight(3);
	point(attractor.x, attractor.y);

	for(let i = 0; i < particles.length; i++) {
		particles[i].attracted(attractor);
		particles[i].update();
		particles[i].show();
	}
}
