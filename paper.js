/*class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction: 0.5,
            density: 1.2

        }
        this.body = Bodies.circle(x,y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body);
    }
 
     display(){
        var pos = this.body.position
         imageMode(RADIUS);
         //fill("pink");
         image(this.image, 200,200, this.radius, this.radius);
     }*/
     class Paper{
        constructor(x, y, radius){
            var options = {
                isStatic : false,
                restitution : 0.3,
                friction: 0.5,
                density: 1.2
    
            }
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x,y, radius, options);
     
      
    World.add(world, this.body);
        }
     
         display(){
            var pos = this.body.position
             /*ellipseMode(RADIUS);
             fill("pink");
             ellipse(pos.x, pos.y, this.radius, this.radius);*/
             imageMode(RADIUS);
             //fill("pink");
             image(this.image, 200,200, this.radius, this.radius);
         }
    
        
        
    }

    
    
