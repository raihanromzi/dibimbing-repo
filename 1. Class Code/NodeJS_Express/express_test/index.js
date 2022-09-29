const express = require('express')

const app = express()
app.use(express.json())
const todos = {
  1: {
    text: 'workout',
    done: false,
  },
  2: {
    text: 'go to work',
    done: true,
  }
}

app.get('/api/todos', (req, res) => {
  console.log(req.header('Authorization'))
  res.json(todos)
})

app.post('/api/todos', (req, res) => {
  let newTodo = req.body
  let id = Math.floor(Math.random() * 100)
  console.log(newTodo)
  todos[id] = newTodo
  res.json(todos)
})

const validateID = (id, someTodos) => {
  if (Number.isNaN(id)) {
    return {
      status: 400,
      error: 'id should be a number'
    }
  }
  if (id < 0) {
    return {
      status: 400,
      error: 'id should not be negative'
    }
  }
  if (someTodos[id] === undefined) {
    return {
      status: 404,
      error: 'id not found'
    }
  }
}

app.delete('/api/todos/:id', (req, res) => {
  let id = parseInt(req.params.id)
  const result = validateID(id, todos)
  if (result !== undefined) {
    res.status(result.status).json({
      error: result.error
    })
    return
  }
  delete todos[id]
  res.json({ 'success': true })
})

app.put('/api/todos/:id', (req, res) => {
  let id = parseInt(req.params.id)
  const result = validateID(id, todos)

  if (result !== undefined) {
    res.status(result.status).json({
      error: result.error
    })
    return
  }
  const { text, done } = req.body
  todos[id].text = text
  todos[id].done = done
  res.json(todos).status(200)
})


app.listen(8080)