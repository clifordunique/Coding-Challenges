function Vehcile(x, y) {

	this.pos = createVector(x, y);
	this.vel = createVector();
	this.acc = createVector();
	this.r = 6;
	this.maxSpeed = 5;
	this.maxForce = 0.5;

	this.applyForce = function(force) {
		this.acc.add(force);
	}


	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.eat = function(list) {
		var record = Infinity;
		var closest = -1;

		for(let i = 0; i < list.length; i++) {
			var d = dist(this.pos.x, this.pos.y, list[i].x, list[i].y);//easy understand
			//var d = this.pos.dist(list[i]);//tutorial code
			if(d < record) {
				record = d;
				closest = i;
			}
		
			if(d < 5) {
				list.splice(i, 1); 
			} else if (record !== -1) {
				this.seek(list[closest]);
			}
		
		}
		
	}

	this.seek = function(target) {
		var desired = p5.Vector.sub(target, this.pos);
		desired.setMag(this.maxSpeed);
		
		var steer = p5.Vector.sub(desired, this.vel);
		steer.limit(this.maxForce);

		this.applyForce(steer);
	}

	this.show = function() {
		var theta = this.vel.heading() + PI / 2;

		// translate(this.pos.x, this.pos.y);
		// rotate(theta);
		stroke(255);
		fill(127);
		
		push();
		beginShape();
			translate(this.pos.x, this.pos.y);
			rotate(theta);
			vertex(0, -this.r * 2);
			vertex(-this.r, this.r * 2);
			vertex(this.r, this.r * 2);
		endShape(CLOSE);
		pop();
		
	}

}
