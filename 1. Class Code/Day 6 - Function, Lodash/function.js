function square(a) {
	return a ** 2;
}

function sum(a, b) {
	return a + b;
}

// Math Function -> Without Substitution
function sumOfTwoSquares(x, y) {
	return x ** 2 + y ** 2;
}

// Function Declaration
// Math Function -> With Substitution
function sumOfTwoSquares2(x, y) {
	return sum(square(x), square(y));
}

// Invocation
console.log(sumOfTwoSquares2(1, 2));

// Put in Variable
let nums = sumOfTwoSquares(sumOfTwoSquares(1, 2), 3);
console.log(nums);

// Variadic Function
function unlimitedString(...strings) {
	return strings.join(' ');
}

console.log(unlimitedString('A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C'));

// Callback Function
// Flexible function as parameter
function sumOfTransformedValue(x, y, func) {
	return func(x) + func(y);
}

// Arrow Function -> Anonymous Function
// usually for Callback
// Syntactic Sugar
const sys = (x, y) => {
	return square(x) + square(y);
};

const sysAnonymous = function (x, y) {
	return square(x) + square(y);
};

// Arrow Function return object
const hello = () => ({'foo': 'A'});
console.log(hello());