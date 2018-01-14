import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Form,
  Input,
  Button
} from 'components'


const TodoAddForm = ({
  onSubmit,
  onChange,
  value,
}) => {
  return (
    <Form onSubmit={ onSubmit } >
      <Input
        placeholder='text here...'
        name='addTodo'
        onChange={ onChange }
        value={ value.text }
      />
      <Button
        name='ADD'
        type='submit'
      />
    </Form>
  )
}

TodoAddForm.defaultProps = {

}

TodoAddForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.object,
}

export default TodoAddForm
