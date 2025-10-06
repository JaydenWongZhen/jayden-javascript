// write your codes here
let bgrd = "purple";
let cp;
let username = "larry";
let userInput;
let age = "67,000,000,000,000"
let userInputnumber2;

function setup() {
    createCanvas(600,400);
    background(bgrd);
    cp=createColorPicker(bgrd);
    cp.position(width/2,height/2);

    userInput = createInput(username);
    userInput.position(width/2,height/2+60);
    userInput.input(updateName);

    userInputnumber2 = createInput(age);
    userInputnumber2.position

}
function updateName() {
    username = userInput.value();
}
function draw() {
    background( cp.value());
fill("white");
rect(100,50,400,100,10);
fill("black");
textSize(30);
textAlign(LEFT,CENTER);
text(username,150,100);
textAlign(RIGHT,CENTER);
textSize(18);
text("change color here", width/2,height/2 + 10);
text("enter username",width/2,height/2+75);
}