import React from 'react'
import axios from 'axios'

import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import {
  SEO,
  AppTemplate,
} from 'components'

import { TodoShow } from 'containers'

const App = props => {
  return (
    <AppTemplate>
      {/* meta tag configure */}
      <SEO
        title={ 'Toy TODO project' }
        link={ [{
          rel: 'canonical',
          href: window.location.href }] }
      />
      {/*routes*/}
      <Route exact path="/" component={ TodoShow }/>
      <Route path="/todo/:id" component={ TodoShow }/>
      <Route path="/filter/:filter" component={ TodoShow }/>
    </AppTemplate>
  )
}

export default App
