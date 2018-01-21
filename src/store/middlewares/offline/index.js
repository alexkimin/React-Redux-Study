import filterActions from './filterActions'
import { pipe, isPromise } from './helper'
import compare from './compare'
import uuid from 'uuid/v4'

// helper tagging function when current dispatching is no need to
// reach originally targeted reducer due to same data.
const _offlineNoNeedTagger = action => {
  action.type += '_NONEED'
  action.offline = null
  return action
}




/* Main Code */
const _offlineMiddleware = option => {

  // Store offline dispatching history to compare
  // pre-data in local with post-delivered data from server
  const offlineHistory = new Map()
  const offlineHistoryQueue = []
  const responseQueue = []

  const userId = uuid()
  const _newDispatch = dispatch => action => {
    const _action = {...action, userId }
    return dispatch(_action)
  }
  let dispatchUpdate = false

  const comparing = compare(offlineHistory)

  // actual middleware part
  return store => next => action => {

    //register userID to Store
    if(!store.userId) store.userId = userId

    if(!dispatchUpdate) {
      store.dispatch = _newDispatch(store.dispatch)
      dispatchUpdate = true;
    }




    // skipping non-related actions with this middleware
    if(filterActions(action)) return next(action)
    console.log(action)
    console.log(store)

    // checking another action creation library
    // and will use this middleware as major promise-middleware
    const { actionCreater, major } = option

    // Comparing logic
    // In case that action type is in history
    // payload is not promise
    if(offlineHistory.has(action.type) && !isPromise(action.payload)) {
        if(comparing(action)) {
        offlineHistory.delete(action.type)
        return next(_offlineNoNeedTagger(action))
      }
      console.log('diff')
    }

    if (isPromise(action.payload) ) {
      // if promise, dispatch local action
      store.dispatch({
        ...action,
        payload: { data: action.offline.data }
      })
      console.log('clicked')

      if(!action.type.includes('_NONEED')) {
        offlineHistory.set(action.type, { data: action.offline.data })
      }
    }

    return next(action)
  }
}

const offlineMiddleware = option => _offlineMiddleware(option)

export default offlineMiddleware
