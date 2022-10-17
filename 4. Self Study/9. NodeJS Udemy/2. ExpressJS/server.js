const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Hello')
})

app.use((req, res, next) => {
  console.log('Bitch')
  res.send('Hello')
  next()
})

app.get('/', (req, res, next) => {
  res.send('Hello World')
})

app.listen(8080)