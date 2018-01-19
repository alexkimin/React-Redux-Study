import tagger from './tagger'

// it should be work before action creation
const offFirstAction = actionCreate => data => {
  const action = actionCreate(data)
  const taggedAction = tagger(action, data)
  return action
}

export default offFirstAction
