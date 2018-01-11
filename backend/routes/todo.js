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
      isCompleted: false
    },
    [tempId2]: {
      id: tempId2,
      text: 'this is todo2',
      isCompleted: true
    }
  }
}

router.get('/', (req, res) => {
  console.log('hit', tempCounter++)
  res.json(tempTodo)
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

export default router
