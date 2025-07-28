// write your codes here

function setup ( ) {
createCanvas(600,400); //with and height
background(220); //gray


}
function draw () {
// let xpos = 60;
// let ypos=180;
// let diameter=50;
// let r = 0;
// let g = 0;
// let b = 0;
// for (let i=0; i<5; i++) {
// fill(r,g,b);
// g = g + 50;
// circle(xpos,ypos,diameter);
// xpos = xpos+50;
// ypos = ypos+50;
// }
// background(220);
// noStroke();
// fill(5, 100);
// circle(mouseX,mouseY, 25);
circle(width/2,height/2, 100);

}
function mousePressed() {
    shapecolor = random(255),random(255)
}
function mouseReleased() {
    fill("red")
}