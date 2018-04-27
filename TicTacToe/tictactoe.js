var userInput = "";
var gameBoard = ['one',
                 'two',
                 'three',
                 'four',
                 'five',
                 'six',
                 'seven',
                 'eight',
                 'nine'];

$(document).ready(function () {

 });

  function pickSquare(id){
    console.log(id);
    userInput = "X";
    closeSquare(id);
    computerTurn();
    $('#' + id).html(userInput);
    $('#' + id).removeAttr('onClick');
}

function closeSquare(id){
  var index = gameBoard.indexOf(id);
    if (index >= 0) {
      gameBoard.splice( index, 1 );
      console.log (gameBoard);
    }
}

function computerTurn(){
  var computerInput = "O";
  var rand = gameBoard[Math.floor(Math.random() * gameBoard.length)];
  
  $('#' + rand).html(computerInput);
  $('#' + rand).html(computerInput);
  closeSquare(rand);
}
  
 

  