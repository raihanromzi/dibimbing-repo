// Global object yang bisa diakses dimanapun
// console.log(Object.getOwnPropertyNames(global));
console.log(process.env.NODE_ENV);
console.log(process.memoryUsage());

// const server = new Server({
// 	host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// node first.js raihan romzi
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);

console.log(process.argv);