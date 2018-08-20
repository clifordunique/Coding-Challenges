//variable: A B
//Axiom: A
//rules: (A -> AB), (B -> A)

// var angle;
var axiom = "F";
var sentence = axiom;
var rules = [];
var len = 100;

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
  var nextSentence = "";

    for(let i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;

        for(let r = 0; r < rules.length; r++) {
          if(current == rules[r].a) {
            found = true;
            nextSentence += rules[r].b;
            break;
          }
        }
        if(!found) {
          nextSentence += current;
        }
    }

  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  len *= 0.58;
  background(0);
  resetMatrix();//Replaces the current matrix with the identity matrix.
  translate(width/2, height);
  stroke(255, 0, 200, 100);

    for(let i = 0; i < sentence.length; i++) {
      var current = sentence.charAt(i);
      if(current == "F") {
        line(0, 0, 0, -len);
        translate(0, -len);
      } else if(current == "+") {
        rotate(PI / 6);
      } else if (current == "-") {
        rotate(-PI / 6)
      } else if(current == "[") {
        push();
      } else if(current == "]") {
        pop();
      }
    }
}


function setup() {
  createCanvas(400, 400);
  // angle = random(25);
  background(0);
  createP(axiom);
  turtle();
  var button = createButton("Generate");
  button.mousePressed(generate);
}






