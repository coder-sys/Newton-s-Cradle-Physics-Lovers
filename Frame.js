class Frame extends Baseclass{
    constructor(x,y,w,h,s){
        super(x,y,w,h)
        Matter.Body.setStatic(this.body,s)
    }
    appear(){
        super.display()
    }
}