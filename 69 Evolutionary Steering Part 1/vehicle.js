function Vehicle(x, y) {

	this.pos = createVector(x, y);
	this.vel = createVector(0, -2);
	this.acc = createVector(0, 0);
	this.r = 6;
	this.maxSpeed = 5;//abaility to seek the target
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
			var d = this.pos.dist(list[i]);
			if(d < record) {
				record = d;
				closest = i;
			}
		}

		if(record < 5) {//if reach it eat it and remove it
			list.splice(closest , 1);
		}

		this.seek(list[closest]);
	}


	this.seek = function(target) {
		//this is the desired velocity
		var desired = p5.Vector.sub(target, this.pos);

		//Scale the maximum speed
		desired.setMag(this.maxSpeed);//此向量的大小设置为this.maxSpeed

		//Steering = desired minus velocity
		var steer = p5.Vector.sub(desired, this.vel);
		steer.limit(this.maxForce);

		this.applyForce(steer);
	}

	this.display = function() {
		
    	//Calculate the angle of rotation for this vector
		var theta = this.vel.heading() + PI / 2;
		fill(127);
		stroke(200);
		strokeWeight(1);

		push();
			translate(this.pos.x, this.pos.y);
			rotate(theta);
			beginShape();
				vertex(0, -this.r * 2);
				vertex(-this.r, this.r * 2);
				vertex(this.r, this.r * 2);
			endShape();
		pop();

    }

}











