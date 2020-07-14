class Ball{
    constructor(radius){
        this.radius = radius;
        this.angle = Math.floor(Math.random() * (Math.PI * 2))
        this.posX = (canv_width - radius)/2;
        this.posY = (canv_height - radius)/2;
        this.def_pos = {
            x: this.posX,
            y: this.posY
        }
        this.speed = 6
        this.Vx = this.speed * Math.cos(this.angle);
        this.Vy = this.speed * Math.sin(this.angle);
        this.bouncable = true
        this.bounced = false
    }

    create(){
        this.angle = Math.floor(Math.random() * (Math.PI * 2))
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
                if(this.bouncable == true && this.bounced == false){
                    let collision_point = (left_player.posY + left_player.height/2) - this.posY
                    collision_point /= left_player.height/2
                    this.angle = 5 * (Math.PI/12) * collision_point
                    this.Vx = this.speed * Math.cos(this.angle);
                    this.Vy = this.speed * -Math.sin(this.angle);
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
                    let collision_point = (right_player.posY + right_player.height/2) - this.posY
                    collision_point /= right_player.height/2
                    this.angle = 5 * (Math.PI/12) * collision_point
                    this.Vx = this.speed * -Math.cos(this.angle);
                    this.Vy = this.speed * -Math.sin(this.angle);
                    this.bounced = true
                }
            }
        }
        // od krawedzi:
            // bocznych
        if(this.posX >= canv_width - this.radius){
            this.posX = canv_width - this.radius
            left_player.score += 1
        }
        if(this.posX <= this.radius){
            this.posX = this.radius
            right_player.score += 1
        }
            // gornych
        if(this.posY <= this.radius){
            this.Vy *= -1
        }
        if(this.posY >= canv_height - this.radius){
            this.Vy *= -1
        }
    }
    
    move(){
        this.detect_collision()
        this.posX += this.Vx
        this.posY += this.Vy
    }

    update(){
        this.create()
        this.move()
    }
}