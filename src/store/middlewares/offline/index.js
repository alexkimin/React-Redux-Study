import filterActions from './filterActions'
import { pipe } from './helper'

// isPromise?
function _isPromise(promise) {
   if(!promise) return false;
   return promise.then && promise.catch;
}

function compare() {

}

const offlineMiddleware = option => {
  const offlineHistory = new Map()
  return store => next => action => {

    // skip non-related actions
    if(filterActions(action)) return next(action)

    const { actionCreater, major } = option

    store.cancelation = false

    const _offlineCompare = action => {
      action.type += '_NONEED'
      return action
    }


    // comparing logic
    if(offlineHistory.has(action.type) && !_isPromise(action.payload)) {
      console.log('--------has!!!!')
      const type = action.type
      let payload = action.payload.data
      payload = JSON.stringify(payload)
      let historyData = offlineHistory.get(type).data
      historyData = JSON.stringify(historyData)

      const check = historyData === payload
      console.log('--------checking!!!! ', check, typeof check)

      if(check) {
        action = _offlineCompare(action)
        offlineHistory.delete(type)
        action.offline = null
      }
      // console.log(action)
      return next(action)
    }



    if (_isPromise(action.payload) ) {
      // if promise, dispatch local action
      console.log(action)
      store.dispatch({
        ...action,
        payload: { data: action.offline.data }
      })
      console.log('--------history making!!')
      if(!action.type.includes('_NONEED')) {
        console.log('--------setted')
        offlineHistory.set(action.type, { data: action.offline.data })
      }
    }


    //
    // if (_isPromise(action.payload) && major && actionCreater) {
    //   // success / failure handling
    //   store.dispatch({
    //     type: action.type + '_SUCCESS',
    //     payload: null
    //   })
    // }

    return next(action)
  }
}


export default offlineMiddleware
