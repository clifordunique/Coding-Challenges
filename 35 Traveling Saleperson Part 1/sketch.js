var cities = [];
var totalCities = 15;

var recordDistance;
var bestEver;

function setup() {
	createCanvas(500, 500);

	for(let i = 0; i < totalCities; i++) {
		cities.push(createVector(random(width), random(height)));
	}

	recordDistance = calDistance(cities);
	bestEver = cities.slice();
}

function draw() {
	background(0);

	for(let i = 0; i < cities.length; i++) {
		stroke(255);
		strokeWeight(5);
		point(cities[i].x, cities[i].y);
	}

	//-=-=-=-=-Searching line-=-=-=-=-
	//This is only connect with random points with each other
	beginShape();
		for(let i = 0; i < cities.length - 1; i++) {
			stroke(255);
			strokeWeight(2);
			line(cities[i].x, cities[i].y, cities[i + 1].x, cities[i + 1].y);
		}
	endShape();

	beginShape();
		for(let i = 0; i < cities.length; i++) {
			stroke(255, 0, 200);
			strokeWeight(2);
			noFill();
			//line(cities[i].x, cities[i].y, cities[i + 1].x, cities[i + 1].y);
			vertex(bestEver[i].x, bestEver[i].y);
		}
	endShape();

	//swap array can make your result more random amd more detail to all points
	var i = floor(random(cities.length));
	var j = floor(random(cities.length));
	swap(cities, i, j);

	//!!!!!!!!!!!!!!!!!
	var d = calDistance(cities);
	if(d < recordDistance) {
		recordDistance = d;
		//The slice() method returns a shallow copy of a portion of an array 
		//into a new array object selected from begin to end
		console.log(recordDistance);
		bestEver = cities.slice();
	}
	//!!!!!!!!!!!!!!!!!
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}


function calDistance(points) {
	var sum = 0;
	for(let i = 0; i < points.length - 1; i++) {
		var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
		sum += d;
	}
	return sum;
}



