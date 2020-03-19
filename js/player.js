class Player{
    constructor(width, height, side){
        this.width = width
        this.height = height
        this.posY = 0
        this.offsetY = 0
        if(side === 'left'){
            this.offsetX = 10
        }
        if(side === 'right'){
            this.offsetX = 600 - this.width - 10
        }
    }

    create(){
        ctx.fillRect(this.offsetX, this.offsetY, this.width, this.height)
    }

    move(direction){
        // console.log(this.posY)
        if(direction === 'up'){
            if(this.posY <= 0){
                return
            }
            this.posY -= 25
            console.log(this.posY)
            ctx.clearRect(this.offsetX, 0, 20, 450)
            ctx.fillRect(this.offsetX, this.posY, this.width, this.height)
        }
        if(direction === 'down'){
            if(this.posY > 340){
                return
            }
            this.posY += 25
            console.log(this.posY)
            ctx.clearRect(this.offsetX, 0, 20, 450)
            ctx.fillRect(this.offsetX, this.posY, this.width, this.height)
        }
    }
}