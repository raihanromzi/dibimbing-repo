// Soal:
// Terdapat suatu kumpulan string yang yang susunan kalimat nya terbalik
// Tugas teman teman adalah mengubah kalimat tersebut menjadi kalimat yang benar

// "drow olleh"  menjadi "Hello word."
// "eko atad" menjadi menjadi "Data oke."
// "gnitset tinu" menjadi "Unit testing."

// Tidak boleh langsung print expected output

// Expected Output:

// Hello word. true
// Data oke. true
// Unit testing. true

// NOTE : Berikan comment penjelasan pada baris kode yang menurut anda penting
// gunakan perulangan/kode lain dan array untuk menampung kata


// Jawaban:
function unitTest(input, output) {
  console.log(output, input === output)
}


function reverse(str) {
  // write your code here
  const reversed = str.split('').reverse().join('')
  return reversed.charAt(0).toUpperCase() + reversed.slice(1) + '.'
}


unitTest(reverse('drow olleh'), 'Hello word.')
unitTest(reverse('eko atad'), 'Data oke.')
unitTest(reverse('gnitset tinu'), 'Unit testing.')
