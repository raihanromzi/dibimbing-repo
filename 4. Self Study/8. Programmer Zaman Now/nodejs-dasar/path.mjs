// Mengekstrak informasi dari Path
import path from 'path'

const file = '/Users/Mike/Text.txt'

console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))