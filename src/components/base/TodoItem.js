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
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
`

const TodoItem = ({
  text,
  checkFn,
  ...rest
}) => {
  return (
    <StyledLi>
      <span onClick={ checkFn }> V </span>
      <StyledSpan { ...rest }>{ text }</StyledSpan>
      <span onClick={ checkFn }> Delete </span>
    </StyledLi>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string,
  checkFn: PropTypes.func,
}

export default TodoItem
