import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlexBox = ({
  children,
  height='inherit',
  column,
  center,
  col=0,
  margin
}) => {
  const StyledDiv = styled.div`
    height: ${ height };
    display: flex;
    flex-direction: ${ column ? 'column' : 'row' };
    flex: ${ col };
    ${() => center && (
      `align-items: center;
       justify-content: center;`
    )}
    margin: ${ margin };
  `
  return (
    <StyledDiv>
      { children }
    </StyledDiv>
  )
}

export default FlexBox
