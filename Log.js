class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,70,height,angle);
      this.Image=loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body,angle);
    }
    
  }
     
  