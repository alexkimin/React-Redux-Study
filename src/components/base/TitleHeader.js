import React from 'react'
import styled from 'styled-components'
// Components
import { Title, Logo } from 'components'

import { utils } from 'styles'

const StyledHeader = styled.header`
  ${ props => utils.flexBox(props) }
  font-family: ${ props => props.theme.font.title };
  margin: 10px 0;
`

const TitleHeader = props => {
  return (
    <StyledHeader center row>
      <Logo />
      <Title title='Todos' size={ 60 } />
    </StyledHeader>
  )
}

export default TitleHeader
