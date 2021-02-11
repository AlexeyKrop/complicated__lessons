'use strict';
let week = ['Понедельник \n', `Вторник \n`, "Среда \n", "Четверг\n", "Пятница\n", "Суббота\n", "Воскресенье\n"];
let now = new Date();
let today = (now.getDay() - 1);

for (let i = 0; i < week.length; i++){
  if (i === 5 || i === 6) {
    document.write(week[i].italics());
  } else if (i === today) {
    document.write(week[i].bold());
  } else {
    document.write(week[i]);
  }
}




 