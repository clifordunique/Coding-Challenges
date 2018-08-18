let resolution = 10;
let grid; 
let cols;
let rows;
let death = false;

function make2DArray(cols, rows) {
	let arr = new Array(cols);
	for(let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}


function setup() {
	createCanvas(800, 500);
	cols = width / resolution;
	rows = height / resolution;

	grid = make2DArray(cols, rows);

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			grid[i][j] = floor(random(2));
		}
	}
}

function draw() {
	background(0);

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			if(grid[i][j] == 1) {
				noStroke();
				fill("#61c15e");
				rect(i * resolution, j * resolution, resolution - 1, resolution - 1);
			}
		}
	}

	let next = make2DArray(cols, rows);

	for(let i = 0; i < cols; i += 1) {
		for(let j = 0; j < rows; j += 1) {

			let state = grid[i][j];
			if(state == 0) {
				death = true;
			}

			//Edges//delete after i wrap all the edges
			// if(i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
			// 	next[i][j] = state;//keep the same solution
			// } else {
				let neighbors = countNeighbors(grid, i, j);

				if(state == 0 && neighbors == 3) {
					next[i][j] = 1;
				} else if(state == 1 && (neighbors < 2 || neighbors > 3)) {
					next[i][j] = 0;
				} else {
					next[i][j] = state;
				}

			}
		//}
	}

	grid = next;

}


function countNeighbors(grid, x, y) {
	
	let sum = 0;

	for(let i = -1; i < 2; i++) {
		for(let j = -1; j < 2; j++) {
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];
		}
	}
	sum -= grid[x][y];

	return sum;
}







