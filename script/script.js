'use strict';
let arr = ['32','22','12','2','4','5','64'];
for(let i = 0; i < arr.length; i++){
if(arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}


let n = 110;
let count = 0;

for(let i = 2; i <= n; i++){
  for(let j = 1; j <= i; j++){
    if(i % j === 0){
      count++;
    }
    }
    if(count === 2){
      console.log('Делители числа ' + i + ': 1' + ' и ' + i);
    }
    count = 0;
  }

