//let angleSlider;//dom slider method
var angle = 60;
var gui;

var backgroundColor = [0, 0, 0];
var strokeColor = [255, 255, 255];
var strokeWidth = 1;
var density = 4;
var branchSize = 100;
var typeIndex = 0.67;

function setup() {
	createCanvas(800, 500);
	angleMode(DEGREES);
	//angleSlider = createSlider(0, TWO_PI, PI / 3);//dom slider method
	gui = createGui("Fractal Tree");
	gui.addGlobals("backgroundColor", "strokeColor");

	sliderRange(0.5, 0.7, 0.05);
	gui.addGlobals("typeIndex");

	sliderRange(1, 10, 0.25);
	gui.addGlobals("density");

	sliderRange(50, 200, 1);
	gui.addGlobals("branchSize");

	sliderRange(0.2, 2, 0.05);
	gui.addGlobals("strokeWidth");

	sliderRange(0, 360, 1);
	gui.addGlobals("angle");

}

function draw() {
	background(backgroundColor);
	translate(width / 2, height);
	//angle = angleSlider.value();//dom slider method
	noFill();
	stroke(strokeColor);
	strokeWeight(strokeWidth);

	makeBranch(branchSize);
}

function makeBranch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	
	if(len > density) {
		push();
		//translate(0, -len);
		rotate(angle);
		//line(0, 0, 0, len * 0.67);
		makeBranch(len * typeIndex);
		pop();

		push();
		//translate(0, -len);
		rotate(-angle);
		//line(0, 0, 0, len * 0.67);
		makeBranch(len * typeIndex);
		pop();

	}
	
}

// function makeLeftBrunch(len) {
// 	line(0, 0, 0, -len);

// 	if(len > 4) {
// 		push();
// 		translate(0, -len);
// 		rotate(-angle);
// 		//line(0, 0, 0, len * 0.67);
// 		makeLeftBrunch(len * 0.67);
// 		pop();
// 	}
	
// }

// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight);
// }
























