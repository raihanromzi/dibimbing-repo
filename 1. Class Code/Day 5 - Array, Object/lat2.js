let obj = {
    'JKT': 'Jakarta',
    'SBY': 'Surabaya',
    'MLG': 'MALANG',
}

for (let objKey in obj) {
    let objValue = obj[objKey]
    obj[objValue] = objKey
    delete obj[objKey]
}
console.log(obj)

for (let objKey in obj) {
    let objValue = obj[objKey].toLowerCase()
    obj[objValue] = objKey.toLowerCase()
    delete obj[objKey]

    let objKeyInValue = obj[objValue]
    obj[objKeyInValue] = objValue
    delete obj[objValue]
}

console.log(obj)