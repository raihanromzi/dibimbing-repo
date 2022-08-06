// for (let i = 0; i < 10; ++i) {
//     console.log(i);
// }

//Loop Array
let arr = [1, 2, 3, 4, 5]
for (const number of arr) {
    console.log(number)
}

// Simple code
let objDay = {
    0: 'minggu',
    1: 'senin',
    2: 'selasa',
    3: 'rabu',
    4: 'kamis',
    5: 'jumat',
    6: 'sabtu'
}

let data = [0, 2, 3, 4, 5, 1, 5, 5, 4, 2, 3]

for (let i = 0; i < data.length; i++) {
    let day = data[i]
    console.log(objDay[day])
}