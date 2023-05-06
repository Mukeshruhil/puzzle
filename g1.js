var sofia=createSprite(104,20,20,20);
sofia.shapeColor=("darkorange");
sofia.setAnimation("kid_16_walking_1");

var cup=createSprite(370,360,50,20);
cup.shapeColor=("yellow");
cup.setAnimation("coin_gold_1");

var wall1 = createSprite(132, 30, 20, 150);
wall1.shapeColor=("red");
var wall2 = createSprite(35, 60, 100, 20);
wall2.shapeColor=("red");
var wall3 = createSprite(145, 152, 200, 20);
wall3.shapeColor=("red");
var wall4 = createSprite(188, 115, 20, 75);
wall4.shapeColor=("red");
var wall5 = createSprite(190, 32, 100, 20);
wall5.shapeColor=("red");
var wall6 = createSprite(145, 152, 200, 20);
wall6.shapeColor=("red");
var wall7 = createSprite(330, 34, 100, 20);
wall7.shapeColor=("red");
var wall8 = createSprite(260, 88, 40, 20);
wall8.shapeColor=("red");
var wall9 = createSprite(286, 148, 20, 140);
wall9.shapeColor=("red");
var wall10 = createSprite(321, 88, 50, 20);
wall10.shapeColor=("red");
var wall11 = createSprite(145, 206, 100,20);
wall11.shapeColor=("red");
var wall12 = createSprite(365, 145, 70,20);
wall12.shapeColor=("red");
var wall13 = createSprite(340, 208, 50, 20);
wall13.shapeColor=("red");
var wall14 = createSprite(324, 10, 20, 30);
wall14.shapeColor=("red");
var wall15 = createSprite(138, 178, 20, 60);
wall15.shapeColor=("red");
var wall16 = createSprite(160, 87, 50, 20);
wall16.shapeColor=("red");
var wall17 = createSprite(25, 206, 55,20);
wall17.shapeColor=("red");
var wall18 = createSprite(66,110, 30, 20);
wall18.shapeColor=("red");
var wall19 = createSprite(164, 290, 20, 150);
wall19.shapeColor=("red");
var wall20 = createSprite(98, 308, 120, 20);
wall20.shapeColor=("red");
var wall21 = createSprite(44, 257, 120, 20);
wall21.shapeColor=("red");
var wall22 = createSprite(56, 375, 20, 50);
wall22.shapeColor=("red");
var wall23 = createSprite(105, 362, 20, 20);
wall23.shapeColor=("red");
var wall24 = createSprite(220, 350, 20, 100);
wall24.shapeColor=("red");
var wall25 = createSprite(220, 260, 120, 20);
wall25.shapeColor=("red");
var wall26 = createSprite(270, 320, 20, 100);
wall26.shapeColor=("red");
var wall27 = createSprite(320, 350, 20, 100);
wall27.shapeColor=("red");
var wall28 = createSprite(390, 280, 50, 20);
wall28.shapeColor=("red");
var wall29 = createSprite(320, 268, 20, 100);
wall29.shapeColor=("red");
var wall30 = createSprite(280, 208, 70, 20);
wall30.shapeColor=("red");

function draw() {
  background("pink");
  
  createEdgeSprites();
  sofia.collide(edges);
  textSize(30);
  fill("lightyellow");
  rect(3, 3, 86, 29);
  fill("red");
  textFont("balloon");
  text("SOFIA", 5,25);
  
  textSize(30);
  fill("yellow");
  rect(337, 370, 60, 29);
  fill("red");
  textFont("balloon");
  text("CUP",340,395);
  
  if (keyDown("up")) {
    sofia.y = sofia.y-3;
  }
  
  if (keyDown("DOWN_ARROW")) {
    sofia.y = sofia.y+3;
  }
  
  if (keyDown("LEFT_ARROW")) {
    sofia.x = sofia.x-3;
  }
  
  if (keyDown("RIGHT_ARROW")) {
    sofia.x = sofia.x+3;
  }
  
  if (sofia.isTouching(cup)) {
    textSize(30);
  fill("gilters");
  rect(207, 45, 180, 29);
  fill("red");
  textFont("balloon");
   text("YOU WON", 225, 70);
     
  }
if (sofia.bounce(wall1) || sofia.bounce(wall2) ||sofia.bounce(wall3) || sofia.bounce(wall4) || sofia.bounce(wall5) || sofia.bounce(wall6) || sofia.bounce(wall7) || sofia.bounce(wall8) || sofia.bounce(wall9) || sofia.bounce(wall10) ||sofia.bounce(wall11) || sofia.bounce(wall12) || sofia.bounce(wall3) || sofia.bounce(wall14) || sofia.bounce(wall15) || sofia.bounce(wall16) || sofia.bounce(wall17) || sofia.bounce(wall18) || sofia.bounce(wall19) || sofia.bounce(wall20) || sofia.bounce(wall21) || sofia.bounce(wall22) || sofia.bounce(wall23) || sofia.bounce(wall24) || sofia.bounce(wall25) || sofia.bounce(wall26) || sofia.bounce(wall27) || sofia.bounce(wall28) || sofia.bounce(wall29) || sofia.bounce(wall30)){
  sofia.x = 104;
  sofia.y = 20 ;
}


  drawSprites();
}
playSound("sound://category_background/rainforest_ambient_sound.mp3", true);
