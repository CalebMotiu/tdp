let squares = []

const boardSize = 8;
for (i=0;i<boardSize;i++)
    squares.push([])

function initSquares(){
    for (let i = 0; i < boardSize; i++){
      for (let j = 0; j < boardSize; j++){
        if (i%2==0)
        {
            if(j%2==0)
            {
                squares[i][j]={
                    x: i*50,
                    y: j*50 ,
                    color: "black",
                    side:50
                }
            }
            else
            {
                squares[i][j]={
                    x: i*50,
                    y: j*50 ,
                    color: "white",
                    side:50
                }
            }
        }
        else
            if(j%2==0){
                squares[i][j]={
                    x: i*50,
                    y: j*50 ,
                    color: "white",
                    side:50
                }  
            }
            else
            {
                squares[i][j]={
                    x: i*50,
                    y: j*50 ,
                    color: "black",
                    side:50
                }
            }
      }
    }
}

function createSquares(){
    for (let i = 0; i < boardSize; i++){
        for (let j = 0; j < boardSize; j++){
          fill(squares[i][j].color)
          rect(squares[i][j].x,squares[i][j].y,squares[i][j].side,squares[i][j].side)
        }
      }
}