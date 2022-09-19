let myString1 = 'Hello, World!'
let myRegex = /Hello/
let result1 = myRegex
console.log(myRegex.test(myString1))

// OR
let petString = 'James has a pet cat.'
let petRegex = /dog|cat|bird|fish/ // Change this line
let result2 = petRegex.test(petString)

// Flag -> Ignore uppercase or lowercase
let myString2 = 'freeCodeCamp'
let fccRegex = /freecodecamp/i // Change this line
let result = fccRegex.test(myString2)

// Global -> More than 1 result
let testStr = 'Repeat, Repeat, Repeat'
let repeatRegex = /Repeat/g
testStr.match(repeatRegex)


// Hyphen (-) -> From a to z
let jennyStr = 'Jenny8675309'
let myRegex2 = /[a-z0-9]/ig
jennyStr.match(myRegex2)

// Negated -> Not include
let quoteSample = '3 blind mice.'
let myRegex3 = /[^aiueo]/gi // Change this line
let result3 = quoteSample.match(myRegex3)

// + (1 and more), * (0 and more)

let text = '<h1>Winter is coming</h1>'
let myRegex4 = /<.*?>/ // Change this line
let result4 = text.match(myRegex4)
console.log(result4)