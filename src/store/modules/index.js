import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import Todo from './Todo'

const modules = combineReducers({
  Todo,
  pender: penderReducer
})

export default modules
