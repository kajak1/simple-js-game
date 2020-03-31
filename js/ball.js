class Ball{
    constructor(radius){
        this.radius = radius
        this.posX = (width - radius)/2
        this.posY = (height - radius)/2
        this.direcX = width
        this.direcY = height
        this.incrementX = -5
        this.incrementY = 0
    }

    create(){
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    detect_collision(){
        // odbijanie od krawędzi
            // od lewego
        if(this.posX >= (width - this.radius) || this.posX <= this.radius || (this.posX <= (left_player.offsetX + left_player.width) && (this.posY >= left_player.posY && (this.posY <= left_player.posY + left_player.height))) || (this.posX >= (right_player.offsetX) && (this.posY >= right_player.posY && (this.posY <= right_player.posY + right_player.height)))){
            this.incrementX = -this.incrementX
        }

        if(this.posY >= (height - this.radius) || this.posY <= this.radius){
            this.incrementY = -this.incrementY
        }
    }
    

    move(){
        this.detect_collision()
        this.posX += this.incrementX
        this.posY += this.incrementY
    }
}