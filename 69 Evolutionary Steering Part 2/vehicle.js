function Vehicle(x, y) {
	
	this.pos = createVector(x, y);
	this.vel = createVector(0, -2);
	this.acc = createVector();
	this.r = 6;
	this.maxSpeed = 5;
	this.maxForce = 0.5;

	this.health = 1;
	
	//genertic information
	this.dna = [];//first data is steerGood and the second is steerBad
	this.dna[0] = random(-5, 5);
	this.dna[1] = random(-5, 5);

	this.update = function() {
		this.health -= 0.01;

		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	//Part 2
	this.behaviors = function(good, bad) {
		var steerG = this.eat(good, 0.2);//change the eat function to return one approaiate force
		var steerB = this.eat(bad, -0.5);//second parameter is according to the health

		steerG.mult(this.dna[0]);
		steerB.mult(this.dna[1]);

		this.applyForce(steerG);
		this.applyForce(steerB);
	}

	this.eat = function(list, nutrition) {//part 2 should return one 
		var record = Infinity;
		var closest = -1;

		for(let i = 0; i < list.length; i++) {
			var d = dist(this.pos.x, this.pos.y, list[i].x, list[i].y);
			if(d < record) {
				record = d;
				closest = i;
			}
		}


		//moment eating 
		if(record < 5) {
			this.health += nutrition;
			list.splice(closest, 1);
		} else if(closest !== -1){
			return this.seek(list[closest]);//if find sth, iy sould seek, and return vector comes out of seeking
		}

		return createVector(0, 0);//if does not, seeking sth, nothing
	}

	//basic principle how to steer 
	this.seek = function(target) {
		var desiredVel = p5.Vector.sub(target, this.pos);
		desiredVel.setMag(this.maxSpeed);

		var steer = p5.Vector.sub(desiredVel, this.vel);
		steer.limit(this.maxForce);

		//this.applyForce(steer);part2
		return steer;
	}

	this.dead = function() {
		return (this.health < 0);
	}

	this.display = function() {
		var theta = this.vel.heading() + PI / 2;

		push();
			translate(this.pos.x, this.pos.y);
			rotate(theta);

			//line(0, 0, 0, -50);
			stroke(0, 255, 0);
			line(0, 0, 0, -this.dna[0] * 20);//food

			stroke(255, 0, 0);
			line(0, 0, 0, -this.dna[1] * 20);//poison

			var rd = color(255, 0, 0);
			var gr = color(0, 255, 0);
			var col = lerpColor(rd, gr, this.health);

			stroke(col);
			fill(col);
			strokeWeight(2);
			beginShape();
				vertex(0, -this.r * 2);
				vertex(-this.r, this.r * 2);
				vertex(this.r, this.r * 2);
			endShape(CLOSE);
		pop();
	}

}