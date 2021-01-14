class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push()
			translate(pos.x,pos.y);
			fill("red")
			imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
			//ellipse(0,0,this.r, this.r);
			pop()
    }
}
