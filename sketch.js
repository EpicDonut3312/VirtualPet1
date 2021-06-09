//Create variables here
var food
var dog
var happydog
var database

function preload()
{
dog = loadImage("images/dogImg.png")
happydog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog1 = createSprite(600,300,20,20)
  dog1.addImage(dog)
  dog1.scale=0.15
  food = database.ref("food")
  food.on("value", eatfood)
}


function draw() {  
  background("blue")
    
  
  if(keyDown("c")){
    something(food1);
    dog1.addImage(happydog);
  }  
  drawSprites();
    //add styles here

}

function eatfood(a){
  food1=a.val()

}

function something(x){
if(x<=0){
  x=0
}
else{
  x=x-1
}
  database.ref("/").update({
  food:x})
}
