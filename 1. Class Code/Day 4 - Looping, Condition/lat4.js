const readline = require('readline-sync');
let num = readline.questionInt('Input Number: ');

for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) console.log(i);
}