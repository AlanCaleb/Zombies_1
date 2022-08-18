var background,backgroundImg;
var cazador,cazadorImg;
var cazadorDispara;
var zombiesImg;

function preload() {
  backgroundImg = loadImage("assets/bg.jpeg");
  cazadorImg = loadImage("assets/cazador_1.png");
  cazadorDispara = loadAnimation("assets/shooter_3.png");
  zombiesImg = loadImage("assets/zombie.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background = createSprite(displayWidth/2+10,displayHeight/2);
  background.addImage(backgroundImg);
  background.scale = 1.1;

  cazador = createSprite(displayWidth-1150,displayHeight-300);
  cazador.addImage("player",cazadorImg);
  cazador.scale = 0.5;
  
}

function draw() {
  if(keyDown(UP_ARROW)) {
    cazador.y = cazador.y-30;
  }
  if(keyDown(DOWN_ARROW)) {
    cazador.y = cazador.y+30;
  }
  enemies();
  drawSprites();
}

function enemies() {
  if(frameCount % 60 === 0) {
    var zombies = createSprite(random(displayWidth+10,1000),random(100,500));
    zombies.addImage(zombiesImg);
    zombies.velocityX = -5;
    zombies.scale = 0.2;
    zombies.lifetime = 280;
  }
}