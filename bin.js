/*class Bin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);

      //fill("green");
      //stroke("green");
      image(this.image, 500,630 ,this.width, this.height);
    }
  }*/
  class Bin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //fill("green");
      //stroke("green");
      //rect(pos.x, pos.y, this.width, this.height);
      image(this.image, 500,630 ,this.width, this.height);
    }
  }