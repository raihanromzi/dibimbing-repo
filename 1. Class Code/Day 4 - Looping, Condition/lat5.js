const arr = [1, 2, 3, 4, 1]

for (let i = 0; i <= arr.length + 1; i++) {
    for (let j = i + 1; j <= arr.length + 1; j++) {
        console.log(`${arr[i]} ${arr[j]}`)
    }
}