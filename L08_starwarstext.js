let starwars;
let ypos;
function preload() {
    starwars = loadSound('assets/star_wars_theme_8_bit.mp3');
}

function setup() {
    createCanvas(1000,400);
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
let saers = [
    "Back then in 2003",
    "there was 2 RACES on the NET",
    "they were PYTHONS, and JAVASCRIPTERS.",
    "Both had lived in peace, for a long time,",
    "But on the day of 2019, they had went to war.",
    "One day, a happy child had learned coding,",
    "and somehow.. he had became a MIX OF BOTH RACES.",
    "Will he bring PEACE? Will he fufill his lifelong DREAM? Or will he bring CHAOS?"

]
let ytextpos = 0;
for (let i = 0; i < saers.length; i++ ) {
text(saers[i],0,ytextpos);
ytextpos = ytextpos + 25;
}
ypos = ypos - 0.6;
if (ypos < 0) {
    ypos = height;
}
}