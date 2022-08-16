import { EventEmitter } from 'events';

const myEventEmitter = new EventEmitter(); // Setiap Instance terdapat on, emit()
const makeCoffee = ({ name }) => {
	console.log(`Kopi ${name} telah dibuat!`);
};
const makeBill = ({ price }) => {
	console.log(`Total ${price}!`);
};

// Naming convention: lebih dari 2 kata pisahkan dengan (-)
// Jika terjadi event 'coffee-order' maka makeCoffee akan dijalankan
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

// Fungsi menampung events dengan nama listener / handler
const onCoffeeOrderListener = ({ name, price }) => {
	makeCoffee({ name });
	makeBill({ price });
};
myEventEmitter.on('coffee-order', onCoffeeOrderListener);

// Membangkitkan event -> emit()
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });