import tagger from './tagger'

// it should be work before action creation
const createOffFirstAction = (
  type,
  payloadCreator = payload => payload
) =>
  data => {
    const typeString = type

    const payload = payloadCreator(data)

    return tagger({
        type: typeString,
        payload
      }, data)
  }

export default createOffFirstAction
