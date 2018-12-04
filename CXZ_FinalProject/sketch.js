let flights = [];
//let gravity;

function setup() {
	createCanvas(600, 400);
	//gravity = createCanvas(0, 0.1);

	for(let i = 0; i < 10; i++) {
		let x = random(600);
		let y = random(600);
		let r = random(5, 10);

		flights.push(new Flight(x, y, r));
	}
}

function draw() {
	background(0);


	for(ball of flights) {
		//ball.applyForce(gravity);
		ball.render();
		ball.update();
	}
}