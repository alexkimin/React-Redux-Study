import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer as HotContainer } from 'react-hot-loader'

import Root from './Root'
import 'styles/main.css'

import store from 'store'

// import axios from 'axios'
// window.axios = axios


const render = (Component) => ReactDOM.render(
  (
    <HotContainer>
      <Component store={ store }/>
    </HotContainer>
  ),
  document.getElementById('root')
);

render(Root)
// console.log(module.hot)
if(module.hot) {
  module.hot.accept('./Root', () => render(Root))
}

registerServiceWorker()

/*
const renderApp = () => (
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
*/
