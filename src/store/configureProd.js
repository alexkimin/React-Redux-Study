import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import penderMiddleware from 'redux-pender'
import modules from './modules'

const configureStoreProd = preloadedState => {
  const enhancers = [
    applyMiddleware(
      thunk,
      penderMiddleware()
    ),
  ]

  const store = createStore(
    modules,
    preloadedState,
    compose(...enhancers)
  )

  if(module.hot) {
    module.hot.accept('./modules', () => store.replaceReducer(modules))
  }

  return store
}

export default configureStoreProd
