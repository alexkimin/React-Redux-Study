import express from 'express'
import uuid from 'uuid/v4'

const router = express.Router()
let _socket = null

/* ================================
  fake database
*/
const DB = new Map()
// fake database init

const id1 = uuid()
const todo1 = {
  id: id1,
  text: 'Welcome to Todo toy project with functional programming',
  isCompleted: false,
  prioritized: false,
  willUnmount: false
}
const id2 = uuid()
const todo2 = {
  id: id2,
  text: 'Todos comes from fake database',
  isCompleted: true,
  prioritized: true,
  willUnmount: false
}

DB.set(id1, todo1)
DB.set(id2, todo2)

/* ================================
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

/* ================================
  RESTful routes below
*/

const withSocket = io => {

  // hackey concurrentUser tracking for fun.
  io.on('connect', (socket) => {
    console.log('connected', socket.id)
    // add id to io object

    io.emit('user/USER_CONCUR', { data: io.eio.clientsCount })

    socket.on('disconnect', () => {
      io.emit('user/USER_CONCUR', { data: io.eio.clientsCount })
    })
  })


  router.get('/', (req, res) => {
    delay(300)
    .then(() => findAll())
    .then(data => res.json({ todos: data }))
  })

  router.post('/', (req, res) => {
    const newId = uuid()
    console.log(req.body)
    // new Todo
    const newTodo = {
      id: newId,
      text: req.body.data.content,
      isCompleted: false,
      prioritized: false,
      willUnmount: false
    }
    // save
    DB.set(newId, newTodo)
    // send the new one back to front
    io.emit(req.body.type, {
      data: newTodo,
      actionID: req.body.data.actionID
     })
    return res.json({ status: 'sucess' })
  })

  router.put('/:id', (req, res) => {
    const todoId = req.params.id
    console.log(req.body)
    // toggle updating
    findByIdAndUpdate(todoId)
      .then(data => {
        io.emit(req.body.type, {
          data,
          actionID: req.body.data.actionID
         })
        return res.json({})
      })
  })

  router.delete('/delete/:id', (req, res) => {
    const todoId = req.params.id
    // delete
    deleteOneById(todoId)
    .then(id => {
      io.emit(req.body.type, {
        data: id,
        actionID: req.body.data.actionID
       })
      return res.json({ status: 'sucess' })
    })
  })
  router.delete('/clear', (req, res) => {
    // clear completed
    console.log(req.body)
    findAll()
    .then(todos => {
      // delete completed todo
      todos.forEach(todo => todo.isCompleted && DB.delete(todo.id))
      // io.emit('clearTodo', [...DB.values()])
      io.emit(req.body.type, {
        data: [...DB.values()],
        actionID: req.body.data.actionID
       })
      return res.json({ status: 'sucess' })
    })
  })

  return router
}



export default withSocket
