import express from 'express'
import uuid from 'uuid/v4'

const router = express.Router()


/*
  fake database
*/
const DB = new Map()
// fake database init

const id1 = uuid()
const todo1 = {
  id: id1,
  text: 'Welcome to Todo toy project with functional programming',
  isCompleted: false,
  prioritized: false
}
const id2 = uuid()
const todo2 = {
  id: id2,
  text: 'Todos comes from fake database',
  isCompleted: true,
  prioritized: true
}

DB.set(id1, todo1)
DB.set(id2, todo2)

/*
  Mongoose like helpers
*/
const findAll = () => {
  // map.values() will return iterator
  const data = [...DB.values()]
  return new Promise(resolve => resolve(data))
}

const deleteOneById = id => {
  return new Promise((resolve, reject) => {
    return DB.delete(id) ? resolve(id) : reject('not deleted')
  })
}

const findByIdAndUpdate = id => {
  return new Promise(resolve => {
    const theTodo = DB.get(id)
    theTodo.isCompleted = !theTodo.isCompleted
    DB.set(id, theTodo)
    return resolve(id)
  })
}

// fake delay(latency) function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

/*
  RESTful routes below
*/

router.get('/', (req, res) => {
  // populating refs
  delay(1000)
    .then(() => findAll())
    .then(data => res.json({ todos: data }))
})

router.post('/', (req, res) => {
  const newId = uuid()
  const todoCollection = tempTodo.todos
  // new Todo
  const newTodo = {
    id: newId,
    text: req.body.text,
    isCompleted: false,
    prioritized: false
  }
  // save
  DB.set(newId, newTodo)
  // send the new one back to front
  res.json({ newTodo })
})

router.put('/:id', (req, res) => {
  const todoId = req.params.id
  // toggle updating
  findByIdAndUpdate(todoId)
    .then(id => res.json({ id }))
})

router.delete('/:id', (req, res) => {
  const todoId = req.params.id
  // delete
  deleteOneById(todoId)
    .then(id => res.json({ id }) )
})
router.delete('/clear', (req, res) => {
  // clear completed
})

export default router
