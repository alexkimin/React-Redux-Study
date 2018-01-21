
const _equal = (...arg) => arg.reduce((acc, c) => arg[0] === c)
const _payload = action => JSON.stringify(action.payload.data)
const _prevData = history => action =>
  JSON.stringify(history.get(action.type).data)

const compare = history => action => {

  const historyData = _prevData(history)(action)
  const payload = _payload(action)

  return _equal(historyData, payload)
}

export default compare
