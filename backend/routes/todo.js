import express from 'express'
import uuid from 'uuid/v4'

const router = express.Router()

const tempId1 = uuid()
const tempId2 = uuid()

const tempTodo = {
  todos: {
    [tempId1]: {
      id: tempId1,
      text: 'this is todo1',
      status: 'actived'
    },
    [tempId2]: {
      id: tempId2,
      text: 'this is todo2',
      status: 'completed'
    }
  }
}

router.get('/', (req, res) => {
  res.json(tempTodo)
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

export default router
