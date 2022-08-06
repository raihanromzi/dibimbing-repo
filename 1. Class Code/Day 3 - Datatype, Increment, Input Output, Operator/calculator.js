const readline = require('readline-sync');
let num1 = readline.questionInt('Number 1: ');
let num2 = readline.questionInt('Number 2: ');

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} ^ ${num2} = ${num1 ^ num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);

console.log(`++${num1} ++${num2} = Value ${++num1} ${++num2}`);
console.log(`--${num1} --${num2} = Value ${--num1} ${--num2}`);
console.log(`${num1}++ ${num2}++ = Value ${num1++} ${num2++}`);
console.log(`${num1}-- ${num2}-- = Value ${num1--} ${num2--}`);

console.log(`${num1} > ${num2}? ${num1 > num2}`);
console.log(`${num1} < ${num2}? ${num1 < num2}`);
console.log(`${num1} === ${num2}? ${num1 === num2}`);
console.log(`${num1} !== ${num2}? ${num1 !== num2}`);