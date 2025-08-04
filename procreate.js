let shapeColor = "pink";


function setup() {
createCanvas(600,400);
background(150);
}

function draw() {
    
}
function mouseDragged() {
    fill(0,0,0)
    noStroke();
    fill(shapeColor);
    circle(mouseX,mouseY,20)
}
function keyPressed() {
    if (key === 'r') {
        shapeColor = color("red");
    }
    else if (key === 'y') {
            fill('yellow')
    }
    else if (key === 'g') {
        fill('green')
    }
    else if (key === 't') {
        fill('cyan')
    }
    else if (key === 'b') {
        fill ('blue')
    }
    else if (key === 'p') {
        fill('magenta')
    }
    else if (key === 'w') {
        fill('white')
    }
    else {
        fill('white')
    }
}