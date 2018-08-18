let n = 0;
let c = 4;
var gui;

index = 137.5;

function setup() {
    createCanvas(600, 400);
    background(0);
    colorMode(HSB);
    angleMode(DEGREES);
    gui = createGui("Flower");

    sliderRange(90, 200, 0.1)
    gui.addGlobals("index");

}

function draw() {

    translate(width / 2, height / 2);
   
    angle = n * index;
    r = c * sqrt(n);

    let x = r * cos(angle);
    let y = r * sin(angle);
    fill(n % 255, 255, 255);
    ellipse(x, y, 6, 6);

    n+=1;
}


