import React from 'react'
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

// const combineTwo = (a, b) => x => (<div>{a(x)} {b(x)}</div>)
// const combineComponents = (...args) => {
//   const [first, ...rest] = args
//   return [...rest].reduce((acc, c) => combineTwo(acc, c), first)
// }
//
// const testing = combineComponents([<div>1</div>, <div>2</div>, <div>3</div>])

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
