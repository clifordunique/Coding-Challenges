let particles = [];
let width = 800;
let height = 500;

var gui1;
var gui2;
var backgroundColor = "#000000";

var r = 255;
var g = 176;
var b = 49;
var a = 255;

var particleSize = 28;
var position = width / 2;
var density = 3;
var flameHeight = 15;
var duration = 10;

function setup() {
	createCanvas(width, height);

	gui1 = createGui("P5 GUI");
	gui1.addGlobals("backgroundColor");

	sliderRange(0, 255, 1);
	gui1.addGlobals("r", "g", "b", "a");

	gui2 = createGui("P5 GUI", width - 220, 20);

	sliderRange(10, 50, 1);
	gui2.addGlobals("particleSize");

	sliderRange(0, width, 1);
	gui2.addGlobals("position");

	sliderRange(0, 10, 1);
	gui2.addGlobals("density");

	sliderRange(8, 20, 1);
	gui2.addGlobals("flameHeight");

	sliderRange(5, 20, 1);
	gui2.addGlobals("duration");
}

function draw() {
	background(backgroundColor);//background(0);

	for(let i = 0; i < density; i++) {//only once(comments each five times) each run 
		let x = position;//let x = width / 2;
		let y = height;
		let d = particleSize;//let d = 28;
		let xspeed = random(-2, 2);
		let yspeed = random(6, flameHeight);
		particles.push(new Particle(x, y + d / 2, d, xspeed, yspeed));
	}

	for(let i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].show();

		if(particles[i].alpha <= 0) {
			particles.splice(i, 1);
		}
	}

}

