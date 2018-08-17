class Particle {

	constructor(x, y, d, xspeed, yspeed) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.xspeed = xspeed;
		this.yspeed = yspeed;
		this.alpha = a;
	}

	update() {
		this.x += this.xspeed;
		this.y -= this.yspeed;
		this.alpha -= duration;
	}

	show() {
		noStroke();
		fill(r, g, b, this.alpha);
		ellipse(this.x, this.y, this.d)
	}

}