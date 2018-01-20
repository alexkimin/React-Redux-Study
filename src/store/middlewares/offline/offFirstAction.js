import tagger from './tagger'

// it should be work before action creation
const createOffFirstAction = (
  type,
  payloadCreator = payload => payload
) =>
  data => {
    const typeString = type
    const body = {
      type: typeString,
      data
    }

    const payload = payloadCreator(data, body)

    return tagger({
        type: typeString,
        payload: payload
      }, data)
  }

export default createOffFirstAction
