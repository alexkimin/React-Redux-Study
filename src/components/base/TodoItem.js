import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.border};
  vertical-align: center;
`
const StyledSpan = styled.span`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  margin: 0 10px;
  flex: 1;
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
