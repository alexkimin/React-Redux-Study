import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { loading } from 'styles/keyframes'
import { utils } from 'styles'


const SpinnerWrapper = styled.div`
${props => utils.flexBox(props)}
  padding: 50px;
`

const SpinnerItem = styled.span`
  display: inline-block;
  width: 73px;
  height: 10px;
  background: ${props => props.theme.color.base};
  border-radius: 97px;
  transform-origin: center center;
  animation: ${ loading } 4.6s ease infinite;
  margin: 20px;
`

const Spinner = ({ fetching }) => {
  return (
    <div>
      { fetching && (
        <SpinnerWrapper center row>
          <SpinnerItem />
        </SpinnerWrapper>
      ) }
    </div>
  )
}

Spinner.propTypes = {
  fetching: PropTypes.bool,
}

export default Spinner
