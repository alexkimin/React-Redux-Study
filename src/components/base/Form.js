import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledForm = styled.form`
  ${ props => utils.flexBox(props) }
  padding: 10px 0;
`

const Form = ({ onSubmit, children }) => {
  return (
    <StyledForm
      center
      row
      onSubmit={ onSubmit }
    >
      { children }
    </StyledForm>
  )
}


Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
}

export default Form
