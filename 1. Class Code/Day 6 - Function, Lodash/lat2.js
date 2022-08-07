// Callback
function doOperation(x, y, operationFunc) {
    return operationFunc(x, y)
}

const sum = (x, y) => {
    return x + y
}

const divide = (x, y) => {
    return x / y
}

console.log(doOperation(10, 5, sum))