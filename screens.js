/* THE CONCEPT OF THE VISUALS
- a bird character
- a tree
- a blue sky
- clouds
 
THE MECHANICS
- move with the arrows to control the bird
- the bird lands carefully on a tree branch
- implement gravity
- end the game if crashing */
 
//postion variables
let x = 100;
let y = 100;
let characterX = 100;
let characterY = 10;
let speed = 2;
//gamelogic variable
let velocityY = 3;
let acceleration = 0.2;
//game state variables
let gameState = true;
// game screen functions
let state = "start";
let gameTimer = 0;
   
//background details
function drawCloud() {
  // Function for the cloud
  push();
  noStroke();
  fill(255, 255, 255, 200); // color of the cloud
  scale(1.2);
  translate(x, y);
  // ellipse for the clouds
  ellipse(0, 0, 60, 60);
  ellipse(+20, -10, 50, 50);
  ellipse(0 + 40, 0, 60, 60);
  ellipse(0 + 20, 0 + 10, 50, 50);
  pop();
}
// the tree
function drawtree() {
  push();
  noStroke();
  fill(139, 69, 19);
  rect(x + 450, y + 90, 100, y + 1000);
  fill(0, 128, 0);
  translate(x, y);

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
  translate(x, y);
  rect(x + 20, y + 500, 370, 50);
  pop();

  // the green part of the branch
  push();
  noStroke();
  fill(0, 128, 0);
  translate(x, y);
  ellipse(x - 90, y + 520, 120, 105);
  ellipse(x - 1, y + 520, 100, 105);
  ellipse(x - 65, y + 450, 120, 105);
  pop();
}
function character(x, y) {
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
  startScreen();
  gameScreen();
  resultScreen();
  // the character
  drawtree();
  drawCloud();
  character(characterX, characterY);
 
  //checks if the game state is true
  if (gameState === true) {
    //gravity logic
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    // decrease the velocity when pressing space
    if (keyIsDown(32)) {
      velocityY = velocityY - 0.6;
    }
    //left movement
    if (keyIsDown(37)) {
      characterX = characterX - 10;
    }
    //right movement
    if (keyIsDown(39)) {
      characterX = characterX + 10;
    }
    if (characterY > 450) {
      gameState = false;
      console.log(" Game over");

    }
    // Game over mechanism credit to teacher assistant
    if (characterY > 450) {
      console.log("The landing velocity = " + velocityY);
      if (velocityY > 8) {
        //gameState true;
        gameState = false;
        console.log("GAME OVER");
      } else {
        console.log("YOU WON");
        gameState = false;
      }
    }
    // Screen changing
  }
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    gameTimer = gameTimer + 1;
    if (gameTimer >= 100) {
      gameTimer = 0;
      State = "result";
    }
  } else if (state === "result") {
    resultScreen();
  }   
}
function startScreen() {
  background(0, 0, 255);
  fill(255,255,255);
  text("Start",200,100); 
}
function gameScreen() { 
  background(135, 206, 235);
  // the character
  drawtree();
  drawCloud();
  character(characterX, characterY);
 
  //checks if the game state is true
  if (gameState === true) {
    //gravity logic 
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    // decrease the velocity when pressing space
    if (keyIsDown(32)) {
      velocityY = velocityY - 0.9;
    }
    //left movement
    if (keyIsDown(37)) {
      characterX = characterX - 10;
    }
    //right movement 
    if (keyIsDown(39)) {
      characterX = characterX + 10;
    }
    if (characterY > 450) {
      gameState = false;
      console.log(" Game over");
    }
    // Game over mechanism credit to teacher assistant
    if (characterY > 450) {
      console.log("The landing velocity = " + velocityY);
      if (velocityY > 8) {
        //gameState true;
        gameState = false;
        console.log("GAME OVER");
      } else {
        console.log("YOU WON");
        gameState = false;
      }
    }
  }
}
function resultScreen() {
  background(255, 0, 0);
  text("Result", 200, 100);
}
function mouseClicked() {
  if (state === "start") {
    characterX = 310;
    characterY = 50;
    velocityY = 5;
    state = "game";
    gameState = true; 
  } else if (state === "result") {
    state = "start";
    resetGame();
  } 
} 
function resetGame() {
  characterY = 310;
  velocityY = 0.2;
  gameState = true;
}
  