class Division{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("white");
        noStroke();
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}