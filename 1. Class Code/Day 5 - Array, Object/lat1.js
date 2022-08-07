// const arr1 = [2, 4, 6, 8, 10]
// const arr2 = [2, 3, 10, 5, 8, 20, 1, 2]

// let expArr = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= arr[i]
//     }
//     return arr
// }
// console.log(expArr(arr1))

// let evenArr = function (arr) {
//     let arrResult = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) arrResult.push(arr[i])
//     }
//     return arrResult
// }
// console.log(evenArr(arr2))

// let evenArr2 = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) arr.splice(i, 1)
//     }
//     return arr
// }
// console.log(evenArr2(arr2))

// const arr2 = [2, 3, 10, 5, 8, 20]
// console.log(arr2)
// arr2.splice(0, 1)
// console.log(arr2)
// arr2.splice(1, 1)
// console.log(arr2)
// arr2.splice(2, 1)
// console.log(arr2)
// arr2.splice(3, 1)
// console.log(arr2)
// arr2.splice(4, 1)
// console.log(arr2)
// arr2.splice(5, 1)
// console.log(arr2)

let arr2 = [2, 11, 10, 3, 5, 20]
let i = 0;
for (; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        console.log(`index i in loop : ${i}`)
        console.log(`length : ${arr2.length}`)
        console.log(arr2)
        arr2.splice(i, 1)

    }


}
console.log(`length after loop : ${arr2.length}`)
console.log(`i after loop : ${i}`)
console.log(arr2)