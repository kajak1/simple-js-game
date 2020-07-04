class Ball{
    constructor(radius){
        this.radius = radius;
        this.posX = (canv_width - radius)/2;
        this.posY = (canv_height - radius)/2;
        this.incrementX = 7;
        this.incrementY = 2;
        this.bouncable = true
        this.bounced = false
    }

    create(){
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    detect_collision(){
        // lewy gracz
        if(this.posX < canv_width/2){
            if(this.posX < left_player.right_border - this.radius){
                this.bouncable = false 
            }
            if(this.posX > left_player.right_border + this.radius + 1){
                this.bouncable = true
                this.bounced = false
            }
            if((this.posX <= left_player.right_border + this.radius 
                && this.posX >= (left_player.right_border - this.radius)) 
            && (this.posY > left_player.posY && this.posY < left_player.posY + left_player.height)){
                console.log(this.bouncable)
                if(this.bouncable == true && this.bounced == false){
                    this.incrementX *= -1
                    this.bounced = true
                }
            }
        }

        // prawy gracz
        if(this.posX > canv_width/2){
            if(this.posX > right_player.left_border + this.radius){
                this.bouncable = false
            }
            if(this.posX < right_player.left_border - this.radius - 1){
                this.bouncable = true
                this.bounced = false
            }
            if((this.posX >= right_player.left_border - this.radius
                && this.posX <= right_player.left_border + this.radius)
            && (this.posY > right_player.posY && this.posY < right_player.posY + right_player.height)){
                if(this.bouncable == true && this.bounced == false){
                    this.incrementX *= -1
                    this.bounced = true
                }
            }
        }
        // od krawedzi:
            // bocznych
        if(this.posX >= canv_width - this.radius){
            this.posX = canv_width - this.radius
            this.incrementX = -this.incrementX
            // out_of_bounds = true
        }
        if(this.posX <= this.radius){
            this.posX = this.radius
            this.incrementX = -this.incrementX
            // out_of_bounds = true
        }
            // gornych
        if(this.posY <= this.radius){
            this.incrementY = -this.incrementY
        }
        if(this.posY >= canv_height - this.radius){
            this.incrementY = -this.incrementY
        }
    }

    bounce_angle(){
        // if(this.bounced == true)
    }
    

    move(){
        this.detect_collision()
        // if(this.posX + this.incrementX < this.radius){
        //     this.posX = this.radius
        // }else if(this.posX + this.incrementX > canv_width - this.radius){
        //     this.posX = canv_width - this.radius
        // }else{
        //     this.posX += this.incrementX
        // }
        
        this.posX += this.incrementX
        this.posY += this.incrementY
    }
}