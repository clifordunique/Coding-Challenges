var gui;

var m = 5;
//change the n1n2n3 value to see the result
let n1 = 1;
let n2 = 1;
let n3 = 1;
let part1;
let part2;
let r;


function setup() {
	createCanvas(600, 400);
	gui = createGui("SuperShapes");
	sliderRange(0, 20, 1);
	gui.addGlobals("m");
}

function draw() {
	background(0);
	translate(width / 2, height / 2);

	beginShape();
	for(let angle = 0; angle < TWO_PI * 8; angle += 0.01) {
		part1 = pow(abs(cos(m * angle / 4) / 1), n2);
		part2 = pow(abs(sin(m * angle / 4) / 1), n3);
		part3 = pow(part1 + part2, 1 / n1);

		// if(part3 == 0) {
		// 	r = 0;
		// } else {
			r = (1 / part3);
		//}

		let x = r * cos(angle) * 50;
		let y = r * sin(angle) * 50;
		stroke(255);
		noFill();
		vertex(x, y);
	}
	endShape(CLOSE);

}





















