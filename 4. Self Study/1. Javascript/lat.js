const restaurant = {
	name: 'KFC',
	city: 'JKT',
	'favorite drink': 'Tea',
	'favorite food': 'Chicken',
	'isVegan': false
};

let {name, 'favorite drink': favoriteDrink} = restaurant;

const currency = new Map([["USD", 14000], ["JPY", 131], ["SGD", 11000], ["MYR", 3500]]);
const priceInJPY = 5000;
const priceInIDR = priceInJPY * currency.get('JPY');

function minimal(a, b) {
	return a === b ? a : Math.min(a, b);
}

function power(a, b) {
	return a ** b;
}

console.log(power(7, 3));


