// Socket.io
import io from 'socket.io-client'
import filterActions from './filterActions'


const socketMiddleware = path => {

  const socketEvents = new Map()
  socketEvents.set('socket', io(path))

  return store => next => action => {

    if(filterActions(action)) return next(action)

    if(!socketEvents.has(action.type)) {
      socketEvents.set(action.type, true)
      const socket = socketEvents.get('socket')
      socket.on(action.type, (data) => console.log('-------socket') || store.dispatch({
        type: action.type,
        payload: data
      }))
    }
    next(action);
  }
}


export default socketMiddleware
