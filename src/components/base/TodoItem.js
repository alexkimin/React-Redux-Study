import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CheckButton, DeleteButton } from 'components'

const TodoBody = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.border};
  vertical-align: center;
  transition: background ${props => props.theme.transition},
              opacity 500ms;



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
}) => {
  return (
    <TodoBody id={ id }>
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
