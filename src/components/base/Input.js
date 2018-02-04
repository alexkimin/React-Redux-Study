import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// style utilities
import { utils } from 'styles'
import { blink } from 'styles/keyframes'

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
      color: ${ props => props.theme.color.secondary };
      transform: translate(0, -20px);
      opacity: 1;

      > span {
        animation: ${ blink } 1.2s infinite;
      }

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
  transform: translate(0, 0);
  transition: ${ utils.transitMap(['color', 'transform']) };
  opacity: ${ props => props.value ? 0 : 1 };
`

const Blinker = styled.span`
  margin: 0 5px;
  opacity: 0;
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
        onChange={ onChange }
        value={ value }
      />
    <Placeholder value={ value }>
      { placeholder } <Blinker>__</Blinker>
    </Placeholder>
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