class Chain{

    constructor(object1,object2){
    

    var options = {
    
    
    
    bodyA:object1,
    bodyB:object2,
    
    }
    
    this.chain =Matter.Constraint.create(options);
    World.add(world,this.chain);
    }
    
    display(){
    
    
    line(575,200,575,420);
    line(505,200,505,420);
    line(645,200,645,420);
    line(715,200,715,420);
    line(785,200,785,420);

    }
    
    }