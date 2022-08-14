// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output : 
// Selamat Pagi Dunia
// Aku Suka Javascript

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
function manipulateString(str) {
	// Using regex, then split, and then join
	return str.split(/(?=[A-Z])/).join(' ');
}

console.log(manipulateString("SelamatPagiDuniaTipuTipu"));
console.log(manipulateString("AkuSukaJavascriptTapiBoongBagusanTypescript"));

