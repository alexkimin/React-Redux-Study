import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Form,
  Input,
  Button
} from 'components'

const StyledDiv = styled.div`
  padding: 10px 0;
`

const TodoAddForm = ({
  onSubmit,
  onChange,
  value,
  getRef,
}) => {
  return (
    <StyledDiv>
      <Form
        row
        onSubmit={ onSubmit }
        margin='10px 0'
      >
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
    </StyledDiv>
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
