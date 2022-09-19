// Encode -> Agar data yang dikirimkan tidak berubah
// Encode/DecodeURI -> Encode/Decode value namun karakter ;,?@$& tidak diubah
// Encode/DecodeURIComponent -> Encode/Decode value semua karakter

const url = 'https://www.raihanromzi.com/?name=Raihan Mike John'
console.log(url)

const encoded = encodeURI(url)
console.log(encoded)

// URL akan hancur karna semua value di encode
const encodedComponent = encodeURIComponent(url)
console.log(encodedComponent)