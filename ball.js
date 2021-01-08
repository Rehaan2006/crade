class Ball{
    constructor(x,y,r){
        var options = {
            'restitution' : 0.9,
            'density' : 1.0,
            'friction' : 0.2
        }
        this.x=x;
		this.y=y;
        this.r=r;
        
        this.body = Bodies.circle(x,y,r,options);
      
        
        World.add(world,this.body);
    }
   
   
   display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push ();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       strokeWeight(3);
       fill(255,0,255);
       ellipse(0,0,this.r,this.r);
   
       pop();
   }
   }