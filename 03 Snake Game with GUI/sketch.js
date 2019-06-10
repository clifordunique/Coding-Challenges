var scl = 10;
let snake; 
let food; 
       
var gui;
var backgroundColor = [0, 0, 0];
var fillColor = [255, 255, 255];
var foodColor = [200, 0, 100];
var showGui = true;

function setup() {
	createCanvas(800, 500);
	frameRate(10);

	snake = new Snake();
	food = createVector(floor(random(width / scl)) * scl, floor(random(height / scl)) * scl);

	gui = createGui("Snake GUI (Press M Toggle GUI)", width - 200, 20);
	gui.addGlobals("backgroundColor", "fillColor", "foodColor");
}

function draw() {
	background(backgroundColor);

	fill(foodColor);
	noStroke();
	rect(food.x, food.y, scl, scl);

	snake.update();
	snake.show();
	if(snake.eat(food)) {
		pickLocation();
	}
	snake.death();

}

function pickLocation() {
	let x = floor(random(width / scl)) * scl;
	let y = floor(random(height / scl)) * scl;
	food = createVector(x, y);
	fill(200, 0, 100);
	noStroke();
	rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		snake.dir(0, -1);
	}
	if(keyCode == DOWN_ARROW) {
		snake.dir(0, 1);
	}
	if(keyCode == LEFT_ARROW) {
		snake.dir(-1, 0);
	}
	if(keyCode == RIGHT_ARROW) {
		snake.dir(1, 0);
	}
	if(keyCode == 77) {
		showGui = !showGui;
		if(showGui) {
			gui.show();
		} else {
			gui.hide();
		}
	}
}



















