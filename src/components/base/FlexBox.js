import React from 'react'
import PropTypes, { oneOfType } from 'prop-types'
import styled from 'styled-components'

const FlexBox = ({
  children,
  height,
  column,
  center,
  col,
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

FlexBox.defaultProps = {
  height: 'inherit',
  col: 0,
}

FlexBox.propTypes = {
  children: PropTypes.element,
  height: PropTypes.string,
  column: PropTypes.bool,
  center: PropTypes.bool,
  col: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  margin: PropTypes.string,
}

export default FlexBox
