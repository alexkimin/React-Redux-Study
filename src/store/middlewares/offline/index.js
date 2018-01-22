import { pipe, isPromise } from './helper'
import compare from './compare'
import uuid from 'uuid/v4'


/* Main Code */
const _offlineMiddleware = ({ ignoreTypes }) => store => {

  const _ignoreTypes = ['@@']
  const ignore = [..._ignoreTypes, ...ignoreTypes]

  // this DS can be a queue
  const offlineHistory = new Map()

  // actual middleware part
  return next => action => {

    // if the payload is promise, and actionID,
    if (isPromise(action.payload) && action.meta.offline) {
      // console.log('OFFLINE!!')
      //  Save the info as history
      offlineHistory.set(action.meta.offline.actionID, action.meta.offline.data)
      // [TEST] fire setTimeout dispatch
      // setTimeout(() => store.dispatch({
      //   type: 'OFFLINE_FAILURE_CHECK',
      //   payload: {
      //     actionID: action.meta.offline.actionID
      //   }
      // }), 3000)

      // fire local dispatch to render first
      store.dispatch({
        type: action.type,
        payload: { data: action.meta.offline.data },
        meta: {
          offline: {
            actionID: action.meta.offline.actionID,
            status: 'LOCAL'
          }
        }
      })


    }

    // when response back(which has actionID in respond)
    if (!isPromise(action.payload) && action.payload && action.payload.actionID) {

      if(!offlineHistory.has(action.payload.actionID)) return next(action)
      // console.log('=============================================')
      // console.log('WELCOME BACK', action)

      // compare history
      const prev = offlineHistory.get(action.payload.actionID)
      const current = action.payload.data

      const checker = compare(prev, current)
      // console.log('COMPARE : ', checker)

      // if the history matched -> overwrite action type as okay
      // if (checker) {
      //   action.type += '_NONEED'
      //   console.log('----Matched!!')
      // }

      // delete prev queue
      offlineHistory.delete(action.payload.actionID)

    }


    // if the history not matched for 3 sec, revert the local dispatch.
    // if (action.type.includes())

    return next(action)
  }
}

const offlineMiddleware = option => _offlineMiddleware(option)

export default offlineMiddleware
