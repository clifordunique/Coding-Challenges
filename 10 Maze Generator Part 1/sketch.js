//Resource
//https://en.wikipedia.org/wiki/Maze_generation_algorithm
// Recursive backtracker
// File:Hexamaze.webm
// Recursive backtracker on a hexagonal grid
// The depth-first search algorithm of maze generation is frequently implemented using backtracking:
 
// Make the initial cell the current cell and mark it as visited
// While there are unvisited cells
// If the current cell has any neighbours which have not been visited
// Choose randomly one of the unvisited neighbours
// Push the current cell to the stack
// Remove the wall between the current cell and the chosen cell
// Make the chosen cell the current cell and mark it as visited
// Else if stack is not empty
// Pop a cell from the stack
// Make it the current cell

// because this maze made of lines so that we can draw 2d array making them rect
// function make2DArray(cols, rows) {
// 	var arr = new Array(cols);
// 	for(let i = 0; i < arr.length; i++) {
// 		arr[i] = new Array(cols);
// 	}
// 	return arr;
// }
var cols;
var rows;
var grid = [];
var w = 20;


function setup() {
	createCanvas(600, 400);
	cols = floor(width / w);
	rows = floor(height / w);

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			var cell = new Cell(i, j);
			grid.push(cell);
		}
	}
}

function draw() {
	background(0);

	for(let i = 0; i < grid.length; i++) {
		grid[i].show();
	}
}
