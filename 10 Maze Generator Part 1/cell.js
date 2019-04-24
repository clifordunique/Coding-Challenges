function Cell(i, j) {
	this.i = i;
	this.j = j;
	this.x = this.i * w;
	this.y = this.j * w;
	this.walls = [true, true, true, true];
 
	this.show = function() {
		stroke(255);

		if(this.walls[0]) {
			line(this.x, this.y, this.x + w, this.y);
		}
		if(this.walls[1]) {
			line(this.x + w, this.y, this.x + w, this.y + w);
		}
		if(this.walls[2]) {
			line(this.x + w, this.y + w, this.x, this.y + w);
		}
		if(this.walls[3]) {
			line(this.x, this.y + w, this.x, this.y);
		}
	}
}
