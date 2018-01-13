import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const loading = keyframes`
  0% {
    transform: rotate(-20deg);
    height: 10px;
    width: 73px;
  }
  5% {
    height: 10px;
    width: 73px;
  }
  30% {
    transform: rotate(380deg);
    height: 10px;
    width: 73px;
  }
  40% {
    transform: rotate(360deg);
    height: 10px;
    width: 73px;
  }
  55% {
    transform: rotate(0deg);
    height: 10px;
    width: 10px;
  }
  65% {
    transform: rotate(0deg);
    height: 10px;
    width: 83px;
  }
  68% {
    transform: rotate(0deg);
    height: 10px;
  }
  75% {
    transform: rotate(0deg);
    height: 10px;
    width: 1px;
  }
  78% {
    height: 10px;
    width: 10px;
  }
  90% {
    height: 10px;
    width: 73px;
    transform: rotate(0deg);
  }
  99%, 100% {
    height: 10px;
    width: 73px;
    transform: rotate(-20deg);
  }
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
