import React from 'react'
import { App } from 'containers'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-110163170-1');

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <App/>
        {/*<Route path="/" component={ App }/>*/}
      </BrowserRouter>
    </Provider>
  )
}

export default Root
