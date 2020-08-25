class Game{
    getGameState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val()
        });
    }
    updateGameState(state){
        database.ref("/").update({
            "gameState":state
        });

    }
    play(){
        formObj.hide()
        playerObj.getCarsEnd()
        text("Game Start!",120,100)
        Player.getPlayerInfo()
        if(allPlayers!=undefined){
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)

            var index=0
            var y =0
            var x = 200
            var displayPos=200
            for(var player in allPlayers){
                if(index<=3){
                    x=x+200
                    y=displayHeight-allPlayers[player].distance
                    if(player==="player"+playerObj.index){
                        fill("red")
                        strokeWeight(20)
                        ellipse(x,y+80,50,50)
                        
                        camera.position.x=width/2
                        camera.position.y=y
                    }
                    else{
                        cars[index].shapeColor="black"
                    }
                    cars[index].x=x
                    cars[index].y=y
                    index+=1;

                }
            }

            if(keyIsDown(UP_ARROW)){
                playerObj.distance+=50
                playerObj.updateName()
            }
            if(playerObj.distance>3860){
                gameState=2
                playerObj.rank=playerObj.rank+1
                playerObj.updateCarsEnd()
                console.log(playerObj.rank)
            }

            drawSprites()
        }


    }

    async start(){
        if(gameState==0){
            formObj=new Form()
            playerObj=new Player()
            var playerCountRef=await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                playerObj.getPlayerCount()
            }

            formObj.display()
            this.createCars()
        }
    }
    createCars(){
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        car1.addImage(car1img)
        car2.addImage(car2img)
        car3.addImage(car3img)
        car4.addImage(car4img)
        cars=[car1,car2,car3,car4]
      }

}
