import React from 'react'
import PropTypes, { oneOfType, arrayOf } from 'prop-types'
import styled from 'styled-components'

const StyledForm = styled.form`
  width: 100%;
  display: flex;
`

const Form = ({
  onSubmit,
  children,
}) => {
  return (
    <StyledForm onSubmit={ onSubmit }>
      { children }
    </StyledForm>
  )
}

Form.defaultProps = {
  
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
}

export default Form
