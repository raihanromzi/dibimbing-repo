//String
let name = 'Raihan';
console.log(name);
console.log(typeof name);

//Dynamic typing
name = 0;
console.log(name);
console.log(`Type: ${typeof name}`);

//Backtick
let sentence = `My name is ${name}
I am a student, I am a developer`;
console.log(`Hello ${name}`);

//Number
let age = 20;
let number = 1.1;
console.log(`Age: ${age +number}`);

//Boolean
let isTrue = true;
let isFalse = false;
console.log(`True: ${isTrue}`);
console.log(`False: ${isFalse}`);

//Null, Undefined
let isNull = null;
let isUndefined;
console.log(`Null: ${typeof isNull}, Undefined: ${typeof isUndefined}`)

//Array, Object
let person = {
    'name': 'Raihan',
    'age': 20,
    'sound': ()=>{
        return 'Uu uu';
    }
}
console.log(`Name: ${person.name}, Age: ${person.age}, Sound: ${person.sound()}`);

//Function
let f = () => {
    console.log(`Typeof ${typeof f}`);
}
console.log(f);