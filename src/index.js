import 'react-hot-loader/patch' // to prevent error, need to import very first.
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer as HotContainer } from 'react-hot-loader'

import Root from './Root'
import 'styles/main.css'

import store from 'store'

const render = Component => ReactDOM.render(
  (
    <HotContainer>
      <Component store={ store }/>
    </HotContainer>
  ),
  document.getElementById('root')
)
render(Root)

if(module.hot) {
  module.hot.accept('./Root', () => render(Root))
}

registerServiceWorker()
