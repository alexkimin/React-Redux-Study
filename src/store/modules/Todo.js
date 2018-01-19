import { createAction, handleActions } from 'redux-actions'
import { fetchTodoAPI } from '../api/todoAPI'
import { pender } from 'redux-pender'
import { Map, List } from 'immutable'
import { pipeMutations } from 'libs'

/* Action Types */
// Sync actions
export const TODO_INPUT = 'todo/TODO_INPUT'
export const TODO_ADD = 'todo/TODO_ADD'
export const TODO_TOGGLE = 'todo/TODO_TOGGLE'
export const TODO_DELETE = 'todo/TODO_DELETE'
export const TODO_CLEAR = 'todo/TODO_CLEAR'
export const TODO_UPDATE = 'todo/TODO_UPDATE'
// Async actions
export const TODO_FETCH = 'todo/TODO_FETCH'

/* Actions Creater */
// Sync actions
export const inputTodo = createAction(TODO_INPUT)
export const addTodo = createAction(TODO_ADD)
export const toggleTodo = createAction(TODO_TOGGLE)
export const deleteTodo = createAction(TODO_DELETE)
export const clearTodo = createAction(TODO_CLEAR)
export const updateTodo = createAction(TODO_UPDATE)
// Async actions
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)


const initialState = Map({
  todos: List(),
  input: '',
  err: Map({ statue: false, msg: '' })
})

// Mutations
// use withMutations when you want to group several changes on an object.
// Belowed cases were for practicing, so over used.
const setInput = value => state => state.set('input', value)
const updateToggle = id => state => state.update('todos', todos =>
  todos.map(todo => {
    if (todo.id === id ) todo.isCompleted = !todo.isCompleted
    return todo
  })
)
const addNew = todo => state => state.update('todos', todos =>
  todos.push(todo)
)
const deleteOne = id => state => state.update('todos', todos =>
  todos.filter(todo => todo.id !== id)
)
const clearSome = todos => state => state.set('todos', List(todos))

/* reducers with redux-pender */
const Todo = handleActions({
  [TODO_INPUT]: (state, action) =>
    pipeMutations([
      setInput(action.payload.input),
    ], state),
  [TODO_UPDATE]: (state, action) =>
    state.update('todos', todos => todos.map(todo => {
      todo.willUnmount = todo.id === action.payload.id
      return todo
    })),
  [TODO_TOGGLE]: (state, action) =>
    pipeMutations([
        updateToggle(action.payload.id),
      ], state),
  [TODO_ADD]: (state, action) =>
    pipeMutations([
        addNew(action.payload.todo),
      ], state),
  [TODO_DELETE]: (state, action) =>
    pipeMutations([
        deleteOne(action.payload.id),
      ], state),
  [TODO_CLEAR]: (state, action) =>
    pipeMutations([
        clearSome(action.payload.todos),
      ], state),
  ...pender({
    type: TODO_FETCH,
    onPending: (state, action) => console.log(action, state) || state,
    onSuccess: (state, action) =>
      state.set('todos', List(action.payload.data.todos)),
  }),
}, initialState)

export default Todo
