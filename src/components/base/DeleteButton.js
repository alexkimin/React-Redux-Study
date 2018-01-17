import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  ${props => `
    color: ${ props.theme.color.border };
    transition: color ${ props.theme.transition };

    &:hover {
      color: ${ props.theme.color.alert };
    }
    `
  }
`

const DeleteButton = ({ onClick }) => {
  return (
    <StyledDiv onClick={ onClick }>
      <i className="fas fa-lg fa-trash-alt"></i>
    </StyledDiv>
  )
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
}

export default DeleteButton
