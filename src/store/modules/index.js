import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import offlineReducer from '../middlewares/offline/offlineReducer'
import * as actions from './Todo'

// imports all file except index.js
const req = require.context('.', true, /^(?!.\/index).*.js$/)

// reducer
const modules = {}

export const actionTypes = {}

// getter of action constants
const _actionTypeGetter = moduleObject => {
  Object.keys(moduleObject).forEach(key => {
    if(typeof moduleObject[key] === 'string') actionTypes[key] = moduleObject[key]
  })
}

req.keys().forEach((key) => {
  const regex =  /.\/(.*?).js$/;
  const moduleName = regex.test(key) && key.match(regex)[1]
  // get all action type constatns
  _actionTypeGetter(req(key))
  // get reducers
  modules[moduleName] = req(key).default
})

// add pender reducer
modules['pender'] = penderReducer
modules['offline'] = offlineReducer


export default combineReducers(modules)
