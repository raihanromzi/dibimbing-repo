/* Contoh Asynchronous
console.log('Hello');
setTimeout(() => {
	console.log('Bye!');
}, 3000); // 3 sec
console.log('Welcome!');
 */

// Callback Function
const orderCoffee = (callback) => {
	let coffee = null;
	console.log('Sedang Membuat Kopi, Silahkan Tunggu');
	setTimeout(() => {
		coffee = 'Kopi Sudah Jadi';
		callback(coffee);
	}, 3000);
	// return coffee; HAPUS
};

orderCoffee((coffee) => {
	console.log(coffee);
});