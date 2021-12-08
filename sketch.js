var towerImg, tower, GameoverImg;
var doorImg, door, doorsGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score = 0;

function preload(){
  towerImg = loadImage("tower.jpg");
  doorImg = loadImage("door.png");
  GameoverImg = loadImage("game ove r.jpeg");  

  ghostImg = loadImage("ghost.png");
  
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  doorsGroup = new Group() ;
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

}

function draw() {
 background("white");
 text("Score: "+ score, 500,50);
 score.depth = 0.1;
  if(gameState==="play"){
    score = score + Math.round(getFrameRate()/60);

    if(keyDown("left_arrow")){
       ghost.x = ghost.x -3 ;
    }
    if(keyDown("right_arrow")){
      ghost.x = ghost.x +3 ;
   }
   if(keyDown("space")){ 
       ghost.velocityY = -5;
   }
   ghost.velocityY = ghost.velocityY + 0.8;

   if(keyDown("up_arrow")){
     gameState = "play";
   }
   if(tower.y > 400){
    tower.y = 300
  }
   spawnDoors();
   
    drawSprites();
}


if(ghost.isTouching(doorsGroup)){
  towerImg = background("white")
  stroke("yellow");
  fill("black "); 
  textSize(30);
  text("GAMEOVER",230,250);
  text("SCORE: " + score,300,300);
  ghost.velocityY = 0;
    
}
}
function spawnDoors () {
if(frameCount%240===0){
var door = createSprite(200,-100);
door.addImage(doorImg);
door.scale = 0.09;

door.x = Math.round(random(16,399));
door.velocityY = 1;

ghost.depth = door.depth;
ghost.depth += 1;

door.lifetime = 800 ;

doorsGroup.add(door);

}

}