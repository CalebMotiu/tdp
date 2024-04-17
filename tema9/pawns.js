let pawns = [];
const constDiameter = 25;
const numberOfPawns = 8;


function initPawns(){
    for ( let i = 0; i <= numberOfPawns; i++)
    {
        randomX = Math.floor(Math.random() * boardSize);
        randomY = Math.floor(Math.random() * boardSize);
        pawns.push({
            x: randomX * 50 + 25,
            y: randomY * 50 + 25,
            diameter: constDiameter,
            color: "white",
            stroke: "black"
        })
    }

    for ( let i = 1; i <= numberOfPawns; i++)
    {
        randomX = Math.floor(Math.random() * boardSize);
        randomY = Math.floor(Math.random() * boardSize);
        pawns.push({
            x: randomX * 50 + 25,
            y: randomY * 50 + 25,
            diameter: constDiameter,
            color: "black",
            stroke: "white"
        })
    }
}

function createPawns(){
    pawns.forEach(pawn => {
        stroke(pawn.stroke)
        fill(pawn.color);
        circle(pawn.x, pawn.y, pawn.diameter);
    });
}
