import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import { Map, List } from 'immutable'

// Action Types
export const USER_CONCUR = 'user/USER_CONCUR'

// Actions Creater
export const concurrentUser = createAction(USER_CONCUR)

const initialState = Map({
  conUser: 0
})

// reducers with redux-pender
const User = handleActions({
  [USER_CONCUR]: (state, action) => 
    state.set('conUser', action.payload.num),
}, initialState)

export default User
