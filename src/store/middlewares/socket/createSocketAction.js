
// it should be work before action creation
const createSocketAction = (
  type,
  payloadCreator = payload => payload,
  meta={}
) =>
  data => {
    const typeString = type

    const taggedData = {
      content: data
    }

    const body = {
      type: typeString,
      data: taggedData
    }

    const payload = payloadCreator(taggedData, body)

    return {
        type: typeString,
        payload: payload,
        meta
      }
  }

export default createSocketAction
