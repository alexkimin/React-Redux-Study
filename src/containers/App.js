import React from 'react'
import axios from 'axios'

import {
  Route,
  Switch,
  Link,
} from 'react-router-dom'

import {
  SEO,
  AppTemplate,
} from 'components'

import {
  TodoShow,
  NoMatch,
} from 'containers'

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
      <Switch>
        <Route path="/" component={ TodoShow }/>
        <Route path="/todo/:id" component={ TodoShow }/>
        <Route path="/filter/:filter" component={ TodoShow }/>
        <Route path="*" component={ NoMatch }/>
      </Switch>
    </AppTemplate>
  )
}

export default App
