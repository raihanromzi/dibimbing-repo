function compareTriplets(a, b) {
	let pointA = 0;
	let pointB = 0;
	let result = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) pointA++;
		else if (a[i] < b[i]) pointB++;

	}
	return result.concat(pointA, pointB);
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));