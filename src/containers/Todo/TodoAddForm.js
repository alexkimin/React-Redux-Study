import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// APIs
import { addTodoAPI } from 'store/api/todoAPI'
// Actions
import { inputTodo, addTodo } from 'store/modules/Todo'
// Selectors
import { getInputValue } from 'store/selectors'
// Components
import { Form, Input, Button } from 'components'
// helpers
import { memo } from 'libs'

// Momoize event handlers
// let memoizeForm = new Map()
// const memoizer = memo(memoizeForm)

const submitTodo = props => e => {
  e.preventDefault()
  if (props.inputValue) {
    props.updateInputVal({ input: '' })
    props.addTheTodo(props.inputValue)
  }
}

const inputValueUpdater = props => e =>
  props.updateInputVal({ input: e.target.value })


const TodoAddForm = props => {
  return (
    <Form onSubmit={ submitTodo(props) }>
      <Input
        value={ props.inputValue }
        onChange={ inputValueUpdater(props) }
        placeholder='Add a todo'
      />
      <Button
        name='ADD'
        type='submit'
      />
    </Form>
  )
}

TodoAddForm.defaultProps = {
  inputValue: ''
}

TodoAddForm.propTypes = {
  inputValue: PropTypes.string,
  updateInputVal: PropTypes.func,
}

// Selector Pattern with reselect
export default connect(
  (state, props) => ({
    inputValue: getInputValue(state, props)
  }),
  (dispatch) => ({
    updateInputVal: bindActionCreators(inputTodo, dispatch),
    addTheTodo: bindActionCreators(addTodo, dispatch),
  })
)(TodoAddForm)
