
let cow =new ImageClass('Images/cow.jfif',(window.innerWidth/3.7),(window.innerHeight/2),200,1)
let pig =new ImageClass('Images/gris.jfif',undefined,undefined,200,2)
let sheep =new ImageClass('Images/Får.jfif',undefined,undefined,200,3)
// Et array der indholder vores sprits
let animalSprits=[cow.Sprites,pig.Sprites,sheep.Sprites];
let imgXpos=cow.Xpos;
let imgYpos=cow.Ypos;
let imgSize=cow.size;
let imgXposO=(window.innerWidth/3.7);
let isGameInProgress=false;
let PlayButton;
let end =0;


// en funktion der loader alle billederne 
function preload() {
  for(let i=0; i <animalSprits.length; i ++){
    animalSprits[i]=loadImage(animalSprits[i])
  
  }
};
// opsætter spillet og laver billderne 
function setup(){
  let canvas = createCanvas(window.innerWidth-18,window.innerHeight-18);
  background('lightgrey');
  PlayButton = createImg('/Images/playIcon.png.crdownload',"");
  PlayButton.position(window.innerWidth/2.05,window.innerHeight/4);
  PlayButton.size(50,50);
  console.log("Spil tilstand " + isGameInProgress);
};
function drawImages() {
  if(isGameInProgress == true){
    for(let n=0; n <animalSprits.length; n++){
       if(end < 3){
       image(animalSprits[n],imgXpos,imgYpos,imgSize,imgSize);
       imgXpos += 250;}
       end ++}
     };
};
function mouseClicked() {
  if (mouseX < ((window.innerWidth/2.05)+50) && mouseX >(window.innerWidth/2.05) && 
  mouseY<((window.innerHeight/4)+50) &&mouseY>(window.innerHeight/4)){
   isGameInProgress =true;
   drawImages()
   console.log("Spil tilstand " + isGameInProgress);
  };
 if(mouseX>imgXposO && mouseX<(imgXposO+200) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)){
console.log(cow.id);
 };

 if((mouseX>imgXposO+250) && mouseX<(imgXposO+500) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)){
  console.log(pig.id);
 };

 if((mouseX>imgXposO+500) && mouseX<(imgXposO+750) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)){
  console.log(sheep.id);
 };
  
};
 function draw(){
  
  //  fill('')
  //  rect(imgXposO,(window.innerHeight/1.8),200,200);
  //  fill('red')
  //  rect((imgXposO+250),(window.innerHeight/1.8),200,200);
  //  fill('red')
  //  rect((imgXposO+500),(window.innerHeight/1.8),200,200);
};