import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  font-size: 20px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const WrongEntry = ({ path }) => {
  return (
    <StyledDiv>
      <div>Sorry!</div>
      <div>{ path }</div>
      <div>didn’t match any pages.</div>
    </StyledDiv>
  )
}

WrongEntry.propTypes = {
  path: PropTypes.string,
}

export default WrongEntry
