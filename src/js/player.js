class Player{
    constructor(width, height, side){
        this.width = width
        this.height = height
        this.posY = 0
        this.offsetY = 0
        this.side = side
        if(side === 'left'){
            this.offsetX = 10
            this.right_border = this.offsetX + this.width
        }
        if(side === 'right'){
            this.offsetX = canv_width - this.width - 10
            this.left_border = this.offsetX
        }
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
        }

        if(S_pressed && this.side === 'left'){
            if(this.posY > canv_height - this.height){
                return
            }
            this.posY += 10
        }

        if(UP_pressed && this.side === 'right'){
            if(this.posY <= 0){
                return
            }
            this.posY -= 10
        }

        if(DOWN_pressed && this.side === 'right'){
            console.log(this.posY)
            if(this.posY >= canv_height - this.height){
                return
            }
            this.posY += 10
        }
    }
}