import { createStore, applyMiddleware, compose } from 'redux'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import modules from './modules'

const isDev = process.env.NODE_ENV === 'development' || true;

const devtools = isDev && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn;

// const logger = createLogger()

const configureStore = () => {
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
    modules,
    compose(...enhancers)
  )

  // store.subscribe(() => {
  //
  // })

  // store.dispatch({type:'GET_TODO', payload:{name: 'hello'}})

  if(module.hot) {
    module.hot.accept('./modules', () => store.replaceReducer(modules));
  }

  return store
}

export default configureStore
