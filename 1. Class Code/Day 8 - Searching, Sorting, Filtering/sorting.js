// Bubble Sort
const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};

// Selection Sort
const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let minimum = arr[i];
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < minimum) {
				minimum = arr[j];
				let temp = arr[i];
				arr[i] = minimum;
				arr[j] = temp;
			}
		}
	}
	return arr;
};

function insertionSort(arr, n) {
	let i, key, j;
	for (i = 1; i < n; i++) {
		key = arr[i]; // Merah
		j = i - 1; // 1

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		// arr[j] = Hijau
		// arr[j] sampai arr[0] = Orange

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1; // 0 - 1 = -1
		}
		arr[j + 1] = key;
	}

	console.log(arr);
}