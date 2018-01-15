import React from 'react'
import { Route, Switch } from 'react-router-dom'
// components
import { SEO, AppTemplate, Footer } from 'components'
import { Todo, NoMatch } from 'containers'

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
        <Route exact path='/' component={ Todo }/>
        <Route path='/todo/:id' component={ Todo }/>
        <Route path='/filter/:filter' component={ Todo }/>
        <Route path='' component={ NoMatch }/>
      </Switch>
      <Footer text='App Footer' />
    </AppTemplate>
  )
}

export default App
