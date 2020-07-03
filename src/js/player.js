class Player{
    constructor(width, height, side){
        this.width = width
        this.height = height
        this.posY = 0
        this.offsetY = 0
        this.side = side
        if(side === 'left'){
            this.offsetX = 10
            this.prawa_krawedz = this.offsetX + this.width
        }
        if(side === 'right'){
            this.offsetX = canv_width - this.width - 10
            // console.log(this.offsetX)
            this.lewa_krawedz = this.offsetX
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
            // console.log(this.posY)
        }

        if(S_pressed && this.side === 'left'){
            if(this.posY > 340){
                return
            }
            this.posY += 10
            // console.log(this.posY)
            // console.log(`odlegosc to ${this.posY}, zajmuje od ${this.posY} do ${this.posY + this.height}`)
        }

        if(UP_pressed && this.side === 'right'){
            if(this.posY <= 0){
                return
            }
            this.posY -= 10
            // console.log(this.posY)
        }

        if(DOWN_pressed && this.side === 'right'){
            if(this.posY > 340){
                return
            }
            this.posY += 10
            // console.log(this.posY)
        }
    }
}