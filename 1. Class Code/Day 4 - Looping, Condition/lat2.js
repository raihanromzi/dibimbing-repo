const readline = require('readline-sync');
let num = readline.questionInt('Input Number: ');

let isGenap = num % 2 == 0? 'Genap' : 'Ganjil'
console.log(isGenap);
