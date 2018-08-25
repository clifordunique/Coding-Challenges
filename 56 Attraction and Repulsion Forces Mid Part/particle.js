function Particle(x, y) {

	this.pos = createVector(x, y);
	this.prev = createVector(x, y);
	//this.vel = createVector();
	this.vel = p5.Vector.random2D();
	//this.vel.setMag(random(2, 10));//give more velovities
	//this.vel = createVector();
	this.acc = createVector();

	//F = G / d2
	this.attracted = function(target, j) {
		var force = p5.Vector.sub(target, this.pos);
		var dsquared = force.magSq();
		dsquared = constrain(dsquared, 5, 100)
		var G = 50;
		var strength = G / dsquared;
		force.setMag(strength);

		if(j % 2 == 1) {
			force.mult(-1);//replusion
		}
		
		
		this.acc.add(force);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(5);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function() {
		stroke(255, 250);
		strokeWeight(1);
		line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

		this.prev.x = this.pos.x;
		this.prev.y = this.pos.y;
	}

}