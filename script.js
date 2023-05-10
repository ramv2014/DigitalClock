setInterval(displayTime, 1000);

function displayTime() {  
  var currentDate = new Date();  
  document.getElementById("timeInHours").innerHTML = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();  
  document.getElementById("timeInMinutes").innerHTML = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
    document.getElementById("timeInSeconds").innerHTML = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();    
document.getElementById("isAMorPM").innerText =  currentDate.getHours() >= 12 && currentDate.getHours() < 24 ? "PM" : "AM";
}