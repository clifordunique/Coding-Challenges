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
var cols, rows;
var w = 40;
var grid = [];

var current;

function setup() {
	createCanvas(400, 400);
	cols = width / w;
	rows = height / w;

	for(let j = 0; j < rows; j++) {
		for(let i = 0; i < cols; i++) {
			var cell = new Cell(i, j);
			grid.push(cell);
		}
	}

	current = grid[0]; 
}

function index(i, j) {
	if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
		return -1;
	}
	return (i + j * cols);
}

function draw() {
	background(0);
	for(let i = 0; i < grid.length; i++) {
		grid[i].show();
	}

	current.visited = true;
	var next = current.checkNeighbors();
	if(next) {
		next.visited = true;
		current = next;
	}
}
