const readline = require('readline-sync');
let day = readline.question('Input Day: ');

if (day == 1) {
  console.log('Senin');
} else if (day == 2) {
  console.log('Selasa');
} else if (day == 3) {
  console.log('Rabu');
} else if (day == 4) {
  console.log('Kamis');
} else if (day == 5) {
  console.log('Jumat');
} else if (day == 6) {
  console.log('Sabtu');
} else if (day == 7) {
  console.log('Minggu');
} else {
  console.log('Input Salah');
}

let weekdayObj = {
  'sabtu': true,
  'minggu': true
}

if (weekdayObj[day]) console.log('hore libur pake 1 line if else')
else console.log('masi harus kerja pake if else')
