var ship;
var projectiles = [];

function setup(){
	createCanvas(windowWidth, windowHeight);

	ship = new Ship();
}

function draw() {
	background(15, 15, 15);

	shipMovement();
  
	for(let i = 0; i < projectiles.length; i++) {
		projectiles[i].show();
		projectiles[i].update();
	}
}

function shipMovement() {
	ship.show();
	ship.move();
	ship.moveup();
	ship.offScreen();
}

function keyReleased(){//todo consider later movement
	if(key != ' '){
		ship.setDir(0);
		ship.setHigh(0); 
    }
}

function keyPressed (){
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
