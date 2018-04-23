$(document).ready(function() {
  var total = 0;
  var value = "0";
  var operator = "";
  $("#display").text(value);
});

function setNum(num) {
  if (display.textContent == "0") {
    total = 0;
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

function calculate(oper) {
  console.log(oper);
  switch (oper) {
    case "+":
      total += parseFloat(value);
      break;
    case "-":
      total -= parseFloat(value);
      break;
    case "*":
      total *= parseFloat(value);
      break;
    case "/":
      total /= parseFloat(value);
      break;
  }
  $("#display").text(parseFloat(total));
  value = "0";
}

function clearDisplay(){
    total = 0;
    value = "0";
    $("#display").text(value);
}


