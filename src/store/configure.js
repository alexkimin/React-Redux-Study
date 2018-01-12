import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import modules from './modules'
import Todo from './modules/Todo'

const isDev = process.env.NODE_ENV === 'development' || true;

const devtools = isDev && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn;

// import { createLogger } from 'redux-logger'
// const logger = createLogger()

const configureStore = preloadedState => {
  const enhancers = [
    applyMiddleware(
      thunk
    ),
    devtools({
      actionsBlacklist: [null],
      maxAge: 1000
    })
  ]

  const store = createStore(
    combineReducers({
      Todo
    }),
    preloadedState,
    compose(...enhancers)
  )

  if(module.hot) {
    module.hot.accept('./modules', () => store.replaceReducer(modules))
  }

  return store
}

export default configureStore
