import filterActions from './filterActions'
import { pipe } from './helper'


const offlineMiddleware = option => store => next => action => {
  // skip non-related actions
  if(filterActions(action)) return next(action)

  const { actionCreater, major } = option


  console.log('== this is offline middleware ==')
  // console.log('middle : ',action)

  // isPromise?
  function _isPromise(promise) {
     if(!promise) return false;
     return promise.then && promise.catch;
  }
  console.log(action)
  if (_isPromise(action.payload)) {
    // if promise, dispatch local action
    console.log('local')
    store.dispatch({
      ...action,
      payload: action.offline.data
    })
  }

  if(!actionCreater) {
    // without redux-actions like custom action creators

    // axios call

  }

  if (_isPromise(action.payload) && major && actionCreater) {
    // success / failure handling
    store.dispatch({
      type: action.type + '_SUCCESS',
      payload: null
    })
  }

  return next(action)
}


export default offlineMiddleware
