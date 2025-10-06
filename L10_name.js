// write your codes here
let bgrd = "purple";
let cp;
function setup() {
    createCanvas(600,400);
    background(bgrd);
    cp=createColorPicker();
    cp.position(width/2,350);

}

function draw() {
    background( cp.value());
fill("white");
rect(100,50,400,100,10)
}