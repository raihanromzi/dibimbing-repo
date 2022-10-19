const express = require('express')
const { getAllProducts, postAddProducts } = require('../controller/products')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', getAllProducts)

// /admin/add-product => POST
router.post('/add-product', postAddProducts)

module.exports = router