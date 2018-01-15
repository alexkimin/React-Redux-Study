import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  flex: 1;
  height: 35px;
  border: none;
  margin-right: 10px;
  border-bottom: 1px solid ${props => props.theme.color.border};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${props => props.theme.color.secondary};
  }
`
const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  getRef,
}) => {
  return (
    <StyledInput
      type={ type }
      name={ name }
      placeholder={ placeholder }
      onChange={ onChange }
      value={ value }
      innerRef={ getRef }
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
  getRef: PropTypes.func,
}

export default Input
