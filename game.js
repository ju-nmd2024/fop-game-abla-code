//postion variables
let x = 100;
let y = 100;
let mx = 0;
let my = 0;
let tx = 100;
let ty = 100;
//gamelogic variable
let gravitation = 0.1;
let acceleration = 0;
//game state variables
let state = "start";
let gameTimer = 0;

function setup() {
  createCanvas(700, 760);
  background(255);
}
function startScreen() {
  push();
  background(245, 132, 66);
  fill(255, 255, 190);
  textSize(40);
  textAlign(CENTER);
  text("START GAME", 270, 300);
  text("Press enter to play", 270, 450);
  pop();
}
function gameScreen() {
  background(135, 206, 235);
  // the character
  drawtree();
  drawCloud();
  character();
}
function goodjobscreen() {
  push();
  background(57, 166, 45);
  textSize(40);
  textAlign(CENTER);
  text("WELL DONE!", 330, 300);
  text("click on the screen to restart", 350, 400);
  pop();
}
function badjobscreen() {
  push();
  background(255, 0, 0);
  textSize(40);
  textAlign(CENTER);
  text("YOU BROKE THE BRANCH", 330, 300);
  text("click on the screen to restart", 350, 400);
  pop();
}
// the cloud
function drawCloud() {
  push();
  noStroke();
  fill(255, 255, 255, 200); // color of the cloud
  scale(1.2);
  translate(mx, my);
  // ellipse for the clouds
  ellipse(mx, my, 60, 60);
  ellipse(mx + 20, my - 10, 50, 50);
  ellipse(mx + 40, my, 60, 60);
  ellipse(mx + 20, my + 10, 50, 50);
  pop();
}
// the tree
function drawtree() {
  push();
  noStroke();
  fill(139, 69, 19);
  rect(tx + 450, ty + 90, 100, ty + 1000);
  fill(0, 128, 0);
  translate(tx, ty);

  // the green part of the tree
  ellipse(0 + 410, 100, 160, 175);
  ellipse(0 + 500, 100, 120, 125);
  ellipse(0 + 550, 100, 190, 165);
  ellipse(0 + 550, 10, 120, 125);
  ellipse(0 + 550, -50, 140, 125);
  ellipse(0 + 450, -50, 120, 125);
  ellipse(0 + 400, 10, 120, 125);
  ellipse(0 + 464, 4, 120, 125);
  pop();

  // the branch of the tree
  push();
  noStroke();
  fill(139, 69, 19);
  translate(tx, ty);
  rect(tx + 20, ty + 500, 370, 50);
  pop();

  // the green part of the branch
  push();
  noStroke();
  fill(0, 128, 0);
  translate(tx, ty);
  ellipse(tx - 90, ty + 520, 120, 105);
  ellipse(tx - 1, ty + 520, 100, 105);
  ellipse(tx - 65, ty + 450, 120, 105);
  pop();
}
function character() {
  push();
  noStroke();
  fill(255, 200, 0);
  translate(x, y);
  rotate(0.1);
  triangle(-40, 80, 20, 50, 90, 100);
  pop();

  // body
  push();
  noStroke();
  fill(250, 170, 80);
  ellipse(x + 180, y + 100, 190);
  pop();

  push();
  fill(250, 170, 80);
  noStroke();
  ellipse(x + 60, y + 70, 110);
  pop();

  // eyes
  push();
  fill(255, 255, 255);
  ellipse(x + 40, y + 50, 25);
  pop();

  //pupils
  push();
  fill(0, 0, 0);
  ellipse(x + 45, y + 50, 10);
  pop();

  //legs
  push();
  strokeWeight(3);
  line(x + 200, y + 250, x + 200, y + 190); // left
  line(x + 150, y + 250, x + 150, y + 190); // right
  pop();

  //feet
  push();
  strokeWeight(3);
  translate(50, 3);

  line(x + 150, y + 250, x + 100, y + 260); // right
  line(x + 150, y + 250, x + 100, y + 230);
  //line(x+150, y+250, x+120, y+200);
  pop();

  push();
  strokeWeight(3);
  line(x + 150, y + 250, x + 100, y + 260); //left
  line(x + 150, y + 250, x + 100, y + 230);
  //line(x+150, y+250, x+120, y+200);
  pop();

  // wing
  fill(250, 170, 80);
  rect(x + 140, y + 70, 120, 40, 90);
}

function draw() {
  background(135, 206, 235);
  drawtree();
  drawCloud();
  character(x, y);
  if (state === "start") {
    startScreen();
  } else if (state === "birddrop") {
    gameScreen();
  } else if (state === "win") {
    goodjobscreen();
  } else if (state === "losing") {
    badjobscreen();
  } 
  // enter to make the bird drop = gamestart
  if (keyIsDown(13)) {
   state = "birddrop";
  }
  //checks if the game state is true
  if (state === "birddrop") {
    //gravity logic
    y = y + gravitation;
    gravitation = gravitation + acceleration;
    acceleration += 0.008;
  }
  // decrease the velocity when pressing space
  if (state === "birddrop") {
    if (keyIsDown(32)) {
      gravitation = gravitation - 2;
    }
    //left movement
    if (keyIsDown(37)) {
      x = x - 10;
    }
    //right movement
    if (keyIsDown(39)) {
      x = x + 10;
    }
    //to check if my bird is going too fast >20 (lost) or slow<20 which is win
    if (y >= 450) {
      if (gravitation > 10) {
        x = 100;
        y = 50;
        gravitation = 0.1;
        acceleration = 0;
        state = "losing";
      } else if (gravitation < 10) {
        x = 100;
        y = 50;
        gravitation = 0.1;
        acceleration = 0;
        state = "win";
      }
    }
  }
}
// from the p5js website
function mouseClicked() {
  if (state === "start") {
    resetGame();
    state = "birddrop";
  } else if (state === "win" || state === "losing") {
    resetGame();
    state = "start";
  }
}

// you click with the mouse to reset
function resetGame() {
  x = 100;
  y = 100;
  gravitation = 0.1;
  acceleration = 0;
}
 

 


 
