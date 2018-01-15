import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import debug from 'debug'
import path from 'path'
// import cors from 'cors'

import todo from './routes/todo'

const app = express()

// app.use(cors())

// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

// custom middleware
app.use(function (req, res, next) {
  // res.locals.user = {name: 'alex'}
  next();
});

// router register
console.log('router registered')
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
