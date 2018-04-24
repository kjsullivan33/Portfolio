//To do: 
//Calculate total from cumulated string of numbers and operators.

var total = 0;
var value = 0;
var str= 0;
var myArray=[];
var operator = 0;

$(document).ready(function() {
  $("#display").text(value);
  $("#string").text(str);
});

function setNum(val) {
    if (value === 0){
        value = val;    
    } else {
    value += val;
    } 
    if (str === 0){
        str = val;
    } else {
        str += val;
    } 
  $("#display").text(value);
  $("#string").text(str);



}

function addDec() {
  if (parseFloat(value) % 1 === 0) {
    var dec = ".";
    value += dec;
    str += dec;
    $("#display").text(value);
    $("#string").text(str);
  }
}

function setOper(oper) {
    str += oper;
    $("#string").text(str);
    
    value = 0;
    
    
  
}


function calculate(){
    total = eval(str);
    $("#display").text(total);
}

function resetVals(){
    total = 0;
    value = 0;
    str = 0;
    myArray = [];
}

function clearDisplay(){
    resetVals();
    $("#display").text(value);
    $("#string").text(str);
}


