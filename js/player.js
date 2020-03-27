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
        this.side = side
    }

    create(){
        ctx.fillRect(this.offsetX, this.posY, this.width, this.height)
    }

    move(){
        if(W_pressed && this.side === 'left'){
            if(this.posY <= 0){
                return
            }
            this.posY -= 10
            console.log(this.posY)
        }

        if(S_pressed && this.side === 'left'){
            if(this.posY > 340){
                return
            }
            this.posY += 10
            console.log(this.posY)
        }

        if(UP_pressed && this.side === 'right'){
            if(this.posY <= 0){
                return
            }
            this.posY -= 10
            console.log(this.posY)
        }

        if(DOWN_pressed && this.side === 'right'){
            if(this.posY > 340){
                return
            }
            this.posY += 10
            console.log(this.posY)
        }
    }
}