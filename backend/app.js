import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import debug from 'debug'
import path from 'path'
// import cors from 'cors'
import http from 'http'
import Socket from 'socket.io'


import todo from './routes/todo'

export const app = express()
export const server = http.Server(app)
const io = Socket(server)
// app.use(cors())

// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../build')))

// custom middleware
app.use(function (req, res, next) {
  // socket setting with local scope
  res.locals.io = io
  next();
});

// hackey concurrentUser tracking for fun.
let concurrent = 0
io.on('connect', (socket) => {
  console.log('connected', socket.id)
  // add id to io object
  io.id = socket.id
  concurrent++
  io.emit('conUser', concurrent)

  socket.on('disconnect', () => {
    concurrent--
    io.emit('conUser', concurrent)
  })
})
// router register
app.use('/todo', todo);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.json(err)
})

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err)
  process.exit(1)
})

export default app
