'use strict';
let days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let months = ["Января",	"Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", 
              "Сентября", "Октября", "Ноября", "Декабря"];




let clock = function() {
  let mytime = new Date();
  let seconds = mytime.getSeconds();
  let minutes = mytime.getMinutes();
  let hours = mytime.getHours();
  let today =  mytime.getDay() - 1;
  let month = mytime.getMonth();
  let year = mytime.getFullYear();

  let getHour = function(number){
    if(number >= 5 && number <= 20 || number === 0){
      return number + " часов ";
}    else if (number > 1 && number <= 4 || number >= 22 && number <= 23) {
      return number + " часа";
}
    else if(number === 1 || number === 21){
      return number + " час ";
    }
};
getHour(hours);
let getMinute = function(n){
    n %= 10;
    if(n >= 5 && n <= 20 || n === 0){
return minutes + " минут ";
} else if(n >= 2 && n <= 4){
return minutes + " минуты ";
} else if(n === 1){
return minutes + " минута ";
}

};
getMinute(minutes);
let getSeconds = function(s){
    s %= 10;
    if(s >= 5 && s <= 20 || s === 0){
return seconds + " секунд ";
} else if(s >= 2 && s <= 4 || s === 0){
return seconds + " секунды ";
} else if(s === 1){
return seconds + " секунда ";
}
};
getSeconds(seconds);
  let currentTime = "Сегодня " + days[today] + ", " + mytime.getDate() + " " + months[month] + " " + year + " года , " + getHour(hours) + getMinute(minutes) + getSeconds(seconds);
  document.getElementById("Timer").firstChild.nodeValue = currentTime;
}

setInterval(clock, 1000);




function zeroFormat(x)
    {
        if (x < 10)
        {
            x = '0' + x;
        }
        return x;
    }
function dateTime(){
  let nowDay = new Date();
  let day = zeroFormat(nowDay.getDate());
  let month = zeroFormat(nowDay.getMonth()+1);
  let year = nowDay.getFullYear();
  let hours = zeroFormat(nowDay.getHours());
  let minutes = zeroFormat(nowDay.getMinutes());
  let seconds = zeroFormat(nowDay.getSeconds());
//   console.log(day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds);
}

setInterval(dateTime, 1000);






 