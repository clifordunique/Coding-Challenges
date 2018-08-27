var inc = 0.05;

function setup() {
	createCanvas(600, 400);
	//pixelDensity(1);
}

function draw() {
	//var xOff = 0;//start perlin noise
	var yOff = 0;
	loadPixels();
	
	for(let y = 0; y < width; y++){
		var xOff = 0;
		for(let x = 0; x < width; x++){
			var index = (x + y * width) * 4;
			//var r = random(255);
			var r = noise(xOff, yOff) * 255;
			pixels[index + 0] = r;
			pixels[index + 1] = r;
			pixels[index + 2] = r;
			pixels[index + 3] = 255;

			xOff += 0.01;
		}
		yOff += 0.01;
	}

	updatePixels();
	

}