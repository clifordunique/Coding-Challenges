class Boss {
	constructor(x, y, r, speedX, speedY) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.speedX = speedX;
		this.speedY = speedY;
	}

	bounce() {
		if(this.x >= windowWidth || this.x <= 0) {
			this.speedX *= -1;
		}
		if(this.y >= height || this.y <= 0) {
			this.speedY *= -1;
		}
		this.x += this.speedX;
		this.y += this.speedY;
	}

	show() {
		noStroke();
		fill(200, 0, 100, 150);
		ellipse(this.x, this.y, this.r, this.r);
	}

	intersect(other) {
		//method3
		if(typeof(other) === "object") {
			let d = dist(this.x, this.y, other.x, other.y);
			return (d < (this.r / 2 + other.r));
		}
	}

	hurt() {
		this.r = this.r - 25;
	}

}