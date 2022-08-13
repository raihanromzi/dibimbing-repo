// Create Object
// 2 Ways

// 1. Class
class Person {
	// Constructor
	constructor(name, age) {
		// Global class variable / properties
		// Private (_name)
		this._name = name;
		this._age = age;
	}

	// Static Method
	static Run() {
		console.log(`Static Method: Person can run`);
	}

	// Method
	sayMyName() {
		console.log(`Class: Hello my name is ${this.name}, i am ${this.age} y.o`);
	}
}

const person1 = new Person('Raihan', 20);
person1.sayMyName();
// Without instance
Person.Run();

// Prototype Function
function PersonProto(name, age) {
	// Private
	this._name = name;
	this.age = age;
}

PersonProto.prototype.sayMyNameProto = function () {
	console.log(`Prototype Function: Hello my name is ${this.name}, i am ${this.age} y.o`);
};

const person2 = new PersonProto('Raihan', 20);
person2.sayMyNameProto();


// Inheritance
class Mail {
	constructor(author) {
		this.from = author;
		this._contacts = [];
	}

	sendMessage(msg, to) {
		console.log(`you send: ${msg} to ${to} from ${this.from}`);
		this._contacts.push(to);
	}

	showAllContacts() {
		return this._contacts;
	}

}

class WhatsApp extends Mail {
	constructor(username, isBusinessAccount, phoneNumber) {
		// Overriding
		super(phoneNumber);
		this.username = username;
		this.isBussinessAccount = isBusinessAccount;

	}

	// Overriding Method
	// Access Parent method -> super.methodName();
	sendMessage(msg, to) {
		super.sendMessage(msg, to);
		console.log('Access from child');
	}


}

const wa1 = new WhatsApp('Josh', true, '6281111111');
wa1.sendMessage('Hello', 'Me');

