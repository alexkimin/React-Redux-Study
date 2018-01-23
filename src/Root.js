import React from 'react'
import { App } from 'containers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const Root = props => {
  return (
    <Provider store={ props.store }>
      <ThemeProvider theme={ props.theme }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default Root
