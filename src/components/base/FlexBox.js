import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlexBox = ({
  children,
  height='inherit',
  column,
  center,
  col=0,
  ... rest
}) => {
  const Wrapper = styled.div`
    height: ${ height };
    display: flex;
    flex-direction: ${ column ? 'column' : 'row' };
    ${(center) => center && (
      `align-items: center;
      justify-content: center;`
    )}
    flex: ${ col }
  `
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

export default FlexBox
