import { createAction, handleActions } from 'redux-actions'
import { getAllTodo } from '../api/todoFetch'

// Action Types
const TODO_GET = 'todo/TODO_GET'
// export const TODO_GET_PENDING = 'todo/TODO_GET_PENDING'
// export const TODO_GET_SUCCESS = 'todo/TODO_GET_SUCCESS'
// export const TODO_GET_FAILURE = 'todo/TODO_GET_FAILURE'

// Actions Creater
export const getTodo = createAction(TODO_GET, getAllTodo)

// const initialState = getTodo()

// immutable.js!
const initialState = {
  todos: {
    name: 'test'
  },
  isFetching: true
}


// object method

const Todo = handleActions({
    [TODO_GET]: (state, action) =>  ({
      ...state,
      ...action.payload,
      isFetching: false,
    }),
}, initialState)

export default Todo
