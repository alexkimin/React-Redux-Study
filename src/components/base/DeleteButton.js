import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledDiv = styled.div`
  color: ${ props => props.theme.color.border };
  transition: ${ utils.transitMap(['all']) };
  transform: scale(1, 1);

  &:hover {
    color: ${ props => props.theme.color.alert };
    transform: scale(1.1, 1.1);
  }
`

const DeleteButton = ({ onClick }) => {
  return (
    <StyledDiv onClick={ onClick }>
      <i className="fas fa-lg fa-trash-alt"/>
    </StyledDiv>
  )
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
}

export default DeleteButton
