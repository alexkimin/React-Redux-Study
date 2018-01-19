import 'react-hot-loader/patch' // to prevent error, need to import very first.
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer as HotContainer } from 'react-hot-loader'
// Root Component
import Root from './Root'
// Redux Store
import store from 'store'
// CSS
import { reset, theme, utils } from 'styles'
// Socket.io
import io from 'socket.io-client'

const socket = io('/')
// const socket = null

const render = Component => ReactDOM.render(
  (
    <HotContainer>
      <Component
        store={ store }
        theme={ theme }
        socket={ socket }
      />
    </HotContainer>
  ),
  document.getElementById('root')
)
render(Root)

if(module.hot) {
  module.hot.accept('./Root', () => render(Root))
}

registerServiceWorker()
