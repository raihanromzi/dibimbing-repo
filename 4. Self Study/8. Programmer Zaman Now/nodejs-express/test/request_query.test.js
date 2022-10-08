import express from 'express'
import request from 'supertest'

test('Test Query Param', async () => {
  const app = express()

  app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
  })

  const response = await request(app)
    .get('/')
    .query({ firstName: 'Raihan', lastName: 'Rakhman' })

  expect(response.text).toBe('Hello Raihan Rakhman')
})