import tagger from './tagger'
import uuid from 'uuid/v4'

// it should be work before action creation
const createOffFirstAction = (
  type,
  payloadCreator = payload => payload,
  meta={ offline:{} }
) =>
  data => {
    const typeString = type

    const actionID = uuid()
    meta.offline.actionID = actionID

    const taggedData = {
      content: data,
      actionID
    }

    const body = {
      type: typeString,
      data: taggedData
    }

    const payload = payloadCreator(taggedData, body)

    return tagger({
        type: typeString,
        payload: payload,
        meta
      }, data)
  }

export default createOffFirstAction
