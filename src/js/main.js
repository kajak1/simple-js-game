class Main{
    constructor(...objects){
        this.objects = objects
    }

    render(){
        window.requestAnimationFrame( () => {
            ctx.clearRect(0, 0, width, height)
            this.objects.forEach( (el) => {
                el.create()
                el.move()
            })
            if(this.if_game_over() == true){
                game.end()
                return
            }
            this.render()
        })
    }
}

console.log('xd')