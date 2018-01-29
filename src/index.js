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
import { reset, theme } from 'styles'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}


// AppContainer(HotContainer) itself will know NODE_ENV
// so no need condition checking of NODE_ENV
// !module.hot || 'produnction' => AppContainer.prod
const render = Component => ReactDOM.render(
  (
    <HotContainer>
      <Component
        store={ store }
        theme={ theme }
        reset
      />
    </HotContainer>
  ),
  document.getElementById('root')
)
render(Root)

// Webpack Hot Module Replacement API
if(module.hot) {
  module.hot.accept('./Root', () => render(Root))
}

registerServiceWorker()
