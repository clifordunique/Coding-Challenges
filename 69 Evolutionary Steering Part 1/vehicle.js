function Vehicle(x, y) {
	
	this.pos = createVector(x, y);
	this.vel = createVector(0, -2);
	this.acc = createVector();
	this.r = 6;
	this.maxSpeed = 5;
	this.maxForce = 0.5;

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.eat = function(list) {
		var record = Infinity;
		var closest = -1;

		for(let i = 0; i < list.length; i++) {
			var d = dist(this.pos.x, this.pos.y, list[i].x, list[i].y);
			if(d < record) {
				record = d;
				closest = i;
			}
		}

		if(record < 5) {
			list.splice(closest, 1);
		} else if(closest !== -1){
			this.seek(list[closest]);
		}

	}

	//basic principle how to steer 
	this.seek = function(target) {
		var desiredVel = p5.Vector.sub(target, this.pos);
		desiredVel.setMag(this.maxSpeed);

		var steer = p5.Vector.sub(desiredVel, this.vel);
		steer.mult(this.maxForce);

		this.applyForce(steer);
	}

	this.display = function() {
		var theta = this.vel.heading() + PI / 2;
		stroke(255);
		fill(127);
		strokeWeight(2);

		push();
			translate(this.pos.x, this.pos.y);
			rotate(theta);
			beginShape();
				vertex(0, -this.r * 2);
				vertex(-this.r, this.r * 2);
				vertex(this.r, this.r * 2);
			endShape(CLOSE);
		pop();
	}

}
