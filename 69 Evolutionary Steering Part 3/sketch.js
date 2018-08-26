let vehicles = [];
let food = [];
let poison = [];

function setup() {
	createCanvas(600, 400);
	frameRate(20);
	for(let i = 0; i < 10; i++) {
		vehicles[i] = new Vehicle(random(width), random(height));
	}

	for(let i = 0; i < 50; i++) {
		food.push(createVector(random(width), random(height)));
	}
	for(let i = 0; i < 10; i++) {
		poison.push(createVector(random(width), random(height)));
	}
} 

function draw() {
	background(0);

	if(random(1) < 0.05) {
		food.push(createVector(random(width), random(height)));
	}
	if(random(1) < 0.01) {
		poison.push(createVector(random(width), random(height)));
	}

	var target = createVector(mouseX, mouseY);
	fill(127);
	stroke(255);
	ellipse(target.x, target.y, 20, 20);

	for(let i = 0; i < food.length; i++) {
		fill(0, 255, 0);
		noStroke();
		ellipse(food[i].x, food[i].y, 6, 6);
	}
	for(let i = 0; i < poison.length; i++) {
		fill(255, 0, 0);
		noStroke();
		ellipse(poison[i].x, poison[i].y, 6, 6);
	}

	//for(let i = 0; i < vehicles.length; i++) {
	for(let i = vehicles.length - 1; i > 0; i--) {
		vehicles[i].boundaries();
		vehicles[i].behaviors(food, poison);
	//vehicle.eat(food);
	//vehicle.seek(target);
		vehicles[i].update();
		vehicles[i].display();

		if(vehicles[i].dead()) {
			vehicles.splice(i, 1);
		}
	}
}
