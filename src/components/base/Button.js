import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`

`
const Button = ({
  type='button',
  name,
  onClick,
}) => {
  return (
    <StyledButton
      type={ type }
      onClick={ onClick }
    >
      { name }
    </StyledButton>
  )
}

export default Button
