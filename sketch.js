var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //creating 4 different surfaces
    surface1 = createSprite(110,575,180,25);
    surface2 = createSprite(300,575,180,25);
    surface3 = createSprite(495,575,180,25);
    surface4 = createSprite(690,575,180,25);
    //creating the box and giving it velocity
    box = createSprite(random(20,500));
    box.velocityX = 5;
    box.velocityY = 5;

    createEdgeSprites();
}

function draw() {
    background(0);
    //create edgeSprite
   //box.shapeColor = "white";

    surface1.shapeColor = "green";
    surface2.shapeColor = "violet";
    surface3.shapeColor = "orange";
    surface4.shapeColor = "pink";
    createEdgeSprites();
   
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "pink";
    }

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "green";
    }
    
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "violet";

    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "orange";
    }

    if (box.x + 50 > width || box.x - 50 < 0){
        box.velocityX = box.velocityX *-1;
    }

    if(box.y + 50 > height || box.y < 0){
        box.velocityY = box.velocityY *-1;
    }

 drawSprites();

}