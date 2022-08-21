// Soal: 
// Seorang Coder diminta untuk men solve suatu baris deret bilangan
// deret bilangan tersebut adalah 0,1,1,2,3,5,8,13,21,......
// dari pola yang ada buat lah fungsi yang dapat menampilkan deret bilangan hingga 20 bilangan
// clue: menggunakan perulangan

/*
Expected Output
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
*/

// Tidak boleh langsung print expected output
// berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:

function fibonacci(n) {
	let list_fib = [0, 1];
	for (let i = 0; i < n - 1; i++) {
		list_fib.push(list_fib[i] + list_fib[i + 1]);
	}

	console.log(list_fib.join('\n'));

}

fibonacci(20);