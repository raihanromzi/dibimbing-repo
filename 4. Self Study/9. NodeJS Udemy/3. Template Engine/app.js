const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Tell express to use PUG
app.set('view engine', 'pug')

// Tell express where is views
app.set('views', path.join(__dirname, '/views'))


const { router, products } = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', router)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(3000)
