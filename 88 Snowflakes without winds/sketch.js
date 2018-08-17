let snows = [];
let gravity;

let sprite;
let textures = [];

function preload() {
	sprite = loadImage("sprites.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0, 0.2);

	for(let i = 0; i < sprite.width; i += 32) {
		for(let j = 0; j < sprite.height; j += 32) {
			let singleImg = sprite.get(i, j, 32, 32);//Get a region of pixels from an image.
			image(singleImg, 32, 32);
			textures.push(singleImg);
		}
	}

	for(let i = 0; i < 200; i++) {
		snows.push(new Snowflake(random(width), random(height), random(textures)));
	}
}

function draw() {
	background(0);
	//image(sprite);//check whether the image is loaded or not
	for(let flake of snows){
		flake.applyForce(gravity);
		flake.update();
		flake.show();
	}
}




