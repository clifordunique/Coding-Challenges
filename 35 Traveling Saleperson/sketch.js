var cities = [];
var totalCities = 10;

var recordDistance;
var bestEver;

function setup() {
	createCanvas(600, 400);
	for(let i = 0; i < totalCities; i++) {
		cities.push(createVector(random(width), random(height)));
	}
	recordDistance = calaDistance(cities);
	bestEver = cities.slice();
}

function draw() {
	background(0);

	for(let i = 0; i < cities.length; i++) {
		noStroke();
		fill(255);
		ellipse(cities[i].x, cities[i].y, 5, 5);
	}

	//seraching line
	beginShape();
	for(let i = 0; i < cities.length; i++) {
		stroke(255);
		noFill();
		vertex(cities[i].x, cities[i].y);
	}
	endShape();

	//best line
	beginShape();
	for(let i = 0; i < cities.length; i++) {
		stroke(255, 0, 200);
		noFill();
		vertex(bestEver[i].x, bestEver[i].y);
	}
	endShape();

	var i = floor(random(cities.length));
	var j = floor(random(cities.length));
	swap(cities, i, j);

	var d = calaDistance(cities);
	if(d < recordDistance) {
		recordDistance = d;
		console.log(recordDistance);
		bestEver = cities.slice();
	}
}

function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function calaDistance(points) {
	var sum = 0;
	for(let i = 0; i < points.length - 1; i++) {
		var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
		sum += d;
	}
	return sum;
}

