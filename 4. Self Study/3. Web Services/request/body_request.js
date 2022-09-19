import http from 'http'

const server = http.createServer((req, res) => {
  let body = []
  req.on('data', (chunk) => {
    body.push(chunk)
  })
  req.on('end', () => {
    body = Buffer.concat(body).toString()
  })
})