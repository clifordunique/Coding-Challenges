class Flight {

	constructor(sx, sy, sr) {
		let x = sx || random(width);
		let y = sy || random(height);

		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector();

		this.r = sr;
	}

	applyForce(force) {
		let f = force.copy();
		f.mult(this.r * 0.2);
		this.acc.add(f);
	}

	update() {
		this.vel.add(this.acc);
		this.vel.limit(this.r * 0.2);

		if(this.vel.mag() < 1){
			this.vel.normalize();
		}

		this.pos.add(this.vel);
		this.acc.mult(0);

		if(this.pos.y > height + this.r) {
			this.pos.y = this.r;
		} else if(this.pos.y < 0 - this.r) {
			this.pos.y = height - this.r
		} else if(this.pos.x > width + this.r) {
			this.pos.x = -this.r;
		} else if(this.pos.x < - this.r) {
			this.pos.x = width + this.r;
		}

		this.pos.x += 1;
		this.pos.y += 1;
	}

	render() {
		stroke(255);
		strokeWeight(this.r);
		point(this.pos.x, this.pos.y);
	}

}