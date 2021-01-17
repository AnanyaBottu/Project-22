class Box {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var Position =this.body.position;
      push();
      translate(Position.x,Position.y);
      fill(255, 0, 165);
      rect(0,0, this.width, this.height);
      pop();
    }
  };