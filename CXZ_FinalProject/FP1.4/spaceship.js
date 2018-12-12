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
		stroke(252, 213, 0);
		fill(191, 140, 96);
		
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
		this.x += this.xdir * 15;
	}

	this.moveup = function(dir){
		this.y += this.ydir * 15;
	}

	this.offScreen = function() {
		if(this.x >= windowWidth) {
			//console.log("off right");
			this.x = 0;
		}

		if(this.x < 0) {
			this.x = windowWidth;
		}

		if(this.y > windowHeight - this.r * 4) {
			this.y = windowHeight - this.r * 4;
		}

		if(this.y < this.r * 3) {
			this.y = this.r * 3;
		}
	}



}