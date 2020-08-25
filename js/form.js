class Form{
constructor(){
    this.input=createInput("Name")
    this.button=createButton("SUBMIT")
    this.greetings=createElement("h3")
    this.reset=createButton("Reset")
    this.div=createDiv("")
}
 addElement(){
    this.div.position(displayWidth/2,displayHeight/2)
    this.div.html("Rank:"+playerObj.rank)
    this.div.style("color","green")
     
 }
 display(){
     this.input.position(130,160)
     this.reset.position(width-50,50)
     var title=createElement('h2')
     title.html("Car Racing Game")
     title.position(width/2,0)
     this.button.position(250,200)
     this.reset.mousePressed(()=>{
         playerCount=0
         playerObj.updatePlayerCount()
         gameObj.updateGameState(0)
         playerObj.rank=0
         playerObj.updateCarsEnd()

         
     })
     this.button.mousePressed(()=>{
         this.input.hide()
         this.button.hide()
         var name=this.input.value()
         playerCount =++playerCount
         playerObj.updatePlayerCount()
         playerObj.name=name;
         playerObj.distance=0
         playerObj.index=playerCount
         playerObj.updateName()
         this.greetings.html("Hello!"+name)
         this.greetings.position(130,160)
     })

}
 hide(){
     this.input.hide();
     this.button.hide();
     this.greetings.hide();
 }
}