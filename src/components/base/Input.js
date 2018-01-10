import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  flex-grow: 1;
`
const Input = ({
  type='text',
  name,
  placeholder,
  onChange,
}) => {
  return (
    <StyledInput
      type={ type }
      name={ name }
      placeholder={ placeholder }
      onChange={ onChange }
    />
  )
}

export default Input
