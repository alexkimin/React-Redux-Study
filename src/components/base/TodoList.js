import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledUl = styled.ul`
  ${props => utils.flexBox(props)}
  list-style:none;
`

const TodoList = ({ children, ...rest }) => {
  return (
    <StyledUl padded {...rest}>{ children }</StyledUl>
  )
}

TodoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.any
  ]),
}

export default TodoList
