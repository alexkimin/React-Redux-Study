import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import debug from 'debug'
import path from 'path'
import http from 'http'
import Socket from 'socket.io'
import todo from './routes/todo'
// import httpProxy from 'express-http-proxy'

// const serviceProxy = httpProxy('https://')

export const app = express()
export const server = http.Server(app)
const io = Socket(server)

// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../build')))

/*
HTTP2.0?
// Authentication
app.use((req, res, next) => {

  // passport / JWT?
  // keyservice -> micro service?
  // sessionstore - redis?

  next()
})
// Proxy request
app.get('', (req, res, next) => {
  // proxy to micro service
  serviceProxy(req, res, next)
})
*/


app.use((req, res, next) => {
  // socket setting with local scope
  // res.locals.io = io
  next()
});



// router register
app.use('/todo', todo(io))

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
