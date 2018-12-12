function Projectile(x, y) {

	//=-=-=-todo add later=-=-=-=-
	// this.evaporate = function (){
 	// this.toDelete = true;
	// }

	this.x = x;
	this.y = y;
	this.r = 24;
	this.velocity = 0;
	this.gravity = 0.00005;
 
	this.tag = false;

	this.update = function() {
		this.velocity *= 1.5;
		this.velocity += this.gravity;
		this.y -= this.velocity;
		this.y -= 5;
	}

	this.show = function(){
		noStroke();
		fill(255, 216, 17);
		ellipse(this.x ,this.y, this.r * 2, this.r * 2);
	}

	this.intersect = function (object){
		var d = dist(this.x, this.y, object.x, object.y);

		if(d < this.r + object.r){
			return true;
		} else {
			return false;
		}
	}

	this.offScreen = function() {
		if(this.y <= 0) {
			return true;		
		} else {
			false;
		}
	}

}