import React from 'react'
import { App } from 'containers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const Root = ({ store, theme, socket }) => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <BrowserRouter>
          <App socket={ socket }/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default Root
