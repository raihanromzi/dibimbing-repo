let score = 100;
let result;

if (score <= 20) {
    result = 'E';
} else if (score <= 40) {
    result = 'D';
} else if (score <= 60) {
    result = 'C';
} else if (score <= 80) {
    result = 'B';
    console.log('Lulus');
} else if (score <= 100) {
    result = 'A';
    console.log('Lulus');
} else {
    result = 'Invalid';
}

console.log(result);