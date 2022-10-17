const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json({ newProduct })
})

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
  const singleProduct = products.find((product) =>
    product.id === Number(productID)
  )

  if (!singleProduct) {
    res
      .status(400)
      .send('Not Found')
    return
  }
  res.json(singleProduct)
})

app.get('/api/v1/search', (req, res) => {
  const { name, limit } = req.query
  let sortedProducts = [...products]

  if (name) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(name)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  
  res.status(200).json(sortedProducts)

})

app.listen(8080, () => {
  console.log('http://localhost:8080')
})