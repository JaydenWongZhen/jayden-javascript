// write your codes here

// write your codes here
let starwars;
let booleanflag;

function preload() {
    starwars = loadSound('assets/star_wars_theme_8_bit.mp3');
}
function setup() {
    createCanvas(600,400);
    background(0);
    booleanflag = false;
    fill('white');
    textSize(35);
    text("hi guys mi jayden", width/2,height/2);
}

function draw() {

}

function mousePressed(){
    if (booleanflag) {
        starwars.play();
    }
    else{
        starwars.stop();
    }

    booleanflag = !booleanflag;
}

// function mouseReleased(){
//     starwars.stop();
// }