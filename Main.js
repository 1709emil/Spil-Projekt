let cow =new ImageClass('Images/cow.jfif',(window.innerWidth/3.7),(window.innerHeight/2),200,0)
let pig =new ImageClass('Images/gris.jfif',(window.innerWidth/3.7),(window.innerHeight/2),200,1)
let sheep =new ImageClass('Images/Får.jfif',(window.innerWidth/3.7),(window.innerHeight/2),200,2)
let tempAnimals=[];
let animals=[cow,pig,sheep];
let Sprites=[];
let sounds=['Sounds/Ko.mp3','Sounds/Gris.mp3','Sounds/Far.mp3','Sounds/Ja.mp3','Sounds/Nej.mp3'];
const randomPosOfImages=[];

let imgXpos=animals[0].Xpos;
let imgYpos=animals[0].Ypos;
let imgSize=animals[0].size;
let imgXposO=(window.innerWidth/3.7);
let isGameInProgress=false;
let PlayButton;
let end =0;
let clickCounter=0;
let rando;
let index=3;

// opsætter spillet og laver billderne 
function setup(){
  let canvas = createCanvas(window.innerWidth-18,window.innerHeight-18);
  background('lightgrey');
  PlayButton = createImg('/Images/playIcon.png.crdownload',"");
  PlayButton.position(window.innerWidth/2.05,window.innerHeight/4);
  PlayButton.size(50,50);
  console.log("Spil tilstand " + isGameInProgress);
  rando = int(random(0,3));
  randomPos();
  
  
};

// en funktion der loader alle billederne 
function preload() {
  for(let i=0; i <animals.length; i ++){
    Sprites[i]=loadImage(animals[i].Sprites)
  };
  for(let ct = 0; ct <5;ct++){
    soundFormats('m4a','mp3');
    sounds[ct]=loadSound(sounds[ct])
  };
};
// en funktion der laver tegner alle billeder
function drawImages() {
  if(isGameInProgress == true){
    for(let n=0; n <tempAnimals.length; n++){
      
      if(end < 3){
       image(Sprites[randomPosOfImages[n]],imgXpos,imgYpos,imgSize,imgSize);
       imgXpos += 250;
      };
      end ++};
     };
};
function mouseClicked() {
  //starter spillet
if (mouseX < ((window.innerWidth/2.05)+50) && mouseX >(window.innerWidth/2.05) && 
  mouseY<((window.innerHeight/4)+50) &&mouseY>(window.innerHeight/4)&&clickCounter<1){
   isGameInProgress =true;
   drawImages()
   console.log("Spil tilstand " + isGameInProgress);
   clickCounter +=1;
   return
  };
   
//knap for for at afspille lyd
 if(mouseX < ((window.innerWidth/2.05)+50) && mouseX >(window.innerWidth/2.05) && 
   mouseY<((window.innerHeight/4)+50) &&mouseY>(window.innerHeight/4)&& clickCounter >= 1){
   clickCounter ++;
   afspilDyrLyd();
   console.log(rando);
   
  
  };

 if(mouseX>imgXposO && mouseX<(imgXposO+200) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)&&isGameInProgress==true){
console.log(tempAnimals[0].id);
checkAnimal(0);
 };

 if((mouseX>imgXposO+250) && mouseX<(imgXposO+450) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)&&isGameInProgress==true){
  console.log(tempAnimals[1].id);
  checkAnimal(1);
 };

 if((mouseX>imgXposO+500) && mouseX<(imgXposO+700) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)&&isGameInProgress==true){
  console.log(tempAnimals[2].id);
  checkAnimal(2);
 };
  
};

// bruges til at af spille lyd når man klikker på knappen 
function afspilDyrLyd(){
  sounds[rando].play();
};

function checkAnimal(inp) {
  console.log(tempAnimals[inp].id);
  console.log(rando);
  if(tempAnimals[inp].id==rando){
    sounds[3].play();
    animals=[cow,sheep,pig];
    Sprites=[];
    tempAnimals=[];
    end=0;
    randomPos();
    drawImages();
  }
  else{sounds[4].play()};
};

// laver et array med tallene 0,1,2 i en tilfældige rækkefølge
// som bruges til at give billederne en random location 
function randomPos() {
  let p=0;
while(p<3){
  let primeNumber= (int(random(0,3)));
  if (!randomPosOfImages.includes(primeNumber)) {
     randomPosOfImages.push(primeNumber)
     p++;
  };  
};
console.log(randomPosOfImages);
for(let i=0;i<index;i++){
  tempAnimals.push(animals[randomPosOfImages[i]])
  console.log(tempAnimals[i].id);
};

};
function draw(){
  
  //  fill('red')
  //  rect(imgXposO,(window.innerHeight/1.8),200,200);
  //  fill('red')
  //  rect((imgXposO+250),(window.innerHeight/1.8),200,200);
  //  fill('red')
  //  rect((imgXposO+500),(window.innerHeight/1.8),200,200);
}