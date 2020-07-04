var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


function tictactoe1() {
  
  ctx.moveTo(20, 20);
  ctx.lineTo(300, 150);
  ctx.stroke();

  ctx.moveTo(0, 150);
  ctx.lineTo(280, 20);
  ctx.stroke();
}

function tictactoe2(){
  
  ctx.beginPath();
  ctx.arc(150, 75, 60, 0, 2 * Math.PI);
  ctx.stroke();
}

function show(){


    let i = 2;
        if(i == 3){
            tictactoe1();
        }
        else{
            tictactoe2();
        }
    
}