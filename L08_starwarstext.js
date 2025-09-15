let starwars;
let ypos;
function preload() {
    starwars = loadSound('assets/star_wars_theme_8_bit.mp3');
}

function setup() {
    createCanvas(400,400);
    background(60);
    ypos = height;
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
fill("cyan");
textSize(32);
textAlign(CENTER,CENTER);
text("2lecok",0,0);
text("secjd")
ypos = ypos - 0.6;

if (ypos < 0) {
    ypos = height;
}
}