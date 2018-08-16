function setup() {
	createCanvas(600, 600);
	background(0);
	translate(width / 2, height / 2);
	makeCircle(0, 0, 300);
}

function makeCircle(x, y, radius) {
	noFill();
	stroke(255);
	strokeWeight(2);
	ellipse(x, y, radius);

	if(radius > 4) {//avoid creach error Maximum call stack size exceeded
		makeCircle(x + radius / 2, y, radius / 2);
		makeCircle(x - radius / 2, y, radius / 2);
		makeCircle(x, y - radius / 2, radius / 2);
	}

}


//-=-=-=-=-=-=-=-Math principle-=-=-=-=-=-=-=-

// var factorial = function(number) {
//   if (number <= 0) { // terminal case
//     return 1;
//   } else { // block to execute
//     return (number * factorial(number - 1));
//   }
// };
// console.log(factorial(6));

