var ship;
var projectiles = [];
var stones = [];
var drusts = [];//spaceship particle system;
var drustSize;
//-=-=-=-=-=-=-=-=-=-=
function setup(){
	createCanvas(windowWidth, windowHeight);
	drustSize = 8;

	ship = new Ship();

	for(let i = 0; i < 40; i++) {
		let x = random(windowWidth);
		let y = random(windowHeight);
		let r = random(10, 15);
		let c = "#FFFFFF";

		stones.push(new Stone(x, y, r, c));
	}

	
}
//-=-=-=-=-=-=-=-=-=-=


function draw() {
	background(15, 15, 15);

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


		// if(projectiles[i].offScreen()) {
		// 	projectiles.splice(i, 1);
		// 	console.log(projectiles.length);
		// }

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
