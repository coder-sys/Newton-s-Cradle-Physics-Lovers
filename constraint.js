class Constraint{
    constructor(body,xc,yc){
        var options = {
            bodyA : body,
            pointB:{x:xc,y:yc},
            stiffness:0,
            length:0
        }
        this.body = Matter.Constraint.create(options)
        World.add(world,this.body)
        this.body['stiffness'] = 0.4
        this.body['length'] = 100
    }
}