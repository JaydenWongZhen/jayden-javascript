let starwars;
let ypos;
function preload() {
    starwars = loadSound('assets/star_wars_theme_8_bit.mp3');
}

function setup() {
    createCanvas(400,400);
    background(200);
    ypos = innerHeight;
}

function draw() {
    if ( keyIsDown(32)) {
        starwars.play();
    }
    if (keyIsDown(DOWN_ARROW)) {
        starwars.stop();
    }
}