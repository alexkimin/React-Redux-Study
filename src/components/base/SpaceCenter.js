import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv =  styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 0;
  flex: 10;
`

const SpaceCenter = props => {
  return (
    <StyledDiv>
      { props.children }
    </StyledDiv>
  )
}

export default SpaceCenter
