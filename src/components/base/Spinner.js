import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { loading } from 'styles/keyframes'

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const SpinnerItem = styled.span`
  display: inline-block;
  width: 73px;
  height: 10px;
  background: gray;
  border-radius: 97px;
  transform-origin: center center;
  animation: ${ loading } 4.6s ease infinite;
  margin: 20px;
`

const Spinner = ({ fetching }) => {
  return (
    <div>
      { fetching && (
        <SpinnerWrapper>
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
