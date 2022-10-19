const Product = require('../model/product')

exports.getAllProducts = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  const product = Product.fetchAll()
  res.render('shop', {
    prods: product,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true
  })
}

