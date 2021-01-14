class Pendullam extends Baseclass{
    constructor(x,y,w){
        super(x,y,w)
        this.body = Bodies.circle(x,y,w)
        World.add(world,this.body)
        this.w = w
    }
    appear(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.w,this.h)
        pop()
    }
} 