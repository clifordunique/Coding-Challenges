function make2DArray(cols, rows) {
	let arr = new Array(cols);
	for(let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

var grid;
var cols;
var rows;
var w = 20;

var totalBees = 50;

function setup() {
	createCanvas(501, 501);
	cols = floor(width / w);
	rows = floor(height / w);

	grid = make2DArray(cols, rows);
	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			//grid[i][j] = floor(random(2));//just for test - console.table(grid)
			grid[i][j] = new Cell(i, j, w);
		}
	}

	//pick totalBees spots
	var options = [];
	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			options.push([i, j]);
		}
	}
	for(let n = 0; n < totalBees; n++) {
		var index = floor(random(options.length));
		var choice = options[index];
		var i = choice[0];
		var j = choice[1];
		//Delete that spots
		options.splice(index, 1);
		grid[i][j].bee = true;
	}

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			grid[i][j].countBees();
		}
	}
}

function mousePressed() {
	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			if(grid[i][j].contains(mouseX, mouseY)) {
				grid[i][j].reveal();

				if(grid[i][j].bee) {
					gameover();
				}
			}
		}
	}
}

function draw() {
	background(255);

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}
}

function gameover() {
	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			grid[i][j].revealed = true;
		}
	}
}
