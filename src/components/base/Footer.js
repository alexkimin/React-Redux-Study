import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  flex: 1;
  margin: 10px;
`

const Footer = ({ text }) => {
  return (
    <StyledFooter>
      { text }
    </StyledFooter>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
}

export default Footer
