let player = 1;
let check = [1, 1 ,1 ,1, 1, 1, 1, 1 ,1];
let player1 = [1, 1 ,1 ,1, 1, 1, 1, 1 ,1];

function divide(id) {
  for (let i = 0; i < 9; i++) {
    if (player == 1) {
      document.getElementById(id).style.background = "black";
      player++;
    } else {
      document.getElementById(id).style.background = "green";
      player--;
    }
  }
}

function box() {
    while(check[0] == 1){
  divide("myCanvas");
   check[0] = 2;
    }
}

function box1() {
    while(check[1] == 1){
        divide("myCanvas1");
         check[1] = 2;
          }
}

function box2() {
    while(check[2] == 1){
        divide("myCanvas2");
         check[2] = 2;
          }
}

function box3() {
    while(check[3] == 1){
        divide("myCanvas3");
         check[3] = 2;
          }
}

function box4() {
    while(check[4] == 1){
        divide("myCanvas4");
         check[4] = 2;
          }
}

function box5() {
    while(check[5] == 1){
        divide("myCanvas5");
         check[5] = 2;
          }
}

function box6() {
    while(check[6] == 1){
        divide("myCanvas6");
         check[6] = 2;
          }
}

function box7() {
    while(check[7] == 1){
        divide("myCanvas7");
         check[7] = 2;
          }
}

function box8() {
    while(check[8] == 1){
        divide("myCanvas8");
         check[8] = 2;
          }
}
