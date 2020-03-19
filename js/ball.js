class Ball{
    constructor(radius){
        this.radius = radius
        this.posX = (width - radius)/2
        this.posY = (height - radius)/2
    }

    create(){
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    

    move(){
        // while(this.posX < width-30){
            console.log(this)
            ctx.clearRect(30, 0, width-60, height)
            this.posX += 10
            this.create()
        // }
        window.requestAnimationFrame(this.move).bind(this)
    }
}