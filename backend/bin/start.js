#!/usr/bin/env node
/* eslint strict: 0 */

'use strict'

// enables ES6 ('import'.. etc) in Node
require('babel-core/register')
require('babel-polyfill')

const app = require('../app').app
const server = require('../app').server
const debug = require('debug')('backend:server')


/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = function(val) {
  const port = parseInt(val, 10)
  // named pipe
  if (isNaN(port)) return val
  // port number
  if (port >= 0) return port
  return false
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3001')
app.set('port', port)

/**
 * Listen on provided port, on all network interfaces.
 */

 server.listen(app.get('port'), () => {
   console.log('App is running at http://localhost:' + app.get('port')); 
 });

/**
 * Event listener for HTTP server "error" event.
 */

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
   ? `Pipe ${port}`
   : `Port ${port}`

   // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      debug(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
})

/**
 * Event listener for HTTP server "listening" event.
 */

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`
  debug(`Listening on ${bind}`)
})
