try {
	console.log("Awal blok try");   // (1)
	errorCode;                      // (2)
	console.log("Akhir blok try");  // (3)
} catch (error) {
	console.log("Terjadi error!");
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);// (4)
} finally {
	// Selalu di eksekusi
	console.log("Akan tetap dieksekusi");
}

let goodJson = '{ "name": "Yoda", "age": 20 }';
let badJson = '{ bad json}';

try {
	let user = JSON.parse(badJson);
	console.log(user);
	if (!user.name) {
		throw new SyntaxError("'name' is required.");
	}
	console.log(user.name);
	console.log(user.age);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
	if (error instanceof SyntaxError) {
		console.log(`JSON Error: ${error.message}`);
	} else if (error instanceof ReferenceError) {
		console.log(error.message);
	} else {
		console.log(error.stack);
	}
}

class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}