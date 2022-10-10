import http from 'http'

const requestListener = (req, res) => {
  const { url } = req

  if (url === '/') {
    res.setHeader('content-type', 'text/html')
    res.write
    (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Node JS HTTP</title>
    </head>
    <body>
    <h1>Hello World</h1>
    <form action="/create-user" method="post">
    <input type="text" name="username">
    <button type="submit">Send</button>
    </form>
    </body>
    </html>
    `)
    res.end()
  }
  
  if (url === '/users') {
    res.setHeader('content-type', 'text/html')
    res.write
    (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Node JS HTTP</title>
    </head>
    <body>
    <ul>
    <li>User 1</li>
    </ul>
    <ul>
    <li>User 2</li>
    </ul>
    </body>
    </html>
    `)
    res.end()
  }

  if (url === '/create-user') {
    res.setHeader('content-type', 'text/html')
    let body = []

    req.on('data', (chunk) => {
      body.push(chunk)
    })

    req.on('end', () => {
      body = Buffer.concat(body).toString()
      console.log(body.split('=')[1])
      res.write
      (`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <title>Node JS HTTP</title>
      </head>
      <body>
      <h1>${body.split('=')[1]}</h1>
      </ul>
      </body>
      </html>
      `)
      res.end()
    })

  }
}

const server = http.createServer(requestListener)

const host = 'localhost'
const port = 8080
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})