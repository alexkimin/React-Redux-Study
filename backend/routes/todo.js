import express from 'express'
import uuid from 'uuid/v4'

const router = express.Router()

const tempId1 = uuid()
const tempId2 = uuid()

let tempCounter = 0

const tempTodo = {
  todos: {
    [tempId1]: {
      id: tempId1,
      text: 'this is todo1',
      isCompleted: false,
      prioritized: false
    },
    [tempId2]: {
      id: tempId2,
      text: 'this is todo2',
      isCompleted: true,
      prioritized: false
    }
  },
  allTodo: [tempId1, tempId2]
}

const populate_fake = (ref, documents) => {
  const data = ref.map(refId => documents[refId])
  return new Promise(resolve => resolve(data))
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

router.get('/', (req, res) => {
  console.log('hit', tempCounter++)
  // populating refs
  delay(2000)
    .then(() => populate_fake(tempTodo.allTodo, tempTodo.todos))
    .then(data => res.json({ todos: data }))
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

export default router
