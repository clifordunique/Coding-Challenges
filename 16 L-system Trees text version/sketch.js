//variable: A B
//Axiom: A
//rules: (A -> AB), (B -> A)

var axiom = "A";
var sentence = axiom;
var rules = [];

rules[0] = {
  a: "A",
  b: "AB"
}

rules[1] = {
  a: "B",
  b: "A"
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
}


function setup() {
  noCanvas();
  createP(axiom);
  var button = createButton("Generate");
  button.mousePressed(generate);
}


function draw() {

}




