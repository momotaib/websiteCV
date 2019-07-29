// obtaining id from time and using it in current time on contacts page
var currentTime = document.getElementById("time");
function time(n) {
  // the use of parseInt allows use to use a string and return a variable and compares the result with n in the if condition.
  n = parseInt(n,10);
  if (n < 10) {
    n = "0" + n;
  }
  return n;
}
//using the updatetime function to give us an update every second minute and hour with a format to put it in either am or pm based on when the page is loaded.
function updateTime(){
  var timeNow= new Date(),
  hh = timeNow.getHours(),
  mm = timeNow.getMinutes(),
  ss = timeNow.getSeconds(),
  formatAMPM = (hh >= 12?'PM':'AM');
  hh = hh % 12 || 12;

  // with the benefit of only being able to see a static time, we use the setTimeout and call it everysecound with updateTime being used as an outside function
  currentTime.innerHTML = hh + ":" + time(mm) + ":" + time(ss) + " " + formatAMPM;
  setTimeout(updateTime,1000);
}
updateTime();
