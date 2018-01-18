import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import penderMiddleware from 'redux-pender'
import registerObserver from 'react-perf-devtool'
import modules from './modules'

const devtools = window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn;

registerObserver()

const configureStoreDev = preloadedState => {
  const enhancers = [
    applyMiddleware(
      thunk,
      penderMiddleware()
    ),
    devtools({
      actionsBlacklist: [null],
      maxAge: 1000
    })
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

export default configureStoreDev
