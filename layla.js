const gridLength = 10;
const gridSize = 40;

function drawGrid(){
    push();
    stroke(255,255,255);
    fill(0,0,0);
    for (let x = 0; x < gridLength; x++){
        for (let y= 0; y < gridLength; y++){
            rect( x* gridSize,y* gridSize,gridSize,gridSize);
        }
    }    

    pop();
}

function draw(){
    background(0,0,0);
    drawGrid();
}