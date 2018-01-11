import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledUl = styled.ul`
  boader: 1px solid green;
  padding: 5px;
  width: 100%;
  list-style:none;
`

const TodoList = (props) => {
  return (
    <StyledUl>{ props.children }</StyledUl>
  )
}

export default TodoList
