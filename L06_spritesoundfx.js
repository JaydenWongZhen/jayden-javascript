// write your codes here
let sfx,BGmusic,basicsprite;
let x = 0;
let y = 0;

function preload() {

sfx = loadSound("assets/pop.mp3");
BGMusic = loadSound("assets/bossaNova.mp3");
basicsprite = loadImage("assets/pico-a.png"); //this is a .png

}
function setup() {
    createCanvas(600,400);
   BGMusic.loop();
}

let rectsize=50

function draw() {
    background("lightblue");
    let w = 110;
    let h = 133; 
    image(basicsprite, x,y,w,h);
    if (keyIsDown(RIGHT_ARROW)) {
        x = x+5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x = x-5;
    }
    if (keyIsDown(UP_ARROW)) {
        y=y-5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y=y+5
    }
    x = constrain(x,0,width-110);
    y = constrain(y,0,height-133);
}

function keyPressed() {
    if (keyCode === 32) {
        sfx.play();
    }
}
function draw() {
    
}
