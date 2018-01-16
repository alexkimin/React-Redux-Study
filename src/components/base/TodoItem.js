import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { CheckButton, DeleteButton } from 'components'
import { fadein, fadeout } from 'styles/keyframes'

const TodoBody = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-right: 30px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.border};
  transition: background ${props => props.theme.transition};
  opacity: 0;

  animation: ${props => props.willUnmount ? fadeout : fadein } 500ms ease-in-out;
  animation-delay: ${props => props.idx * props.enterDelay}ms;
  animation-fill-mode: forwards;

  &:hover {
    background: ${props => props.theme.color.border};
  }
`
const Texts = styled.span`
  text-decoration: ${props =>
    props.isCompleted ? 'line-through' : 'none'};
  margin: 0 10px;
  flex: 1;
`

const TodoItem = props => {

  const {
    id,
    text,
    toggleFn,
    deleteFn,
    updateFn,
    isCompleted,
    idx,
    enterDelay,
    willUnmount,
  } = props

  return (
    <TodoBody id={ id } { ...props } >
      <CheckButton
        onClick={ toggleFn }
        toggle={ isCompleted }
      />
      <Texts isCompleted={ isCompleted } onClick={ toggleFn }>
        { text }
      </Texts>
      <DeleteButton onClick={ deleteFn } />
    </TodoBody>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  toggleFn: PropTypes.func,
  deleteFn: PropTypes.func,
  isCompleted: PropTypes.bool,
  idx: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  enterDelay: PropTypes.number,
  willUnmount: PropTypes.bool,
}

export default TodoItem
