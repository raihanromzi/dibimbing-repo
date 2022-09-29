// Membuat HTTP server yang menerima request dan mengirimkan response
// Jika kasus sederhana bisa menggunakan STL bawaan NodeJS, namun jika sudah kompleks gunakan framework
import http from 'http'

const requestListener = (request, response) => {
  console.log(request.method)
  console.log(request.url)
  console.table(request.headers)

  response.write('Hello')
  response.end()
}

const server = http.createServer(requestListener)

server.listen(3000)