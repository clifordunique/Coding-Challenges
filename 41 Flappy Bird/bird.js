function Bird() {

	this.x = 60;
	this.y = height / 2;
	this.w = 20;
	this.velocity = 0;
	this.gravity = 0.6;
	this.upForce = -15;

	this.up = function() {
		this.velocity += this.upForce;
	}

	this.update = function() {
		this.velocity *= 0.9;
		this.velocity += this.gravity;
		this.y += this.velocity;

		if(this.y > height - this.w) {
			this.y = height - this.w;
			this.velocity = 0;
		}

		if(this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.show = function() {
		fill(255);
		noStroke();
		rect(this.x, this.y, 20, 20)
	}


}