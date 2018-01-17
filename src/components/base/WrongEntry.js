import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledDiv = styled.div`
  font-size: 20px;
  ${props => utils.flexBox(props)}
`

const WrongEntry = ({ path }) => {
  return (
    <StyledDiv center flex={ 1 }>
      <div>Sorry !!!</div>
      <div>{ path }</div>
      <div>didn’t match any pages.</div>
    </StyledDiv>
  )
}

WrongEntry.propTypes = {
  path: PropTypes.string.required,
}

export default WrongEntry
