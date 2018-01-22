// Socket.io
import io from 'socket.io-client'

const socketMiddleware = ({ actionTypes , path='/' }) => store => {

  const socket = io(path)

  // register socket event listners
  Object.keys(actionTypes).forEach(key => {

    const actionConstant = actionTypes[key]

    socket.on(actionConstant, (data) => store.dispatch({
      type: actionConstant,
      payload: data,
      meta: {
        socket: {
          fromServer: true
        }
      }
    }))
    socket.on(`${actionConstant}_FAILURE`, (data) => store.dispatch({
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



    next(action)
  }
}


export default socketMiddleware
