import { isPromise } from './helper'


const _nonRelatedActions = action => {
  // If the action doesn't have payload
  const emptyAction = !action.payload
  // If the action is not done by user
  const automaticAction = action.type.includes('@@')
  // If the action is promise
  const promiseCheck = isPromise(action.payload)
  // return boolean
  return emptyAction || automaticAction //|| promiseCheck
}

const filterActions = _nonRelatedActions

export default filterActions
