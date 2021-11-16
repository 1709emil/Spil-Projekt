
let cow =new ImageClass('Images/cow.jfif',(window.innerWidth/3.7),(window.innerHeight/2),200,1)
let pig =new ImageClass('Images/gris.jfif',(window.innerWidth/3.7),(window.innerHeight/2),200,2)
let sheep =new ImageClass('Images/Får.jfif',(window.innerWidth/3.7),(window.innerHeight/2),200,3)
// Et array der indholder vores sprits
//let animalSprits=[cow.Sprites,pig.Sprites,sheep.Sprites];

let animals=[cow,pig,sheep];
let Sprites=[];
let imgXpos=animals[0].Xpos;
let imgYpos=animals[0].Ypos;
let imgSize=animals[0].size;
let imgXposO=(window.innerWidth/3.7);
let isGameInProgress=false;
let PlayButton;
let end =0;


// opsætter spillet og laver billderne 
function setup(){
  let canvas = createCanvas(window.innerWidth-18,window.innerHeight-18);
  background('lightgrey');
  PlayButton = createImg('/Images/playIcon.png.crdownload',"");
  PlayButton.position(window.innerWidth/2.05,window.innerHeight/4);
  PlayButton.size(50,50);
  console.log("Spil tilstand " + isGameInProgress);
};

// en funktion der loader alle billederne 
function preload() {
  for(let i=0; i <animals.length; i ++){
    Sprites[i]=loadImage(animals[i].Sprites)
    console.log(animals[i].Sprites);
  
  }
};

function drawImages() {
  if(isGameInProgress == true){
    for(let n=0; n <animals.length; n++){
       if(end < 3){
       image(Sprites[n],imgXpos,imgYpos,imgSize,imgSize);
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
console.log(animals[0].id);
 };

 if((mouseX>imgXposO+250) && mouseX<(imgXposO+500) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)){
  console.log(animals[1].id);
 };

 if((mouseX>imgXposO+500) && mouseX<(imgXposO+750) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)){
  console.log(animals[2].id);
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