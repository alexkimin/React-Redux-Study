import React from 'react'
import styled from 'styled-components'

import { utils } from 'styles'

const StyledDiv =  styled.div`
  ${props => utils.flexBox(props)}
  ${utils.media.mobile`flex: 0.3;`}
  ${props => props.horizon && utils.media.medium`flex: 3;`}
  ${props => props.horizon && utils.media.large`flex: 6;`}
`
const SpaceSide = props => (<StyledDiv { ...props } />)

export default SpaceSide
