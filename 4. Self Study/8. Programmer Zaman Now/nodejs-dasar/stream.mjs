// Library untuk kontrak aliran data
// Bisa membaca, atau menulis file
// Turunan Event Emitter
// Digunakan untuk pengiriman data dari server

import fs from 'fs'

const writer = fs.createWriteStream('target.log')
writer.write('Hello')
writer.write('New File')
writer.close()

const reader = fs.createReadStream('target.log')
// Ketika data diambil dalam bentuk buffer
reader.addListener('data', (data) => {
  console.log(data.toString())
})

