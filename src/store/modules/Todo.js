import { createAction, handleActions } from 'redux-actions'
import {
  fetchTodoAPI,
  addTodoAPI,
 } from '../api/todoAPI'
import { pender } from 'redux-pender'


// Action Types
export const TODO_FETCH = 'todo/TODO_FETCH'
export const TODO_NEW = 'todo/TODO_NEW'
export const TODO_ADD = 'todo/TODO_ADD'


// Actions Creater
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)
export const newTodo = createAction(TODO_NEW)
export const addTodo = createAction(TODO_ADD, addTodoAPI)


// need immutable.js!
const initialState = {
  todos: [],
  newTodo: { text: '' },
  err: { status: false, msg: '' }
}

// reducers
const Todo = handleActions({
  [TODO_NEW]: (state, action) => ({
      ...state,
      newTodo: action.payload
  }),
  ...pender({
    type: TODO_FETCH,
    onPending: (state, action) => ({ ...state }),
    onSuccess: (state, action) => ({
        ...state,
        todos: [...action.payload.data.todos],
        err: { status: false, msg: '' }
    }),
    onFailure: (state, action) => ({
      ...state,
      err: { status: true, msg: 'Fetching is failed' }
    })
  }),
  ...pender({
    type: TODO_ADD,
    onPending: (state, action) => ({ ...state }),
    onSuccess: (state, action) => {
      return ({
        ...state,
        todos: [...state.todos, action.payload.data.newTodo],
        err: { status: false, msg: '' }
      })
    },
    onFailure: (state, action) => ({
      ...state,
      err: { status: true, msg: 'New Todo Adding is failed' }
    })
  }),
}, initialState)

export default Todo
