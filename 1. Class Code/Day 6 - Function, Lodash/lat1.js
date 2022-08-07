function generateArray(x, y, n) {
    let arrResult = []
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) arrResult.push(x)
        else arrResult.push(y)
    }
    return arrResult
}

console.log(generateArray('x', 'y', 5))

function chunk(arr, n) {
    let arrResult = []
    for (let i = 0; i < arr.length; i += n) {
        arrResult.push(arr.slice(i, i + n))
    }
    return arrResult
}

console.log(chunk([1, 2, 3, 4, 5], 2))