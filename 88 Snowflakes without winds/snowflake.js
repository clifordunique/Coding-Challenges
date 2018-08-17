function Snowflake(sx, sy, img) {

	let x = sx || random(width);
	let y = sy || random(height);
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector();
	this.r = getRandomSize();
	this.img = img;

	this.angle = random(TWO_PI);
	this.dir = random(1) < 0.5 ? -1 : 1;
	this.xoff = 0;

	//compare to the normal applyForce function, more close to the real world
	this.applyForce = function(force) {
		let f = force.copy();
		f.mult(this.r);//depend on each flake size
		this.acc.add(f);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(this.r * 0.3);//limit the speed 
		this.pos.add(this.vel);
		this.acc.mult(0);

		if(this.pos.y > height + this.r) {
			this.randomize();
		}

		this.angle += this.dir * this.vel.y / 200;//different direction angle change 
		this.xoff = sin(this.angle) * this.r;//horizontal move depends on size
	}

	//if the flake touch the bottom canvas, appear again from the top canvas
	this.randomize = function() {
		let x = random(width);
		let y = random(-120, -10);
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector();
		this.r = getRandomSize();
		this.img = img;
	
		this.angle = random(TWO_PI);
		this.dir = random(1) < 0.5 ? -1 : 1;
	}

	this.show = function() {
		//point shape
		// stroke(255);
		// strokeWeight(4);
		// ellipse(this.pos.x, this.pos.y, this.r);

		//image shape
		push();
		imageMode(CENTER);
		//avoid all images stick on the top left of the canvas
		translate(this.pos.x + this.xoff, this.pos.y);
		rotate(this.angle);
		image(this.img, 0, 0, this.r, this.r);
		pop();
	}


}

//not the average size of the whole flakes
//most parts all smaller flakes
function getRandomSize() {
	let r = pow(random(0, 1), 5);
	return constrain(r * 36, 8, 36);
}	




