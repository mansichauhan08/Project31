class Particles{
    constructor(x,y){
        var options = {
            isStatic : false,
            friction : 0.3,
            restitution : 0.4,
            density : 1.2
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(this.color);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}