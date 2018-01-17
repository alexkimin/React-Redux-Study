import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CheckButton, DeleteButton } from 'components'
import { fadein, fadeout } from 'styles/keyframes'
import { utils } from 'styles'


const TodoBody = styled.li`
  ${ props => utils.flexBox(props) }
  padding-right: 30px;
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
    ...rest
  } = props
  return (
    <TodoBody
      id={ id }
      center
      row
      padded
      { ...rest }
    >
      <CheckButton
        onClick={ toggleFn }
        toggle={ isCompleted }
        spin
      />
      <Texts
        isCompleted={ isCompleted }
        onClick={ toggleFn }
      >
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
