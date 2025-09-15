// write your codes here

// write your codes here
let starwars;
let booleanflag;
let favfood;

function preload() {
    starwars = loadSound('assets/star_wars_theme_8_bit.mp3');
}

function setup() {
    createCanvas(400,400);
    background(200);
    fill("orange");
    rect(width/2,height/2,200,200)
    fill(0);
    text
}

// function setup() {
//     createCanvas(600,400);
//     background(0);
//     booleanflag = false;
//     fill('white');
//     textSize(20);
//     //textAlign(CENTER,CENTER);  [removed code]
// let ypos = 50;
//     favfood = ['udon noodles','chicken','chips', 'carbonara', 'chicken nuggies'];
//     console.log(favfood[2]);
// // text('mi favrite food', width/2,50) [removed code]
//     for (let i = 0; i < favfood.length; i++ ){
//         // console.log(i); [removed code]
//         // console.log(favfood[i]); [removed code]
//         // text(i+1+"." + favfood[i],width/2,100 + i * 50); [removed code]
//         console.log( favfood[i]);
//         text(favfood[i], 20, ypos);
//         ypos = ypos +50;
//     }
// }

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