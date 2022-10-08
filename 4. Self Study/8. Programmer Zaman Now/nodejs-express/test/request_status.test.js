import express from 'express'
import request from 'supertest'

const app = express()

app.get('/', (req, res) => {
  const { name } = req.query

  if (!name) {
    res
      .status(400)
      .end()
  }

  res
    .status(200)
    .send(`Hello ${name}`)

})

test('Test Status Code', async () => {
  let response = await request(app)
    .get('/')
    .query({ name: 'Raihan' })

  expect(response.status).toBe(200)
  expect(response.text).toBe('Hello Raihan')

  response = await request(app)
    .get('/')

  expect(response.status).toBe(400)
})