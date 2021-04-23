class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {

    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if( this.body.velocity.x  > 10  && this.body.position.x > 200){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    

    }
    
    for(var index = 0; index<this.trajectory.length;index=index+1){
      
      image(this.smokeImg,this.trajectory[index][0],this.trajectory[index][1]);
    }
    
    
  }
}


