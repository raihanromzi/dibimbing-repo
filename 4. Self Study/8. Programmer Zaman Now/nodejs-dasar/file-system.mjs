// Memodifikasi File (Tambah, Hapus, dll)
// Terdapat 3 jenis library :
// 1. Blocking
// 2. Non-Blocking -> Callback
// 3. Non-Blocking -> Promise

import fs from 'fs'

fs.writeFileSync('hello.txt', 'Hello')
const buffer = fs.readFileSync('hello.txt')
console.log(buffer.toString())
