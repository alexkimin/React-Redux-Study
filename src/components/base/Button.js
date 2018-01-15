import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledButton = styled.button`
  ${props =>`
      border-radius: none;
      background: white;
      width: ${props.width};
      height: ${props.height};
      border: 1px solid ${props.theme.color.border};
      border-bottom: 2px solid ${props.theme.color.border};
      border-right: 2px solid ${props.theme.color.border};

      &:focus {
        outline: none;
      }

      &:active {
        border: 1px solid ${props.theme.color.border};
      }
    `
  }
`
const Button = ({
  type,
  name,
  onClick,
  width,
  height,
  ...rest
}) => {
  return (
    <StyledButton
      type={ type }
      onClick={ onClick }
      width={ width }
      height={ height }
      { ...rest }
    >
      { name }
    </StyledButton>
  )
}

Button.defaultProps = {
  type: 'button',
  height: '30px',
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Button
