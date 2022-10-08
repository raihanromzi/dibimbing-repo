import express from 'express'
import request from 'supertest'

test('Test Request Header', async () => {
  const app = express()

  app.get('/', (req, res) => {
    const header = req.header('accept')
    res.send(`Header Type is ${header}`)
  })

  const response = await request(app)
    .get('/')
    .set('accept', 'text/plain')

  expect(response.text).toBe('Header Type is text/plain')
})