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

let arr = ['en', 'ru'];
let firstElement = arr[0];
let result = (firstElement === 'en') ? console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday') :
console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');

let namePerson = null;
  let answer = (namePerson === 'Артем') ? console.log('директор'):
  (namePerson === 'Максим') ? console.log('преподаватель'):
  console.log('студент');