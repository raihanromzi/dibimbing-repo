const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const users = require('./routes')

app.use(express.json())
app.use(users)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

module.exports = app