function Particle(x, y) {

	this.pos = createVector(x, y);
	//this.vel = createVector();//step 1
	this.vel = p5.Vector.random2D();//random vel to start
	this.vel.mult(random(2, 6));
	this.acc = createVector();

	//Euler integration
	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function() {
		stroke(153, 232, 255, 15);
		strokeWeight(2);
		point(this.pos.x, this.pos.y);
	}

	this.attracted = function(target) {
		//var d = dist(this.pos.x, this.pos.y, target.x, target.y);//error
		//dir = target - this.pos
		var force = p5.Vector.sub(target, this.pos);
		//F = G / d^2;
		var dsquared = force.magSq();//d^2 : squared magnitude of the vector
		//need to constrain this vel avoid dist is so close
		dsquared = constrain(dsquared, 25, 500);
		var G = 50;//6.67;
		var strength = G / dsquared;//0.3 is the best number of the strength

		force.setMag(strength);//nomatter whats its length, keep dir and set the length what we want to
		this.acc = force;
	}

}
