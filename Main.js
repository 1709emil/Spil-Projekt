// Et array der indholder vores sprits
let animalSprits=['Images/cow.jfif','Images/Får.jfif','Images/gris.jfif'];
let imgXpos=150;
let imgYpos=300;
let imgSize=150;
let isGameInProgress=false;

// en funktion der loader alle billederne 
function preload() {
  for(let i=0; i <animalSprits.length; i ++){
    animalSprits[i]=loadImage(animalSprits[i])
  
  }
};
// opsætter spillet og laver billderne 
function setup(){
  let canvas = createCanvas(window.innerWidth-18,window.innerHeight-18);
  background('black');
  if(isGameInProgress = true){
for(let n=0; n <animalSprits.length; n++){
   image(animalSprits[n],imgXpos,imgYpos,imgSize);
   imgXpos += 200;}
 }

  
};