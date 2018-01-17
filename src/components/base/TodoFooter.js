import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Footer, Button } from 'components'

import { utils } from 'styles'

const StyledDiv = styled.div`
  ${ props => utils.flexBox(props) }
  border-top: 1px solid ${ props => props.theme.color.border };
  padding-top: 5px;
`

const TodoFooter = ({ onClick }) => {
  return (
    <StyledDiv center row>
      <Footer text='Created by Alex Min'/>
      <Button
        name='Clear Completed'
        onClick={ onClick }
      />
    </StyledDiv>
  )
}


TodoFooter.propTypes = {
  onClick: PropTypes.func,
}

export default TodoFooter
