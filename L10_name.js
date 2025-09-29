// write your codes here
let bgrd = "purple";
let cp;
function setup() {
    createCanvas(600,400);
    background(bgrd);
    cp=createColorPicker();
    cp.position(width/2,height/2);
    
}

function draw() {
fill("white");
rect(100,50,400,100,10)
}