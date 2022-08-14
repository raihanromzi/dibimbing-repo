// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
/*
Expected Output:
{ max: 67, min: 6 }
*/
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:
const array = [31, 9, 54, 11, 43, 6, 67];


function maxMin(array) {
    // write your code here
    const minmax = {};
    // -Infinity
    let max = Math.max();

    // Infinity
    let min = Math.min();
    for (const i of array) {
        if (max <= i) {
            max = i;
        }
        if (min >= i) {
            min = i;
        }
    }
    minmax["max"] = max;
    minmax["min"] = min;
    return minmax;
}
console.log(maxMin(array))
