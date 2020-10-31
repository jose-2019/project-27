class Bob1{
 
    constructor(x,y,r){      
    
    var opti={
        isStatic:true,
 
    }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,opti)
    World.add(world,this.body);
  
    }
    
    display(){
    


    var paperpos=this.body.position;
    push()
    translate(paperpos.x,paperpos.y);
    ellipseMode(CENTER);
    fill("pink");
    ellipse(50,50,70)
    pop()
    
 
    
    }
    
    
    }