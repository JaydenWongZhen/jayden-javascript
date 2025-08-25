//le trest prepar
let x=100;
let y=100;
let w=30;
let h=30;
let gayr=30;
function setup () {
    createCanvas(800,600);
    background("steelblue");
    noLoop();
}
function draw () {
    // fill(0,random(255),255);
    // triangle(400,200,350,300,450,300);
    for (let i = 0; i < 5;  i++) {
        fill(gayr);
     rect(x,y,w,h);
     x=x+50;
     gayr=gayr+30;
    }
}