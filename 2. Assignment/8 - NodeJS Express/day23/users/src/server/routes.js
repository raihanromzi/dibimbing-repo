const express = require('express')
const router = express.Router()
const { getAllUsersHandler, createUsersHandler } = require('../handlers/users/index')

router.get('/api/users', getAllUsersHandler)
router.post('/api/users', createUsersHandler)

module.exports = router