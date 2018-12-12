var ship;
var projectiles = [];
var stones = [];
var drusts = [];//spaceship particle system;
var drustSize;

let boss1;
let boss2;
var bosses = [];
var bounceNumber = 0;

let isWin = false;
var resetButton;

//-=-=-=-=-=-=GUI-=-=-=-=-=-
var backgroundColor = [35, 35, 35];
var SpawnRate = 500;
//-=-=-=-=-=-=GUI-=-=-=-=-=-

var gui;
//-=-=-=-=-=-=-=-=-=-=
function setup(){
	createCanvas(windowWidth, windowHeight);

	//-=-=-=-=-=-GUI-=-=-=-=-=
	gui = createGui("Space Shot", width - 200, 20); 

	gui.addGlobals("backgroundColor");
	
	sliderRange(50, 600, 50);
	gui.addGlobals("SpawnRate");

	//-=-=-=-=-=-GII-=-=-=-=-=

	drustSize = 8;
	boss1 = new Boss(windowWidth - 100, 150, 90, random(-5, 5), random(-5, 5));
	boss2 = new Boss(100, 150, 70, random(-5, 5), random(-5, 5));
	bosses.push(boss1);
	bosses.push(boss2);

	ship = new Ship();

	for(let i = 0; i < 40; i++) {
		let x = random(windowWidth);
		let y = random(windowHeight);
		let r = random(10, 15);
		let c = "#FFFFFF";
		stones.push(new Stone(x, y, r, c));
	}

	button = createButton("RESET");
	button.position(windowWidth / 2, windowHeight / 2 + 200);
	button.mousePressed(resetGame);
	button.hide();
	
}
//-=-=-=-=-=-=-=-=-=-=


function draw() {
	background(backgroundColor);
	gameManager(); 
	//=-=-=-=-=-=-= show real time & TASK =-=-=-=-=-=-=
	hr = nf(hour(), 2);
	mn = nf(minute(),2);
	sc = nf(second(), 2);
	textAlign(LEFT, CENTER);
	textSize(40);
	//noStroke();
	//noFill();
	//stroke(255, 255, 255);
	//strokeWeight(1);
	fill(255);
	noStroke();
	text(hr + ":" + mn + ":" + sc, 10, 70);
	textSize(20);
	text("Enemies Left : " + stones.length, 10, 120);
	text("Bounces Get : " + bounceNumber, 10, 160);
	//=-=-=-=-=-=-=show real time & TASK =-=-=-=-=-=-=

	if(!isWin) {//hack gammwin
		for(let i = 0; i < bosses.length; i++) {
			bosses[i].bounce();
			bosses[i].show();
		}
	
		if(frameCount % SpawnRate == 0) {
    	    bosses.push(new Boss(500, 150, 90, random(-5, 5), random(-5, 5)));
    	}
	}

	//-=-=-=drust Ship-=-=-=
	let xSpeed = random(-2, 2);
	let ySpeed = random(-2, -6);
	drusts.push(new Drust(ship.x, ship.y + 20, drustSize, xSpeed, ySpeed));
	for(let i = 0; i < drusts.length; i++) {
		drusts[i].update();
		drusts[i].show();

		if(drusts[i].alpha <= 0) {
			drusts.splice(i, 1);
		}
	}
	shipMovement();//custome function conbine Ship constructor function
	//-=-=-=drust Ship-=-=-=

	if(!isWin) {
		for(let i = 0; i < stones.length; i++) {
			stones[i].render();
			stones[i].update();
			stones[i].offScreen();
		}
  	
		//for(let i = 0; i < projectiles.length; i++) {
		for(let i = projectiles.length - 1; i >= 0; i--) {
			projectiles[i].update();
			projectiles[i].show();
	
			//for(let j = 0; j < stones.length; j++) {
			for(let j = stones.length - 1; j >= 0; j--) {
				if(stones[j].intersect(projectiles[i])) {
					stones.splice(j, 1);
					projectiles.splice(i, 1);
					// projectiles.splice(i, 1);
					console.log("TOUCH");
				}
			}
	
			for(let k = bosses.length - 1; k >= 0; k--) {
				if(bosses[k].intersect(projectiles[i])) {
					bosses[k].hurt();
					if(bosses[k].r <= 10) {
						bosses.splice(k, 1);
						bounceNumber += 1;
					}
				}
			}
	
				//todo consider later
				// if(projectiles[i].offScreen()) {
				// 	projectiles.splice(i, 1);
				// 	console.log(projectiles.length);
				// }
		}

	SpawnerDisplay();
	}

}

function shipMovement() {
	ship.show();
	ship.move();
	ship.moveup();
	ship.offScreen();
}

function keyReleased(){//todo consider later movement
	drustSize = 8;

	if(key != ' '){
		ship.setDir(0);
		ship.setHigh(0); 
    }
}

function keyPressed (){

	drustSize = 25;

	if(keyCode == 32) {
		//console.log("SPACE");
		var projectile = new Projectile(ship.x, ship.y);
		projectiles.push(projectile);
	}

	if (keyCode == 39 || keyCode == 68){
		ship.setDir(1);
	} else if (keyCode == 37 || keyCode == 65){
		 ship.setDir(-1);
	} else if(keyCode == 40 || keyCode == 83){
		ship.setHigh(1);
	} else if(keyCode == 38 || keyCode == 87){
		ship.setHigh(-1);
	}
}

var blank = false;
var fillColor = [200, 0, 100];
var strokeSize = 1.5;
let k;
var n = 12;
var d = 10;
let radius;
let rotateAngle = 0;
var rotating = false;
var roseSize = 50;
var increment = 0.38;

function SpawnerDisplay() {
	translate(500, 150);

	if(!blank) {
		noFill();
	} else {
		fill(fillColor)
	}
	stroke(fillColor);
	strokeWeight(strokeSize);
	k = n / d;

	rotate(rotateAngle);
	beginShape();
	for(let angle = 0; angle < TWO_PI * 20; angle += increment) {
		radius = cos(k * angle) * roseSize;
		let x = radius * cos(angle);
		let y = radius * sin(angle);
		vertex(x, y);
	}
	endShape();
	
	if(rotating) {
		rotateAngle += PI / 200;
	}

}

function gameManager() {

	if(stones.length == 35) {
		isWin = true;
		console.log(isWin);
		textAlign(CENTER);
		textSize(50);
		text("You Win!!", windowWidth / 2, windowHeight / 2);
		text("Bounces " + (bounceNumber * 1000) + " Points", windowWidth / 2, windowHeight / 2 + 100);
	
		button.show();
	}

	// 	for(let i = bosses.length - 1; i >= 0; i--) {
	// 		bosses.splice(i, 1);
	// 	}
	// 	for(let i = projectiles.length - 1; i >= 0; i--) {
	// 		projectiles.splice(i, 1);
	// 	}
	// }
}

function resetGame() {
	button.hide();
	stones = [];
	bosses = [];
	isWin = false;
	console.log("RESET");

	boss1 = new Boss(windowWidth - 100, 150, 90, random(-5, 5), random(-5, 5));
	boss2 = new Boss(100, 150, 70, random(-5, 5), random(-5, 5));
	bosses.push(boss1);
	bosses.push(boss2);

	ship = new Ship();

	for(let i = 0; i < 40; i++) {
		let x = random(windowWidth);
		let y = random(windowHeight);
		let r = random(10, 15);
		let c = "#FFFFFF";

		stones.push(new Stone(x, y, r, c));
	}
	
}










