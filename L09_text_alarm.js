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
let homer_simpson;
function setup() {
    createCanvas(600,400);
    background("white");
}
function preload() {
    homer_simpson = loadSound("assets/bossaNova.mp3");
}

function draw() {
    background(255);
    let hour24 = hour();
    hour24=nf(hour24,2);
    let min = minute();
    min=nf(min,2);
    let nowsecond = second();
    nowsecond=nf(nowsecond,2);
textSize(32);
textAlign(CENTER,CENTER);
text("dude its literally " + hour24 + ":" + min + ":" + nowsecond, width/2,height/2);
}
function mousePressed() {
    
}