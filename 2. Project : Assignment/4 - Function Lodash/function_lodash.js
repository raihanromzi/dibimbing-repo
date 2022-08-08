const _ = require('lodash')

let users1 = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 28,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 30,
        gender: "female"
    }
]
let users2 = [
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Ane",
        lastName: "Hathaway",
        age: 40,
        gender: "female"
    },
]

// 1. Show an array that is a combination of these 2 arrays
// Function
const combineArraysFunc = (arr1, arr2) => {
    return arr1.concat(arr2)
}

// Lodash
const combineArrayLodash = _.concat(users1, users2)

// 2. Show first name of all users
// Function
const showFirstNameFunc = (arr) => {
    return arr[0]
}
// 3. Show user age under 30 and gender is female
// Function
const showAge30FemaleFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['age'] === 30 && arr[i]['gender'] === 'female') {
            return arr[i]
        }
    }
}

// Lodash
let indexFound1 = _.findIndex(users1, function (o) {
    return o.age === 30 && o.gender === 'female'
})

let indexFound2 = _.findIndex(users2, function (o) {
    return o.age === 30 && o.gender === 'female'
})

// 4. Show user who have firstname that starts with "j" (case-insensitive)
const firstNameJFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['firstName'].charAt(0).toLowerCase() === 'j') {
            return arr[i]
        }
    }
}

let indexFound1J = _.findIndex(users1, function (o) {
    return o.firstName.charAt(0).toLowerCase() === 'j'
})
let indexFound2J = _.findIndex(users2, function (o) {
    return o.firstName.charAt(0).toLowerCase() === 'j'
})

// 5. Show user who have last name that contains letter "a" (case-insensitive)
const firstNameAFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['lastName'].includes('a') || arr[i]['lastName'].includes('A')) {
            return arr[i]
        }
    }
}
console.log('Function')
console.log(firstNameAFunc(users1))
console.log(firstNameAFunc(users2))


console.log('Lodash')
console.log(_.filter(users1, function (o) {
    return o.lastName.toLowerCase().includes('a');
}))
console.log(_.filter(users2, function (o) {
    return o.lastName.toLowerCase().includes('a');
}))
