// write your codes here
let story;
let buton1;
let prophecy;
let ghfgngb;
let fillervariable;
let inninnik;
let vrb;

function setup() {
    createCanvas(600,400);
    background(150);
    
    ghfgngb = createInput("a");
    ghfgngb.position(100,50);

    inninnik = createInput("drunk");
    inninnik.position(100,100);
   

buton1 = createButton("click on this buuton");
buton1.position(250,200);
buton1.size(100,100);
buton1.mousePressed(changeText);
}

function changeText() {
story =   ghfgngb.value()
}


function draw() {
    fill("white");
    noStroke();
rect(100,250,400,100,25);

fill("black");
textSize(30);
textAlign(CENTER,CENTER);
text(story,300,300);

textSize(15);
text("enter noun",50,60)
}