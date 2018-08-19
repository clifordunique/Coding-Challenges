function Pipe() {
	var spacing = random(40, height / 2);//spacing size
	var centery = random(spacing, height - spacing);

	this.x = width;
	this.w = 20;

	//-=-=-=-==-=-=-=-=-=hardest part-=-=-=-==-=-=-=-=-=
	this.topHeight = centery - spacing / 2;//this.topHeight = random(height / 2);//simple way
	this.bottomHeight = height - (centery + spacing / 2);//this.bottomHeight = random(height / 2);//simple way
	this.highlight = false;
	//-=-=-=-==-=-=-=-=-=hardest part-=-=-=-==-=-=-=-=-=

	this.update = function() {
		this.x -= 3;
	}

	this.show = function() {
		noStroke();
		if(!this.highlight) {
			fill(255);
		} else {
			fill(200, 0, 100);
		}
		rect(this.x, 0, this.w, this.topHeight);
		rect(this.x, height - this.bottomHeight, this.w, this.bottomHeight);
	}

	this.hit = function(pos) {
		if(pos.x > this.x && pos.x < this.x + this.w) {
			if(pos.y < this.topHeight || pos.y > height - this.bottomHeight) {
				this.highlight = true; 
				return true;
			}
		} else {
			return false;
		}
	}

	this.offScreen = function() {
		if(this.x < -this.w) {
			return true;
			console.log("splice")
		}
	}

}