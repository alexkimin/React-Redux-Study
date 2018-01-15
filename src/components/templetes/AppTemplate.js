import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SpaceCenter, SpaceSide } from 'components'
import { utils } from 'styles'

const FlexBox = styled.div`
  ${props => utils.flexBox(props)}
  height: 100vh;
  background: ${props => props.theme.color.background};
  font-family: ${props => props.theme.font.main}
`

const AppTemplate = ({ children, ...rest }) => {
  return (
    <FlexBox {...rest}>
      {/*top space*/}
      <SpaceSide col={ 1 } />
      {/*center space of App*/}
      <SpaceCenter row col={ 10 }>
        {/*left space of center*/}
        <SpaceSide col={ 1 } />
        {/*contents space*/}
        <SpaceCenter col={ 10 }>
          { children }
        </SpaceCenter>
        {/*right space of center*/}
        <SpaceSide col={ 1 } />
      </SpaceCenter>
      {/*bottom space*/}
      <SpaceSide col={ 1 } />
    </FlexBox>
  )
}

AppTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default AppTemplate
