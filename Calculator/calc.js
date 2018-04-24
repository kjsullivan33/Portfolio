//To do: 
//Display input plus operations into another line to keep track of multiple operations
//Add an equal button
//Fix the feature to continue operations without clearing the total

var total = 0;
var value = "0";
var operator = "0";

$(document).ready(function() {
  $("#display").text(value);
});

function setNum(num) {
  if (value == "0") {
    value = num;
  } else {
    value += num;
  }
  $("#display").text(value);
}

function addDec() {
  if (parseFloat(value) % 1 === 0) {
    var dec = ".";
    value += dec;
    $("#display").text(value);
  }
}

function setOper(oper) {
  if (operator == "0"){
      operator = oper;
      total = parseFloat(value);
      value = "0";
      $("#display").text(value);
          
  } else {
      calculate(operator);
  }
}

function calculate(oper){
  switch (oper) {
    case "+":
      total += total;
      break;
    case "-":
      total -= total;
      break;
    case "*":
      total *= total;
      break;
    case "/":
      total /= total;
      break;
  }
  $("#display").text(total);
  operator = "0";
  value = "0";
}


function clearDisplay(){
    total = 0;
    value = "0";
    $("#display").text(value);
}


