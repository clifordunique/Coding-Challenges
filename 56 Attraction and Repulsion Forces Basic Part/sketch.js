var attractor;
var particles = [];

function setup() {
	createCanvas(800, 500);
	background(0);

	attractor = createVector(width / 2, height / 2);
	
	for(let i = 0; i < 100; i++) {
		var particle = new Particle(width / 2, 100);
		particles.push(particle);
	}	
}

function draw() {
	

	fill(255, 0, 0);
	noStroke();
	ellipse(attractor.x, attractor.y, 5, 5);

	for(let i = 0; i < particles.length; i++) {
		particles[i].attracted(attractor);
		particles[i].update();
		particles[i].show();
	}
}
