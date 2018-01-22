import { isPromise } from './helper'

const _asyncTagger = (action, data) => {
  // if local status
  if (isPromise(action.payload)) {
    action.meta.offline = { ...action.meta.offline, tag: 'OFFLINE', data: data }
    return action
  }

  return action
}

const tagger = _asyncTagger

export default tagger
