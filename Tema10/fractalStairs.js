let w = 100;
let h = 100


function drawStairs(){
    translate(200,200)
    for (i=0;i<=100;i++){
        rotate(QUARTER_PI/10)
        noFill()
        rect(0,0,w,h);
        w--;
        h--;
    }

}