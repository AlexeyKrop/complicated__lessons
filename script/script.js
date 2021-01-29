let num = 266219;
let str = String(num);
let sum = 0;
for (let i = 0; i < str.length; i++) {
  sum += +str[i];
}
sum **= 3;
let strSum =String(sum);
let firstNumber = strSum[0];
let secondNumber = strSum[1];
console.log(firstNumber);
console.log(secondNumber);