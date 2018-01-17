import { createAction, handleActions } from 'redux-actions'
import { fetchTodoAPI } from '../api/todoAPI'
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
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)
export const inputTodo = createAction(TODO_INPUT)
export const addTodo = createAction(TODO_ADD)
export const toggleTodo = createAction(TODO_TOGGLE)
export const deleteTodo = createAction(TODO_DELETE)
export const clearTodo = createAction(TODO_CLEAR)
export const updateTodo = createAction(TODO_UPDATE)



const initialState = Map({
  todos: List(),
  input: ''
})

// reducers with redux-pender
const Todo = handleActions({
  ...pender({
    type: TODO_FETCH,
    onSuccess: (state, action) =>
    state.set('todos', List(action.payload.data.todos)),
  }),
  [TODO_INPUT]: (state, action) =>
    state.set('input', action.payload.input),
  [TODO_UPDATE]: (state, action) =>
    state.update('todos', todos => todos.map(todo => {
      todo.willUnmount = todo.id === action.payload.id
      return todo
    })),
  [TODO_TOGGLE]: (state, action) => {
    const todos = state.get('todos')
      .map(todo => {
        if (todo.id === action.payload.id ) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    return state.set('todos', todos)
  },
  [TODO_ADD]: ((state, action) =>
    state.update(
      'todos',
      todos => todos.push(action.payload.todo)
    )
  ),
  [TODO_DELETE]: (state, action) => {
    const todos = state.get('todos')
      .filter(todo => todo.id !== action.payload.id)
    return state.set('todos', todos)
  },
  [TODO_CLEAR]: (state, action) => 
    state.set('todos', List(action.payload.todos)),
}, initialState)

export default Todo
