 var steve,steve_running,stop_Anima;

 var platform,platformImage;

 var now,nowImage;

 var air,airImage;
 



 function preload() {
    steve_running = loadAnimation("steve.png","steve(2).png");
    stop_Anima = loadAnimation("stop.png");
    platformImage = loadImage("green.png");
    nowImage = loadImage("now.png");
    airImage = loadImage("air.png");
 }

 function setup () {
  createCanvas(800,500);

  

   platform = createSprite(400,300);
   platform.addImage(platformImage);
   platform.scale-5.5;

   now = createSprite(400,510);
   now.addImage(nowImage);
 
   air = createSprite(400,300);
   air.addImage(airImage);
   air.scale=0.1;

   steve = createSprite(50,430);
   steve.addAnimation("steve",steve_running);
   steve.scale=0.1;



 }

 function draw () {
  background(25);

  steve.collide(now);
  

  steve.setCollider("circle",0,0,200);
  steve.debug=false;

  if (keyDown("right")) {
     steve.x=steve.x+5;
  }

  if (keyDown("left")) {
    steve.x=steve.x-5;
 }


  drawSprites();
  
 }