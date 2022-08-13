class Human {
	// Encapsulation
	#name;
	#age;
	#height;
	#weight;

	constructor(name, age, height, weight) {
		// Private
		this.#name = name;
		this.#age = age;
		this.#height = height;
		this.#weight = weight;
	}

	get name() {
		return this.#name;
	}

	set name(value) {
		this.#name = value;
	}

	get age() {
		return this.#age;
	}

	set age(value) {
		this.#age = value;
	}

	get height() {
		return this.#height;
	}

	set height(value) {
		this.#height = value;
	}

	get weight() {
		return this.#weight;
	}

	set weight(value) {
		this.#weight = value;
	}

	// Abstraction
	#introduceMySelf() {
	}
}

class Teacher extends Human {
	#school;
	#subject;

	constructor(name, age, height, weight, school, subject) {
		super(name, age, height, weight);
		this.#school = school;
		this.#subject = subject;
	}

	get school() {
		return this.#school;
	}

	set school(value) {
		this.#school = value;
	}

	get subject() {
		return this.#subject;
	}

	set subject(value) {
		this.#subject = value;
	}

	introduceMySelf() {
		return `Hi I'm ${this.name}, I'm teacher at ${this.school} i teach ${this.subject}`;
	}
}

class Employee extends Human {
	#company;
	#position;

	constructor(name, age, height, weight, company, position) {
		super(name, age, height, weight);
		this.#company = company;
		this.#position = position;
	}

	get company() {
		return this.#company;
	}

	set company(value) {
		this.#company = value;
	}

	get position() {
		return this.#position;
	}

	set subject(value) {
		this.#position = value;
	}

	introduceMySelf() {
		return `Hi I'm ${this.name}, I am a ${this.position} at ${this.company}`;
	}
}

const human = new Human('Josh', 20, 168, 55, 'Student');
const teacher = new Teacher('Jane', 34, 150, 40, 'JIS', 'Math');
const employee = new Employee('Jake', 25, 170, 60, 'Grab', 'SE');

console.log(human instanceof Human);
console.log(teacher instanceof Human);
console.log(employee instanceof Human);

console.log(teacher.introduceMySelf());
console.log(employee.introduceMySelf());
