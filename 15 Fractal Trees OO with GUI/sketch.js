//var root;
var tree = [];

var count = 0;
var leaves = [];

var gui;
var shake = false;
var fillColor = [255, 255, 255]

function setup() {
  createCanvas(600, 400);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;
  // tree[1] = root.branchA();
  // tree[2] = root.branchB();
  gui = createGui("Object Tree");
  gui.addGlobals("shake");
  gui.addGlobals("fillColor");
}

function mousePressed() {

  for(let i = tree.length - 1; i >= 0; i--) {
    if(!tree[i].finished) {
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
      }
    tree[i].finished = true;
  }

  count++;

  //if(count % 3 == 0) {
  if(count == 7) {
    for(let i = 0; i < tree.length; i++) {
      if(!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}


function draw() {

  background(0);

  //root.show();
  for(let i = 0; i < tree.length; i++) {
    tree[i].show();
    if(shake) {
        tree[i].jitter();
    }
  }

  for(let i = 0; i < leaves.length; i++) {
    fill(200, 0, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 5, 5);
    leaves[i].y += random(1, 4);
  }

}






