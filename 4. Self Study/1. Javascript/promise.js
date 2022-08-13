// Promise / Janji
// Pending, Fulfilled, Rejected
// Dari Pending bisa Fulfilled atau Rejected

// Executor Function / Resolver Function
const executorFunction = (resolve, reject) => {
	const isCoffeeMakerReady = true;
	if (isCoffeeMakerReady) {
		resolve('Kopi Berhasil Dibuat');
	} else {
		reject('Mesin Kopi Tidak Bisa Dibuat');
	}
};

const makeCoffee = () => {
	return new Promise(executorFunction);
};

const coffeePromise = makeCoffee();
// coffeePromise.then(onFullFilled, onRejected);
// console.log(coffeePromise);


// EXAMPLE
const stock = {
	coffeeBeans: 250,
	water: 1000,
};

const checkStock = () => {
	return new Promise((resolve, reject) => {
		if (stock.coffeeBeans >= 16 && stock.water >= 250) {
			resolve("Stok cukup. Bisa membuat kopi");
		} else {
			reject("Stok tidak cukup");
		}
	});
};

const handleSuccess = resolvedValue => {
	console.log(resolvedValue);
};

const handleFailure = rejectionReason => {
	console.log(rejectionReason);
};

checkStock()
	.then(handleSuccess)
	.catch(handleFailure);