var attractors = [];
let particles = [];

function setup() {
	createCanvas(600, 400);

	for(let i = 0; i < 1000; i++) {
		//particles.push(new Particle(random(width), random(height)));
		particles.push(new Particle(random(width), random(height)));
		//particles.push(new Particle(width/2, 200));//-=-==-also good effect-=-=-=
	}

	// for(let i = 0; i < 10; i++) {
	// 	attractors.push(createVector(random(width), random(height)));
	// }//use mousepressed to call the attractorsX

}

function mousePressed() {
	attractors.push(createVector(mouseX, mouseY));
}

function draw() {
	background(0);

	for(let i = 0; i < attractors.length; i++) {
		noFill();
		strokeWeight(5);
		if(i % 2 == 0) {
			stroke(0, 255, 0);
		} else {
			stroke(255, 0, 0);
		}
		
		point(attractors[i].x, attractors[i].y);
	}

	for(let i = 0; i < particles.length; i++) {
		for(let j = 0; j < attractors.length; j++) {
			particles[i].attracted(attractors[j], j);
		}
		particles[i].update();
		particles[i].show();
	}

	// for(let particle of particles) {
	// 	particle.attracted(attractors);
	// 	particle.update();
	// 	particle.show();
	// }
}


