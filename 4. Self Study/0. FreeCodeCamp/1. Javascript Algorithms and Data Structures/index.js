// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
}

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value.trim() !== '') {
    records[id][prop] = value
  } else if (prop === 'tracks' && records[id]['tracks'] == null) {
    records[id]['tracks'] = []
    records[id]['tracks'].push(value)
  } else if (prop === 'tracks' && value.trim() !== '') {
    records[id]['tracks'].push(value)
  } else if (value.trim() === '') {
    delete records[id][prop]
  }
  return records
}

const myArray = []
let i = 10

// Only change code below this line
do {
  myArray.push(i)
} while (i < 5)

console.log(myArray)