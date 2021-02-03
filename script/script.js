'use strict';
let getString = function(element) {
  if(typeof(element) !== 'string') {
    return 'Введите строку';
  } 
  element = element.trim();
  if(element.length > 30) {
    return element.substring(0, 30) + ' ...';
  }
};
getString();