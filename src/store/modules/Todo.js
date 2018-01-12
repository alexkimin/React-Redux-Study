import { createAction, handleActions } from 'redux-actions'
import { fetchTodoAPI } from '../api/todoAPI'


// Action Types
export const TODO_FETCH = 'todo/TODO_FETCH'
export const TODO_FETCH_PENDING = 'todo/TODO_FETCH_PENDING'
export const TODO_FETCH_SUCCESS = 'todo/TODO_FETCH_SUCCESS'
export const TODO_FETCH_FAILURE = 'todo/TODO_FETCH_FAILURE'

// Actions Creater
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)

// immutable.js!
const initialState = {
  todos: [],
  isFetching: false
}

// reducers
const Todo = handleActions({
    [TODO_FETCH_PENDING]: (state, action) =>  ({...state, isFetching: true}),
    [TODO_FETCH_SUCCESS]: (state, action) =>  ({...state, ...action.payload, isFetching: false}),
    [TODO_FETCH_FAILURE]: (state, action) =>  ({...state, isFetching: false}),
}, initialState)

export default Todo
