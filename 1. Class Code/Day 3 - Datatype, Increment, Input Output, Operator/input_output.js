const readline = require('readline-sync')

let username = readline.question('Input Username: ')
let password = readline.question('Input Password: ', { hideEchoBack: true })
let age = readline.questionInt('Input Usia: ', { limitMessage: 'Input Number!' })

console.log(`Halo ${username}, password ${password}, age ${age}`);

