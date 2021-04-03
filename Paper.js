class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic :false,
            restitution :0.3,
            friction :0.5,
            density :1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body=Bodies.circle(x, y, (r-30)/2 , options);
 		World.add(world, this.body);

        this.image = loadImage("paper.png");
    }
    
    display()
    {
        var groundPos=this.body.position;		

			push();
			translate(groundPos.x, groundPos.y);
            imageMode(CENTER);
			ellipse(0,0,this.r, this.r);
            image(this.image, 0, 0, this.r+30, this.r+30);
			pop();
    }
}