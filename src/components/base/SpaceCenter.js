import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv =  styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 0;
  flex: 10;
`

const SpaceCenter = ({ children }) => {
  return (
    <StyledDiv>
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
