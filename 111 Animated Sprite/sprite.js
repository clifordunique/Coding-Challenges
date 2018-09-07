class Sprite {

	constructor(animations, speed, x, y) {//speed is the toggle image speed not the move speed
		this.animations = animations;
		this.speed = speed;
		this.index = 0;

		this.x = x;
		this.y = y;
	}

	show() {
		//image(animations[frameCount % animations.length], 0, 0);
		image(this.animations[floor(this.index % this.animations.length)], this.x, this.y);
	}

	animate() {
		this.index += this.speed;

		this.x += this.speed * 5;
		if(this.x > width) {
			this.x = -this.animations[0].width;
		}
	}

}

//another method
// function Sprite(animations, speed, x, y) {

// 	this.animations = animations;
// 	this.speed = speed;
// 	this.index = 0;
// 	this.x = x;
// 	this.y = y;

// 	this.show = function() {
// 		image(animations[floor(this.index % this.animations.length)], this.x, this.y);
// 	}

// 	this.animate = function() {
// 		this.index += this.speed;
// 		this.x += this.speed * 5;
// 		if(this.x > width) {
// 			this.x = -this.animations[0].width;
// 		}
// 	}

// }
