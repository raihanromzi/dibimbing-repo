// Epoch & Unix Timestamp -> 1 Januari 1970 -> Nol
// https://currentmillis.com/

const date1 = new Date()
console.log(date1)

const date2 = new Date(2022, 9, 10)
console.log(date2)

const date3 = new Date(2015, 9, 10, 12, 12, 12, 12)
console.log(date3)

const date4 = new Date(1663325570671)
console.log(date4)

// Epoch & Unix Timestamp
// Get Epoch from Date
// Kirim dalam bentuk epoch timestamp (GLOBAL TYPE)
console.log(date1.getTime())

// Parsing Date
const parseDate = Date.parse('2020-10-10T08:45:45.123+07:00')
console.log(parseDate)

const resultParseDate = new Date(parseDate)
console.log(resultParseDate)

// Date Getter Setter
const date = new Date()
console.log(date)
console.log(date.getTime())
console.log(date.getDate())
console.log(date.setMonth(12))

