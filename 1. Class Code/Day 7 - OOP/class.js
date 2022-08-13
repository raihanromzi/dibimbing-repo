class Car {
	#doors;
	#seats;
	#capacity;

	// Petunjuk membuat class menjadi object
	// Construct = Membangun
	constructor(doors, seats, capacity) {
		this.#doors = doors;
		this.#seats = seats;
		this.#capacity = capacity;

		// Bisa memanggil method
		this.printSpecs();
	}

	// Mengikat ke class
	static sum() {
		return this;
	}

	printSpecs() {
		console.log(`Car Specs`);
	}
}

// Instantiation
// Audi instance of Car
const audi = new Car(2, 4, 2);
console.log(audi);
audi.printSpecs();
console.log(Car.sum());
