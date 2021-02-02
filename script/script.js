let lang = null;
if (lang === 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

let arr = [];
arr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
arr.ru = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let question = prompt('Введите язык недели, "en", "ru"');
let result = (question === 'en') ? console.log(arr.en) :
             (question === 'ru') ?  console.log(arr.ru):
             console.log('Неизвестный язык');
             
let namePerson = null;
  let answer = (namePerson === 'Артем') ? console.log('директор'):
  (namePerson === 'Максим') ? console.log('преподаватель'):
  console.log('студент');