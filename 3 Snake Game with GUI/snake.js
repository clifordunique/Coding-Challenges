function Snake() {

	this.x = scl;
	this.y = scl;
	this.xspeed = scl;
	this.yspeed = 0;

	this.total = 0;
	this.tails = [];

	this.update = function() {

		if(this.total === this.tails.length) {//no food has bee n eaten
			for(let i = 0; i < this.tails.length - 1; i++) {
				this.tails[i] = this.tails[i + 1];//shift everything over
			} 
		}
		this.tails[this.total - 1] = createVector(this.x, this.y);//if eat the last one should be new Vector

		this.x += this.xspeed;
		this.y += this.yspeed;
		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);

	}

	this.show = function() {
		noStroke();
		fill(fillColor);

		for(let i = 0; i < this.tails.length; i++) {
			rect(this.tails[i].x, this.tails[i].y, scl, scl);
		}
		rect(this.x, this.y ,scl, scl);

	}

	this.eat = function(food) {
		let d = dist(this.x, this.y, food.x, food.y);
		if(d < 0.1) {
			this.total++;
			return true;
		} else {
			return false;
		}
	}

	this.death = function() {
		for(let i = 0; i < this.tails.length; i++) {
			let d = dist(this.x, this.y, this.tails[i].x, this.tails[i].y);
			if(d < 0.1) {
				this.total = 0;
				this.tails = [];
			}
		}
	}

	this.dir = function(a, b) {
		this.xspeed = a * scl;
		this.yspeed = b * scl;
	}

}