// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String 
// Setiap kata memiliki huruf Capital pada awal huruf nya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
/* 
Expected Output:
Selamat Pagi Semua Haloo
Hari Ini Adalah Hari Libur
*/
// berikan comment penjelasan pada baris kode yang dianggap penting
// Tidak boleh langsung print expected output

// Jawaban: 

function wordFormatter(word) {
	// Ubah semua word ke lowerCase dulu, lalu split dengan spasi, lalu UpperCase huruf ke 0 + huruf ke 1 sampai akhir, lalu join
	return word.toLowerCase().split(' ').map((value) => {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}).join(' ');
}

console.log(wordFormatter("SeLamAT PAGi semua halOo"));
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"));