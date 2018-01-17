import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// APIs
import { addTodoAPI } from 'store/api/todoAPI'
// Actions
import { addTodo, inputTodo } from 'store/modules/Todo'
// Selectors
import { getInputValue } from 'store/selectors'
// Components
import { Form, Input, Button } from 'components'

const submitTodo = props => e => {
  e.preventDefault()
  if (props.inputValue) {
    props.updateInputVal({ input: '' })
    addTodoAPI({ text: props.inputValue })
  }
}

const TodoAddForm = props => {
  return (
    <Form
      row
      margin='10px 0'
      onSubmit={ submitTodo(props) }
    >
      <Input
        placeholder='text here...'
        value={ props.inputValue }
        onChange={ e => props.updateInputVal({ input: e.target.value }) }
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

// Selector Pattern with reselector
export default connect(
  (state, props) => ({
    inputValue: getInputValue(state, props)
  }),
  (dispatch) => ({
    updateInputVal: bindActionCreators(inputTodo, dispatch),
  })
)(TodoAddForm)
