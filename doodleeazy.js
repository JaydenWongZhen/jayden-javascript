let shapeColor = "black";
let csize = 10;

function setup() {
createCanvas(600,400);
background(150);
textSize(10);
text("press r for red, y for yellow, g for green, ")
}

function draw() {
    
}
function mouseDragged() {
    fill(0,0,0)
    noStroke();
    fill(shapeColor);
    circle(mouseX,mouseY,csize)
}
function keyPressed () {

    if (key === 'r') {
        shapeColor = color("red");
    }
    else if (key === 'y') {
        shapeColor = color("yellow");
    }
    else if (key === 'g') {
        shapeColor = color("green");
    }
    else if (key === 't') {
        shapeColor = color("cyan");
    }
    else if (key === 'b') {
        shapeColor = color("blue");
    }
    else if (key === 'p') {
        shapeColor = color("magenta");
    }
    else if (key === 'w') {
        shapeColor = color("white");
    }
    else {
        shapeColor = color("black");
    }

    if (key === 's') {
        csize = 5;
    }
    else if (key === 'm') {
        csize = 10;
    }
    else if (key === 'l') {
        csize = 20;
    }

    if (key === 'e') {
        background(150);
    }
}