import tagger from './tagger'
import uuid from 'uuid/v4'

// it should be work before action creation
const createOffFirstAction = (
  type,
  payloadCreator = payload => payload,
  meta
) =>
  data => {
    const typeString = type
    const actionID = uuid()
    if(!meta) meta = {}
    meta.actionID = actionID

    const taggedData = {
      content: data,
      actionID
    }

    const body = {
      type: typeString,
      data: taggedData
    }
    console.log('data', data)
    console.log('body', body)

    const payload = payloadCreator(taggedData, body)

    return tagger({
        type: typeString,
        payload: payload,
        meta
      }, data)
  }

export default createOffFirstAction
