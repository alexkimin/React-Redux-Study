import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Title, Logo } from 'components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

const composeStyle = `
  flex-grow: 1;
  text-align: center;
`

const TitleHeader = (props) => {
  return (
    <StyledHeader>
      <Logo />
      <Title
        title='Todos'
        size={ 30 }
        composeStyle={ composeStyle }
      />
    </StyledHeader>
  )
}

TitleHeader.defaultProps = {

}

TitleHeader.propTypes = {
  type: PropTypes.string,
}

export default TitleHeader
