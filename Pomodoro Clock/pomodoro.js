var timer,duration,countdownTime;
var defaultTime;
var sec;
var breakTime;
var timerCheck = true;
$(document).ready(function() {
    breakTime = 3;
    defaultTime = 25;
    sec = 0;
    duration = defaultTime;
    countdownTime = duration;
    timeCheck = true;

    
    document.getElementById("timer").innerHTML = countdownTime + ":" + "00";
    document.getElementById("break-time").innerHTML = breakTime;
    document.getElementById("duration").innerHTML = countdownTime;
    
    
});

function resetTimer(){
    breakTime = 3;
    duration = defaultTime;
    countdownTime = duration;
    timeCheck=true;
    
    defaultTime = 25;
    sec = 0;
    document.getElementById("timer").innerHTML = defaultTime + ":" + "00";
    document.getElementById("break-time").innerHTML = breakTime;
    document.getElementById("duration").innerHTML = countdownTime;
}
function adjustDuration(num) {
  if (duration == 28 && num == 1) {
    duration = 15;
  } else if (duration == 0 && num < 0) {
    duration = 28;
  } else {
    duration = duration + num;
  }
  countdownTime = duration;

  document.getElementById("duration").innerHTML = countdownTime;
   document.getElementById("timer").innerHTML = countdownTime + ":" + "00";
}
function adjustBreak(num){
    if (breakTime == 5 && num == 1){
        breakTime = 1;
    } else if (breakTime == 1 && num < 0){
        breakTime = 5;
    } else {
        breakTime = breakTime + num;
    }

    document.getElementById("break-time").innerHTML = breakTime;
}

function startTimer(){
    if (countdownTime == 0 && sec == 0){
        clearInterval(timer);
        document.getElementById('alarm').play();
        if (timeCheck === true){
            alert("Time's Up! Take a break for " + breakTime + " minutes!");
            countdownTime = breakTime;
            timeCheck = false;
            
        } else {
            alert("Time's Up! Get back to work!");
            countdownTime = duration;
            timeCheck = true;
            

        }
    }
      if (sec !== 0) {
        sec = sec - 1;
      } else {
        sec = 59;
        countdownTime = countdownTime -1;
        
      }
      document.getElementById("timer").innerHTML = countdownTime + ":" + sec;

      timer = setTimeout(function() {
        startTimer();
      }, 1000);
    
    
    

}




