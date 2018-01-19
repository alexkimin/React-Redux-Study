import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const Wrapper = styled.span`
  position: relative;
  flex: 1;
  padding-right: 10px;
  padding-bottom: 5px;
`

const StyledInput = styled.input`
  position: relative;
  z-index: 1;
  background: transparent;
  height: 35px;
  border: none;
  width: 100%;
  border-bottom: 1px solid ${ props => props.theme.color.border };
  transition: ${ utils.transitMap(['border-bottom', 'background']) };

  &:focus {
    outline: none;
    border-bottom: 2px solid ${ props => props.theme.color.secondary };

    + div {
      top: -10px;
      color: ${ props => props.theme.color.secondary }
    }
  }
`

const Placeholder = styled.div`
  position: absolute;
  z-index: 0;
  padding-left: 3px;
  font-size: ${ props => props.theme.font.small };
  color: ${ props => props.theme.color.base };
  top: 15px;
  transition: ${ utils.transitMap(['top']) };
`

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <Wrapper>
      <StyledInput
        type={ type }
        name={ name }
        placeholder={ placeholder }
        onChange={ onChange }
        value={ value }
      />
    <Placeholder>New todo here...</Placeholder>
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  placeholder: ''
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Input
