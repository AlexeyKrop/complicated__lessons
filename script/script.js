'use strict';
let week = ["Понедельник\n", `Вторник\n`, "Среда\n", "Четверг\n", "Пятница\n", "Суббота\n", "Воскресенье\n"];
let now = new Date();
let today = (now.getDay() - 1);
for (let i = 0; i < week.length; i++){
  if (i === 5 || i === 6) {
    console.log(week[i].italics());
  } else if (i === today) {
    console.log(week[i].bold());
  }
}
console.log(week.join(''));




 