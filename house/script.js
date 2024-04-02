function setup(){
    createCanvas(400,400)
    colorMode(HSB);

    
    let c = 'rgb(0, 255, 255)';    
    background(c)
}
function draw(){
    stroke("black")
    fill("black")
    triangle(225,200,320,250,130,250)
    fill("green")
    rect(150,250,150,100)
    let c = 'rgb(0, 255, 4)';    
    fill(c)
    rect(0,350,400,50)
    fill("black")
    rect(230,310,20,40)
    c = 'rgb(0, 255, 255)';    
    fill(c)
    rect(180,310,20,20)
    rect(180,270,20,20)
    rect(220,270,20,20)
    rect(260,270,20,20)

    stroke(5);
    strokeWeight(5);
    line(50,330,50,310)
    line(50,330,40,350)
    line(50,330,60,350)
    line(50,310,35,325)
    line(50,310,65,325)
    fill("black")
    circle(50,300,12)
    fill("green")
    stroke("green")
    circle(47,298,0.5)
    circle(53,298,0.5)

    fill("white")
    stroke("white")
    rect(48,311,4,20,1,1,0)
    quad(48,312,48,316,45,318,45,314)
    quad(52,312,52,316,55,318,55,314)
    stroke("green")
    line(36,323.1,37,324.3)

    stroke("black")

    rect(50,311,0.1,20)


}