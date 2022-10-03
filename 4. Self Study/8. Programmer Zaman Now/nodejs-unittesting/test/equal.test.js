test('test toBe', () => {
  const name = 'Raihan'
  const hello = `Hello ${name}`

  expect(hello).toBe('Hello Raihan')
})

test('test toEqual', () => {
  const person = Object.assign({ name: 'Raihan' })
  expect(person).toEqual({ name: 'Raihan' })
})