function vowelsAndConsonants(s) {
	const words = s.split('');
	const vowel = ['a', 'i', 'u', 'e', 'o'];
	let consonants = '';
	for (const word of words) {
		if (vowel.includes(word)) console.log(word);
		else consonants += word + '\n';
	}
	console.log(consonants);

}

const factorial = (n) => {
	let num = parseInt(n);
	for (let i = num - 1; i > 0; i--) {
		num *= i;
	}
	return num;
};

function getLetter(s) {
	let letter;
	let firstChar = [...s][0];
	switch (true) {
		case ('aiueo'.includes(firstChar)):
			letter = 'A';
			break;
		case ('bcdfg'.includes(firstChar)):
			letter = 'B';
			break;
		case ('hjklmn'.includes(firstChar)):
			letter = 'C';
			break;
		case ('npqrstvwxyz'.includes(firstChar)):
			letter = 'D';
			break;
	}
	return letter;
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
	let setNums = new Set(nums);
	let arrNums = Array.from(setNums).sort(function (a, b) {
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});
	return arrNums[arrNums.length - 2];
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

let setNums = new Set([2, 3, 6, 6, 5]);
let arrNums = Array.from(setNums);

console.log(setNums);
console.log(arrNums);