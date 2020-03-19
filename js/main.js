class Main{
    constructor(...objects){
        this.objects = objects
    }

    render(){
        for(const el of this.objects){
            el.create()
        }
    }
}