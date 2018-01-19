// Socket.io
import io from 'socket.io-client'

// const socket = io('/')

const _connect = socket =>
  new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket)
    })
  })
// _connect(socket)
//   .then(data => console.log('connected', data))

const locals = new Map()

export const socketMiddleware = path => store => next => action => {
  // 디스패치마다 미들웨어를 들어오게 됨...
  // if(!locals.has('socket')) locals.set('socket', io(path))

  next(action);
}
