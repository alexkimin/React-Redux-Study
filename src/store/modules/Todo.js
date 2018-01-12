import { createAction, handleActions } from 'redux-actions'
import {
  fetchTodoAPI,
  addTodoAPI,
 } from '../api/todoAPI'
import { pender } from 'redux-pender'


// Action Types
export const TODO_FETCH = 'todo/TODO_FETCH'
export const TODO_ADD = 'todo/TODO_ADD'


// Actions Creater
export const fetchTodo = createAction(TODO_FETCH, fetchTodoAPI)
export const addTodo = createAction(TODO_ADD, addTodoAPI)
// add new todo to server ->  update local todo

// need immutable.js!
const initialState = {
  todos: [],
  isFetching: false,
  err: { status: false, msg: '' }
}

// reducers
const Todo = handleActions({
  ...pender({
    type: TODO_FETCH,
    onPending: (state, action) => ({
      ...state,
      isFetching: true
    }),
    onSuccess: (state, action) => {
      return ({
        ...state,
        todos: [...action.payload.data.todos],
        isFetching: false,
        err: { status: false, msg: '' }
      })
    },
    onFailure: (state, action) => ({
      ...state,
      isFetching: false,
      err: { status: true, msg: 'Initial Fetching is failed' }
    })
  }),
}, initialState)

// prev version
// const Todo = handleActions({
//     [TODO_FETCH_PENDING]: (state, action) =>  ({...state, isFetching: true}),
//     [TODO_FETCH_SUCCESS]: (state, action) =>  ({...state, ...action.payload, isFetching: false}),
//     [TODO_FETCH_FAILURE]: (state, action) =>  ({...state, isFetching: false}),
// }, initialState)

export default Todo
