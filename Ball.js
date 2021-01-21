class Ball{
  constructor(x,y,r){
    var options={
    restitution:0.5,
    density:1,
    }
    this.body=Bodies.circle(x,y,r,options)
    this.x=x
    this.y=y
    this.r=r
    World.add(world,this.body)
    
  }
display(){
  fill("red")
  ellipseMode(RADIUS)
  ellipse(this.body.position.x,this.body.position.y,this.r)
}
}