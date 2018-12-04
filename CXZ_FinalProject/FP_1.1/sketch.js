let timer;
let total;
let timeLeft = 10;
let interval;
let result;

let mouse;
let enemies = [];

let difficult = false;

function setup() {

	createCanvas(windowWidth, windowHeight);

	//background(15, 15, 15, 100);//todo remove later

	timer = select("#timer");
	total = select("#total");
	result = select("#result");
	total.html(timeLeft);
	interval = setInterval(timeIt, 1000);

	for(let i = 0; i < 100; i++) {
		let x = random(windowWidth);
		let y = random(windowHeight);
		let r = random(5, 15);
		let c = "#FFFFFF";

		enemies.push(new Enemy(x, y, r, c));
	}

	
	
}

function draw() {

	background(15, 15, 15, 100);

	for(enemy of enemies) {
		enemy.render();
		enemy.update();
		enemy.offScreen();
	}

	mouse = new Mouse(mouseX, mouseY);
	mouse.update();

	if(difficult) {
		for(let i = 0; i < 10; i++) {
			let x = random(windowWidth);
			let y = random(windowHeight);
			let r = random(5, 15);
	
			enemies.push(new Enemy(x, y, r, "#FF530D"));
		}
		difficult = false;
	}
}

function timeIt() {
	let hr = floor(timeLeft / 3600);
	if(timeLeft > 3600) {
		mn = floor((timeLeft - 3600) / 60);
	} else {
		mn = floor(timeLeft / 60);
	}
	let sec = timeLeft % 60;

	timeLeft--;
	timer.html(nf(hr, 2) + ":" + nf(mn, 2) + ":" + nf(sec, 2));
	console.log(timeLeft);

	if(timeLeft < 5) {
		difficult = true;
	}

	if(timeLeft < 0) {
		console.log("GameOver");
		clearInterval(interval);
		result.html("GAME OVER");
	}
}