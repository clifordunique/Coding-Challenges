function Vehicle(x, y) {
	
	this.pos = createVector(x, y);
	this.vel = createVector(0, -2);
	this.acc = createVector();
	this.r = 6;
	this.maxSpeed = 5;
	this.maxForce = 0.5;

	this.health = 1;//Part2
	
	//genertic information//Part2
	this.dna = [];//first data is steerGood and the second is steerBad
	//Food weight
	this.dna[0] = random(-2, 2);//good 
	//Poison weight
	this.dna[1] = random(-2, 2);//bad

	//Food perception
	this.dna[2] = random(0, 100);
	//Poison perception
	this.dna[3] = random(0, 100);

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
		var steerG = this.eat(good, 0.2, this.dna[2]);//change the eat function to return one approaiate force
		var steerB = this.eat(bad, -0.5, this.dna[3]);//second parameter is according to the health

		steerG.mult(this.dna[0]);
		steerB.mult(this.dna[1]);

		this.applyForce(steerG);
		this.applyForce(steerB);
	}

	this.eat = function(list, nutrition, perception) {//part 2 should return one 
		var record = Infinity;
		var closest = -1;

		for(let i = 0; i < list.length; i++) {
			var d = dist(this.pos.x, this.pos.y, list[i].x, list[i].y);
			if(d < record && d < perception) {//inside the good perception
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
			noFill();
			line(0, 0, 0, -this.dna[0] * 25);//food
			ellipse(0, 0, this.dna[2] * 2);

			stroke(255, 0, 0);
			line(0, 0, 0, -this.dna[1] * 25);//poison
			ellipse(0, 0, this.dna[3] * 2);

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

	this.boundaries = function() {
		var d = 25;

    	let desired = null;
	
    	if (this.pos.x < d) {
    	    desired = createVector(this.maxSpeed, this.vel.y);
    	} else if (this.pos.x > width - d) {
    	  desired = createVector(-this.maxSpeed, this.vel.y);
    	}
	
    	if (this.pos.y < d) {
    	    desired = createVector(this.vel.x, this.maxSpeed);
    	} else if (this.pos.y > height - d) {
    	    desired = createVector(this.vel.x, -this.maxSpeed);
    	}
	
    	if (desired !== null) {
    		desired.normalize();
    	  	desired.mult(this.maxSpeed);
    	  	let steer = p5.Vector.sub(desired, this.vel);
    	  	steer.limit(this.maxForce);
    	  	this.applyForce(steer);
    	}
  }

}