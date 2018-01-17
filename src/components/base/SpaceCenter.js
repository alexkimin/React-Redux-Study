import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledDiv =  styled.div`
  ${ props => utils.flexBox(props) }
`

const SpaceCenter = ({ children, ...rest }) => {
  return (
    <StyledDiv { ...rest }>
      { children }
    </StyledDiv>
  )
}

SpaceCenter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
}

export default SpaceCenter
