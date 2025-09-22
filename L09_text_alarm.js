// let xpos;
// let xvel = 1;
// function setup() {
//     createCanvas(600,400);
//     background(200);
// xpos = width/2
// }

// function draw() {
//      background(200);
//     textSize(25);
//     textAlign(CENTER,CENTER);
//     text("the yoinky sploinky", xpos,height/2);
//     xpos=xpos+xvel;
//     // xvel=xvel*1.01; //experimental code
//   if (xpos > width-200) {
//     xvel=xvel* -1;
//   }
//   else if (xpos < 200) {
//     xvel=xvel*-1;
//   }
// }

function setup() {
    createCanvas(600,400);
    background("white");
}

function draw() {
textSize(32);
textAlign(CENTER,CENTER);
text("dude its literally" + hour, width/2,height/2);
}