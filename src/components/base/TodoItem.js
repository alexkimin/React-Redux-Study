import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { CheckButton, DeleteButton } from 'components'

const testAni = keyframes`
  from {
    opacity: 0.01;
  }
  to {
    opacity: 1.0;
  }
`

const TodoBody = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.border};
  vertical-align: center;
  transition: background ${props => props.theme.transition};
  opacity: 0;

  animation: ${testAni} 500ms ease-in-out;
  animation-delay: ${props => props.idx * 80}ms;
  animation-fill-mode: forwards;

  &:hover {
    background: ${props => props.theme.color.border};
  }
`
const Texts = styled.span`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  margin: 0 10px;
  flex: 1;
`

const TodoItem = ({
  id,
  text,
  toggleFn,
  deleteFn,
  isCompleted,
  idx,
}) => {
  return (
    <TodoBody id={ id } idx={ idx }>
      <CheckButton
        onClick={ toggleFn }
        toggle={ isCompleted }
      />
      <Texts isCompleted={ isCompleted } onClick={ toggleFn } >
        { text }
      </Texts>
      <DeleteButton onClick={ deleteFn }/>
    </TodoBody>
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
