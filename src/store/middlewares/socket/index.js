// Socket.io
import io from 'socket.io-client'

const socketMiddleware = ({ actionTypes , path='/' }) => store => {

  const socketEvents = new Map()
  const socket = io(path)
  store.socket = {
    session: null,
    socketEvents
  }

  // register socket event listners
  Object.keys(actionTypes).forEach(key => {
    const actionConstant = actionTypes[key]
    socketEvents.set(actionConstant, true)

    socket.on(actionConstant, (data) => console.log('-------socket success!') || store.dispatch({
      type: actionConstant,
      payload: data,
      meta: {
        socket: {
          fromServer: true
        }
      }
    }))
    socket.on(`${actionConstant}_FAILURE`, (data) => console.log('-------socket failure!') || store.dispatch({
      type: actionConstant,
      payload: data,
      meta: {
        socket: {
          fromServer: true
        }
      }
    }))
  })

  return next => action => {

    // if(socket.id) store.socket.session = socket.id
    //
    // if(!action.meta) action.meta = {}
    // if (!action.meta.socket) action.meta.socket = {}
    //
    // if(!action.meta.socket.sender && socket.id && !action.meta.socket.fromServer) {
    //   action.meta.socket.sender = socket.id
    // }

    // console.log(action)

    next(action);
  }
}


export default socketMiddleware
