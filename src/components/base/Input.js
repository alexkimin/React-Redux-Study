import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledInput = styled.input`
  flex: 1;
  height: 35px;
  border: none;
  margin-right: 10px;
  border-bottom: 1px solid ${ props => props.theme.color.border };
  transition: ${ utils.transitMap(['border-bottom', 'background']) };

  &:focus {
    outline: none;
    border-bottom: 2px solid ${ props => props.theme.color.secondary };
    ::placeholder {
      opacity: 0;
    }
  }
`

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <StyledInput
      type={ type }
      name={ name }
      placeholder={ placeholder }
      onChange={ onChange }
      value={ value }
    />
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Input
