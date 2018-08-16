function setup() {
	createCanvas(600, 600);
	background(0);
	translate(width / 2, height / 2);
	makeCircle(0, 0, 300);
}

function makeCircle(x, y, d) {
	noFill();
	stroke(255);
	strokeWeight(2);
	ellipse(x, y, d);

	if(d > 4) {//avoid creach error Maximum call stack size exceeded
		makeCircle(x + d / 2, y, d / 2);
		makeCircle(x - d / 2, y, d / 2);
		makeCircle(x, y - d / 2, d / 2);
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

