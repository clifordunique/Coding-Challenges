function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.neighborCount = 0;

	// if(random(1) < 0.5) {
	// 	this.bee = true;
	// } else {
	// 	this.bee = false;
	// }

	this.bee = false; 
	this.revealed = false;//at the beginning none of reveal
}

Cell.prototype.show = function() {
	stroke(0);
	noFill();
	rect(this.x, this.y, this.w, this.w);

	if(this.revealed) {
		if(this.bee) {
			stroke(0);
			fill(127);
			ellipse(this.x + this.w / 2, this.y + this.w / 2, this.w * 0.5);
		} else {
			fill(200);
			rect(this.x, this.y, this.w, this.w);
			if(this.neighborCount > 0) {
				textAlign(CENTER, CENTER);
				fill(0);
				text(this.neighborCount, this.x + this.w / 2, this.y + this.w / 2);
			}
		}
	}
}

//count how many bees are neighboring a particular cell
Cell.prototype.countBees = function() {
	if(this.bee) {
		this.neighborCount = -1;
		return;
		//return -1;
	} 
	var total = 0;
	for(let xoff = -1; xoff <= 1; xoff++) {
		for(let yoff = -1; yoff <= 1; yoff++) {
			var i = this.i + xoff;
			var j = this.j + yoff;

			if(i > -1 && i < cols && j > -1 && j < rows) {
				var neighbor = grid[i][j];
				if(neighbor.bee) {
					total++;
				}
			}
		}
	}
	this.neighborCount = total;
}

//test this cell contain one point. if I click the cell i can reveal it
Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
	this.revealed = true;

	if(this.neighborCount == 0) {
		this.floodFill();
		//flood fill time
	}
}

Cell.prototype.floodFill = function() {
	for(let xoff = -1; xoff <= 1; xoff++) {
		for(let yoff = -1; yoff <= 1; yoff++) {
			var i = this.i + xoff;
			var j = this.j + yoff;

			if(i > -1 && i < cols && j > -1 && j < rows) {
				var neighbor = grid[i][j];
				if(!neighbor.bee && !neighbor.revealed) {
					neighbor.reveal();
				}
			}
		}
	}
}