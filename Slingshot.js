class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly () {
        this.slingshot.bodyA = null; 
        // null means 0 
        // when the mouse is released, the object needs to get detached 
    
    } 

    display(){

        if (this.slingshot.bodyA) { // we need not track it when it is flying 

        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB; 
        // changed it to pointB because it is not a body and we need not track it's position 
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}

