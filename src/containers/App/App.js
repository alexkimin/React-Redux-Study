import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Components
import { SEO, AppTemplate, TitleHeader } from 'components'
// Containers
import { NoMatch } from 'containers'
// Async Loading
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>
const LoadableTodo = Loadable({
  loader: () => import('../Todo/Todo'),
  loading: Loading,
})

const App = props => {
  return (
    <AppTemplate>
      {/* meta tag configure */}
      <SEO
        title={ 'TODO' }
        link={ [{
          rel: 'canonical',
          href: window.location.href }] }
      />
      {/* Header */}
      <TitleHeader />
      {/*routes*/}
      <Switch>
        <Route exact path='/' component={ LoadableTodo } />
        <Route exact path='/todo/:id' component={ LoadableTodo } />
        <Route exact path='/filter/:filter' component={ LoadableTodo } />
        <Route path='' component={ NoMatch }/>
      </Switch>
    </AppTemplate>
  )
}

export default App
