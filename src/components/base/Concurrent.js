import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { utils } from 'styles'

const StyledDiv = styled.div`
  margin: 0 20px;
  color: ${ props => props.theme.color.base };

  ${props => utils.media.mobile`
      margin: 0;
    `}
`
const StyledSpan = styled.span`
  margin: 0 10px;
  font-size: 1.1em;
`

const Concurrent = ({ users }) => {
  return (
    <StyledDiv row>
      <i className="fas fa-user"></i>
      <StyledSpan>{ users }</StyledSpan>
    </StyledDiv>
  )
}

Concurrent.defaultProps = {
  users: 0
}

Concurrent.propTypes = {
  users: PropTypes.number,
}

export default Concurrent
