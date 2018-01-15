import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CheckButton, DeleteButton } from 'components'

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.border};
  vertical-align: center;
  transition: background ${props => props.theme.transition};

  &:hover {
    background: ${props => props.theme.color.border};
  }
`
const StyledSpan = styled.span`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  margin: 0 10px;
  flex: 1;
`

const TempBtn = styled.button`
  border-radius: 9999px;
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.color.border};
  background: transparent;
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
      <CheckButton
        onClick={ toggleFn }
        toggle={ isCompleted }
      />
      <StyledSpan isCompleted={ isCompleted } onClick={ toggleFn } >
        { text }
      </StyledSpan>
      <DeleteButton onClick={ deleteFn }/>
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
