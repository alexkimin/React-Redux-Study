import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`

`
const Button = ({
  type,
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

Button.defaultProps = {
  type: 'button',
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
