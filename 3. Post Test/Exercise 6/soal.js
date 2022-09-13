// Soal: 
// Pada suatu toko terdapat beberapa kaos kaki
// warna biru dinyatakan dengan 1
// warna hijau dinyatakan dengan 3
// warna hitam dinyatakan dengan 5
// warna merah dinyatakan dengan 8
// koleksi kaos kaki pada toko dinyatakan dengan array [1, 1, 3, 3, 5, 5, 5, 5]
// disebut sebagai sepasang kaos kaki apabila kaos kaki tersebut memiliki pasangan
// contoh :
// [1,3,3,3] => pada array ini, ada 1 kaos kaki biru, dan 3 kaos kaki hijau. Maka hasilnya ada sepasang(2) kaos kaki hijau dan masing2 1 kaos kaki biru dan 1 kaos kaki hijau lainnya yang tidak memiliki pasangan

// Expected Output :
// 4
// 2

// Berapa pasang kaos kaki kah yang tersedia?
// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pad baris kode yang dirasa penting
// Clue : Gunakan array, perulangan dan pengkondisian

// Jawaban:
function sockMerchant(word) {
  const wordSpread = [...word]
  let counterWord = {}
  let countPair = 0
  for (const element of wordSpread) {
    if (counterWord[element]) {
      counterWord[element]++
      if (counterWord[element] % 2 === 0) {
        countPair++
      }
    } else {
      counterWord[element] = 1
    }
  }
  return countPair
}

console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]))
console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]))
console.log(sockMerchant([1, 3, 3, 3]))


