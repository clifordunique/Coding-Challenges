let vehicles = [];
let target;

let food = [];
let poison = [];

function setup() {
	createCanvas(600, 400);

	for(let i = 0; i < 4; i++) {
		vehicles.push(new Vehcile(random(width), random(height)));
	}

	for(let i = 0; i < 10; i++) {
		food.push(createVector(random(width), random(height)));
	}

	for(let i = 0; i < 10; i++) {
		poison.push(createVector(random(width), random(height)));
	}
	
}

function draw() {
	background(0);

	//-=-=-=-=-=-=-=-=-mouse cursor-=-=-=-=-=-=-=-=-
	target = createVector(mouseX, mouseY);
	stroke(255);
	fill(127);
	ellipse(target.x, target.y, 25, 25);
	//-=-=-=-=-=-=-=-=-mouse cursor-=-=-=-=-=-=-=-=-

	for(let i = 0; i < food.length; i++) {
		fill(0, 255, 0);
		noStroke();
		ellipse(food[i].x, food[i].y, 5, 5);
	}

	for(let i = 0; i < poison.length; i++) {
		fill(0238, 0, 255);
		noStroke();
		ellipse(poison[i].x, poison[i].y, 5, 5);
	}

	for(let vehcile of vehicles) {
		vehcile.eat(food);
	//vehcile.seek(target);
		vehcile.update();
		vehcile.show();
	}
}

