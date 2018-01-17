import { createAction, handleActions } from 'redux-actions'
import {
  fetchTodoAPI,
  addTodoAPI,
  deleteTodoAPI,
  toggleTodoAPI,
  clearTodoAPI,
 } from '../api/todoAPI'
import { pender } from 'redux-pender'
import { Map, List } from 'immutable'


// Action Types
export const TODO_FETCH = 'todo/TODO_FETCH'
export const TODO_INPUT = 'todo/TODO_INPUT'
export const TODO_ADD = 'todo/TODO_ADD'
export const TODO_TOGGLE = 'todo/TODO_TOGGLE'
export const TODO_DELETE = 'todo/TODO_DELETE'
export const TODO_CLEAR = 'todo/TODO_CLEAR'
export const TODO_UPDATE = 'todo/TODO_UPDATE'

// Actions Creater
export const inputTodo = createAction(TODO_INPUT)
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)
export const addTodo = createAction(TODO_ADD, addTodoAPI)
export const toggleTodo = createAction(TODO_TOGGLE, toggleTodoAPI)
export const deleteTodo = createAction(TODO_DELETE, deleteTodoAPI)
export const clearTodo = createAction(TODO_CLEAR, clearTodoAPI)
export const updateTodo = createAction(TODO_UPDATE)


const initialState = Map({
  todos: List(),
  input: ''
})

// reducers with redux-pender
const Todo = handleActions({
  [TODO_INPUT]: (state, action) =>
    state.set('input', action.payload.input),
  [TODO_UPDATE]: (state, action) =>
    state.update('todos', todos => todos.map(todo => {
      todo.willUnmount = todo.id === action.payload.id
      return todo
    })),
  ...pender({
    type: TODO_FETCH,
    onSuccess: (state, action) =>
      state.set('todos', List(action.payload.data.todos)),
  }),
  ...pender({
    type: TODO_ADD,
    onSuccess: (state, action) =>
      state.update(
        'todos',
        todos => todos.push(action.payload.data.newTodo)
      ),
  }),
  ...pender({
    type: TODO_DELETE,
    onSuccess: (state, action) => {
      const todos = state.get('todos')
        .filter(todo => todo.id !== action.payload.data.id)
      return state.set('todos', todos)
    },
  }),
  ...pender({
    type: TODO_TOGGLE,
    onSuccess: (state, action) => {
      const todos = state.get('todos')
        .map(todo => {
          if (todo.id === action.payload.data.id ) {
            todo.isCompleted = !todo.isCompleted
          }
          return todo
        })
      return state.set('todos', todos)
    },
  }),
  ...pender({
    type: TODO_CLEAR,
    onSuccess: (state, action) =>
      state.set('todos', List(action.payload.data.todos)),
  }),
}, initialState)

export default Todo
