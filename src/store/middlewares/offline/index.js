import { pipe, isPromise } from './helper'
import compare from './compare'
import uuid from 'uuid/v4'
import { toJS } from 'immutable'
import * as type from './offlineReducer'


/* Main Code */
const _offlineMiddleware = ({ ignoreTypes }) => store => {

  const _ignoreTypes = ['@@']
  const ignore = [..._ignoreTypes, ...ignoreTypes]


  const offlineHistory = new Map()

  // actual middleware part
  return next => action => {

    let state

    // if the payload is promise, and actionID,
    if (isPromise(action.payload) && action.meta.offline) {
      //  Save the updated info as history to MAP
      offlineHistory.set(action.meta.offline.actionID, action.meta.offline.data)

      // Save prev history info to offline getState
      state = store.getState()
      const prevData = state.Todo.get('todos')
        .filter(todo => todo.id ==  action.meta.offline.data.id).toJS()[0]
      store.dispatch({
        type: type.offlineHistorySave,
        payload: { data: prevData, actionID: action.meta.offline.actionID}
       })

      // [TEST] fire setTimeout dispatch
      // setTimeout(() => store.dispatch({
      //   type: 'OFFLINE_FAILURE_CHECK',
      //   payload: {
      //     type: action.type,
      //     data: action.meta.offline.actionID
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
    if (!isPromise(action.payload) &&
      action.payload &&
      action.payload.actionID &&
      !action.type.includes('_FAILURE_CHECK') &&
      !action.type.includes(type.offlineHistorySave)
    ) {
      if(!offlineHistory.has(action.payload.actionID)) {
        // Temporal code
        // offlineHistory.clear()
        return next(action)
      }

      // compare history
      const prev = offlineHistory.get(action.payload.actionID)
      const current = action.payload.data

      const checker = compare(prev, current)

      // if the history matched -> overwrite action type as okay
      if (checker) {
        action.type += '_NONEED'
        console.log('----Matched!!')
      }

      // delete prev queue
      offlineHistory.delete(action.payload.actionID)

    }


    // if the history not matched for 3 sec, revert the local dispatch.
    // if (action.type.includes('_FAILURE_CHECK')) {
    //   const prevData = offlineHistory.get(action.payload.data)
    //
    //   if (prevData) {
    //     offlineHistory.delete(action.payload.data)
    //     state = store.getState()
    //     console.log(state)
    //     const offlineState = state.offline.get('history')
    //     const thePrevData = offlineState.get(action.payload.data)
    //     store.dispatch({
    //       type: action.payload.type,
    //       payload: thePrevData
    //     })
    //   }
    //   // store.dispatch()
    // }

    return next(action)
  }
}

const offlineMiddleware = option => _offlineMiddleware(option)

export default offlineMiddleware
