class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = 'ValidationError';
	}
}

const validateNumberInput = (input1, input2, input3) => {
	if (!Number.isFinite(input1)) {
		throw new ValidationError('Argumen pertama harus number');
	} else if (!Number.isFinite(input2)) {
		throw new ValidationError('Argumen kedua harus number');
	} else if (!Number.isFinite(input3)) {
		throw new ValidationError('Argumen ketiga harus number');
	}
};

const detectTriangle = (a, b, c) => {
	try {
		validateNumberInput(a, b, c);
	} catch (error) {
		return error.message;
	}
	if (a === b && b === c) {
		return 'Segitiga sama sisi';
	}

	if (a === b || a === c || b === c) {
		return 'Segitiga sama kaki';
	}

	return 'Segitiga sembarang';

};

console.log(detectTriangle(1, 2, 'a'));
try {
	const arr = [1, 2, 3, 4];
	for (let i = 0; i <= 4; i++) {
		console.log(arr[i]);
	}
} catch (e) {
	console.log("Out of bounds");
}