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
  res.json(todos)
})

app.post('/api/todos', (req, res) => {
  let newTodo = req.body
  let id = Math.floor(Math.random() * 100)
  console.log(newTodo);
  todos[id] = newTodo
  res.json(todos)
})

app.listen(8080)