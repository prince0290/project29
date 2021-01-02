class Box {
  constructor(x, y, width, height){
    var options = {
        'restitution':0.2,
        'friction':1,
        'density':0.005
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

}
display(){
    push()     
    var angle = this.body.angle;
    translate(this.body.position.x, this.body.position.y);
    stroke("green");
    strokeWeight(4);
    fill("yellow");
    rotate(angle);
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
}
}

