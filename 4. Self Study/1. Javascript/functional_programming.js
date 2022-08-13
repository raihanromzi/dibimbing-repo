// Focus on 'What to solve' not 'How to solve'

// Imperative Way -> How to solve
const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark1 = [];

for (let i = 0; i < names1.length; i++) {
	newNamesWithExcMark1.push(`${names1[i]}!`);
}

console.log(newNamesWithExcMark1);

// Declarative Way -> What to solve -> What's the goal?
const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark2 = names2.map((name) => `${name}!`);

console.log(newNamesWithExcMark2);


// FUNCTIONAL PROGRAMMING
// Concept: Pure Function, Immutability, Recursive, dan High-Order Function.

// PURE FUNCTION
// Requires the function not to depend on an outside value or its parameter. (Fungsi yang Berdiri Mandiri, tidak mengakses variable dari luar)
// Dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja.
// Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

// Pastikan 3 konsep ini ada pada fungsi yang Anda buat untuk mengetahui pure atau belum :
// - Mengembalikan nilai yang sama bila input nya (nilai parameter) sama.
// - Hanya bergantung pada argumen yang diberikan.
// - Tidak menimbulkan efek samping.
let PI = 3.14;

const hitungLuasLingkaranImpureFunction = (jariJari) => {
	return PI * (jariJari * jariJari);
};

const hitungLuasLingkaranPureFunction = (jariJari) => {
	return 3.14 * (jariJari * jariJari);
};


// IMMUTABILITY
// Objek tidak boleh diubah setelah objek tersebut dibuat
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({names, newNamesWithExcMark});

const user = {
	firstname: 'Harry',
	lastName: 'Protter', // ups, typo!
};

const createUserWithNewLastName = (newLastName, user) => ({...user, lastName: newLastName});
const newUser = createUserWithNewLastName('Potter', user);
console.log(newUser);


// RECURSIVE
// Memanggil dirinya sendiri
const countDown = start => {
	console.log(start);
	if (start > 0) countDown(start - 1);
};

countDown(10);

// HIGHER ORDER FUNCTION
// JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data.
// Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

// Teknik Higher-Order Function biasanya digunakan untuk:
// 	- Abstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
// 	- Membuat utilities yang dapat digunakan di berbagai tipe data.
// 	- Membuat teknik currying atau function composition.