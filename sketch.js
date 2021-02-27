
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,500)
  
  PLAY = 1
  GameState = PLAY
  END = 0
  
  foodGroup = new group();
  obstacleGroup = new group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}


function draw() {
  background("white");
  
  if(GameState === PLAY){
    
    if(ground.x < 0){
      ground.x = ground.width/2
    }
  }
  
  
    if(keyDown("space")&&monkey.isTouching(ground)){
    monkey.velocityY = -20
  }
  
  score = Math.round(frameCount/3);
  survivalTime = Math.ceil(frameCount/frameRate())
  ground.velocityX = -(5 + 2 * score/100)
}

  if(monkey.isTouching(foodGroup)){
   foodGroup.destroyEach();
}

food();
obstacle();

  if(monkey.isTouching(obstacleGroup)){
    GameState = END;
  }

  else if(GameState === END){
    ground.velocityX = 0;
    obstacleGroup.setVelocityEach(0);
    foodGroup.setVelocityEach(0);
    
    foodGroup.setLifeTimeEach(-1);
    obstacleGroup.setLifeTimeEach(-1);
  }

  monkey.velocityY = monkey.velocityY + 09;

monkey.collide(ground)

 stroke("black");
 textSize(20);
 fill(red)
 text("score:" + score,400,50);
 
 stroke("black");
 textSize(50);
 fill(black);
 text("survivalTime:" + survivalTime,100,50);


 drawSprites();



 function Food(){
   if(frameCount% 80 === 0){
     var banana = createSprite(500,10,10,20)
     banana.addImage("banana", bananaImage);
     banana.velocityX = -(5 + 2 * score/100);
     banana.y = Math.round(random(120,200));
     banana.scale = 0.1;
     foodGroup.add(banana);
     foodGroup.setLifeTimeEach(100);
     banana.setCollider("rectangle",0,0,400,400);
   }
 }

  function Obstacle(){
    if(frameCount% 100 === 0){
    var obstacle = createSprite(500,365,23,32);
    obstacle.velocityX = -(5 + 2 * score/100);
    obstacle.addImage("obstcle", obstacleImage);
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifeTimeEach(100);
    obstacle.setCollider("circle",0,0,200)
    }
    
  }
