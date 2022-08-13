// Linear Search -> O(n)
// 1024 -> 1024
const linearSearch = (arr, x) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === x) {
			return `Found at index ${i}`;
		}
	}
	return 'Not Found';
};

// Binary Search -> O(log n)
// 1024 -> 10 (Way Faster)
const binarySearch = (arr, x) => {
	let end = arr.length;
	for (let start = 0; start < end;) {
		let mid = Math.floor((start + end) / 2);
		if (x === arr[mid]) return `Found ${x} in Index ${mid}`;
		else if (x > arr[mid]) start = mid + 1;
		else end = mid - 1;
	}
};

const arr = [11, 17, 18, 45, 50, 71, 95];
console.log(binarySearch(arr, 71));
