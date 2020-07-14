class Game{
    constructor(...objects){
        this.objects = objects
        this.started = false
    }

    reset(){
        this.objects.forEach( (el) => {
            const {x, y} = el.def_pos
            el.posX = x
            el.posY = y
        })
    }

    run(){
        window.requestAnimationFrame( () => {
            ctx.clearRect(0, 0, canv_width, canv_height)
            this.objects.forEach( (el) => {
                el.update()
            })
            ctx.font = '30px Roboto'
            ctx.fillText(`${left_player.score}`, 20, 30)
            ctx.fillText(`${right_player.score}`, canv_width - 40, 30)
            if(left_player.score === 1 || right_player.score === 1){
                game.end()
                game.reset()
                return
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
        ctx.fillStyle = '#000'
        ctx.font = '20px Roboto'
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        if(left_player.score > right_player.score){
            ctx.fillText('left player wins, press enter to play again', canv_width/2, canv_height/2)
        }else if(left_player.score < right_player.score){
            ctx.fillText('right player wins, press enter to play again', canv_width/2, canv_height/2)
        }
        left_player.score = 0
        right_player.score = 0
        this.started = false
    }
}