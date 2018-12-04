function getRandomSize() {
	//method1
	//let r = randomGaussian() * 2;
	//return constrain(abs(r * r), 2, 36);

	//method2
	let r = pow(random(0, 1), 3);
	return constrain(r * 36, 2, 32);
}



class Snowflake {

	constructor(sx, sy, img) {
		let x = sx || random(width);
		let y = sy || random(-100, -10);

		this.img = img;

		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector();

		this.angle = random(0, TWO_PI);//rotate
		this.dir = (random(1) > 0.5) ? 1 : -1;
		
		this.xOff = 0;

		this.r = getRandomSize();
	}



	applyForce(force) {
		//Parallax Effect hack
		let f = force.copy();
		f.mult(this.r * 0.2);//more bigger more stroner force
		// let f = force.copy();//acc = f / m;//optional NEWTON laws
		// f.div(this.mass);//optional NEWTON laws
		this.acc.add(f);
	}

	randomize() {
		let x = random(width);
		let y = random(-100, -10);
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector();
		//this.r = random(4, 32);
		this.r = getRandomSize();
	}

	update() {

		this.xOff = sin(this.angle) * this.r;

		this.vel.add(this.acc);
		this.vel.limit(this.r * 0.2);

		if(this.vel.mag() < 1) {
			this.vel.normalize();
		}

		this.pos.add(this.vel);
		this.acc.mult(0);//clear the acceleration every frame

		if(this.pos.y > height + this.r) {
			this.randomize();
		}



		//warp left and right
		if(this.pos.x < -this.r) {
			this.pos.x = width + this.r;
		}//change from left to right
		if(this.pos.x > width + this.r) {
			this.pos.x = -this.r;
		}



		this.angle += this.dir * this.vel.mag() / 200;

	}

	render() {
		//snowflake is point
		// stroke(255);
		// strokeWeight(this.r);
		// point(this.pos.x, this.pos.y);

		//snowflake is image
		push();
		translate(this.pos.x + this.xOff, this.pos.y);
		rotate(this.angle);
		imageMode(CENTER);
		image(this.img, 0 , 0, this.r, this.r);
		pop();


	}

	// offScreen() {
	// 	return (this.pos.y > height + this.r || this.pos.x < -this.r || this.pos.x > width + this.r);
	// }


}