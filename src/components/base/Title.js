import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// if I use this at the outside of Title, need to pass prop again
const StyledDiv = styled.span`
  font-size: ${({ size }) => `${size}px`};
  ${({ compose }) => compose }
`
const Title = ({
  title,
  composeStyle,
  size,
}) => (
  <StyledDiv
    compose={ composeStyle }
    size={ size }
  >
    { title }
  </StyledDiv>
)

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  composeStyle: PropTypes.string,
}

export default Title
