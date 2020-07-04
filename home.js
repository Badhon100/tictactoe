function tictactoe1() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(20, 20);
  ctx.lineTo(300, 150);
  ctx.stroke();

  ctx.moveTo(0, 150);
  ctx.lineTo(280, 20);
  ctx.stroke();
}

function tictactoe2(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(150, 75, 60, 0, 2 * Math.PI);
  ctx.stroke();
}

