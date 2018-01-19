const _asyncTagger = (action, data) => {
  // if local status
  // if (!action.payload.hasOwnProperty('request')) {
    action.offline = { tag: 'OFFLINE', data }
    return action
  // }

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
