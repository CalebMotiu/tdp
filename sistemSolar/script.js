

function setup(){
  createCanvas(1500,750, WEBGL);

}

function draw(){


  rotateY(frameCount * 0.01);

    let backgroundColor = "rgb(0, 0, 114)"
    let c="rgb(28, 220, 63)";
    background(backgroundColor);
    strokeWeight(5);
    stroke("black")
    fill(backgroundColor)
    ellipse(0,0,900,600,50)
    ellipse(0,0,680,420,50)
    ellipse(0,0,450,300,50)
    ellipse(0,0,350,200,50)

    fill("yellow")
    sphere(80,200,90)
    stroke("red")
    fill("red")
    circle(400,130,150)
    stroke(c)
    fill(c)
    circle(-300,80,100)
    c="rgb(0, 255, 255)"
    stroke(c)
    fill(c)
    circle(50,-145,70)
    c="rgb(246, 17, 254)"
    stroke(c)
    fill(c)
    circle(170,0,50)

}