// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output : 
// 9
// 6

let vowels = ['a', 'i', 'u', 'e', 'o']; // vokal

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
function countVowels(str, vowels) {
	let countVowel = 0;
	// Destructuring array, kemudian loop ke setiap element
	[...str].forEach((item) => {
		// Check if vowels or not
		if (vowels.includes(item)) countVowel++;
	});
	return countVowel;
}

console.log(countVowels("Selamat Pagi Duniaa Manji!!", vowels));
console.log(countVowels("aku suka ngoding", vowels));