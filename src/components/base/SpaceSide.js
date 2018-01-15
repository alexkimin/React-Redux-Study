import React from 'react'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledDiv =  styled.div`
  ${props => utils.flexBox(props)}
`

const SpaceSide = props => (<StyledDiv { ...props } />)

export default SpaceSide
