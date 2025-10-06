// write your codes here
let bgrd = "purple";
let cp;
let
function setup() {
    createCanvas(600,400);
    background(bgrd);
    cp=createColorPicker(bgrd);
    cp.position(width/2,350);

}

function draw() {
    background( cp.value());
fill("white");
rect(100,50,400,100,10)
}