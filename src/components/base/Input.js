import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  flex-grow: 1;
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
