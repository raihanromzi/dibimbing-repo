// Map -> Key : Value -> Mirip Object
// Key bisa jenis apapun, jumlah key bisa diketahui tanpa iterasi
const map = new Map()
map.set('Name1', 'Jake')
map.set('Address1', 'Indonesia')
map.set('Name2', 'Mike')
map.set('Address2', 'Bangkok')
console.log(map)
console.log(map.get('Name'))

// Loop
map.forEach((value, key) => {
  console.log(`${key}: ${value}`)
})