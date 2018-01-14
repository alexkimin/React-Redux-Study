import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  vertical-align: center;
`
const StyledSpan = styled.span`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  margin: 0 10px;
`

const TempBtn = styled.button`

`

const TodoItem = ({
  id,
  text,
  toggleFn,
  deleteFn,
  isCompleted,
}) => {
  return (
    <StyledLi id={ id }>
      <TempBtn onClick={ toggleFn }>
        V
      </TempBtn>
      <StyledSpan isCompleted={ isCompleted } >
        { text }
      </StyledSpan>
      <TempBtn onClick={ deleteFn }>
        Delete
      </TempBtn>
    </StyledLi>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  toggleFn: PropTypes.func,
  deleteFn: PropTypes.func,
  isCompleted: PropTypes.bool,
}

export default TodoItem
