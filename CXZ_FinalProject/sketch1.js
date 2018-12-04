let snow = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload() {
	spritesheet = loadImage("images/spritesheet.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0, 0.1);

	for(let x = 0; x < spritesheet.width; x += 32) {
		for(let y = 0; y < spritesheet.height; y += 32) {
			let img = spritesheet.get(x, y, 32, 32);//pull out a slice of image
			image(img, x, y);
			textures.push(img);
		}
	}

	for(let i = 0; i < 300; i++) {//only 300 snowflake in here
		let x = random(width);
		let y = random(height);
		let design = random(textures);
		snow.push(new Snowflake(x, y, design));
	}

}

function draw() {
	background(0);
	//snow.push(new Snowflake());//not adding them consistly
	zOff += 0.01;

	for(flake of snow) {
		let xOff = flake.pos.x / width;
		let yOff = flake.pos.y / height;
		let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
		let wind = p5.Vector.fromAngle(wAngle);
		wind.mult(0.2);

	
		flake.applyForce(gravity);
		flake.applyForce(wind);
		flake.render();
		flake.update();
	}

	// for(let i = snow.length - 1; i >= 0; i--) {	
	// 	if(snow[i].offScreen()) {
	// 		snow.splice(i, 1);
	// 	}
	// }
}
























