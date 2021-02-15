'use strict';
let days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let months = ["Января",	"Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", 
              "Сентября", "Октября", "Ноября", "Декабря"];
let nowDate = new Date();
let second = nowDate.getSeconds();
let minute = nowDate.getMinutes();
let hour = nowDate.getHours();
let today =  nowDate.getDay() - 1;
let month = nowDate.getMonth();
let year = nowDate.getFullYear();

let getHour = function(number){
    if(number >= 5 && number <= 20 || number === 0){
      return number + " часов";
}    else if (number > 1 && number <= 4 || number >= 22 && number <= 23) {
      return number + " часа";
}
    else if(number === 1 || number === 21){
      return number + " час ";
    }
};
getHour(hour);

let getMinute = function(n){
    n %= 10;
    if(n >= 5 && n <= 20){
return minute + " минут ";
} else if(n >= 2 && n <= 4){
return minute + " минуты ";
} else if(n === 1){
return minute + " минута ";
}
};
getMinute(minute);

let getSeconds = function(s){
    s %= 10;
    if(s >= 5 && s <= 20 || s === 0){
return second + " секунд ";
} else if(s >= 2 && s <= 4 || s === 0){
return second + " секунды ";
} else if(s === 1){
return second + " секунда ";
}
};
getSeconds(second);

let result = ("Сегодня " + days[today] + ", " + nowDate.getDate() + " " + months[month] + " " + year + " года , " + getHour(hour) + "  " + getMinute(minute) + " " + getSeconds(second));
document.write(result);

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
  console.log(day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds);
}

setInterval(dateTime, 1000);






 