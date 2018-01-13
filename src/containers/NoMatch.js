import React from 'react'
import {
  TodoTemplate,
  WrongEntry
} from 'components'


const NoMatch = ({ location }) => {
  return (
    <TodoTemplate>
        <WrongEntry path={ location.pathname } />
    </TodoTemplate>
  )
}

export default NoMatch
