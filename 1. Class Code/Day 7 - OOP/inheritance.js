class Car {
	#door;
	#seat;
	#fuel;
	#capacity;
	#drivingRange;

	constructor(door, seat, capacity, fuel) {
		this.#door = door;
		this.#seat = seat;
		this.#capacity = capacity;
		this.#fuel = fuel;
		this.#drivingRange = fuel * capacity;
	}

	get door() {
		return this.#door;
	}

	set door(value) {
		this.#door = value;
	}

	get seat() {
		return this.#seat;
	}

	set seat(value) {
		this.#seat = value;
	}

	get fuel() {
		return this.#fuel;
	}

	set fuel(value) {
		this.#fuel = value;
	}

	get capacity() {
		return this.#capacity;
	}

	set capacity(value) {
		this.#capacity = value;
	}

	get drivingRange() {
		return this.#drivingRange;
	}

	set drivingRange(value) {
		this.#drivingRange = value;
	}

	printSpecs() {
		console.log(`The specs of this car is ${this.door} ${this.fuel} ${this.seat} ${this.capacity} ${this.drivingRange}`);
	}
}

class ElectricCar extends Car {
	#batterySize;

	constructor(door, seat, batterySize) {
		super(door, seat, 0, 0); // New Car()
		this.#batterySize = batterySize;
		this.drivingRange = batterySize * 2;
	}


	get batterySize() {
		return this.#batterySize;
	}

	set batterySize(value) {
		this.#batterySize = value;
	}


	printSpecs() {
		super.printSpecs();
	}
}

const toyota = new Car(1, 2, 1000, 10);
toyota.printSpecs();

const tesla = new ElectricCar(1, 2, 1000);
tesla.printSpecs();

console.log(toyota instanceof Car);
console.log(tesla instanceof Car);