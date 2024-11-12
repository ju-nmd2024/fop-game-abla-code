let x = 100;
let y = 100;


function character(x,y){


push();
noStroke();
fill(255,200,0);
translate(x, y);
rotate(0.1);
triangle(-40, 80, 20, 50, 90, 100);
pop();


// body
push ();
noStroke();
fill (250,170,80);
ellipse (x+180,y+100,190);
pop();

push();
fill (250,170,80);
noStroke();
ellipse (x+60,y+70,110);
pop ();

 // eyes
 push();
 fill (255,255,255);
 ellipse(x+40,y+50,25);
 pop ();

 //pupils
 push();
 fill(0,0,0);
 ellipse(x+45,y+50,10);
 pop();
 
 //legs 
 push ();
 strokeWeight(3);
 line (x+200,y+250,x+200,y+190); // left
 line(x+150, y+250, x+150, y+190); // right
 pop ();

 //feet 
 push ();
 strokeWeight(3);
 translate(50,3);
 
 line(x+150, y+250, x+100, y+260); // right
 line(x+150, y+250, x+100, y+230); 
 //line(x+150, y+250, x+120, y+200);
 pop ();
 
 push();
 strokeWeight(3);
 line(x+150, y+250, x+100, y+260); //left
 line(x+150, y+250, x+100, y+230); 
 pop ();

 // wing
 fill(250,170,80);
 rect(x +140,y+70,120,40,90); 

  
}

character (100,100);

// making it move//
let direction = "forward";
function draw (){
    clear();
    background(135,206, 235);

    character (x,y);
    if (direction === "forward"){
        if (x< 400){
         x = x + 5 ;
        }else { 
            direction = "backwards";
         } 

         } else if (direction === "backwards"){
            if (x > 150){
                x=x-5;
            } else {
                direction = "forward";
            }
         }

         

    } 
