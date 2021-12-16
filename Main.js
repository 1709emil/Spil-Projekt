let cow =new ImageClass('Images/cow.png',(window.innerWidth/3.7),(window.innerHeight/2),200,0)
let pig =new ImageClass('Images/piggy.png',(window.innerWidth/3.7),(window.innerHeight/2),200,1)
let sheep =new ImageClass('Images/sheep.png',(window.innerWidth/3.7),(window.innerHeight/2),200,2)
let tempAnimals=[];
let animals=[cow,pig,sheep];
let Sprites=[];
let sounds=['Sounds/Ko.mp3','Sounds/Gris.mp3','Sounds/Far.mp3','Sounds/Ja.mp3','Sounds/Nej.mp3'];
let randomPosOfImages=[];
let clickCounter=0;
let imgXpos=animals[0].Xpos;
let imgYpos=animals[0].Ypos;
let imgSize=animals[0].size;
let imgXposO=(window.innerWidth/3.7);
let isGameInProgress=false;
let PlayButton;
let logo;
let end =0;
let rando;
let index=3;
let rGæt=0;
let fGæt=0;

// opsætter spillet og laver billderne 
function setup(){
  let canvas = createCanvas(window.innerWidth-18,window.innerHeight-18);
  background('lightgrey');
  PlayButton = createImg('/Images/playIcon.png.crdownload',"");
  PlayButton.size(50,50);
  console.log("Spil tilstand " + isGameInProgress);
  rando = int(random(0,3));
  randomPos();
  logo=createImg('/Images/logo.png',"");
  logo.size(150,150);
 
};

// en funktion der loader alle billederne 
function preload() {
  loadOfImages();
  for(let ct = 0; ct <5;ct++){
    soundFormats('m4a','mp3');
    sounds[ct]=loadSound(sounds[ct])
  };
};

function loadOfImages() {
  for(let i=0; i <animals.length; i ++){
    Sprites[i]=loadImage(animals[i].Sprites)
  };
  loadImage('/Images/logo.png')
}

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
if (mouseX < ((window.innerWidth/2.08)+50) && mouseX >(window.innerWidth/2.08) && 
  mouseY<((window.innerHeight/4.13)+50) &&mouseY>(window.innerHeight/4.13)&&clickCounter<1){
   isGameInProgress =true;
   drawImages()
   console.log("Spil tilstand " + isGameInProgress);
   clickCounter +=1;
   return
  };
   
//knap for for at afspille lyd
 if(mouseX < ((window.innerWidth/2.08)+50) && mouseX >(window.innerWidth/2.08) && 
   mouseY<((window.innerHeight/4.13)+50) &&mouseY>(window.innerHeight/4.13)&& clickCounter >= 1){
   clickCounter ++;
   afspilDyrLyd();
   console.log(rando);
   
  
  };
// knap for billede 1
 if(mouseX>imgXposO && mouseX<(imgXposO+200) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)&&isGameInProgress==true){
console.log(tempAnimals[0].id);
checkAnimal(0);
 };
// knap for billede 2
 if((mouseX>imgXposO+250) && mouseX<(imgXposO+450) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)&&isGameInProgress==true){
  console.log(tempAnimals[1].id);
  checkAnimal(1);
 };
// knap for billede 3
 if((mouseX>imgXposO+500) && mouseX<(imgXposO+700) && mouseY>imgYpos && 
 mouseY<(imgYpos+200)&&isGameInProgress==true){
  console.log(tempAnimals[2].id);
  checkAnimal(2);
 };
  
};

// bruges til at af spille lyd når man klikker på knappen 
function afspilDyrLyd(){
  // her tjekkes der om lyden allerede er i gang og hvis den ikke er så
  // skal der afspilles lyden igen 
  if(sounds[rando].isPlaying()){
    return console.log("not playing");
  }
  else{
    sounds[rando].play();
    console.log("sound playing");
  };
    
  
};
// her tjekkes der om det billede, der blev klikket 
//har den samme id som den dyr lyd der blev spillet
function checkAnimal(inp) {
  if(tempAnimals[inp].id==rando){
    console.log("rigtigt");
    replay();
    rGæt+=1;
  }
  else
  {sounds[4].play();console.log("Forkert");
  fGæt+=1;};
};

// laver et array med tallene 0,1,2 i en tilfældige rækkefølge
// som bruges til at give billederne en random location 
function randomPos() {
  let p=0;
  tempAnimals=[];
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
// Denne function burges til at shuffle dyrne
function replay() {
  background('lightgrey');
  randomPosOfImages=[];
  sounds[3].play();
  animals=[cow,pig,sheep];
  randomPos();
  end=0;
  imgXpos=animals[0].Xpos
  drawImages();
  rando = int(random(0,3));
};
function points(){
  fill('lightgrey')
  rect(window.innerWidth/1.24,window.innerHeight/15,30,25)
  rect(window.innerWidth/1.094,window.innerHeight/15,30,25)
  fill('black');
  textSize(20);
  text("Rigtig:"+rGæt,window.innerWidth/1.3,window.innerHeight/11);
  text("Forkert:"+fGæt,window.innerWidth/1.15,window.innerHeight/11);
}
 
function draw(){
  PlayButton.position(window.innerWidth/2.05,window.innerHeight/4);
  logo.position(window.innerWidth/18,window.innerHeight/10);
  points();
  
  // fill('red')
  //   rect(window.innerWidth/2.08,window.innerHeight/4.13,50,50);
  //  fill('red')
  //  rect((imgXposO+250),(window.innerHeight/1.8),200,200);
  //  fill('red')
  //  rect((imgXposO+500),(window.innerHeight/1.8),200,200);
}