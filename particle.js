class Particle
{
    constructor(x,y,radius){

        var option = {
            density : 1.2,
            friction : 0.7
        }
        
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius
        this.color = color(random(0,255) , random(0,255) , random(0,255) )
        World.add(world,this.body)
    }

    display(){

        var pos = this.body.position

        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius)

    }
}