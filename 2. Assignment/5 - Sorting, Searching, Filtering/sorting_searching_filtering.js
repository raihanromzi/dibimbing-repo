let users = [
	{firstName: 'Jane', lastName: 'Doe', age: 30},
	{firstName: 'John', lastName: 'Doe', age: 28},
	{firstName: 'Tom', lastName: 'Holland', age: 21},
	{firstName: 'Kylian', lastName: 'Mbappe', age: 21},
	{firstName: 'Jim', lastName: 'Carrey', age: 54},
	{firstName: 'Hugh', lastName: 'Jackman', age: 43},
	{firstName: 'Anne', lastName: 'Hathaway', age: 40}
];

// 1. Find user whose age is 54 and return its index with linear search.
const linearSearch = (json, findMe) => {
	json.forEach((value, index) => {
		for (const objKey in value) {
			if (value[objKey] === findMe) {
				console.log('Index:', index, ' -> ', 'User: ', value);
			}
		}
	});
};

// 2. Find user whose age is 30 and return its index with binary search
const binarySearch = (json, findMe) => {
	// Sort by age
	json = json.sort((a, b) => a.age - b.age);
	let start = 0;
	let end = json.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		console.log(`Mid: ${mid}, Start ${start}, End: ${end}`);
		if (findMe === json[mid].age) {
			console.log('Index:', mid, ' -> ', 'User: ', json[mid]);
			break;
		} else if (findMe >= json[mid].age) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
};

// 3. Sort the above array based on the age with bubble sort
const bubbleSort = (json) => {
	for (let i = 0; i < json.length; i++) {
		for (let j = 0; j < json.length - i - 1; j++) {
			if (json[j].age >= json[j + 1].age) {
				let temp = json[j];
				json[j] = json[j + 1];
				json[j + 1] = temp;
				console.log(json);
			}
		}
	}
};

// 4. Sort the above array based on the age with selection sort
const selectionSort = (json) => {
	for (let i = 0; i < json.length; i++) {
		let minimum = json[i].age;
		for (let j = i + 1; j < json.length; j++) {
			if (json[j].age <= minimum) {
				minimum = json[j].age;
				let temp = json[j];
				json[j] = json[i];
				json[i] = temp;
				console.log(json);
			}
		}
	}
};

// 5. Sort the above array based on the age with insertion sort
const insertionSort = (json) => {
	for (let i = 1; i < json.length; i++) {
		let mark = json[i];
		let j = i - 1;
		while (j >= 0 && mark.age < json[j].age) {
			json[j + 1] = json[j];
			j = j - 1;
		}
		json[j + 1] = mark;
	}
	console.log(json);
};

// 6. Filter users whose age is >= 30 (use normal filter and JavaScript filter)
const filterNormal = (json, findMe) => {
	const result = [];
	for (const element of json) {
		for (const key in element) {
			if (element[key] >= findMe) {
				result.push(element);
			}
		}
	}
	return result;
};

console.log(filterNormal(users, 30));

console.log(users.filter(value => value.age >= 30));






