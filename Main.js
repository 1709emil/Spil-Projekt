// Et array der indholder vores sprits
let animalSprits=['Images/cow.jfif','Images/Får.jfif','Images/gris.jfif'];
let imgXpos=150;
let imgYpos=300;
let imgSize=150;
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
  PlayButton.position(window.innerWidth/2,window.innerHeight/2);
  PlayButton.mousePressed(drawImages(true));
  PlayButton.size(50,50);
};
function drawImages(inp) {
  if(isGameInProgress = inp){
    for(let n=0; n <animalSprits.length; n++){
       if(end < 3){
       image(animalSprits[n],imgXpos,imgYpos,imgSize);
       imgXpos += 200;}
       end ++}
     };
};

// function draw(){
//   drawImages();
  
// }