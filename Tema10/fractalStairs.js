let side = 1;


function drawStairs(n){
    if (side > 350)
        {return null;}

    push()
    noFill()
    rotate((PI/10)*n)
    side+=n;
    square(0,0,side);
    pop()

    return drawStairs(n+1);


}