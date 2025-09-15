let starwars;
let ypos;
function preload() {
    starwars = loadSound('assets/star_wars_theme_8_bit.mp3');
}

function setup() {
    createCanvas(400,400);
    background(60);
    ypos = innerHeight;
}

function draw() {
    background(60);
    if ( keyIsDown(32)) {
        starwars.play();
    }
    if (keyIsDown(DOWN_ARROW)) {
        starwars.stop();
    }

translate(width/2,ypos);
FileList('cy')
}