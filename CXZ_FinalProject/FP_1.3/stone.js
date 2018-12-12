class Stone {
  
	constructor(sx, sy, r, c) {
		let x = sx;
		let y = sy;

		this.pos = createVector(x, y);
		this.vel = createVector(random(-10, 10), random(-10, 10));
		this.acc = createVector();
		this.color = c;

		this.r = r;
		
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

		this.pos.x += 1;
		this.pos.y += 1;
	}

	render() {
		stroke(this.color);
		strokeWeight(this.r);
		point(this.pos.x, this.pos.y);
	}

	intersect(other) {
		//method 1
		// let d = dist(this.pos.x, this.pos.y, other.x, other.y);
		// return (d < (this.r / 2 + other.r));

		// method2
		// var d = dist(this.x, this.y, other.x, other.y);

		// if(d < this.r + other.r){
		// 	return true;
		// } else {
		// 	return false;
		// }

		//method3
		if(typeof(other) === "object") {
			let d = dist(this.pos.x, this.pos.y, other.x, other.y);
			return (d < (this.r / 2 + other.r));
		}
	}

	offScreen() {
		if(this.pos.y > height + this.r) {
			this.pos.y = this.r;
		} else if(this.pos.y < 0 - this.r) {
			this.pos.y = height - this.r
		} else if(this.pos.x > width + this.r) {
			this.pos.x = -this.r;
		} else if(this.pos.x < - this.r) {
			this.pos.x = width + this.r;
		}
	}

	disappear() {
		console.log("Disappear");
	}

}














