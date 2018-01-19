import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// APIs
import { addTodoAPI } from 'store/api/todoAPI'
// Actions
import { inputTodo } from 'store/modules/Todo'
// Selectors
import { getInputValue } from 'store/selectors'
// Components
import { Form, Input, Button } from 'components'
// helpers
import { memo } from 'libs'

// Momoize event handlers
let memoizeForm = new Map()
const memoizer = memo(memoizeForm)

const submitTodo = props => e => {
  e.preventDefault()
  const inputValueUpdater = memoizer('input', props.updateInputVal)
  if (props.inputValue) {
    inputValueUpdater({ input: '' })
    addTodoAPI({ text: props.inputValue })
  }
}

const inputValueUpdater = props => e => {
  const inputValueUpdater = memoizer('input', props.updateInputVal)
  inputValueUpdater({ input: e.target.value })
}


const TodoAddForm = props => {
  return (
    <Form onSubmit={ submitTodo(props) }>
      <Input
        value={ props.inputValue }
        onChange={ inputValueUpdater(props) }
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
