let bird;
let pipes = [];

function setup() {
    createCanvas(800, 400);

    bird = new Bird();
}

function draw() {
    background(0);

    bird.update();
    bird.show();

    for(let i = 0; i < pipes.length; i++) {
      pipes[i].show();
      pipes[i].update();
      
      if(pipes[i].hit(bird)) {
        console.log("Game Over");
      }

      if(pipes[i].offScreen()) {
        pipes.splice(i, 1);
      }
    }

    if(frameCount % 70 == 0) {
        pipes.push(new Pipe());
    }
   
}


function keyPressed() {
    if(key == " ") {
      console.log("Space");
      bird.up();
    }
}