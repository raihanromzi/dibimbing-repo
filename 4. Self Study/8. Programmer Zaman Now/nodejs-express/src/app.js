import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(8080, 'localhost', () => {
  console.log('Running on http://localhost:8080')
})
