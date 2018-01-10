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

import { Todo } from 'containers'

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
      <Route exact path="/" component={ Todo }/>
      <Route exact path="/:id" component={ Todo }/>
      <Route path="/filter/:filter" component={ Todo }/>
    </AppTemplate>
  )
}

export default App
