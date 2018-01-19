import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Components
import { SEO, AppTemplate, TitleHeader } from 'components'
// Containers
import { Todo, NoMatch } from 'containers'

const mapSocketToComponent = socket => props =>
  (<Todo socket={ socket } { ...props }/>)

const App = ({ socket }) => {
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
        <Route exact path='/' render={ mapSocketToComponent(socket) } />
        <Route exact path='/todo/:id' render={ mapSocketToComponent(socket) } />
        <Route exact path='/filter/:filter' render={ mapSocketToComponent(socket) } />
        <Route path='' component={ NoMatch }/>
      </Switch>
    </AppTemplate>
  )
}

export default App
