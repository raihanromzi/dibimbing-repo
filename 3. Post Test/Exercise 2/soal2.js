// Soal:
// Hilangkan Karakter Berulang yang terdapat pada String
// Clue : menggunakan perulangan
// Tidak boleh langsung print expected output

/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/

// Jawaban:
function removeDuplicates(str) {
	// let arrayResults = []
	let arrayStrings = new Set(str.split(''));
	// for (const string of arrayStrings) {
	//     if (arrayResults.indexOf(string) === -1) arrayResults.push(string)
	// }
	// return arrayResults
	return Array.from(arrayStrings);
}

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
console.log(removeDuplicates("RRRRROOOAAQPPP"));