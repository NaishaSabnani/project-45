/*const Engine= Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
const Bodies=Matter.Bodies
*/
var girl,girlRunning, girlRunningImg, girlRunningRight, girlRunningRightImg, girlRunningLeft,girlRunningLeftImg
var coin, coinImg
var life=3, lifeImg_3, lifeImg_2, lifeImg_1, lifeImge_0,lifeObj
var power, powerImg
var stone1,stone2,stone3,stone4, stoneImg1, stoneImg2, stoneImg3, stoneImg4
var score=0;
var   gameState="SERVE"
var forest, forestImg

function preload(){
stoneImg1=loadImage("images/stone-img2.gif")
stoneImg2=loadImage("images/stone-img3.gif")
stoneImg3=loadImage("images/stone-img5.gif")
stoneImg4=loadImage("images/stone-img6.gif")
girlRunningImg=loadAnimation("girl-img1-unscreen/unscreen-001.png","girl-img1-unscreen/unscreen-002.png","girl-img1-unscreen/unscreen-003.png","girl-img1-unscreen/unscreen-004.png","girl-img1-unscreen/unscreen-005.png","girl-img1-unscreen/unscreen-006.png","girl-img1-unscreen/unscreen-007.png","girl-img1-unscreen/unscreen-008.png","girl-img1-unscreen/unscreen-009.png","girl-img1-unscreen/unscreen-010.png","girl-img1-unscreen/unscreen-011.png","girl-img1-unscreen/unscreen-012.png","girl-img1-unscreen/unscreen-013.png","girl-img1-unscreen/unscreen-014.png","girl-img1-unscreen/unscreen-015.png","girl-img1-unscreen/unscreen-016.png","girl-img1-unscreen/unscreen-017.png","girl-img1-unscreen/unscreen-018.png","girl-img1-unscreen/unscreen-019.png","girl-img1-unscreen/unscreen-020.png","girl-img1-unscreen/unscreen-021.png","girl-img1-unscreen/unscreen-022.png","girl-img1-unscreen/unscreen-023.png")
girlRunningRightImg=loadAnimation("girl-img1-unscreen/unscreen-001.png","girl-img1-unscreen/unscreen-002.png","girl-img1-unscreen/unscreen-003.png","girl-img1-unscreen/unscreen-004.png","girl-img1-unscreen/unscreen-005.png","girl-img1-unscreen/unscreen-006.png","girl-img1-unscreen/unscreen-007.png","girl-img1-unscreen/unscreen-008.png","girl-img1-unscreen/unscreen-009.png","girl-img1-unscreen/unscreen-010.png","girl-img1-unscreen/unscreen-011.png","girl-img1-unscreen/unscreen-012.png","girl-img1-unscreen/unscreen-013.png","girl-img1-unscreen/unscreen-014.png","girl-img1-unscreen/unscreen-015.png","girl-img1-unscreen/unscreen-016.png","girl-img1-unscreen/unscreen-017.png","girl-img1-unscreen/unscreen-018.png","girl-img1-unscreen/unscreen-019.png","girl-img1-unscreen/unscreen-020.png","girl-img1-unscreen/unscreen-021.png","girl-img1-unscreen/unscreen-022.png","girl-img1-unscreen/unscreen-023.png")
girlRunningLeftImg=loadAnimation("girl-img1-unscreen/unscreen-001.png","girl-img1-unscreen/unscreen-002.png","girl-img1-unscreen/unscreen-003.png","girl-img1-unscreen/unscreen-004.png","/girl-img1-unscreen/unscreen-005.png","/girl-img1-unscreen/unscreen-006.png","girl-img1-unscreen/unscreen-007.png","girl-img1-unscreen/unscreen-008.png","girl-img1-unscreen/unscreen-009.png","girl-img1-unscreen/unscreen-010.png","girl-img1-unscreen/unscreen-011.png","girl-img1-unscreen/unscreen-012.png","girl-img1-unscreen/unscreen-013.png","girl-img1-unscreen/unscreen-014.png","girl-img1-unscreen/unscreen-015.png","girl-img1-unscreen/unscreen-016.png","girl-img1-unscreen/unscreen-017.png","girl-img1-unscreen/unscreen-018.png","igirl-img1-unscreen/unscreen-019.png","girl-img1-unscreen/unscreen-020.png","girl-img1-unscreen/unscreen-021.png","girl-img1-unscreen/unscreen-022.png","girl-img1-unscreen/unscreen-023.png")
coinImg=loadAnimation("coinImages-converted/coinImg-unscreen/unscreen-001.png","coinImages-converted/coinImg-unscreen/unscreen-002.png","coinImages-converted/coinImg-unscreen/unscreen-003.png","coinImages-converted/coinImg-unscreen/unscreen-004.png","coinImages-converted/coinImg-unscreen/unscreen-005.png","coinImages-converted/coinImg-unscreen/unscreen-006.png","coinImages-converted/coinImg-unscreen/unscreen-007.png","coinImages-converted/coinImg-unscreen/unscreen-008.png","coinImages-converted/coinImg-unscreen/unscreen-009.png","coinImages-converted/coinImg-unscreen/unscreen-010.png","coinImages-converted/coinImg-unscreen/unscreen-011.png","coinImages-converted/coinImg-unscreen/unscreen-012.png","coinImages-converted/coinImg-unscreen/unscreen-013.png","coinImages-converted/coinImg-unscreen/unscreen-014.png","coinImages-converted/coinImg-unscreen/unscreen-015.png","coinImages-converted/coinImg-unscreen/unscreen-016.png","coinImages-converted/coinImg-unscreen/unscreen-017.png","coinImages-converted/coinImg-unscreen/unscreen-018.png","coinImages-converted/coinImg-unscreen/unscreen-019.png","coinImages-converted/coinImg-unscreen/unscreen-020.png","coinImages-converted/coinImg-unscreen/unscreen-021.png","icoinImages-converted/coinImg-unscreen/unscreen-022.png",)
powerImg=loadImage("images/energyDrink.png")
//lifeImg=loadImage("images/statusBar-img1-removebg-preview.png")
lifeImg_1=loadImage("images/statusBar-img1-removebg-preview.png")
lifeImg_2=loadImage("images/statusBar-img2-removebg-preview.png")
lifeImg_3=loadImage("images/statusBar3.png")
lifeImg_0=loadImage("images/statusBar-img4-removebg-preview.png")
forestImg=loadImage("images/background-img.jpg")


//remove background
//girlImg=loadImage("images/girlRunning-img.gif")
    
}
function setup(){
createCanvas(displayWidth,displayHeight)
forest=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
forest.addImage(forestImg)
 girl=createSprite(displayWidth/2,displayHeight-200,20,20)
 //lifeObj=createSprite(displayWidth-100,displayHeight-500, 50,10)
 //lifeObj.addImage(lifeImg_1)
//girl.addImage(girlImg)
girl.addAnimation("running", girlRunningImg)
girl.scale=1
forest.scale=2
//girl.addAnimation("running", girlRunningImg)
//girl.addAnimation("runningRight", girlRunningRightImg)
//girl.addAnimation("runningLeft", girlRunningLeftImg)


}

function draw(){
    background(0)
    score = score + Math.round(getFrameRate()/60);
    textSize(30)
    strokeWeight(3)
    fill("red")
    text("Score: "+score, displayWidth-150,50)
    text("Lives: "+life,  displayWidth-150,75)

 /* if(gameState==="SERVE")
   {
    
       text("PRESS 'space key' TO START", displayWidth/2-120, displayHeight/2-100 )
      girl.visible=false;
     // coin.visible=false;
      //stone.visible=false;
      
     // power.visible=false;
     if(keyDown("space"))
     {
         gameState=PLAY
     }
    }*/
   //if (gameState===PLAY)
   
   //{

    score = score + Math.round(getFrameRate()/60);
    if(forest.y < 0 ){
        forest.y =height/2;
      }
      if(score<=400)
      {
        girl.velocityY=-0.2
      }

       //girl.visible=true;
    if(keyDown(RIGHT_ARROW))
    {
       // girl.changeAnimation("runningRight",girlRunningRightImg)
        girl.x+=10
    }
    if(keyDown(LEFT_ARROW))
    {
       // girl.changeAnimation("runningLeft",girlRunningLeftImg)
        girl.x-=10
    }
  
    spawnCoins();
    spawnStones()
    drawSprites();  
   
   }
   
//}

function spawnCoins()
    {
        if(frameCount%100===0)
        {
      var coin=createSprite(Math.round(random(50,displayWidth-50)),-50)
      coin.addAnimation("coinImg",coinImg)
      coin.velocityY=5
      coin.scale=0.1
      coin.lifetime=150;
      
        }
    }

    function spawnStones()
    {
        if(frameCount%100===0)
        {
      var stone=createSprite(Math.round(random(50,displayWidth-50)),-50)
      var rand=Math.round(random(1,4))
      switch(rand)
      {
          case 1:stone.addImage(stoneImg1)
          break;
          case 2:stone.addImage(stoneImg2)
          break;
          case 3:stone.addImage(stoneImg3)
          break;
          case 4:stone.addImage(stoneImg4)
          break;
          default:
      }
     
      stone.velocityY=30
      stone.scale=0.3
      stone.lifetime=150;
      
      
        }
    }


