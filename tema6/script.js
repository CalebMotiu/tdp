function setup(){
    createCanvas(1000, 1000, WEBGL);
    camera(0, -30, 100, 0, 0, 0, 0, 1, 0);
    perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
    normalMaterial();
    debugMode(AXES);
    describe(
      'a 3D box is centered in a 3D sketch. an icon indicates the direction of each axis: a red line points +X, a green line +Y, and a blue line +Z.'
    );
}

function draw(){
    background(1000);
    orbitControl();
    box(100, 100);

    

}