let second = document.getElementById("sec");
let minuts = document.getElementById("min");
let hours = document.getElementById("hours");

setInterval(() => {
    hours.innerHTML = parseInt(hours.innerHTML) + 1;
    if (hours.innerHTML == 24) {
      hours.innerHTML = `0${0}`;
    }else if (hours.innerHTML < 10){
        hours.innerHTML =  0 + hours.innerHTML ;
  
  
    }
  }, 3600000);

setInterval(() => {
  minuts.innerHTML = parseInt(minuts.innerHTML) + 1;
  if (minuts.innerHTML == 60) {
    minuts.innerHTML = `0${0}`;
  }else if (minuts.innerHTML < 10){
    minuts.innerHTML =  0 + minuts.innerHTML ;


}
}, 60000);

setInterval(() => {
  second.innerHTML = parseInt(second.innerHTML) + 1;
  if (second.innerHTML == 60) {
    second.innerHTML = `0${0}`;
}else if (second.innerHTML < 10){
      second.innerHTML =  0 + second.innerHTML ;


  }
}, 1000);
