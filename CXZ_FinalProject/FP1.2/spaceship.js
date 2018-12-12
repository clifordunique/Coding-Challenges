function Ship(){

	this.x = width / 2;
	this.y = height - 100;
	this.xdir = 0;
	this.ydir = 0;
	this.r = 6;

	// this.show = function(){
	// 	fill(255);
	// 	ellipse(this.x, this.y, 30);
	// }

	this.show = function() {
		// translate(this.pos.x, this.pos.y);
		// rotate(theta);
		stroke(255);
		fill(127);
		
		push();
		beginShape();
			translate(this.x, this.y);
			vertex(0, -this.r * 2);
			vertex(-this.r, this.r * 2);
			vertex(this.r, this.r * 2);
		endShape(CLOSE);
		pop();
		
	}

	this.setDir = function (dir){
		this.xdir = dir;
	}

	this.setHigh = function (dir){
		this.ydir = dir;
	}

	this.move = function(dir){
		this.x += this.xdir * 5;
	}

	this.moveup = function(dir){
		this.y += this.ydir * 5;
	}

	this.offScreen = function() {
		if(this.x >= windowWidth) {
			//console.log("off right");
			this.x = 0;
		}
		if(this.x <= 0) {
			this.x = windowWidth;
		}
	}

}