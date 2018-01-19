import filterActions from './filterActions'
import { pipe } from './helper'


const offlineMiddleware = option => store => next => action => {
  // skip non-related actions
  if(filterActions(action)) return next(action)

  // const prevDispatch = store.dispatch
  //
  // const newDispatch = action => {
  //   let offline = 'testing'
  //   return prevDispatch(action)
  // }
  //
  // store.dispatch = newDispatch

  console.log('== this is offline middleware ==')
  console.log(action)

  return pipe(next)(action)
}


export default offlineMiddleware
