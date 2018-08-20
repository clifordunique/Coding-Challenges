let spritesheet;
let spritedata;

let animations = [];//each frame of the animations

let horse;

let horses = [];

function preload() {
	spritedata = loadJSON("horse/horse.json");
	spritesheet = loadImage("horse/horse.png");
}

function setup() {
	createCanvas(600, 500);
	//frameRate(30);

	//let frames = spritedata.frames;//json data
	for(let i = 0; i < spritedata.frames.length; i++) {
		let pos = spritedata.frames[i].position;
		let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
		animations.push(img);
	}

	for(let i = 0; i < 5; i++) {
		horses.push(new Sprite(animations, random(0.2, 1), 0, i * 75));
	}

	console.log(spritedata);
}	


function draw() {
	background(0);

	for(let i = 0; i < horses.length; i++) {
		horses[i].show();
		horses[i].animate();
	}
	//image(spritesheet, 0, 0);
	//image(animations[frameCount % animations.length], 0, 0);
}



