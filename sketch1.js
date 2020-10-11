var yellow1,yellow2;
var blue1,blue2;
var green1,green2;

var gameState="play";
var count=0;
var click1Image,click2Image;
var shouldCheck=true;
var group;
  

function setup() {
    createCanvas(400,400);
    yellow1 = createSprite(80, 60, 50, 100);
    yellow1.shapeColor="orange";
    blue1 = createSprite(320,60,50,100);
    blue1.shapeColor="orange";
  
    blue2 = createSprite(80,200,50,100);
    blue2.shapeColor="orange";
    green1 = createSprite(320,200,50,100);
    green1.shapeColor="orange";
  
    yellow2 = createSprite(320,320,50,100);
    yellow2.shapeColor="orange";
    green2 = createSprite(80,320,50,100);
    green2.shapeColor="orange";

    group = new Group();
  
  }

  function draw(){
      background("pink");

      /* if(gameState==="start"){
         gameState="play";
        yellow1.shapeColor="orange";
        blue1.shapeColor="orange";
        blue2.shapeColor="orange";
        green1.shapeColor="orange";
        yellow2.shapeColor="orange";
        green2.shapeColor="orange";
         
      } */
      if(gameState==="play"){
         play();
      }

      drawSprites();
  }

  function play(){
      if(count<2 && gameState==="play"){
         shouldCheck=true;
        /*  console.log(shouldCheck);
         console.log(gameState);
         console.log(count); */
        if (mousePressedOver(yellow1)){
            if(yellow1.shapeColor==="orange"){
                count+=1;
                yellow1.shapeColor="yellow";
                 group.add(yellow1);
                 compare(yellow1);
            }
        }

        if (mousePressedOver(yellow2)){
            if(yellow2.shapeColor==="orange"){
                count+=1;
                yellow2.shapeColor="yellow";
                 group.add(yellow2);
                 compare(yellow2);
            }
        }

        if (mousePressedOver(blue1)){
            if(blue1.shapeColor==="orange"){
                count+=1;
                blue1.shapeColor="blue";
                 group.add(blue1);
                 compare(blue1);
            }
        }

        if (mousePressedOver(blue2)){
            if(blue2.shapeColor==="orange"){
                count+=1;
                blue2.shapeColor="blue";
                 group.add(blue2);
                 compare(blue2);
            }
        }

        if (mousePressedOver(green1)){
            if(green1.shapeColor==="orange"){
                count+=1;
                green1.shapeColor="green";
                 group.add(green1);
                 compare(green1);
            }
        }

        if (mousePressedOver(green2)){
            if(green2.shapeColor==="orange"){
                count+=1;
                green2.shapeColor="green";
                 group.add(green2);
                 compare(green2);
            }
        }


      }
      if(count === 2 && shouldCheck === true){
        setTimeout(check,1000);
         shouldCheck = false;
     }
  }
  function compare(card){
      if(count===1){
          click1Image=card.shapeColor;
      }
      if(count===2){
          click2Image=card.shapeColor;
      }
  }

  function check(){
      if(click1Image!=click2Image){
          for(var i=0;i<group.length;i++){
              if(group.get(i)!=null){
                  group.get(i).shapeColor="orange";
              }
          }
      }
      if(click1Image===click2Image){
          group.clear();
      }
      count=0;
  }