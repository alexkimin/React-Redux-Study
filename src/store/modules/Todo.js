import { createAction, handleActions } from 'redux-actions'
import {
  fetchTodoAPI,
  addTodoAPI,
  deleteTodoAPI,
 } from '../api/todoAPI'
import { pender } from 'redux-pender'


// Action Types
export const TODO_FETCH = 'todo/TODO_FETCH'
export const TODO_NEW = 'todo/TODO_NEW'
export const TODO_ADD = 'todo/TODO_ADD'
export const TODO_TOGGLE = 'todo/TODO_TOGGLE'
export const TODO_DELETE = 'todo/TODO_DELETE'


// Actions Creater
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)
export const newTodo = createAction(TODO_NEW)
export const addTodo = createAction(TODO_ADD, addTodoAPI)
export const toggleTodo = createAction(TODO_TOGGLE)
export const deleteTodo = createAction(TODO_DELETE, deleteTodoAPI)


// need immutable.js!
const initialState = {
  todos: [],
  newTodo: { text: '' }
}

// reducers
const Todo = handleActions({
  [TODO_NEW]: (state, action) => ({
      ...state,
      newTodo: action.payload
  }),
  ...pender({
    type: TODO_FETCH,
    onSuccess: (state, action) => ({
        ...state,
        todos: [...action.payload.data.todos],
    }),
  }),
  ...pender({
    type: TODO_ADD,
    onSuccess: (state, action) => ({
        ...state,
        todos: [...state.todos, action.payload.data.newTodo],
    }),
  }),
  ...pender({
    type: TODO_DELETE,
    onSuccess: (state, action) => {
      const todos = [...state.todos]
        .filter(todo => todo.id !== action.payload.data.id)
      return ({ ...state, todos })
    },
  }),
}, initialState)

export default Todo
