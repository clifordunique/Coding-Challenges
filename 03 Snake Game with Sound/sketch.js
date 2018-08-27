var scl = 20;
let snake;
let food;

var gui;
var backgroundColor = [0, 0, 0];
var fillColor = [255, 255, 255];
var foodColor = [200, 0, 100];
var showGui = true;

var eatSound;
var startOverSound;
var hello;
var music;

var fr = 10;

function preload() {
	eatSound = loadSound("MP3/Woosh/Woosh-Deep-01.mp3");
	startOverSound = loadSound("MP3/Voice/Female/Voice-Coding_Power-F-01.mp3");
	hello = loadSound("MP3/Input/Input-03.mp3");
	music = loadSound("sunny.mp3");
}

function setup() {
	createCanvas(800, 500);
	hello.playMode("sustain");
	music.play();
	frameRate(fr);
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
	if(!hello.isPlaying()) {
		hello.play();
	}
	hello.play();
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



















