function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
// let posX = 50;
// let posY = 150;
// let circleD = 50;
// let CB = 0;

// //le repet
// for (let i=1; i<10; i++) {
//   fill(CB,50,255);
//   CB=CB+25;
//   //le repet
//   circle(posX,posY,circleD)
//   //val renew
//   posX = posX + circleD + 2;
//  }
  // Task 1: Colour Gradient

  // Task 2: Colour Loop
//   noStroke();
// let xpos= 50;
// let ypos = 50;
// for (let i=0; i<5; i=i+1) {
//   if (i%2==0)
//   fill("black");
//   else
//     fill("white");
// rect(xpos,ypos,50,50);
//   xpos = xpos+100;
// }
  // Task 3: Row of Circles

  // Task 4: Grid of Circles
  noStroke();
  rect( 0,130, width,50);
  circle(width/2, height/2, 100);
}