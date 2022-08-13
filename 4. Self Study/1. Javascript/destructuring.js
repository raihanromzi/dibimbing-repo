// Object & Array
const profile1 = {
	firstName: "John",
	lastName: "Doe",
	age: 18
};

const profile2 = {
	firstName: "John",
	lastName: "Doe",
	age: 18
};

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// Spread Operator
// Array [...arr1, ...arr2]
// Object {...obj1, ...obj2}
console.log({...profile1, ...profile2});

// Destructuring Object
// Same as object property, if not found give default value, change name variable (:)
// Same as profile.firstName
const {firstName: localFirstName, lastName: localLastName, notFound = true} = profile1;
console.log(`${localFirstName} ${localLastName} ${notFound}`);

// Destructuring Assignment
let firstName = "Dimas";
let age = 20;
({firstName, age} = profile2);
console.log(`${firstName} ${age}`);

// Destructuring Array
// Access based on index
const [firstFood, secondFood, , fourthFood] = favorites;
console.log(`${firstFood} ${secondFood} ${fourthFood}`);

// Destructuring Assignment Array
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("a: " + a);
console.log("b: " + b);
