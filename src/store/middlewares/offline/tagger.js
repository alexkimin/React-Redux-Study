function _isPromise(promise) {
   if(!promise) return false;
   return promise.then && promise.catch;
}

const _asyncTagger = (action, data) => {
  // if local status
  if (_isPromise(action.payload)) {
    action.offline = { tag: 'OFFLINE', data }
    return action
  }
  if (!_isPromise(action.payload)) {
    action.offline = { tag: 'LOCAL', data }
    return action
  }

  // if success status
  if (action.payload.status.toString()[0] === '2') {
    action.offline = { tag: 'SUCCESS', data: action.payload.data }
    return action
  }

  // if failure status
  action.offline = { tag: 'FAILURE' }
  return action
}

const tagger = _asyncTagger

export default tagger
