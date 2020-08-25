class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
        this.rank=0
    }
    getCarsEnd(){
        database.ref("carsEnd").on("value",(data)=>{
            this.rank=data.val()
            /*console.log(this.rank)
            console.log(data.val())*/
        })
    }
    updateCarsEnd(){
        database.ref("/").update({
            "carsEnd":this.rank

        })
        console.log(this.rank)
    }
    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount=data.val()
        })

    }
    updatePlayerCount(){
        database.ref("/").update({
            "playerCount":playerCount
        })

    }
    updateName(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            "name": this.name,
            "distance":this.distance
            
        })

    }
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers=data.val()
        })
    }
}