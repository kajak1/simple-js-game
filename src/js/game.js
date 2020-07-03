class Game{
    constructor(...objects){
        this.objects = objects
        this.started = false
    }

    is_over(){
        if(out_of_bounds == true){
            return true
        }
        return false
    }

    run(){
        window.requestAnimationFrame( () => {
            ctx.clearRect(0, 0, canv_width, canv_height)
            this.objects.forEach( (el) => {
                el.create()
                el.move()
            })
            if(this.is_over()){
                game.end()
            }
            this.run()
        })
    }

    start(){
        ctx.fillStyle = 'rgba(233, 237, 222, 0.6)'
        ctx.fillRect(0, 0, canv_width, canv_height)
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        ctx.font = '20px Roboto'
        ctx.fillText('press enter to start', canv_width/2 - 100, canv_height/2)
        window.addEventListener('keydown', (e) => {
            if(e.key == 'Enter' && this.started == false){
                this.started = true
                this.run()
            }
        })
    }

    end(){
        ctx.fillStyle = 'rgba(173, 173, 173, 0.5)'
        ctx.fillRect(0, 0, canv_width, canv_height)
        this.started = false
    }

}