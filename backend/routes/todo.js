import express from 'express'
import uuid from 'uuid/v4'

const router = express.Router()


// fake database
const tempId1 = uuid()
const tempId2 = uuid()
const tempTodo = {
  todos: {
    [tempId1]: {
      id: tempId1,
      text: 'Welcome to Todo toy project with functional programming',
      isCompleted: false,
      prioritized: false
    },
    [tempId2]: {
      id: tempId2,
      text: 'Todos comes from fake database',
      isCompleted: false,
      prioritized: false
    }
  },
  allTodo: [tempId1, tempId2]
}

// fake pupulate()
const populate_fake = (ref, documents) => {
  const data = ref.map(refId => documents[refId])
  return new Promise(resolve => resolve(data))
}

// fake delay(latency) function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

router.get('/', (req, res) => {
  // populating refs
  delay(1000)
    .then(() => populate_fake(tempTodo.allTodo, tempTodo.todos))
    .then(data => res.json({ todos: data }))
})

router.post('/', (req, res) => {
  const tempId = uuid()
  const todoCollection = tempTodo.todos
  // new Todo
  const newTodo = {
    id: tempId,
    text: req.body.text,
    isCompleted: false,
    prioritized: false
  }
  // save
  todoCollection[tempId] = newTodo
  tempTodo.allTodo.push(tempId)
  // send the new one back to front
  res.json({ newTodo })
})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

export default router
