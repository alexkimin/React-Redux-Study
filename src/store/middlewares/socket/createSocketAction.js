
// it should be work before action creation
const _createSocketAction = (
  type,
  payloadCreator = (payload, body) => payload,
  meta={}
) =>
  data => {
    // Action type constant
    const typeString = type
    // to unify format
    const formattedData = {
      content: data
    }
    // to unify format of http request body
    const requestBody = {
      type: typeString,
      data: formattedData
    }

    // if there is custom payloadCreator function, apply
    const newPayload = payloadCreator(formattedData, requestBody)

    // return action object
    return {
      type: typeString,
      payload: newPayload,
      meta
    }
  }

export default createSocketAction()
