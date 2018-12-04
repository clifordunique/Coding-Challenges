class Mouse {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	update() {
			noStroke();
			fill(244, 112, 158);
			ellipse(this.x, this.y, this.y / 4, this.y / 4);
	}
}