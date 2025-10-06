// write your codes here
let bgrd = "purple";
let cp;
let username = "larry";
let userInput;
function setup() {
    createCanvas(600,400);
    background(bgrd);
    cp=createColorPicker(bgrd);
    cp.position(width/2,350);

    userInput = createInput(username);
    userInput.position(width/2,height/2 + 100);
    userInput.input(updateName);

}
function updateName() {
    
}
function draw() {
    background( cp.value());
fill("white");
rect(100,50,400,100,10);
fill("black");
textSize(30);
text(username,150,100);
}