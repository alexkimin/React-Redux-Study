import { createAction, handleActions } from 'redux-actions'
import {
  fetchTodoAPI,
  addTodoAPI,
  deleteTodoAPI,
  toggleTodoAPI,
  clearTodoAPI,
 } from '../api/todoAPI'
import { pender } from 'redux-pender'


// Action Types
export const TODO_FETCH = 'todo/TODO_FETCH'
export const TODO_ADD = 'todo/TODO_ADD'
export const TODO_TOGGLE = 'todo/TODO_TOGGLE'
export const TODO_DELETE = 'todo/TODO_DELETE'
export const TODO_CLEAR = 'todo/TODO_CLEAR'


// Actions Creater
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)
export const addTodo = createAction(TODO_ADD, addTodoAPI)
export const toggleTodo = createAction(TODO_TOGGLE, toggleTodoAPI)
export const deleteTodo = createAction(TODO_DELETE, deleteTodoAPI)
export const clearTodo = createAction(TODO_CLEAR, clearTodoAPI)


// need immutable.js!
const initialState = {
  todos: []
}

// reducers
const Todo = handleActions({
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
  ...pender({
    type: TODO_TOGGLE,
    onSuccess: (state, action) => {
      const todos = [...state.todos]
        .map(todo => {
          if (todo.id === action.payload.data.id ) {
            todo.isCompleted = !todo.isCompleted
          }
          return todo
        })
      return ({ ...state, todos })
    },
  }),
  ...pender({
    type: TODO_CLEAR,
    onSuccess: (state, action) => ({
      ...state,
      todos: action.payload.data.todos
    }),
  }),
}, initialState)

export default Todo
