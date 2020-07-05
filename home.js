// variable declaration

let player = 1;
let check = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let player1 = [1, 20, 3, 4, 5, 6, 7, 8, 9];
let player2 = [1, 20, 3, 4, 5, 6, 7, 8, 9];
let playerCheck;
let player1won = 0, player2won = 0;


// function for identify player 1 and player 2
// declaring player wise color


function divide(id) {
    
  for (let i = 0; i < 9; i++) {
    
    
    
    if (player == 1) {
      document.getElementById(id).style.background = "black";
      result1();
      if(player1won>0){
        document.getElementById("result").innerHTML = "Player 1 won";
      }
      playerCheck = 1;
      player++;
      
    } else {
      document.getElementById(id).style.background = "green";
      result2();
      if(player2won>0){
        document.getElementById("result").innerHTML = "Player 2 won";
      }
      playerCheck = 2;
      player--;
      
    }
  }
  
  

}

//color the box player wise
// different function for different box

function box() {
  while (check[0] == 1) {
    divide("myCanvas");
    check[0] = 2;
  }

  if (playerCheck == 1) {
    player1[0] = 2;
  }
  if (playerCheck == 2) {
    player2[0] = 2;
  }
}

function box1() {
  while (check[1] == 1) {
    divide("myCanvas1");
    check[1] = 2;
  }
  if (playerCheck == 1) {
    player1[1] = 2;
  }
  if (playerCheck == 2) {
    player2[1] = 2;
  }
}

function box2() {
  while (check[2] == 1) {
    divide("myCanvas2");
    check[2] = 2;
  }
  if (playerCheck == 1) {
    player1[2] = 2;
  }
  if (playerCheck == 2) {
    player2[2] = 2;
  }
}

function box3() {
  while (check[3] == 1) {
    divide("myCanvas3");
    check[3] = 2;
  }
  if (playerCheck == 1) {
    player1[3] = 2;
  }
  if (playerCheck == 2) {
    player2[3] = 2;
  }
}

function box4() {
  while (check[4] == 1) {
    divide("myCanvas4");
    check[4] = 2;
  }
  if (playerCheck == 1) {
    player1[4] = 2;
  }
  if (playerCheck == 2) {
    player2[4] = 2;
  }
}

function box5() {
  while (check[5] == 1) {
    divide("myCanvas5");
    check[5] = 2;
  }
  if (playerCheck == 1) {
    player1[5] = 2;
  }
  if (playerCheck == 2) {
    player2[5] = 2;
  }
}

function box6() {
  while (check[6] == 1) {
    divide("myCanvas6");
    check[6] = 2;
  }
  if (playerCheck == 1) {
    player1[6] = 2;
  }
  if (playerCheck == 2) {
    player2[6] = 2;
  }
}

function box7() {
  while (check[7] == 1) {
    divide("myCanvas7");
    check[7] = 2;
  }
  if (playerCheck == 1) {
    player1[7] = 2;
  }
  if (playerCheck == 2) {
    player2[7] = 2;
  }
}

function box8() {
  while (check[8] == 1) {
    divide("myCanvas8");
    check[8] = 2;
  }
  if (playerCheck == 1) {
    player1[8] = 2;
  }
  if (playerCheck == 2) {
    player2[8] = 2;
  }
}


//calcutaing result to find out the winner
//finding color box as tictactoe rule.

function result1() {
  if (player1[0] == player1[1] && player1[1] == player1[2]) {
    player1won++;

  }
  if (player1[0] == player1[4] && player1[4] == player1[8]) {
    player1won++;
  }
  if (player1[0] == player1[3] && player1[3] == player1[6]) {
    player1won++;
  }
  if (player1[2] == player1[5] && player1[5] == player1[8]) {
    player1won++;
  }
  if (player1[6] == player1[7] && player1[7] == player1[8]) {
    player1won++;
  }
  if (player1[2] == player1[4] && player1[4] == player1[6]) {
    player1won++;
  }
  if (player1[3] == player1[4] && player1[4] == player1[5]) {
    player1won++;
  }
}




function result2() {
  if (player2[0] == player2[1] && player2[1] == player2[2]) {
    player2won++;
  }
  if (player2[0] == player2[4] && player2[4] == player2[8]) {
    player2won++;
  }
  if (player2[0] == player2[3] && player2[3] == player2[6]) {
    player2won++;
  }
  if (player2[2] == player2[5] && player2[5] == player2[8]) {
    player2won++;
  }
  if (player2[6] == player2[7] && player2[7] == player2[8]) {
    player2won++;
  }
  if (player2[2] == player2[4] && player2[4] == player2[6]) {
    player2won++;
  }
  if (player2[3] == player2[4] && player2[4] == player2[5]) {
    player2won++;
  }
}
