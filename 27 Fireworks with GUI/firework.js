function Firework() {

	this.hue = random(360);
	this.fireSeed = new Particle(random(width), height, true, this.hue);
	this.exploded = false;
	this.particles = [];


	this.update = function() {
		if(!this.exploded) {
			this.fireSeed.applyForce(gravity);
			this.fireSeed.update();
			if(this.fireSeed.vel.y >= 0) {//the particle start falling down moment
				this.exploded = true;
				this.explode();
			}
		} 

		for(let i = 0; i < this.particles.length; i++) {
			this.particles[i].applyForce(gravity);
			this.particles[i].update();

			if(this.particles[i].done()) {
				this.particles.splice(i, 1);//delete the firework particles in order to save the speed of browser
			}
		}
	}

	this.explode = function() {
		for(let i = 0; i < Density; i++) {
			let fireParticle = new Particle(this.fireSeed.pos.x, this.fireSeed.pos.y, false, this.hue);
			this.particles.push(fireParticle);
		}
	}

	this.done = function() {
		if(this.exploded && this.particles === 0) {
			return true;
		} else {
			return false;
		}
	}

	this.show = function() {
		if(!this.exploded) {
			this.fireSeed.show();
		} 
		for(let i = 0; i < this.particles.length; i++) {
			this.particles[i].show();
		}
	}

}
