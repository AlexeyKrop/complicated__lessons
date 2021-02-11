'use strict';
let week = ['Понедельник \n', `Вторник \n`, "Среда \n", "Четверг\n", "Пятница\n", "Суббота\n", "Воскресенье\n"];
let now = new Date();
let today = (now.getDay() - 1);
for (let i = 0; i < week.length; i++){
  if (i === 5 || i === 6) {
    document.write(`<p><i>${week[i]}</i></p>`);
  } else if (i === today) {
    document.write(`<p><b>${week[i]}</b></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
  
}




 