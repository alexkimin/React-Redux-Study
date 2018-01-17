import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const Wrapper = styled.div`
  ${props => utils.flexBox(props)}
  background: white;
  box-shadow: ${props => props.theme.shadow};
  padding: 1.5em;
`

const TodoTemplate = ({ children }) => {
  return (
    <Wrapper flex={ 1 }>
      { children }
    </Wrapper>
  )
}

TodoTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
}

export default TodoTemplate
