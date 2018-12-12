class Drust {

	constructor(x, y, d, xspeed, yspeed) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.xspeed = xspeed;
		this.yspeed = yspeed;
		this.alpha = 255
	}

	update() {
		this.x += this.xspeed;
		this.y -= this.yspeed;
		this.alpha -= 10;
	}

	show() {
		noStroke();
		fill(252, 132, 38, this.alpha);
		ellipse(this.x, this.y, this.d);
	}

}