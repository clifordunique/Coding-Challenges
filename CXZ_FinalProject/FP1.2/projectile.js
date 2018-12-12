function Projectile(x, y) {
	// //this.x = x;
	// //this.y = y;
	// this.pos = createVector(x, y);
	// this.vel = createVector();
	// this.acc = createVector();
	// this.r = 8;

	// this.applyForce = function(force) {
	// 	let f = force.copy();
	// 	f.mult(this.r * 0.2);
	// 	this.acc.add(f);
	// }

	// this.show = function() {
	// 	noStroke();
	// 	fill(50, 0, 255);
	// 	ellipse(this.x ,this.y, this.r * 2, this.r * 2);
	// }

	// this.intersect = function(object) {
	// 	var d = dist(this.x, this.y, object.x, object.y);

	// 	if(d < this.r + object.r) {
	// 		 return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	// this.update = function() {
	// 	this.vel.add(this.acc);
	// 	this.vel.limit(this.r * 0.2);
	// 	if(this.vel.mag() < 1){
	// 		this.vel.normalize();
	// 	}

	// 	this.pos.add(this.vel);
	// 	this.acc.mult(0);
	// 	this.pos.y -= 1;
	// }


	//this.x = x;
	//this.y = y;
	this.pos = createVector(x, y);
	this.r = 4;
	this.toDelete = false;//todo add later =

	this.show = function(){
		noStroke();
		fill(255, 216, 17);
		ellipse(this.pos.x ,this.pos.y, this.r * 2, this.r * 2);
	}
//todo add later
	this.evaporate = function (){
    	this.toDelete = true;
	}

	this.hits = function (object){
		var d = dist(this.pos.x, this.pos.y, object.x, object.y);

		if(d < this.r + object.r){
			return true;
		} else {
			return false;
		}
	}

	this.update = function(){
		this.pos.y = this.pos.y - 4;
	}

}