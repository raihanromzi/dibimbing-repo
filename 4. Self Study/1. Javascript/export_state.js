// Object Composition
const multiply = (self) => ({
	sum: () => self.a * self.b
});

const canAddTwoNumber = (a, b) => {
	const self = {
		a, b
	};

	return Object.assign(self, multiply(self));
};

// Export agar bisa digunakan pada file lain
// module.exports = {canAddTwoNumber};
// console.log(module);

// Export ES6
// 1 Value, object, function, variable
export default multiply();

// Lebih
// export {coffeeStock, isCoffeeMachineReady};
