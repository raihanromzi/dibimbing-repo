// Create new class without inheritance

// 1. Separate function / method that always used -> Abstraction
// To return an object literal expression requires parentheses () around expression
const yourMethod = (params) => ({
	actionA: () => {
		console.log('Hello from ActionA');
	},
	actionB: () => {
		console.log('Hello from ActionB');
	}
});

// 2. Create Class (Object Composition)
const yourClass = (paramA, paramB) => {
	// 3. Save attribute to object self / state
	const self = {
		paramA, paramB
	};
	// 4. Add Specific Method for this class
	const yourSpecificMethod = (self) => ({
		specificAction: {}
	});
	// 5. Make a collection of attributes, generic methods, and specific methods into one object.
	return Object.assign(self, yourMethod(self), yourSpecificMethod(self));
};