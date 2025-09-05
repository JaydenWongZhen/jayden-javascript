// write your codes here

// write your codes here
let starwars;
let booleanflag;
let favfood;

function preload() {
    starwars = loadSound('assets/star_wars_theme_8_bit.mp3');
}
function setup() {
    createCanvas(600,400);
    background(0);
    booleanflag = false;
    fill('white');
    textSize(35);
    textAlign(CENTER,CENTER); 

    favfood = ['udon noodles','chicken','chips', 'carbonara', 'chicken nuggies'];
    console.log(favfood[2]);

    for (let i = 0; i < 10; i++ ){
        
    }
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