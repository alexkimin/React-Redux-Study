import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  flex: 1;
  margin: 10px;
`
const StyledA = styled.a`
  margin: 0 10px;

  &:hover {
    color: ${ props => props.theme.color.primary }
  }
`

const Footer = ({ text }) => {
  return (
    <StyledFooter>
      { text }
      <StyledA href='https://github.com/AlexMin314/React-Redux-Study/tree/master'>
        <i className="fab fa-lg fa-github"></i>
      </StyledA>
    </StyledFooter>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
}

export default Footer
