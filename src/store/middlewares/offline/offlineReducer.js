// import { createAction, handleActions } from 'redux-actions'
import { Map, List } from 'immutable'

export const offlineHistorySave = 'OFFLINE_HISTORY_SAVE'
export const offlineHistoryDelete = 'OFFLINE_HISTORY_DELETE'
export const offlineHistoryRollback = 'OFFLINE_HISTORY_ROLLBACK'

const init = Map({
  history: Map({})
})

const offlineReducer = (state=init, action) => {
  switch(action.type) {
    case offlineHistorySave:
      return state.update('history', list => list.set(action.payload.actionID, {data:action.payload.data}))
    case offlineHistoryDelete:
      return console.log(action)
    case offlineHistoryRollback:
      return console.log(action)
    default:
      return state
  }
}

export default offlineReducer
