import React from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  Input,
  Button
} from 'components'


const TodoAddForm = ({
  onSubmit,
  onChange,
  value,
  getRef,
}) => {
  return (
    <Form onSubmit={ onSubmit } >
      <Input
        placeholder='text here...'
        onChange={ onChange }
        value={ value }
        getRef={ getRef }
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
  value: PropTypes.string,
  getRef: PropTypes.func,
}

export default TodoAddForm
