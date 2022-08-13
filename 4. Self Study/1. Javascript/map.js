// [
// 	[key, value]
// 	[key, value]
// ]
// Key can be any data types, not like object that key must be string or symbol
const myMap = new Map([['1', 'a string key'], [2, 'a number key'], [true, 'a boolean key']]);
console.log(myMap);
console.log(`Size: ${myMap.size}`);
console.log(`Get value of key 1: ${myMap.get('1')}`);

// Add new key-value
myMap.set(3, 'new value');
console.log(myMap);

// USE GET SET MUST FOR MAP!