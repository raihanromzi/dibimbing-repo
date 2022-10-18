const path = require('path')
const express = require('express')
const rootDir = require('../util/path')

const router = express.Router()
const { products } = require('./admin')

router.get('/', (req, res, next) => {
  res.render('shop', { prods: products, docTitle: 'Shop', path: '/' })
})


module.exports = router
