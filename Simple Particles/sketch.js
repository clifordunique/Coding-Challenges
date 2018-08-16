let particles = [];

function setup() {
	createCanvas(600, 400);

	// for(let i = 0; i < 100; i++) {//only fixed number of fireworks
	// 	let x = width / 2;
	// 	let y = height;
	// 	let d = 28;
	// 	let xspeed = random(-2, 2);
	// 	let yspeed = random(6, 15);
	// 	particles.push(new Particle(x, y, d, xspeed, yspeed));
	// }
}

function draw() {
	background(0);

	//for(let i = 0; i < 5; i++) {//only once(comments each five times) each run 
		let x = width / 2;
		let y = height;
		let d = 28;
		let xspeed = random(-2, 2);
		let yspeed = random(6, 15);
		particles.push(new Particle(x, y, d, xspeed, yspeed));
	//}

	for(let i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].show();

		if(particles[i].alpha <= 0) {
			particles.splice(i, 1);
		}
	}
}

