const readline = require('readline-sync');
let umur = readline.questionInt('Input Umur: ');

let invalid = umur < 0;
let bayi = umur < 2;
let batita = umur < 4;
let balita = umur < 5;
let anak_anak = umur < 13;
let remaja = umur < 18;
let pemuda = umur < 31;
let dewasa = umur < 61;

if (invalid) {
  console.log('Tidak Valid');
} else if (bayi) {
  console.log('Bayi');
} else if (batita) {
  console.log('Batita');
} else if (balita) {
  console.log('Balita');
} else if (anak_anak) {
  console.log('Anak-anak');
} else if (remaja) {
  console.log('Remaja');
} else if (pemuda) {
  console.log('Pemuda');
} else if (dewasa) {
  console.log('Dewasa');
}
