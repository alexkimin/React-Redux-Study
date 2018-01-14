import React from 'react'
import { App } from 'containers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
