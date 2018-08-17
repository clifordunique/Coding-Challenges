let hr;
let mn;
let sc;
let gui;

//In p5 GUI cannot use let type
var textColor = [255, 255, 255];
var secondColor = [200, 0, 100];
var minColor = [20, 200, 100];
var hrColor = [94, 255, 249];
var secondLength = 120;

function setup() {
	createCanvas(800, 400);
	angleMode(DEGREES);

	gui = createGui("Clock GUI", width - 200, 20);
	sliderRange(0, 255, 1);
	gui.addGlobals("textColor", "secondColor", "minColor", "hrColor");
	sliderRange(80, 150, 1);
	gui.addGlobals("secondLength");
}

function draw() {
	background(0, 20);

//=-=-=-=-=-=-=show real time=-=-=-=-=-=-=
	hr = nf(hour(), 2);
	mn = nf(minute(),2);
	sc = nf(second(), 2);
	textAlign(LEFT, CENTER);
	textSize(50);
	noStroke();
	noFill();
	stroke(textColor);
	strokeWeight(0.4);
	text(hr + ":" + mn + ":" + sc, 10, 50);
//=-=-=-=-=-=-=show real time=-=-=-=-=-=-=

	clock();
	decorated(30, 125, hrColor);//hour points
	decorated(6, 150, secondColor);//seconds points
}


function clock() {
	translate(width / 2, height / 2);
	rotate(-90);
	noFill();

	push();
		stroke(secondColor);
		strokeWeight(4);
		secondAngle = map(sc, 0, 60, 0, 360);
		arc(0, 0, 300, 300, 0, secondAngle);
		rotate(secondAngle);
		line(0, 0, secondLength, 0);
	pop();

	push();
		stroke(minColor);
		strokeWeight(4);
		minAngle = map(mn, 0, 60, 0, 360);
		arc(0, 0, 280, 280, 0, minAngle);
		rotate(minAngle);
		line(0, 0, 90, 0);
	pop();

	push();
		stroke(hrColor);
		strokeWeight(6);
		hrAngle = map(hr % 12, 0, 12, 0, 360);
		arc(0, 0, 250, 250, 0, hrAngle);
		rotate(hrAngle);
		line(0, 0, 70, 0);
	pop();
}


function decorated(type, size, fillColor) {//seconds: type 6 size 150
	for(let angle = 0; angle < 360; angle += type) {
		let radius = size;
		let x = radius * cos(angle);
		let y = radius * sin(angle);
		stroke(fillColor);
		strokeWeight(4);
		point(x, y);
	}
}


