function Box(number,color)
{
    this.color=color;
    this.number=number;
}
const box1 = new Box("1","rgb(0, 255, 13)");
const box2 = new Box("2","rgb(255, 204, 36)");
const box3 = new Box("3","rgb(150, 0, 145)");
const box4 = new Box("4","rgb(150, 0, 20)");
const box5 = new Box("5","rgb(67, 0, 150)");
const box6 = new Box("6","rgb(189, 255, 96)");
const box7 = new Box("7","rgb(255, 133, 129)");
const box8 = new Box("8","rgb(129, 192, 255)");
const box9 = new Box("9","rgb(82, 46, 148)");
const box10 = new Box("10","rgb(131, 46, 148)");
const box11 = new Box("11","rgb(0, 255, 187)");
const box12 = new Box("12","rgb(162, 22, 148)");
const box13 = new Box("13","rgb(97, 2, 2)");
const box14 = new Box("14","rgb(57, 97, 2)");
const box15 = new Box("15","rgb(129, 197, 34)");
const box16 = new Box("16","rgb(203, 248, 42)");
const box17 = new Box("17","rgb(246, 8, 0)");
const box18 = new Box("18","rgb(27, 68, 76)");
const box19 = new Box("19","rgb(76, 74, 27)");
const box20 = new Box("20","rgb(0, 255, 229)");
const box21 = new Box("21","rgb(246, 172, 0)");
const box22 = new Box("22","rgb(180, 66, 53)");
const box23 = new Box("23","rgb(224, 22, 0)");
const box24 = new Box("24","rgb(2, 253, 136)");
const box25 = new Box("25","rgb(2, 194, 253)");
const box26 = new Box("26","rgb(211, 2, 253)");
const box27 = new Box("27","rgb(174, 23, 23)");
const box28 = new Box("28","rgb(23, 139, 174)");





const row1=0;
const row2=60;
const row3=120;
const row4=180;
const column1=0;
const column2=60;
const column3=120;
const column4=180;
const column5=240;
const column6=300;
const column7=360;


    function setup()
    {
        createCanvas(600,600)

    }
    function draw(){
        drawBox(box1,row1,column1)
        drawBox(box2,row1,column2)
        drawBox(box3,row1,column3)
        drawBox(box4,row1,column4)
        drawBox(box5,row1,column5)
        drawBox(box6,row1,column6)
        drawBox(box7,row1,column7)
        drawBox(box8,row2,column1)
        drawBox(box9,row2,column2)
        drawBox(box10,row2,column3)
        drawBox(box11,row2,column4)
        drawBox(box12,row2,column5)
        drawBox(box13,row2,column6)
        drawBox(box14,row2,column7)
        drawBox(box15,row3,column1)
        drawBox(box16,row3,column2)
        drawBox(box17,row3,column3)
        drawBox(box18,row3,column4)
        drawBox(box19,row3,column5)
        drawBox(box20,row3,column6)
        drawBox(box21,row3,column7)
        drawBox(box22,row4,column1)
        drawBox(box23,row4,column2)
        drawBox(box24,row4,column3)
        drawBox(box25,row4,column4)
        drawBox(box26,row4,column5)
        drawBox(box27,row4,column6)
        drawBox(box28,row4,column7)
    

    }

    function drawBox(box,row,column){

        fill(box.color);
        square(column, row, 50); 
        fill("white");
        textSize(20);
        textAlign(CENTER, CENTER);
        text(box.number, column, row, 50, 50); 
    
        }
 
    
    