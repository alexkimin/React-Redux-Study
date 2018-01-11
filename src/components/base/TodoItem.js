import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLi = styled.li`
  padding: 5px;
  width: 100%;
  height: 40px;
  border: 1px solid gray;
`
const StyledSpan = styled.span`
  text-decoration: ${(props) =>
    props.isCompleted ? 'line-through' : 'none'};
`

const TodoItem = ({
  text,
  checkFn,
  isCompleted
}) => {
  return (
    <StyledLi>
      <span onClick={ checkFn }> V </span>
      <StyledSpan isCompleted>{ text }</StyledSpan>
      <span onClick={ checkFn }> Delete </span>
    </StyledLi>
  )
}

export default TodoItem
