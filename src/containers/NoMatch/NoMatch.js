import React from 'react'
import PropTypes from 'prop-types'
// Components
import { TodoTemplate, WrongEntry } from 'components'

const NoMatch = ({ location }) => {
  return (
    <TodoTemplate>
        <WrongEntry path={ location.pathname } />
    </TodoTemplate>
  )
}

NoMatch.propTypes = {
  location: PropTypes.object,
}

export default NoMatch
