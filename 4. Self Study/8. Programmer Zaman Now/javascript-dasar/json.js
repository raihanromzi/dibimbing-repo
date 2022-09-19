// String json -> Object
// JSON.stringify() - Object -> String JSON
// JSON.parse() - String JSON -> JS Object Notation

const person = {
  firstName: 'Jake',
  middleName: 'Michael',
  address: {
    country: 'Indonesia',
    city: 'Jakarta'
  }
}

// Object -> String JSON
const json = JSON.stringify(person)
console.log(json)

// String JSON -> JS Object Notation
console.log(JSON.parse(json))