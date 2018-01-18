import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// if I use this at the outside of Title, need to pass prop again
const StyledDiv = styled.span`
  font-size: ${ props => `${props.size}px` };
  flex-grow: 1;
  text-align: center;
`
const Title = ({ title, size }) => (
  <StyledDiv size={ size }>
    { title }
  </StyledDiv>
)

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
}

export default Title
