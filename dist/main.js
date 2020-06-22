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
            this.render()
        })
    }
}

console.log('xd')