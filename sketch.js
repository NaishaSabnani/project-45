/*const Engine= Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
const Bodies=Matter.Bodies
*/
var girl, girlStill,girlRunning, girlRunningImg, girlRunningRight, girlRunningRightImg, girlRunningLeft,girlRunningLeftImg
var coin, coinImg
var life=3, lifeImg_3, lifeImg_2, lifeImg_1, lifeImge_0,lifeObj
var power, powerImg
var stone1,stone2,stone3,stone4, stoneImg1, stoneImg2, stoneImg3, stoneImg4
var score=0;

//var PLAY, SERVE, END
var gameState="serve"
var forest, forestImg


function preload(){
stoneImg1=loadImage("images/stone-img2.gif")
stoneImg2=loadImage("images/stone-img3.gif")
stoneImg3=loadImage("images/stone-img5.gif")
stoneImg4=loadImage("images/stone-img6.gif")
//girlStill=loadAnimation("girl-img1-unscreen/unscreen-001.png","girl-img1-unscreen/unscreen-002.png")
girlRunningImg=loadAnimation("girl-img1-unscreen/unscreen-002.png","girl-img1-unscreen/unscreen-003.png","girl-img1-unscreen/unscreen-004.png","girl-img1-unscreen/unscreen-005.png","girl-img1-unscreen/unscreen-006.png","girl-img1-unscreen/unscreen-007.png","girl-img1-unscreen/unscreen-008.png","girl-img1-unscreen/unscreen-009.png","girl-img1-unscreen/unscreen-010.png","girl-img1-unscreen/unscreen-011.png","girl-img1-unscreen/unscreen-012.png","girl-img1-unscreen/unscreen-013.png","girl-img1-unscreen/unscreen-014.png","girl-img1-unscreen/unscreen-015.png","girl-img1-unscreen/unscreen-016.png","girl-img1-unscreen/unscreen-017.png","girl-img1-unscreen/unscreen-018.png","girl-img1-unscreen/unscreen-019.png","girl-img1-unscreen/unscreen-020.png","girl-img1-unscreen/unscreen-021.png","girl-img1-unscreen/unscreen-022.png","girl-img1-unscreen/unscreen-023.png")
girlRunningRightImg=loadAnimation("girl-img1-unscreen/unscreen-037.png","girl-img1-unscreen/unscreen-038.png","girl-img1-unscreen/unscreen-039.png","girl-img1-unscreen/unscreen-040.png","girl-img1-unscreen/unscreen-041.png","girl-img1-unscreen/unscreen-042.png","girl-img1-unscreen/unscreen-043.png","girl-img1-unscreen/unscreen-044.png","girl-img1-unscreen/unscreen-045.png","girl-img1-unscreen/unscreen-046.png","girl-img1-unscreen/unscreen-047.png","girl-img1-unscreen/unscreen-048.png","girl-img1-unscreen/unscreen-049.png","girl-img1-unscreen/unscreen-050.png","girl-img1-unscreen/unscreen-051.png","girl-img1-unscreen/unscreen-052.png","girl-img1-unscreen/unscreen-053.png","girl-img1-unscreen/unscreen-054.png","girl-img1-unscreen/unscreen-055.png","girl-img1-unscreen/unscreen-056.png","girl-img1-unscreen/unscreen-057.png","girl-img1-unscreen/unscreen-058.png","girl-img1-unscreen/unscreen-059.png")
girlRunningLeftImg=loadAnimation("girl-img1-unscreen/unscreen-002.png","girl-img1-unscreen/unscreen-003.png","girl-img1-unscreen/unscreen-004.png","girl-img1-unscreen/unscreen-005.png","girl-img1-unscreen/unscreen-006.png","girl-img1-unscreen/unscreen-007.png","girl-img1-unscreen/unscreen-008.png","girl-img1-unscreen/unscreen-009.png","girl-img1-unscreen/unscreen-010.png","girl-img1-unscreen/unscreen-011.png","girl-img1-unscreen/unscreen-012.png","girl-img1-unscreen/unscreen-013.png","girl-img1-unscreen/unscreen-014.png","girl-img1-unscreen/unscreen-015.png","girl-img1-unscreen/unscreen-016.png","girl-img1-unscreen/unscreen-017.png","girl-img1-unscreen/unscreen-018.png","girl-img1-unscreen/unscreen-019.png","girl-img1-unscreen/unscreen-020.png","girl-img1-unscreen/unscreen-021.png","girl-img1-unscreen/unscreen-022.png","girl-img1-unscreen/unscreen-023.png")
coinImg=loadAnimation("coinImages-converted/coinImg-unscreen/unscreen-001.png","coinImages-converted/coinImg-unscreen/unscreen-002.png","coinImages-converted/coinImg-unscreen/unscreen-003.png","coinImages-converted/coinImg-unscreen/unscreen-004.png","coinImages-converted/coinImg-unscreen/unscreen-005.png","coinImages-converted/coinImg-unscreen/unscreen-006.png","coinImages-converted/coinImg-unscreen/unscreen-007.png","coinImages-converted/coinImg-unscreen/unscreen-008.png","coinImages-converted/coinImg-unscreen/unscreen-009.png","coinImages-converted/coinImg-unscreen/unscreen-010.png","coinImages-converted/coinImg-unscreen/unscreen-011.png","coinImages-converted/coinImg-unscreen/unscreen-012.png","coinImages-converted/coinImg-unscreen/unscreen-013.png","coinImages-converted/coinImg-unscreen/unscreen-014.png","coinImages-converted/coinImg-unscreen/unscreen-015.png","coinImages-converted/coinImg-unscreen/unscreen-016.png","coinImages-converted/coinImg-unscreen/unscreen-017.png","coinImages-converted/coinImg-unscreen/unscreen-018.png","coinImages-converted/coinImg-unscreen/unscreen-019.png","coinImages-converted/coinImg-unscreen/unscreen-020.png","coinImages-converted/coinImg-unscreen/unscreen-021.png","coinImages-converted/coinImg-unscreen/unscreen-022.png",)
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
//girl.addAnimation("still", girlStill)
girl.scale=1

forest.scale=2

//girl.addAnimation("runningRight", girlRunningRightImg)
//girl.addAnimation("runningLeft", girlRunningLeftImg)


}

function draw(){
    background(0)
    drawSprites(); 
   
    textSize(30)
    strokeWeight(3)
    fill("red")
    text("Score: "+score, displayWidth-150,50)
    text("Lives: "+life,  displayWidth-150,75)

 if(gameState==="serve")
   {
   
       text("CLICK HERE TO BEGIN", displayWidth/2-120, displayHeight/2-100 )
     // girl.visible=false;
    // coin.visible=false;
      //stone.visible=false;

      forest.x=displayWidth/2
      forest.y=displayHeight/2
      //coin.velocityY=0
      //stone.velocityY=0
      
    // power.visible=false;
     
    }
    else if(gameState==="end")
    {
      forest.x=displayWidth/2
      forest.y=displayHeight/2
     // coin.velocityY=0
      //stone.velocityY=0
    }
    
   else
    {
      gamePlay();


   }


   
}

function spawnCoins()
    {
        if(frameCount%100===0)
        {
 coin=createSprite(Math.round(random(50,displayWidth-50)),-50)
      coin.addAnimation("coinImg",coinImg)
      
      coin.scale=0.1
      coin.lifetime=150;
      
        }
    }

    function spawnStones()
    {
        if(frameCount%100===0)
        {
      stone=createSprite(Math.round(random(50,displayWidth-50)),-50)
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
     
      
      stone.scale=0.3
      stone.lifetime=150;
      
      
        }
    }

    function mousePressed()
    {
      stone.velocityY=30
      coin.velocityY=5

      if(gameState=="serve")
      {
          gameState="play"
          stone.velocityY=30
          coin.velocityY=5
    
      }

    }
function gamePlay()
{
  score = score + Math.round(getFrameRate()/60);
  if(forest.y < 0 ){
      forest.y =height/2;
    }
    if(score<=300)
    {
      girl.velocityY=-0.2
    }

     //girl.visible=true;
  if(keyDown(RIGHT_ARROW))
  {
      girl.changeAnimation("runningRight",girlRunningRightImg)
      girl.x+=10
  }
  if(keyDown(LEFT_ARROW))
  {
     girl.changeAnimation("runningLeft",girlRunningLeftImg)
      girl.x-=10
  }

  spawnCoins();
  spawnStones()
  drawSprites();  
}

