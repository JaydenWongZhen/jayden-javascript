// write your codes here
let lebuton;
let ghfgngbyetagain;
let todayswordle = ["ligma","balls","sigma"]
function setup() {
    createCanvas(600,600);
    background(0,150,255);
ghfgngbyetagain = createInput("subscribe");
ghfgngbyetagain.position(100,300);
lebuton = createButton("guess")
lebuton.position(300,300);
lebuton.size(50,50)
lebuton.style("background-color","blue");
lebuton.mousePressed(checkGuess);

function checkGuess() {
    message = "you are right, it is sigma!"
}

}
function draw() {
    background(0,150,255);
textAlign(CENTER,CENTER)
textSize(30)
text("gUESS THY wOrd!!!",width/2,80);
text("attempts:0",width/2,120);
text("hints:s____",width/2,160);
fill("red");
textSize(24);
text(message,width/2,height/2+100);
}