
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

let cd=10;
let objectID;
let homer_simpson;
let njdfn = "teal";
let cololor;
function setup() {
    createCanvas(600,400);
    background(njdfn);

    

}

    

function preload() {
    homer_simpson = loadSound("assets/bossaNova.mp3");
}
function countdown() {
    cd--;
    cd = constrain(cd,0,10);
    if (cd === 0)  {
        homer_simpson.play();
        clearInterval(objectID);
        cololor = setInterval(changeColor,500);
    }
}
let cc=0;
function changeColor() {
    cc++;
    if (cc > 10){
        clearInterval(cololor);
    }
njdfn = color(random(255),random(255),random(255));
}

function draw() {
    background(njdfn);
    let hour24 = hour();
    hour24=nf(hour24,2);
    let min = minute();
    min=nf(min,2);
    let nowsecond = second();
    nowsecond=nf(nowsecond,2);
textSize(50);
textAlign(CENTER,CENTER);
text("dude its literally " + hour24 + ":" + min + ":" + nowsecond, width/2,100);
fill("orange");
textSize(30);
text("connt donn", width/2,130);
text(cd,width/2,175);
text("start time by clik me", width/2,250);
// let pi= 3.141592653589793238;
// console.log(nf(pi,1,3));
}
function mousePressed() {
//     homer_simpson.play();
objectID = setInterval(countdown, 1000); // note: 1 is 1 milisec
}
// function keyPressed() {
//     if(keyCode === 32) {
//         njdfn = color(random(255),random(255),random(255));
//     }
// }