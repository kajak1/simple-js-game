class Ball{
    constructor(radius){
        this.radius = radius
        this.posX = (width - radius)/2
        this.posY = (height - radius)/2
        this.direcX = width
        this.direcY = height
        this.incrementX = 5
        this.incrementY = 4
    }

    create(){
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    move(){
        ctx.clearRect(0, 0, width, height)
        // if (this.posX < 0 || this.posX > width - 20) {
        //     this.direcX = -this.direcX;
        // }
        // if (this.posY < 0 || this.posY > height - 20) {
        //     this.direcY = -this.direcY;
        // }
        if(this.posX >= (width - this.radius) || this.posX <= this.radius){
            console.log(this.posX)
            this.incrementX = -this.incrementX
        }
        if(this.posY >= (height - this.radius) || this.posY <= this.radius){
            console.log(this.posY)
            this.incrementY = -this.incrementY
        }
            this.posX += this.incrementX
            this.posY += this.incrementY
        this.create()
        window.requestAnimationFrame(this.move.bind(this))
    }
}