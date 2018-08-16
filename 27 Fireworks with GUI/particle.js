function Particle(x, y, fireSeed, hue) {

	this.fireSeed = fireSeed;
	this.pos = createVector(x, y);
	if(this.fireSeed) {
		this.vel = createVector(0, random(-3, -10));
	} else {
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(1, 6));
	}
	this.acc = createVector();
	this.lifespan = 255;
	this.hue = hue;

	//Newton's second law of motion : F = ma; 
	//assume mass is one, acceleration is the acting on an object
	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		if(!this.fireSeed) {
			this.vel.mult(0.95);
		}
		this.lifespan -= Duration;
	}

	this.done = function() {
		if(this.lifespan <= 0) {
			return true;
		} else {
			return false;
		}
	}

	this.show = function() {
		//stroke part is written on the setup function
		colorMode(HSB);
		if(!this.fireSeed) {
			strokeWeight(2);
			stroke(this.hue, 255, 255, this.lifespan);
		} else {
			strokeWeight(5);
			stroke(this.hue, 255, 255, this.b);
		}
		point(this.pos.x, this.pos.y);
	}

}
