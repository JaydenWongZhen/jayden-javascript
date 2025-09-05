// write your codes here

// write your codes here
let starwars;

function preload() {
    starwars = loadSound(assets/star_wars_theme_8_bit.mp3);
}
function setup() {
    createCanvas(600,400);
    background(0);
}

function draw() {

}

function mousePressed(){
starwars.play();
}

function mouseReleased(){
    
}