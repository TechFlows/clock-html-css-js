setInterval(updateClock, 1000)

function updateClock(){
  var myDate = new Date();
  var myHours = myDate.getHours();
  var myMinutes = myDate.getMinutes();
  var mySecods = myDate.getSeconds();

  if (myHours<10){myHours='0'+myHours;}
  if (myMinutes<10){myMinutes='0'+myMinutes;}
  if (mySecods<10){myHours='0'+mySecods;}

  var myClock = myHours+":"+ myMinutes + ":" + mySecods;
  document.getElementById("clock").innerText = myClock;
}




