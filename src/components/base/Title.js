import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  font-size: 30px;
`
const Title = ({ children }) => (
  <StyledDiv>
    { children }
  </StyledDiv>
)

Title.propTypes = {
  children: PropTypes.string
}

export default Title
